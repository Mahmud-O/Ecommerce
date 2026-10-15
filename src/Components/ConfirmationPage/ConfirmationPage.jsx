import { useContext } from 'react';
import RingLoaders from '../Loader/ScaleLoader';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Minus, Plus, ShoppingCart, Trash2, Truck } from 'lucide-react';
import Button from '../../ReusableComponents/Button';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Helmet } from 'react-helmet';
import { Card } from '../ui/card';

// Single source of truth for free shipping: $50 (matches CartProvider
// `subtotal > 50` free-shipping rule and Navbar promo tape).
const FREE_SHIPPING_GOAL = 50;

const STEPS = ['Cart', 'Details', 'Done'];

function StepIndicator({ current = 0 }) {
  return (
    <ol className="mb-8 flex items-center gap-2 sm:gap-3" aria-label="Checkout progress">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
            <span
              aria-current={active ? 'step' : undefined}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink font-bold ${
                done ? 'bg-olive text-paper' : active ? 'bg-persimmon text-paper' : 'bg-paper text-ink/50'
              }`}
            >
              {done ? <Check className="h-4 w-4" /> : <span>{i + 1}</span>}
            </span>
            <span className={`font-display text-sm font-bold sm:text-base ${active ? 'text-ink' : 'text-ink/50'}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span aria-hidden="true" className="h-0.5 flex-1 rounded bg-clay" />}
          </li>
        );
      })}
    </ol>
  );
}

export default function ConfirmationPage() {
  const { cartProduct, isLoading, isError, total, shipping, tax, subtotal, numOfCartItems, UpdateCount, deleteProduct, clearProducts } = useContext(CartContext);
  const navigate = useNavigate();

  function handleUpdateCount(id, newcount) {
    UpdateCount({ productId: id, newCount: Math.max(1, newcount) });
  }

  async function handleDeleteProduct(id) {
    await deleteProduct(id);
  }

  async function handleClearProducts() {
    await clearProducts();
  }

  const progress = Math.min((subtotal || 0) / FREE_SHIPPING_GOAL, 1);
  const remaining = Math.max(FREE_SHIPPING_GOAL - (subtotal || 0), 0);

  return (
    <>
      <Helmet><title>Your Cart — souq.</title></Helmet>
      <div className="min-h-screen bg-paper py-8 text-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
            Step 1 of 3
          </span>
          <h1 className="font-display mt-3 text-4xl font-bold text-ink">Your cart</h1>
          <p className="mt-2 text-ink/70">Review your picks, then head to checkout.</p>

          <div className="mt-8">
            <StepIndicator current={0} />
          </div>

          {isError && (
            <div className="mb-4 rounded-xl border-2 border-ink bg-brick/10 p-4 font-semibold text-brick" role="alert">
              Error loading cart data. Please try again.
            </div>
          )}

          {cartProduct?.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
                <ShoppingCart className="h-8 w-8 text-ink" />
              </div>
              <h2 className="font-display text-2xl font-bold text-ink">Your cart is empty</h2>
              <p className="mx-auto mt-2 max-w-sm text-ink/70">Add some products to get started!</p>
              <Button variant="primary" onClick={() => navigate('/products')} className="mt-6">
                Continue Shopping
              </Button>
            </Card>
          ) : isLoading ? (
            <RingLoaders />
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-4 lg:col-span-2">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-ink">
                    Order items ({numOfCartItems})
                  </h2>
                  <Button variant="danger" onClick={handleClearProducts} className="inline-flex items-center gap-2" size="sm">
                    <Trash2 className="h-4 w-4" />
                    Clear order
                  </Button>
                </div>
                {cartProduct?.map((item) => (
                  <Card key={item._id ?? item.product._id} className="bg-clay/40 p-4 sm:p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        loading="lazy"
                        className="h-20 w-20 shrink-0 rounded-xl border-2 border-ink object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-bold text-ink">
                          {item.product.title.split(' ').slice(0, 3).join(' ')}
                        </h3>
                        <p className="font-bold text-persimmon">${item.price.toFixed(2)}</p>
                        <div className="mt-2 inline-flex items-center rounded-xl border-2 border-ink bg-paper" role="group" aria-label={`Quantity for ${item.product.title}`}>
                          <button
                            type="button"
                            onClick={() => handleUpdateCount(item.product._id, item.count - 1)}
                            className="p-2 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 border-x-2 border-ink px-3 py-1 text-center font-bold" aria-live="polite">
                            {item.count}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateCount(item.product._id, item.count + 1)}
                            className="p-2 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-lg font-bold">${(item.price * item.count).toFixed(2)}</p>
                        <button
                          type="button"
                          onClick={() => handleDeleteProduct(item.product._id)}
                          className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brick hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                          aria-label={`Remove ${item.product.title}`}
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <Card className="p-6">
                  <h2 className="font-display text-2xl font-bold text-ink">Order summary</h2>
                  <div className="mt-4 rounded-xl border-2 border-ink bg-paper-deep p-3">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <Truck className="h-4 w-4 text-olive" />
                      {remaining > 0 ? (
                        <span>${remaining.toFixed(2)} away from free shipping</span>
                      ) : (
                        <span className="text-olive">Free shipping unlocked</span>
                      )}
                    </div>
                    <div
                      className="h-3 overflow-hidden rounded-full border-2 border-ink bg-paper"
                      role="progressbar"
                      aria-valuenow={Math.round(progress * 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Progress toward free shipping"
                    >
                      <div className="h-full rounded-full bg-olive transition-all duration-500" style={{ width: `${progress * 100}%` }} />
                    </div>
                  </div>
                  <dl className="mt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <dt className="text-ink/70">Subtotal ({numOfCartItems} items)</dt>
                      <dd className="font-bold">${subtotal.toFixed(2)}</dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-ink/70">Shipping</dt>
                      <dd className="font-bold text-olive">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-ink/70">Tax</dt>
                      <dd className="font-bold">${tax.toFixed(2)}</dd>
                    </div>
                    <div className="flex justify-between border-t-2 border-ink pt-3">
                      <dt className="font-display text-lg font-bold">Total</dt>
                      <dd className="font-display text-xl font-bold text-persimmon">${total.toFixed(2)}</dd>
                    </div>
                  </dl>
                  <Button variant="primary" onClick={() => navigate('/checkOut')} className="mt-6 w-full" size="lg">
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Link
                    to="/products"
                    className="mt-4 block text-center font-bold text-olive underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                  >
                    Continue shopping
                  </Link>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

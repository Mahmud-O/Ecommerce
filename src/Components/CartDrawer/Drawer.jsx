import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"
import { Button } from "../ui/button"
import { Trash2, ShoppingBag, ArrowRight, Package, Truck } from "lucide-react"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeCart, openCart } from "../../Redux/ToggleCartSlice"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext/CartContext"

// Single source of truth for free shipping: $50 (matches CartProvider
// `subtotal > 50` rule, cart page progress, Navbar promo tape).
const FREE_SHIPPING_GOAL = 50;

export default function CartSheet() {
    const { total, shipping, tax, numOfCartItems, subtotal, cartProduct, deleteProduct } = useContext(CartContext)
    const { isOpen } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    async function handleDeleteProduct(id) {
        await deleteProduct(id);
    }

    const progress = Math.min((subtotal || 0) / FREE_SHIPPING_GOAL, 1);
    const remaining = Math.max(FREE_SHIPPING_GOAL - (subtotal || 0), 0);

    return (
        <Sheet open={isOpen} onOpenChange={(open) => open ? dispatch(openCart()) : dispatch(closeCart())}>
            <SheetContent
                side="right"
                className="flex w-full flex-col border-l-2 border-ink bg-paper p-0 text-ink sm:max-w-[420px]"
            >
                {/* Header */}
                <SheetHeader className="border-b-2 border-ink px-5 py-4 text-left">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-persimmon">
                            <ShoppingBag className="h-5 w-5 text-paper" />
                        </div>
                        <div>
                            <SheetTitle className="font-display text-2xl font-bold text-ink">
                                Your cart
                            </SheetTitle>
                            <p className="text-sm text-ink/60">
                                {cartProduct?.length || 0} {cartProduct?.length === 1 ? 'item' : 'items'}
                            </p>
                        </div>
                    </div>
                </SheetHeader>

                {/* Free-shipping bar */}
                {cartProduct?.length > 0 && (
                    <div className="border-b-2 border-ink bg-paper-deep px-5 py-3">
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
                            <div
                                className="h-full rounded-full bg-olive transition-all duration-500"
                                style={{ width: `${progress * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Cart Content */}
                <div className="flex-1 overflow-y-auto px-5 py-5">
                    {cartProduct?.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-clay">
                                <Package className="h-9 w-9 text-ink/50" />
                            </div>
                            <h3 className="font-display text-xl font-bold">Your cart is empty</h3>
                            <p className="mb-5 mt-1 text-sm text-ink/60">Looks like you haven&apos;t added any items yet</p>
                            <Button
                                onClick={() => {
                                    dispatch(closeCart());
                                    navigate('/products');
                                }}
                                className="border-2 border-ink bg-persimmon text-paper hard-shadow-sm hover:bg-persimmon/90"
                            >
                                Start shopping
                            </Button>
                        </div>
                    ) : (
                        <ul className="space-y-3">
                            {cartProduct.map((item) => (
                                <li
                                    key={item._id ?? item.product._id}
                                    className="rounded-2xl border-2 border-ink bg-clay/40 p-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.product.imageCover}
                                            alt={item.product.title}
                                            className="h-16 w-16 shrink-0 rounded-xl border-2 border-ink object-cover"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <h3 className="truncate text-sm font-bold">
                                                {item.product.title.split(" ").slice(0, 3).join(" ")}
                                            </h3>
                                            <p className="mt-0.5 text-sm">
                                                <span className="font-bold text-persimmon">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                <span className="text-ink/60"> × {item.count}</span>
                                            </p>
                                            <p className="mt-1 inline-block rounded-full border border-ink bg-paper px-2.5 py-0.5 text-xs font-bold">
                                                Total: ${(item.price * item.count).toFixed(2)}
                                            </p>
                                        </div>
                                        <Button
                                            onClick={() => handleDeleteProduct(item.product._id)}
                                            size="icon"
                                            variant="outline"
                                            aria-label={`Remove ${item.product.title}`}
                                            className="h-9 w-9 shrink-0 border-ink bg-paper text-brick hover:bg-brick/10"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                {cartProduct?.length > 0 && (
                    <div className="space-y-3 border-t-2 border-ink bg-paper px-5 py-4">
                        <dl className="rounded-2xl border-2 border-ink bg-paper-deep p-4 text-sm">
                            <div className="mb-1.5 flex justify-between">
                                <dt className="font-medium text-ink/70">Subtotal ({numOfCartItems} items)</dt>
                                <dd className="font-bold">${subtotal.toFixed(2)}</dd>
                            </div>
                            <div className="mb-1.5 flex justify-between">
                                <dt className="text-ink/70">Tax</dt>
                                <dd className="font-semibold">${tax.toFixed(2)}</dd>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <dt className="text-ink/70">Shipping</dt>
                                <dd className="font-semibold text-olive">
                                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t-2 border-ink pt-2">
                                <dt className="font-display text-lg font-bold">Total</dt>
                                <dd className="font-display text-xl font-bold text-persimmon">
                                    ${total.toFixed(2)}
                                </dd>
                            </div>
                        </dl>

                        <Button
                            onClick={() => {
                                dispatch(closeCart());
                                navigate('/checkOut');
                            }}
                            className="w-full border-2 border-ink bg-persimmon py-5 text-base font-bold text-paper hard-shadow-sm hover:bg-persimmon/90"
                        >
                            <span>Checkout</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            onClick={() => {
                                dispatch(closeCart());
                                navigate('/cart');
                            }}
                            variant="outline"
                            className="w-full border-ink bg-paper text-olive hover:bg-clay/60"
                        >
                            View full cart
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

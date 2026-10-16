import { useContext } from 'react';
import Button from '../../ReusableComponents/Button';
import Input from '../../ReusableComponents/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { ArrowLeft, ArrowRight, Check, CreditCard, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import apiClient from '@/lib/apiClient';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

const STEPS = ['Cart', 'Details', 'Done'];

const checkoutSchema = Yup.object().shape({
  FullName: Yup.string().required('Full name is required').min(3, 'Minimum 3 characters'),
  email: Yup.string().required('Email is required').email('Invalid email address'),
  address: Yup.string().required('Address is required').min(5, 'Minimum 5 characters'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('ZIP code is required'),
  phone: Yup.string().required('Phone is required'),
});

function FieldError({ touched, error }) {
  if (!touched || !error) return null;
  return (
    <p className="mt-1.5 rounded-lg border border-ink bg-brick/10 px-2.5 py-1 text-xs font-semibold text-brick" role="alert">
      {error}
    </p>
  );
}

const CheckoutPage = () => {
  const { cartId, cartProduct, total, shipping, tax, subtotal, clearProducts } = useContext(CartContext);
  const navigate = useNavigate();

  function onlinePayment(values) {
    const BackRequest = {
      shippingAddress: values,
    };
    apiClient
      .post(`/orders/checkout-session/${cartId}`, BackRequest, {
        params: {
          url: 'http://localhost:8080',
        },
      })
      .then((r) => {
        toast.success('Order placed — redirecting to payment…');
        window.open(r.data.session.url, '_self');
        clearProducts();
      })
      .catch(() => {
        toast.error('Checkout failed. Please try again.');
      });
  }

  const paymentFormik = useFormik({
    initialValues: {
      email: '',
      FullName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      paymentMethod: 'card',
    },
    validationSchema: checkoutSchema,
    onSubmit: onlinePayment,
  });

  const fieldClass = (name) =>
    cn(
      paymentFormik.touched[name] &&
        paymentFormik.errors[name] &&
        'border-brick focus:border-brick focus:ring-brick'
    );

  return (
    <>
      <Helmet><title>Checkout — souq.</title></Helmet>
      <form onSubmit={paymentFormik.handleSubmit}>
        <div className="min-h-screen bg-paper py-8 text-ink">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
              Step 2 of 3
            </span>
            <h1 className="font-display mt-3 text-4xl font-bold text-ink">Checkout</h1>
            <p className="mt-2 text-ink/70">Almost there — details, then done.</p>

            <ol className="mb-8 mt-8 flex items-center gap-2 sm:gap-3" aria-label="Checkout progress">
              {STEPS.map((label, i) => {
                const done = i < 1;
                const active = i === 1;
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

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Checkout Form */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="font-display text-2xl font-bold text-ink">Shipping information</h2>
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        aria-label="Full Name"
                        name="FullName"
                        id="FullName"
                        required
                        value={paymentFormik.values.FullName}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('FullName')}
                      />
                      <FieldError touched={paymentFormik.touched.FullName} error={paymentFormik.errors.FullName} />
                    </div>
                    <div>
                      <Input
                        type="phone"
                        placeholder="Phone"
                        aria-label="Phone"
                        name="phone"
                        id="phone"
                        required
                        value={paymentFormik.values.phone}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('phone')}
                      />
                      <FieldError touched={paymentFormik.touched.phone} error={paymentFormik.errors.phone} />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        name="email"
                        id="email"
                        required
                        value={paymentFormik.values.email}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('email')}
                      />
                      <FieldError touched={paymentFormik.touched.email} error={paymentFormik.errors.email} />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        placeholder="Address"
                        aria-label="Address"
                        name="address"
                        id="address"
                        required
                        value={paymentFormik.values.address}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('address')}
                      />
                      <FieldError touched={paymentFormik.touched.address} error={paymentFormik.errors.address} />
                    </div>
                    <div>
                      <Input
                        placeholder="City"
                        aria-label="City"
                        name="city"
                        id="city"
                        value={paymentFormik.values.city}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('city')}
                      />
                      <FieldError touched={paymentFormik.touched.city} error={paymentFormik.errors.city} />
                    </div>
                    <div>
                      <Input
                        placeholder="State"
                        aria-label="State"
                        name="state"
                        id="state"
                        value={paymentFormik.values.state}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('state')}
                      />
                      <FieldError touched={paymentFormik.touched.state} error={paymentFormik.errors.state} />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        placeholder="ZIP Code"
                        aria-label="ZIP Code"
                        name="zipCode"
                        id="zipCode"
                        value={paymentFormik.values.zipCode}
                        onBlur={paymentFormik.handleBlur}
                        onChange={paymentFormik.handleChange}
                        className={fieldClass('zipCode')}
                      />
                      <FieldError touched={paymentFormik.touched.zipCode} error={paymentFormik.errors.zipCode} />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-ink">
                    <CreditCard className="h-6 w-6 text-persimmon" />
                    Payment
                  </h2>
                  <p className="mt-2 flex items-center gap-2 text-sm text-ink/70">
                    <Lock className="h-4 w-4" />
                    You&apos;ll complete payment securely on our checkout partner after placing the order.
                  </p>
                </Card>

                <button
                  type="button"
                  onClick={() => navigate('/cart')}
                  className="inline-flex items-center gap-2 font-bold text-olive underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to cart
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-32 lg:self-start">
                <Card className="h-fit p-6">
                  <h2 className="font-display text-2xl font-bold text-ink">Order summary</h2>

                  <ul className="mb-6 mt-4 max-h-64 space-y-3 overflow-y-auto">
                    {cartProduct.map((item) => (
                      <li key={item._id ?? item.product._id} className="flex items-center gap-3 rounded-xl border-2 border-ink bg-clay/40 p-2">
                        <img
                          src={item.product.imageCover}
                          alt={item.product.title}
                          loading="lazy"
                          className="h-12 w-12 shrink-0 rounded-lg border-2 border-ink object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold">{item.product.title}</p>
                          <p className="text-sm text-ink/60">Qty: {item.count}</p>
                        </div>
                        <span className="font-bold">${(item.price * item.count).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  <dl className="space-y-3 border-t-2 border-ink pt-4">
                    <div className="flex justify-between text-sm">
                      <dt className="text-ink/70">Subtotal</dt>
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

                  <Button type="submit" className="mt-6 w-full" size="lg">
                    Place Order
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutPage;

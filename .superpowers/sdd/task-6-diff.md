diff --git a/src/App.jsx b/src/App.jsx
index e7136cc..2a763c6 100644
--- a/src/App.jsx
+++ b/src/App.jsx
@@ -3,21 +3,21 @@ import Layout from './Components/Layout/Layout';
 import Register from './Components/Register/Register';
 import Login from './Components/Login/Login';
 import NotFound from './Components/NotFound/NotFound';
 import ShopProducts from './Components/Shop/ShopProducts';
 import Brands from './Components/Brands/Brands';
 import ConfirmationPage from './Components/ConfirmationPage/ConfirmationPage';
 import CollectionList from './Components/Categories/Categories';
 import ProductDetails from './Components/ProductDetails/ProductDetails';
 import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
 import AuthContextProvider from './Context/AuthContext/AuthProvider';
-import { Toaster } from 'react-hot-toast';
+import { Toaster } from './Components/ui/sonner';
 import LandingPage from './Components/LandingPage/LandingPage';
 import About from './Components/About/About';
 import Contact from './Components/Contact/Contact';
 import CheckoutPage from './Components/PaymentPages/CheckOut';
 import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 import { FeaturedProducts } from './Components/LandingPage/FeaturedProducts';
 import CartContextProvider from './Context/CartContext/CartProvider';
 import { store } from './Redux/CartStore.js'
 import { Provider } from 'react-redux'
 import RedirectIfAuthenticated from './Components/RedirectIfAuthenticated/RedirectIfAuthenticated';
diff --git a/src/Components/About/About.jsx b/src/Components/About/About.jsx
index a047b0e..32b99b3 100644
--- a/src/Components/About/About.jsx
+++ b/src/Components/About/About.jsx
@@ -1,83 +1,108 @@
 import heroImg from '../../assets/img/mainabout.334f9a75.webp';
 import storyImg from '../../assets/img/aboutteemwork2.webp';
 import { Helmet } from 'react-helmet';
+import { Link } from 'react-router-dom';
+import { Gem, Leaf, Lightbulb, Users } from 'lucide-react';
+import { BlurFade } from '../magic/blur-fade';
+
+const VALUES = [
+  { icon: Gem, title: 'Quality Materials', text: 'We source only the finest fabrics and materials for lasting comfort and style.' },
+  { icon: Lightbulb, title: 'Thoughtful Design', text: "Every detail is considered, from fit to finish, for pieces you'll love to wear." },
+  { icon: Leaf, title: 'Sustainable Practices', text: 'We care for the planet with eco-friendly processes and mindful production.' },
+  { icon: Users, title: 'Customer First', text: "Your happiness is our priority. We're here to support you every step of the way." },
+];
+
+const STATS = [
+  { value: '50K+', label: 'Happy shoppers' },
+  { value: '1M+', label: 'Orders delivered' },
+  { value: '4.9', label: 'Average rating' },
+];
 
 export default function About() {
   return (
     <>
-      <Helmet><title>About Us</title></Helmet>
-      <div className="bg-white pb-5">
+      <Helmet><title>About Us ΓÇö souq.</title></Helmet>
+      <div className="bg-paper pb-5 text-ink">
         {/* Hero Section */}
-        <div className="relative w-full h-[340px] md:h-[450px] flex items-center justify-center mb-12">
-          <img src={heroImg} alt="About Us Banner" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
-          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
-            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">About Us</h1>
-            <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide">Style meets simplicity</p>
+        <div className="grain relative flex h-[340px] w-full items-center justify-center overflow-hidden border-b-2 border-ink bg-olive md:h-[450px]">
+          <img src={heroImg} alt="About us banner" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
+          <div className="relative z-10 flex flex-col items-center px-4 text-center">
+            <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+              Our story
+            </span>
+            <h1 className="font-display text-5xl font-bold text-paper md:text-6xl">About us</h1>
+            <p className="mt-3 text-xl font-medium tracking-wide text-paper/80 md:text-2xl">Style meets simplicity</p>
           </div>
         </div>
 
+        {/* Stats band */}
+        <div className="border-b-2 border-ink bg-paper-deep">
+          <dl className="container mx-auto grid grid-cols-3 gap-4 px-4 py-8 text-center">
+            {STATS.map((s) => (
+              <div key={s.label}>
+                <dt className="order-2 mt-1 block text-sm font-semibold text-ink/60">{s.label}</dt>
+                <dd className="font-display order-1 text-3xl font-bold text-persimmon md:text-4xl">{s.value}</dd>
+              </div>
+            ))}
+          </dl>
+        </div>
+
         {/* Our Story Section */}
-        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 mb-16 px-4">
-          <div className="md:w-1/2 w-full">
-            <img src={storyImg} alt="Our Story" className="rounded-xl shadow-lg w-full object-cover h-[320px] md:h-[400px]" />
-          </div>
-          <div className="md:w-1/2 w-full">
-            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Story</h2>
-            <p className="text-lg text-gray-700 mb-4">
+        <div className="container mx-auto flex flex-col items-center gap-10 px-4 py-16 md:flex-row">
+          <BlurFade className="w-full md:w-1/2">
+            <img src={storyImg} alt="Our story" loading="lazy" className="hard-shadow h-[320px] w-full rounded-2xl border-2 border-ink object-cover md:h-[400px]" />
+          </BlurFade>
+          <div className="w-full md:w-1/2">
+            <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+              Since day one
+            </span>
+            <h2 className="font-display mt-3 text-3xl font-bold text-ink">Our story</h2>
+            <p className="mb-4 mt-4 text-lg text-ink/75">
               Founded with a passion for effortless style, our brand was born from the belief that fashion should be both inspiring and accessible. We started as a small team of dreamers, united by a love for design and a desire to make everyday dressing joyful and easy.
             </p>
-            <p className="text-lg text-gray-700 mb-4">
+            <p className="mb-4 text-lg text-ink/75">
               Our mission is to empower you to express your individuality with confidence. Every piece is thoughtfully crafted, blending timeless elegance with modern simplicityΓÇöso you can look and feel your best, always.
             </p>
-            <p className="text-lg text-gray-700">
+            <p className="text-lg text-ink/75">
               What sets us apart? A relentless focus on quality, sustainability, and youΓÇöour community. Thank you for being part of our journey.
             </p>
           </div>
         </div>
 
         {/* Why Choose Us Section */}
-        <div className="bg-blue-50 py-12 mb-16">
+        <div className="border-y-2 border-ink bg-olive py-12 text-paper">
           <div className="container mx-auto px-4">
-            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">Why Choose Us</h2>
-            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
-              <div className="flex flex-col items-center text-center">
-                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-gem"></i></span>
-                <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
-                <p className="text-gray-600">We source only the finest fabrics and materials for lasting comfort and style.</p>
-              </div>
-              <div className="flex flex-col items-center text-center">
-                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-lightbulb"></i></span>
-                <h3 className="font-semibold text-lg mb-2">Thoughtful Design</h3>
-                <p className="text-gray-600">Every detail is considered, from fit to finish, for pieces you'll love to wear.</p>
-              </div>
-              <div className="flex flex-col items-center text-center">
-                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-leaf"></i></span>
-                <h3 className="font-semibold text-lg mb-2">Sustainable Practices</h3>
-                <p className="text-gray-600">We care for the planet with eco-friendly processes and mindful production.</p>
-              </div>
-              <div className="flex flex-col items-center text-center">
-                <span className="text-blue-500 text-4xl mb-3"><i className="fas fa-users"></i></span>
-                <h3 className="font-semibold text-lg mb-2">Customer First</h3>
-                <p className="text-gray-600">Your happiness is our priority. We're here to support you every step of the way.</p>
-              </div>
+            <h2 className="font-display mb-8 text-center text-2xl font-bold md:text-3xl">Why choose us</h2>
+            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
+              {VALUES.map((value) => (
+                <div key={value.title} className="rounded-2xl border-2 border-ink bg-paper p-6 text-center text-ink">
+                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-marigold">
+                    <value.icon className="h-6 w-6 text-ink" />
+                  </span>
+                  <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
+                  <p className="text-ink/70">{value.text}</p>
+                </div>
+              ))}
             </div>
           </div>
         </div>
 
         {/* Team/Philosophy Section */}
-        <div className="container mx-auto mb-16 px-4">
-          <div className="max-w-2xl mx-auto text-center">
-            <h2 className="text-2xl font-bold text-blue-600 mb-4">Meet the Team</h2>
-            <p className="text-lg text-gray-700 mb-2">Our founder, Alex Morgan, leads with a vision for authentic, effortless style. Together, our team is dedicated to creating pieces that inspire confidence and celebrate individuality.</p>
-            <p className="text-lg text-gray-700">We believe in building a community where everyone feels seen, valued, and empowered to express themselves.</p>
+        <div className="container mx-auto mb-16 px-4 pt-16">
+          <div className="mx-auto max-w-2xl text-center">
+            <h2 className="font-display text-2xl font-bold text-ink">Meet the team</h2>
+            <p className="mb-2 mt-4 text-lg text-ink/75">Our founder, Alex Morgan, leads with a vision for authentic, effortless style. Together, our team is dedicated to creating pieces that inspire confidence and celebrate individuality.</p>
+            <p className="text-lg text-ink/75">We believe in building a community where everyone feels seen, valued, and empowered to express themselves.</p>
           </div>
         </div>
 
         {/* CTA Section */}
-        <div className="flex justify-center mb-20">
-          <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition text-lg">Shop Now</a>
+        <div className="mb-20 flex justify-center">
+          <Link to="/products" className="hard-shadow rounded-xl border-2 border-ink bg-persimmon px-8 py-3 text-lg font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">
+            Shop Now
+          </Link>
         </div>
       </div>
     </>
   );
 }
diff --git a/src/Components/CartDrawer/Drawer.jsx b/src/Components/CartDrawer/Drawer.jsx
index 4200440..181c292 100644
--- a/src/Components/CartDrawer/Drawer.jsx
+++ b/src/Components/CartDrawer/Drawer.jsx
@@ -1,20 +1,22 @@
 import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"
 import { Button } from "../ui/button"
 import { Trash2, ShoppingBag, ArrowRight, Package, Truck } from "lucide-react"
 import { useContext } from "react"
 import { useDispatch, useSelector } from "react-redux"
 import { closeCart, openCart } from "../../Redux/ToggleCartSlice"
 import { useNavigate } from "react-router-dom"
 import { CartContext } from "../../Context/CartContext/CartContext"
 
-const FREE_SHIPPING_GOAL = 75;
+// Single source of truth for free shipping: $50 (matches CartProvider
+// `subtotal > 50` rule, cart page progress, Navbar promo tape).
+const FREE_SHIPPING_GOAL = 50;
 
 export default function CartSheet() {
     const { total, shipping, tax, numOfCartItems, subtotal, cartProduct, deleteProduct } = useContext(CartContext)
     const { isOpen } = useSelector((state) => state.cart)
     const dispatch = useDispatch()
     const navigate = useNavigate();
 
     async function handleDeleteProduct(id) {
         await deleteProduct(id);
     }
@@ -88,21 +90,21 @@ export default function CartSheet() {
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
-                                    key={item.product._id}
+                                    key={item._id ?? item.product._id}
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
diff --git a/src/Components/ConfirmationPage/ConfirmationPage.jsx b/src/Components/ConfirmationPage/ConfirmationPage.jsx
index 07a74bb..6fcccd3 100644
--- a/src/Components/ConfirmationPage/ConfirmationPage.jsx
+++ b/src/Components/ConfirmationPage/ConfirmationPage.jsx
@@ -1,148 +1,221 @@
-
 import { useContext } from 'react';
 import RingLoaders from '../Loader/ScaleLoader';
 import { Link, useNavigate } from 'react-router-dom';
-import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
+import { ArrowRight, Check, Minus, Plus, ShoppingCart, Trash2, Truck } from 'lucide-react';
 import Button from '../../ReusableComponents/Button';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { Helmet } from 'react-helmet';
+import { Card } from '../ui/card';
+
+// Single source of truth for free shipping: $50 (matches CartProvider
+// `subtotal > 50` free-shipping rule and Navbar promo tape).
+const FREE_SHIPPING_GOAL = 50;
+
+const STEPS = ['Cart', 'Details', 'Done'];
+
+function StepIndicator({ current = 0 }) {
+  return (
+    <ol className="mb-8 flex items-center gap-2 sm:gap-3" aria-label="Checkout progress">
+      {STEPS.map((label, i) => {
+        const done = i < current;
+        const active = i === current;
+        return (
+          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
+            <span
+              aria-current={active ? 'step' : undefined}
+              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink font-bold ${
+                done ? 'bg-olive text-paper' : active ? 'bg-persimmon text-paper' : 'bg-paper text-ink/50'
+              }`}
+            >
+              {done ? <Check className="h-4 w-4" /> : <span>{i + 1}</span>}
+            </span>
+            <span className={`font-display text-sm font-bold sm:text-base ${active ? 'text-ink' : 'text-ink/50'}`}>
+              {label}
+            </span>
+            {i < STEPS.length - 1 && <span aria-hidden="true" className="h-0.5 flex-1 rounded bg-clay" />}
+          </li>
+        );
+      })}
+    </ol>
+  );
+}
 
 export default function ConfirmationPage() {
   const { cartProduct, isLoading, isError, total, shipping, tax, subtotal, numOfCartItems, UpdateCount, deleteProduct, clearProducts } = useContext(CartContext);
   const navigate = useNavigate();
+
   function handleUpdateCount(id, newcount) {
-    UpdateCount(id, newcount);
+    UpdateCount({ productId: id, newCount: Math.max(1, newcount) });
   }
 
   async function handleDeleteProduct(id) {
     await deleteProduct(id);
   }
 
-
   async function handleClearProducts() {
     await clearProducts();
   }
 
+  const progress = Math.min((subtotal || 0) / FREE_SHIPPING_GOAL, 1);
+  const remaining = Math.max(FREE_SHIPPING_GOAL - (subtotal || 0), 0);
 
+  return (
+    <>
+      <Helmet><title>Your Cart ΓÇö souq.</title></Helmet>
+      <div className="min-h-screen bg-paper py-8 text-ink">
+        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+          <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+            Step 1 of 3
+          </span>
+          <h1 className="font-display mt-3 text-4xl font-bold text-ink">Your cart</h1>
+          <p className="mt-2 text-ink/70">Review your picks, then head to checkout.</p>
 
-
-  return <>
-    <Helmet><title>Confirmation</title></Helmet>
-    <div className="pt-16 min-h-screen bg-gray-50">
-      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
-        {/* Cart */}
-        <h1 className="text-4xl font-bold text-gray-900 mb-8">Order Confirmation</h1>
-        {isError && (<div className="text-red-500 mb-4">Error loading cart data</div>)}
-        {cartProduct?.length === 0 ? (
-          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
-            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
-            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
-            <p className="text-gray-600 mb-6">Add some products to get started!</p>
-            <Button onClick={() => navigate('/products')}>
-              Continue Shopping
-            </Button>
+          <div className="mt-8">
+            <StepIndicator current={0} />
           </div>
-        ) : isLoading ? (<RingLoaders />) : (
-          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
-            <div className="lg:col-span-2 space-y-4">
-              <div className="flex justify-between items-center mb-2">
-                <h2 className="text-xl font-semibold text-gray-900">Order Items</h2>
-                <Button
-                  variant="danger"
-                  onClick={handleClearProducts}
-                  className="flex items-center gap-2"
-                >
-                  <Trash2 className="w-4 h-4" />
-                  Clear order
-                </Button>
+
+          {isError && (
+            <div className="mb-4 rounded-xl border-2 border-ink bg-brick/10 p-4 font-semibold text-brick" role="alert">
+              Error loading cart data. Please try again.
+            </div>
+          )}
+
+          {cartProduct?.length === 0 ? (
+            <Card className="p-12 text-center">
+              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
+                <ShoppingCart className="h-8 w-8 text-ink" />
               </div>
-              {cartProduct?.map((item) => (
-                <div key={item.product._id} className="bg-white rounded-xl shadow-lg p-6">
-                  <div className="flex items-center space-x-4">
-                    <img
-                      src={item.product.imageCover}
-                      alt={item.product.title}
-                      className="w-20 h-20 object-cover rounded-lg"
-                    />
-                    <div className="flex-1">
-                      <h3 className="font-semibold text-lg text-gray-900">{item.product.title.split(' ').slice(0, 3).join(' ')}</h3>
-                      <p className="text-gray-600">${item.price}</p>
+              <h2 className="font-display text-2xl font-bold text-ink">Your cart is empty</h2>
+              <p className="mx-auto mt-2 max-w-sm text-ink/70">Add some products to get started!</p>
+              <Button variant="primary" onClick={() => navigate('/products')} className="mt-6">
+                Continue Shopping
+              </Button>
+            </Card>
+          ) : isLoading ? (
+            <RingLoaders />
+          ) : (
+            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
+              <div className="space-y-4 lg:col-span-2">
+                <div className="mb-2 flex items-center justify-between">
+                  <h2 className="font-display text-xl font-bold text-ink">
+                    Order items ({numOfCartItems})
+                  </h2>
+                  <Button variant="danger" onClick={handleClearProducts} className="inline-flex items-center gap-2" size="sm">
+                    <Trash2 className="h-4 w-4" />
+                    Clear order
+                  </Button>
+                </div>
+                {cartProduct?.map((item) => (
+                  <Card key={item._id ?? item.product._id} className="bg-clay/40 p-4 sm:p-5">
+                    <div className="flex items-center gap-4">
+                      <img
+                        src={item.product.imageCover}
+                        alt={item.product.title}
+                        loading="lazy"
+                        className="h-20 w-20 shrink-0 rounded-xl border-2 border-ink object-cover"
+                      />
+                      <div className="min-w-0 flex-1">
+                        <h3 className="truncate font-bold text-ink">
+                          {item.product.title.split(' ').slice(0, 3).join(' ')}
+                        </h3>
+                        <p className="font-bold text-persimmon">${item.price.toFixed(2)}</p>
+                        <div className="mt-2 inline-flex items-center rounded-xl border-2 border-ink bg-paper" role="group" aria-label={`Quantity for ${item.product.title}`}>
+                          <button
+                            type="button"
+                            onClick={() => handleUpdateCount(item.product._id, item.count - 1)}
+                            className="p-2 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
+                            aria-label="Decrease quantity"
+                          >
+                            <Minus className="h-4 w-4" />
+                          </button>
+                          <span className="min-w-10 border-x-2 border-ink px-3 py-1 text-center font-bold" aria-live="polite">
+                            {item.count}
+                          </span>
+                          <button
+                            type="button"
+                            onClick={() => handleUpdateCount(item.product._id, item.count + 1)}
+                            className="p-2 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
+                            aria-label="Increase quantity"
+                          >
+                            <Plus className="h-4 w-4" />
+                          </button>
+                        </div>
+                      </div>
+                      <div className="text-right">
+                        <p className="font-display text-lg font-bold">${(item.price * item.count).toFixed(2)}</p>
+                        <button
+                          type="button"
+                          onClick={() => handleDeleteProduct(item.product._id)}
+                          className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brick hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                          aria-label={`Remove ${item.product.title}`}
+                        >
+                          <Trash2 className="h-4 w-4" />
+                          Remove
+                        </button>
+                      </div>
                     </div>
-                    <div className="flex items-center space-x-2">
-                      <button
-                        onClick={() => handleUpdateCount(item.product._id, item.count - 1)}
-                        className="p-1 hover:bg-gray-100 rounded transition-colors"
-                      >
-                        <Minus className="w-4 h-4" />
-                      </button>
-                      <span className="px-3 py-1 border border-gray-300 rounded">{item.count}</span>
-                      <button
-                        onClick={() => handleUpdateCount(item.product._id, item.count + 1)}
-                        className="p-1 hover:bg-gray-100 rounded transition-colors"
-                      >
-                        <Plus className="w-4 h-4" />
-                      </button>
+                  </Card>
+                ))}
+              </div>
+
+              {/* Order Summary */}
+              <div className="lg:sticky lg:top-32 lg:self-start">
+                <Card className="p-6">
+                  <h2 className="font-display text-2xl font-bold text-ink">Order summary</h2>
+                  <div className="mt-4 rounded-xl border-2 border-ink bg-paper-deep p-3">
+                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
+                      <Truck className="h-4 w-4 text-olive" />
+                      {remaining > 0 ? (
+                        <span>${remaining.toFixed(2)} away from free shipping</span>
+                      ) : (
+                        <span className="text-olive">Free shipping unlocked</span>
+                      )}
                     </div>
-                    <div className="text-right">
-                      <p className="font-semibold text-lg">${(item.price * item.count).toFixed(2)}</p>
-                      <button
-                        onClick={() => handleDeleteProduct(item.product._id)}
-                        className="text-red-500 hover:text-red-700 transition-colors mt-1"
-                      >
-                        <Trash2 className="w-4 h-4" />
-                      </button>
+                    <div
+                      className="h-3 overflow-hidden rounded-full border-2 border-ink bg-paper"
+                      role="progressbar"
+                      aria-valuenow={Math.round(progress * 100)}
+                      aria-valuemin={0}
+                      aria-valuemax={100}
+                      aria-label="Progress toward free shipping"
+                    >
+                      <div className="h-full rounded-full bg-olive transition-all duration-500" style={{ width: `${progress * 100}%` }} />
                     </div>
                   </div>
-                </div>
-              ))}
-            </div>
-
-            {/* Order Summary */}
-            <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
-              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
-              <div className="space-y-4 mb-6">
-                <div className="flex justify-between">
-                  <span className="text-gray-600">Subtotal ({numOfCartItems} items)</span>
-                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
-                </div>
-                <div className="flex justify-between">
-                  <span className="text-gray-600">Shipping</span>
-                  <span className="font-semibold">
-                    {shipping === 0 ? 'Free' : `${shipping.toFixed(2)}`}
-                  </span>
-                </div>
-                <div className="flex justify-between">
-                  <span className="text-gray-600">Tax</span>
-                  <span className="font-semibold">
-                    ${tax.toFixed(2)}
-                  </span>
-                </div>
-                <div className="border-t pt-4">
-                  <div className="flex justify-between text-lg font-bold">
-                    <span>Total</span>
-                    <span>${total.toFixed(2)}</span>
-                  </div>
-                </div>
+                  <dl className="mt-4 space-y-3">
+                    <div className="flex justify-between text-sm">
+                      <dt className="text-ink/70">Subtotal ({numOfCartItems} items)</dt>
+                      <dd className="font-bold">${subtotal.toFixed(2)}</dd>
+                    </div>
+                    <div className="flex justify-between text-sm">
+                      <dt className="text-ink/70">Shipping</dt>
+                      <dd className="font-bold text-olive">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
+                    </div>
+                    <div className="flex justify-between text-sm">
+                      <dt className="text-ink/70">Tax</dt>
+                      <dd className="font-bold">${tax.toFixed(2)}</dd>
+                    </div>
+                    <div className="flex justify-between border-t-2 border-ink pt-3">
+                      <dt className="font-display text-lg font-bold">Total</dt>
+                      <dd className="font-display text-xl font-bold text-persimmon">${total.toFixed(2)}</dd>
+                    </div>
+                  </dl>
+                  <Button variant="primary" onClick={() => navigate('/checkOut')} className="mt-6 w-full" size="lg">
+                    Proceed to Checkout
+                    <ArrowRight className="h-5 w-5" />
+                  </Button>
+                  <Link
+                    to="/products"
+                    className="mt-4 block text-center font-bold text-olive underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                  >
+                    Continue shopping
+                  </Link>
+                </Card>
               </div>
-              <Button
-                onClick={() => navigate('/checkOut')}
-                className="w-full"
-                size="lg"
-              >
-                Proceed to Checkout
-              </Button>
-              <Link
-                to={'/products'}
-                className="w-full mt-4 text-blue-600 hover:text-blue-700 transition-colors"
-              >
-                Continue Shopping
-              </Link>
             </div>
-          </div>
-        )}
+          )}
+        </div>
       </div>
-    </div>
-
-  </>
-
-}
\ No newline at end of file
+    </>
+  );
+}
diff --git a/src/Components/Contact/Contact.jsx b/src/Components/Contact/Contact.jsx
index dc5fd9b..0d9b2bc 100644
--- a/src/Components/Contact/Contact.jsx
+++ b/src/Components/Contact/Contact.jsx
@@ -1,55 +1,104 @@
+import { useState } from 'react';
 import { Helmet } from 'react-helmet';
+import { Link } from 'react-router-dom';
+import { toast } from 'sonner';
+import { Mail, MapPin, Phone, Send } from 'lucide-react';
 import heroImg from '../../assets/img/maincontact.6038b3c3.webp';
+import Input from '../../ReusableComponents/Input';
+import Button from '../../ReusableComponents/Button';
+import { Card } from '../ui/card';
 
 export default function Contact() {
+  const [form, setForm] = useState({ name: '', email: '', message: '' });
+
+  function handleSubmit(e) {
+    e.preventDefault();
+    if (!form.name.trim() || !/.+@.+\..+/.test(form.email.trim()) || !form.message.trim()) {
+      toast.error('Please fill in your name, a valid email, and a message.');
+      return;
+    }
+    toast.success(`Thanks ${form.name.trim()} ΓÇö your message is on its way!`);
+    setForm({ name: '', email: '', message: '' });
+  }
+
   return (
     <>
-      <Helmet><title>Contact Us</title></Helmet>
-      <div className="bg-white pb-5">
+      <Helmet><title>Contact Us ΓÇö souq.</title></Helmet>
+      <div className="bg-paper pb-5 text-ink">
         {/* Hero Section */}
-        <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center mb-12">
-          <img src={heroImg} alt="Contact Banner" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
-          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
-            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Contact Us</h1>
-            <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide">We're here to help you shine</p>
+        <div className="grain relative flex h-[320px] w-full items-center justify-center overflow-hidden border-b-2 border-ink bg-olive md:h-[450px]">
+          <img src={heroImg} alt="Contact banner" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
+          <div className="relative z-10 flex flex-col items-center px-4 text-center">
+            <span className="mb-4 inline-block rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+              Say hello
+            </span>
+            <h1 className="font-display text-5xl font-bold text-paper md:text-6xl">Contact us</h1>
+            <p className="mt-3 text-xl font-medium tracking-wide text-paper/80 md:text-2xl">We&apos;re here to help you shine</p>
           </div>
         </div>
 
         {/* Contact Info & Form Section */}
-        <div className="container mx-auto flex flex-col md:flex-row gap-12 mb-16 px-4">
-          <div className="md:w-1/2 w-full flex flex-col justify-center mb-8 md:mb-0">
-            <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h2>
-            <p className="text-lg text-gray-700 mb-4">Have a question, feedback, or just want to say hello? Our team is always happy to connect with you. Reach out and we'll get back to you as soon as possible!</p>
-            <ul className="text-gray-700 space-y-2">
-              <li><i className="fas fa-envelope text-blue-500 mr-2"></i> support@yourbrand.com</li>
-              <li><i className="fas fa-phone text-blue-500 mr-2"></i> +1 234 567 890</li>
-              <li><i className="fas fa-map-marker-alt text-blue-500 mr-2"></i> 123 Fashion Ave, New York, NY</li>
+        <div className="container mx-auto flex flex-col gap-8 px-4 py-16 md:flex-row">
+          <div className="flex w-full flex-col justify-center md:w-1/2">
+            <span className="inline-block w-fit rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+              Get in touch
+            </span>
+            <h2 className="font-display mt-3 text-3xl font-bold text-ink">We reply fast</h2>
+            <p className="mb-6 mt-3 text-lg text-ink/75">Have a question, feedback, or just want to say hello? Our team is always happy to connect with you. Reach out and we&apos;ll get back to you as soon as possible!</p>
+            <ul className="space-y-3">
+              <li className="flex items-center gap-3 rounded-xl border-2 border-ink bg-paper-deep px-4 py-3 font-semibold">
+                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-marigold"><Mail className="h-4 w-4 text-ink" /></span>
+                support@yourbrand.com
+              </li>
+              <li className="flex items-center gap-3 rounded-xl border-2 border-ink bg-paper-deep px-4 py-3 font-semibold">
+                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-marigold"><Phone className="h-4 w-4 text-ink" /></span>
+                +1 234 567 890
+              </li>
+              <li className="flex items-center gap-3 rounded-xl border-2 border-ink bg-paper-deep px-4 py-3 font-semibold">
+                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-marigold"><MapPin className="h-4 w-4 text-ink" /></span>
+                123 Fashion Ave, New York, NY
+              </li>
             </ul>
           </div>
-          <div className="md:w-1/2 w-full">
-            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
-              <div>
-                <label className="block text-gray-700 mb-2 font-medium">Name</label>
-                <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
-              </div>
-              <div>
-                <label className="block text-gray-700 mb-2 font-medium">Email</label>
-                <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" />
-              </div>
-              <div>
-                <label className="block text-gray-700 mb-2 font-medium">Message</label>
-                <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Your Message"></textarea>
-              </div>
-              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg transition">Send Message</button>
-            </form>
+          <div className="w-full md:w-1/2">
+            <Card className="hard-shadow p-6 sm:p-8">
+              <h3 className="font-display text-2xl font-bold">Send a message</h3>
+              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
+                <div>
+                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold">Name</label>
+                  <Input id="contact-name" type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
+                </div>
+                <div>
+                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold">Email</label>
+                  <Input id="contact-email" type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
+                </div>
+                <div>
+                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold">Message</label>
+                  <textarea
+                    id="contact-message"
+                    rows="4"
+                    placeholder="Your Message"
+                    value={form.message}
+                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
+                    className="w-full rounded-xl border-2 border-ink bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-persimmon focus:outline-none focus:ring-2 focus:ring-persimmon"
+                  />
+                </div>
+                <Button type="submit" className="w-full sm:w-auto" size="lg">
+                  <Send className="h-5 w-5" />
+                  Send Message
+                </Button>
+              </form>
+            </Card>
           </div>
         </div>
 
         {/* CTA Section */}
-        <div className="flex justify-center mb-20">
-          <a href="/about" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-8 py-3 rounded-lg shadow transition text-lg border border-blue-200">Learn More About Us</a>
+        <div className="mb-20 flex justify-center">
+          <Link to="/about" className="rounded-xl border-2 border-ink bg-olive px-8 py-3 text-lg font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">
+            Learn More About Us
+          </Link>
         </div>
       </div>
     </>
   );
 }
diff --git a/src/Components/Error/Error.jsx b/src/Components/Error/Error.jsx
index dd31721..dae8d3f 100644
--- a/src/Components/Error/Error.jsx
+++ b/src/Components/Error/Error.jsx
@@ -1,18 +1,33 @@
 import React from 'react'
+import { AlertTriangle, RotateCcw } from 'lucide-react';
 
-export const Error = () => {
-    return (
-        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex flex-col justify-center items-center px-4">
-            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center border border-red-100">
-                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
-                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
-                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
-                    </svg>
-                </div>
-                <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
-                <p className="text-gray-600">Unable to fetch brands at the moment. Please try again later.</p>
-            </div>
+export const Error = ({ message = 'Unable to fetch data at the moment. Please try again later.', onRetry }) => {
+  function handleRetry() {
+    if (onRetry) {
+      onRetry();
+    } else {
+      window.location.reload();
+    }
+  }
+
+  return (
+    <div className="flex min-h-[40vh] flex-col items-center justify-center bg-paper px-4 py-12 text-ink">
+      <div className="hard-shadow w-full max-w-md rounded-2xl border-2 border-ink bg-paper p-8 text-center">
+        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-brick">
+          <AlertTriangle className="h-8 w-8 text-paper" />
         </div>
-    )
+        <h2 className="font-display text-2xl font-bold text-ink">Oops! Something went wrong</h2>
+        <p className="mt-2 text-ink/70">{message}</p>
+        <button
+          type="button"
+          onClick={handleRetry}
+          className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-brick px-6 py-2.5 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+        >
+          <RotateCcw className="h-4 w-4" />
+          Try again
+        </button>
+      </div>
+    </div>
+  )
 }
-export default Error;
\ No newline at end of file
+export default Error;
diff --git a/src/Components/Layout/Layout.jsx b/src/Components/Layout/Layout.jsx
index 45689f7..e3643db 100644
--- a/src/Components/Layout/Layout.jsx
+++ b/src/Components/Layout/Layout.jsx
@@ -1,17 +1,18 @@
 import Navbar from './../Navbar/Navbar';
 import Footer from './../Footer/Footer';
 import { Outlet } from 'react-router-dom';
 import CartDrawer from '../CartDrawer/Drawer';
 
 export default function Layout() {
   return (
     <div className="min-h-screen bg-paper font-sans text-ink">
       <Navbar />
       <CartDrawer />
+      {/* Offset for the fixed header: promo tape + 72px nav bar (~113px total). */}
       <div className="pt-[113px]">
         <Outlet />
       </div>
       <Footer />
     </div>
   )
 }
diff --git a/src/Components/Loader/ScaleLoader.jsx b/src/Components/Loader/ScaleLoader.jsx
index 771bb1e..3f83455 100644
--- a/src/Components/Loader/ScaleLoader.jsx
+++ b/src/Components/Loader/ScaleLoader.jsx
@@ -1,13 +1,18 @@
 import React from 'react'
-import { ScaleLoader } from 'react-spinners';
 
 export default function ScaleLoading() {
-  return <>
-    <div className="flex flex-col justify-center items-center h-screen">
-      <ScaleLoader width={6} color="#3b82f6" />
-      <h2 className="text-3xl text-blue-400 mt-2">Loading ...</h2>
+  return (
+    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4" role="status" aria-label="Loading">
+      <div className="flex items-center gap-2">
+        {[0, 1, 2].map((i) => (
+          <span
+            key={i}
+            className="h-4 w-4 animate-bounce rounded-full border-2 border-ink bg-marigold"
+            style={{ animationDelay: `${i * 0.15}s` }}
+          />
+        ))}
+      </div>
+      <p className="font-display text-xl font-bold text-ink">Loading the souqΓÇª</p>
     </div>
-
-  </>
-
+  )
 }
diff --git a/src/Components/Login/Login.jsx b/src/Components/Login/Login.jsx
index 9b169ce..8dee43f 100644
--- a/src/Components/Login/Login.jsx
+++ b/src/Components/Login/Login.jsx
@@ -1,112 +1,147 @@
 import axios from 'axios';
 import { useFormik } from 'formik'
 import React, { useContext, useState } from 'react'
-import { useNavigate ,Link} from 'react-router-dom';
+import { useNavigate, Link } from 'react-router-dom';
 import * as yup from 'yup';
 import { ClipLoader } from 'react-spinners';
 import { AuthContext } from '@/Context/AuthContext/AuthContext';
 import { Helmet } from 'react-helmet';
+import { toast } from 'sonner';
+import { LogIn } from 'lucide-react';
+import Input from '../../ReusableComponents/Input';
+import Button from '../../ReusableComponents/Button';
 
 export default function Login() {
   const { setToken } = useContext(AuthContext);
   const navigate = useNavigate();
   const [isSuccess, setIsSuccess] = useState(false);
   const [errorMassage, setErrorMassage] = useState(null);
   const [isClicked, setIsClicked] = useState(false);
 
-
-
   function loginUser(values) {
     setIsClicked(true);
     axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
       .then(function (x) {
         setToken(x.data.token);
         localStorage.setItem('tkn', x.data.token);
         setIsSuccess(true);
         setIsClicked(false);
+        toast.success('Welcome back to the souq!');
 
         setTimeout(() => {
           navigate('/products');
         }, 2000);
-
-
       })
       .catch(function (x) {
-        console.log(x);
         setErrorMassage(x.response.data.message);
         setIsClicked(false);
         setTimeout(() => {
           setErrorMassage(null);
         }, 2000);
       });
-
   }
 
-
   const registerFormik = useFormik({
     initialValues: {
       email: '',
       password: '',
     },
     onSubmit: loginUser,
-    // use yup to validate input 
     validationSchema: yup.object().shape({
       email: yup.string().required("Email is Required").email("Invalid Email"),
       password: yup.string().required("Password is Required").min(6).max(12),
     }),
-
-
   });
+
   return (
     <>
-      <Helmet><title>Login</title></Helmet>
-      <div className="flex items-center justify-center min-h-screen bg-gray-100">
-        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
-
-          {isSuccess ? <div className="p-3  text-sm text-green-800 rounded-lg bg-green-50" role='alert'>
+      <Helmet><title>Login ΓÇö souq.</title></Helmet>
+      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink">
+        <div className="hard-shadow w-full max-w-xl rounded-2xl border-2 border-ink bg-paper p-8">
+          <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+            Welcome back
+          </span>
+          <h2 className="font-display text-3xl font-bold">Login now</h2>
+          <p className="mb-6 mt-1 text-ink/70">Pick up right where the bazaar left off.</p>
+
+          {isSuccess ? <div className="mb-4 rounded-xl border-2 border-ink bg-olive/10 p-3 text-sm font-semibold text-olive" role='alert'>
             You are successfully logged in
           </div> : ''}
-          {errorMassage ? <div className="p-3  text-sm text-red-800 rounded-lg bg-red-50" role='alert'>
+          {errorMassage ? <div className="mb-4 rounded-xl border-2 border-ink bg-brick/10 p-3 text-sm font-semibold text-brick" role='alert'>
             {errorMassage}
           </div> : ''}
 
-
-          <h2 className="text-2xl font-bold mb-6 text-center">Login Now</h2>
-          <form onSubmit={registerFormik.handleSubmit} >
-
-            <div className="relative z-0 w-full mb-5 group">
-              <input value={registerFormik.values.email} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
-              {registerFormik.errors.email && registerFormik.touched.email ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
+          <div className="mb-6 grid grid-cols-2 gap-3">
+            <button
+              type="button"
+              onClick={() => toast.message('Social login is coming soon ΓÇö use email for now.')}
+              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            >
+              Continue with Google
+            </button>
+            <button
+              type="button"
+              onClick={() => toast.message('Social login is coming soon ΓÇö use email for now.')}
+              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            >
+              Continue with Facebook
+            </button>
+          </div>
+
+          <div className="mb-6 flex items-center gap-3" aria-hidden="true">
+            <span className="h-0.5 flex-1 rounded bg-clay" />
+            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">or with email</span>
+            <span className="h-0.5 flex-1 rounded bg-clay" />
+          </div>
+
+          <form onSubmit={registerFormik.handleSubmit}>
+            <div className="mb-4">
+              <label htmlFor="email" className="mb-1.5 block text-sm font-bold">Email address</label>
+              <Input
+                value={registerFormik.values.email}
+                onBlur={registerFormik.handleBlur}
+                onChange={registerFormik.handleChange}
+                type="email"
+                name="email"
+                id="email"
+                placeholder="you@souq.com"
+                required
+              />
+              {registerFormik.errors.email && registerFormik.touched.email ? <div className="mt-1.5 rounded-lg border border-ink bg-brick/10 p-2.5 text-sm font-semibold text-brick" role='alert'>
                 {registerFormik.errors.email}
               </div> : ''}
             </div>
 
-            <div className="relative z-0 w-full mb-5 group">
-              <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
-              {registerFormik.errors.password && registerFormik.touched.password ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
+            <div className="mb-6">
+              <label htmlFor="password" className="mb-1.5 block text-sm font-bold">Password</label>
+              <Input
+                value={registerFormik.values.password}
+                onBlur={registerFormik.handleBlur}
+                onChange={registerFormik.handleChange}
+                type="password"
+                name="password"
+                id="password"
+                placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
+                required
+              />
+              {registerFormik.errors.password && registerFormik.touched.password ? <div className="mt-1.5 rounded-lg border border-ink bg-brick/10 p-2.5 text-sm font-semibold text-brick" role='alert'>
                 {registerFormik.errors.password}
               </div> : ''}
             </div>
 
-            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
-              {!isClicked ? 'Login' : <ClipLoader
-                color="#fff"
-                size={25}
-
-              />}
-            </button>
+            <Button type="submit" className="w-full" size="lg" disabled={isClicked}>
+              <LogIn className="h-5 w-5" />
+              {!isClicked ? 'Login' : <ClipLoader color="#FAF6F0" size={25} />}
+            </Button>
           </form>
-          <p className="mt-4 text-sm text-gray-600">
-            Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
+          <p className="mt-4 text-sm text-ink/70">
+            Don&apos;t have an account? <Link to="/register" className="font-bold text-persimmon underline-offset-4 hover:underline">Register</Link>
           </p>
-          <p className="mt-2 text-sm text-gray-600">
-            <a href="/forget-password" className="text-blue-600 hover:underline">Forget Password</a>
+          <p className="mt-2 text-sm text-ink/70">
+            <a href="/forget-password" className="font-bold text-olive underline-offset-4 hover:underline">Forget Password</a>
           </p>
-
         </div>
       </div>
     </>
   )
 }
diff --git a/src/Components/Navbar/Navbar.jsx b/src/Components/Navbar/Navbar.jsx
index 9b731de..7b5e95f 100644
--- a/src/Components/Navbar/Navbar.jsx
+++ b/src/Components/Navbar/Navbar.jsx
@@ -1,39 +1,40 @@
 import { useContext, useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 import { openCart } from "../../Redux/ToggleCartSlice";
 import { Link, NavLink } from 'react-router-dom'
 import { Home, LayoutGrid, LogOut, Menu, Phone, Search, ShoppingBag, ShoppingCart, Store, Users, UserRound } from 'lucide-react';
 import { useDispatch } from 'react-redux';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { AuthContext } from '@/Context/AuthContext/AuthContext';
 import { Marquee } from '../magic/marquee';
+import { cn } from '@/lib/utils';
 import { Badge } from '../ui/badge';
 import { Input } from '../ui/input';
 import { Button } from '../ui/button';
 import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
 } from '../ui/dropdown-menu';
 import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
 } from '../ui/sheet';
 
 const PROMOS = [
-  'Free shipping over $75',
+  'Free shipping over $50',
   'New souq drop weekly',
   'Easy 30-day returns',
   'Fresh picks daily',
 ];
 
 export default function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [query, setQuery] = useState('');
   const { token, setToken } = useContext(AuthContext);
   const { numOfCartItems } = useContext(CartContext);
@@ -42,21 +43,25 @@ export default function Navbar() {
 
   function handleLogout() {
     localStorage.removeItem('tkn');
     setToken(null);
     navigate('/login');
     setMobileMenuOpen(false);
   }
 
   function handleSearch(e) {
     e.preventDefault();
-    navigate('/products');
+    const trimmed = query.trim();
+    // Pass the query through to /products via ?q= so the shop can
+    // pre-filter; ShopProducts reads + syncs this param.
+    navigate(trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : '/products');
+    setQuery('');
   }
 
   const navItems = [
     { to: '/', label: 'Home', icon: Home },
     { to: '/products', label: 'Shop', icon: ShoppingBag },
     { to: '/categories', label: 'Categories', icon: LayoutGrid },
     { to: '/brands', label: 'Brands', icon: Store },
     { to: '/about', label: 'About', icon: Users },
     { to: '/contact', label: 'Contact', icon: Phone },
   ];
@@ -89,21 +94,26 @@ export default function Navbar() {
                   souq<span className="text-persimmon">.</span>
                 </span>
               </Link>
 
               {/* Desktop links */}
               <ul className="hidden items-center gap-1 lg:flex">
                 {navItems.map(({ to, label }) => (
                   <li key={to}>
                     <NavLink
                       to={to}
-                      className="rounded-xl px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-clay/60 hover:text-persimmon"
+                      className={({ isActive }) =>
+                        cn(
+                          'rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-clay/60 hover:text-persimmon',
+                          isActive ? 'text-persimmon underline underline-offset-4' : 'text-ink'
+                        )
+                      }
                     >
                       {label}
                     </NavLink>
                   </li>
                 ))}
               </ul>
 
               {/* Right actions */}
               <div className="flex items-center gap-2 sm:gap-3">
                 <form onSubmit={handleSearch} className="relative hidden md:block" role="search">
@@ -246,21 +256,26 @@ export default function Navbar() {
           </form>
 
           <nav className="mt-4 flex-1 overflow-y-auto" aria-label="Mobile">
             <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Browse</p>
             <ul className="space-y-1">
               {navItems.map(({ to, label, icon: Icon }) => (
                 <li key={to}>
                   <NavLink
                     to={to}
                     onClick={() => setMobileMenuOpen(false)}
-                    className="flex items-center gap-3 rounded-xl border-2 border-transparent px-3 py-2.5 font-semibold text-ink transition-colors hover:border-ink hover:bg-clay/50"
+                    className={({ isActive }) =>
+                      cn(
+                        'flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 font-semibold transition-colors hover:border-ink hover:bg-clay/50',
+                        isActive ? 'border-ink bg-clay/50 text-persimmon underline underline-offset-4' : 'border-transparent text-ink'
+                      )
+                    }
                   >
                     <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-paper-deep">
                       <Icon className="h-4 w-4" />
                     </span>
                     {label}
                   </NavLink>
                 </li>
               ))}
             </ul>
           </nav>
diff --git a/src/Components/NotFound/NotFound.jsx b/src/Components/NotFound/NotFound.jsx
index 3befa0b..1f9eed0 100644
--- a/src/Components/NotFound/NotFound.jsx
+++ b/src/Components/NotFound/NotFound.jsx
@@ -1,62 +1,50 @@
 import React from 'react'
-import { Home, Search, ArrowLeft } from 'lucide-react';
+import { Home, ArrowLeft } from 'lucide-react';
 import { Helmet } from 'react-helmet';
 import { Link, useNavigate } from 'react-router-dom';
 
 export default function NotFound() {
   const navigate = useNavigate();
   const handleGoBack = (event) => {
     event.preventDefault();
     navigate(-1);
   };
   return (
     <>
-      <Helmet><title>Not Found!</title></Helmet>
-      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-900 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
-        <div className="max-w-lg w-full text-center">
-          {/* Animated 404 Text */}
-          <div className="mb-8">
-            <h1 className="text-9xl sm:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse leading-none">
-              404
-            </h1>
+      <Helmet><title>Not Found ΓÇö souq.</title></Helmet>
+      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink">
+        <div className="w-full max-w-lg text-center">
+          <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+            Lost in the bazaar
+          </span>
+          <h1 className="font-display text-9xl font-bold text-persimmon sm:text-[12rem] sm:leading-none">
+            404
+          </h1>
+          <h2 className="font-display mt-4 text-3xl font-bold text-ink">
+            Oops! Page not found
+          </h2>
+          <p className="mx-auto mt-3 max-w-md text-lg text-ink/70">
+            The page you&apos;re looking for wandered off into the souq.
+            Let&apos;s get you back to the good stuff.
+          </p>
+          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
+            <Link
+              to="/products"
+              className="hard-shadow-sm inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-persimmon px-6 py-3 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            >
+              <Home className="h-5 w-5" />
+              Shop the souq
+            </Link>
+            <button
+              onClick={handleGoBack}
+              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-paper px-6 py-3 font-bold text-ink transition-transform hover:-translate-y-0.5 hover:bg-clay/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            >
+              <ArrowLeft className="h-5 w-5" />
+              Go back
+            </button>
           </div>
-
-          {/* Main Content */}
-          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
-            <div className="mb-6">
-              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
-                <Search className="w-10 h-10 text-white animate-bounce" />
-              </div>
-              <h2 className="text-3xl font-bold text-white mb-3">
-                Oops! Page Not Found
-              </h2>
-              <p className="text-gray-300 text-lg leading-relaxed">
-                The page you're looking for seems to have wandered off into the digital void.
-                Don't worry, it happens to the best of us!
-              </p>
-            </div>
-
-            {/* Action Buttons */}
-            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
-              <Link to='/' className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
-                <Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
-                Go Home
-              </Link>
-
-              <button onClick={handleGoBack} className="group inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
-                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
-                Go Back
-              </button>
-            </div>
-          </div>
-
-          {/* Floating Elements */}
-          <div className="absolute top-10 left-10 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-75"></div>
-          <div className="absolute top-20 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
-          <div className="absolute bottom-20 left-16 w-3 h-3 bg-indigo-400 rounded-full animate-bounce opacity-70"></div>
-          <div className="absolute bottom-32 right-12 w-5 h-5 bg-blue-400 rounded-full animate-ping opacity-50"></div>
         </div>
       </div>
     </>
   );
 }
diff --git a/src/Components/PaymentPages/CheckOut.jsx b/src/Components/PaymentPages/CheckOut.jsx
index 501cd01..1ffe106 100644
--- a/src/Components/PaymentPages/CheckOut.jsx
+++ b/src/Components/PaymentPages/CheckOut.jsx
@@ -1,194 +1,304 @@
 import { useContext } from 'react';
 import Button from '../../ReusableComponents/Button';
 import Input from '../../ReusableComponents/Input';
 import { useFormik } from 'formik';
+import * as Yup from 'yup';
 import axios from 'axios';
+import { toast } from 'sonner';
+import { ArrowLeft, ArrowRight, Check, CreditCard, Lock } from 'lucide-react';
+import { useNavigate } from 'react-router-dom';
+import { Helmet } from 'react-helmet';
 import { CartContext } from '../../Context/CartContext/CartContext';
+import { Card } from '../ui/card';
+import { cn } from '@/lib/utils';
 
+const STEPS = ['Cart', 'Details', 'Done'];
+
+const checkoutSchema = Yup.object().shape({
+  FullName: Yup.string().required('Full name is required').min(3, 'Minimum 3 characters'),
+  email: Yup.string().required('Email is required').email('Invalid email address'),
+  address: Yup.string().required('Address is required').min(5, 'Minimum 5 characters'),
+  city: Yup.string().required('City is required'),
+  state: Yup.string().required('State is required'),
+  zipCode: Yup.string().required('ZIP code is required'),
+  phone: Yup.string().required('Phone is required'),
+});
+
+function FieldError({ touched, error }) {
+  if (!touched || !error) return null;
+  return (
+    <p className="mt-1.5 rounded-lg border border-ink bg-brick/10 px-2.5 py-1 text-xs font-semibold text-brick" role="alert">
+      {error}
+    </p>
+  );
+}
 
 const CheckoutPage = () => {
-    const { cartId, cartProduct, total, shipping, tax, subtotal, clearProducts } = useContext(CartContext);
-
-    function onlinePayment(values) {
-        const BackRequest = {
-            shippingAddress: values,
-        }
-        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, BackRequest, {
-            headers: {
-                token: localStorage.getItem('tkn'),
-            },
-            params: {
-                url: "http://localhost:8080"
-            }
-        }).then((r) => {
-            window.open(r.data.session.url, '_self');
-            clearProducts();
-        }).catch((e) => {
-            console.log("error", e);
-        });
-    }
-
-
-
-    const paymentFormik = useFormik(
-        {
-            initialValues: {
-                email: '',
-                FullName: '',
-                address: '',
-                city: '',
-                state: '',
-                zipCode: '',
-                phone: '',
-                paymentMethod: 'card'
-            },
-            onSubmit: onlinePayment,
-        }
+  const { cartId, cartProduct, total, shipping, tax, subtotal, clearProducts } = useContext(CartContext);
+  const navigate = useNavigate();
+
+  function onlinePayment(values) {
+    const BackRequest = {
+      shippingAddress: values,
+    };
+    axios
+      .post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, BackRequest, {
+        headers: {
+          token: localStorage.getItem('tkn'),
+        },
+        params: {
+          url: 'http://localhost:8080',
+        },
+      })
+      .then((r) => {
+        toast.success('Order placed ΓÇö redirecting to paymentΓÇª');
+        window.open(r.data.session.url, '_self');
+        clearProducts();
+      })
+      .catch(() => {
+        toast.error('Checkout failed. Please try again.');
+      });
+  }
+
+  const paymentFormik = useFormik({
+    initialValues: {
+      email: '',
+      FullName: '',
+      address: '',
+      city: '',
+      state: '',
+      zipCode: '',
+      phone: '',
+      paymentMethod: 'card',
+    },
+    validationSchema: checkoutSchema,
+    onSubmit: onlinePayment,
+  });
+
+  const fieldClass = (name) =>
+    cn(
+      paymentFormik.touched[name] &&
+        paymentFormik.errors[name] &&
+        'border-brick focus:border-brick focus:ring-brick'
     );
 
-    return (<>
-        <form onSubmit={paymentFormik.handleSubmit}>
-            <div className="pt-16 min-h-screen bg-gray-50">
-                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
-                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>
-
-                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
-                        {/* Checkout Form */}
-                        <div className="space-y-6">
-                            <div className="bg-white rounded-xl shadow-lg p-6">
-                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
-                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
-                                    <Input
-                                        type="text"
-                                        placeholder="Full Name"
-                                        name="FullName"
-                                        id="FullName"
-                                        required={true}
-                                        value={paymentFormik.values.FullName}
-                                        onBlur={paymentFormik.handleBlur}
-                                        onChange={paymentFormik.handleChange}
-                                    />
-
-                                    <div className="md:col-span-2">
-                                        <Input
-                                            type="email"
-                                            placeholder="Email"
-                                            name="email"
-                                            id="email"
-                                            required={true}
-                                            value={paymentFormik.values.email}
-                                            onBlur={paymentFormik.handleBlur}
-                                            onChange={paymentFormik.handleChange}
-                                        />
-                                    </div>
-                                    <div className="md:col-span-2">
-                                        <Input
-                                            placeholder="Address"
-                                            name="address"
-                                            id="address"
-                                            required={true}
-                                            value={paymentFormik.values.address}
-                                            onBlur={paymentFormik.handleBlur}
-                                            onChange={paymentFormik.handleChange}
-                                        />
-                                    </div>
-                                    <Input
-                                        placeholder="City"
-                                        name="city"
-                                        id='city'
-                                        value={paymentFormik.values.city}
-                                        onBlur={paymentFormik.handleBlur}
-                                        onChange={paymentFormik.handleChange}
-                                    />
-                                    <Input
-                                        placeholder="State"
-                                        name="state"
-                                        id="state"
-                                        value={paymentFormik.values.state}
-                                        onBlur={paymentFormik.handleBlur}
-                                        onChange={paymentFormik.handleChange}
-                                    />
-                                    <Input
-                                        placeholder="ZIP Code"
-                                        name="zipCode"
-                                        id="zipCode"
-                                        value={paymentFormik.values.zipCode}
-                                        onBlur={paymentFormik.handleBlur}
-                                        onChange={paymentFormik.handleChange}
-                                    />
-                                    <Input
-                                        type='phone'
-                                        placeholder="Phone"
-                                        name="phone"
-                                        id="phone"
-                                        required={true}
-                                        value={paymentFormik.values.phone}
-                                        onBlur={paymentFormik.handleBlur}
-                                        onChange={paymentFormik.handleChange}
-                                    />
-                                </div>
-                            </div>
-                        </div>
+  return (
+    <>
+      <Helmet><title>Checkout ΓÇö souq.</title></Helmet>
+      <form onSubmit={paymentFormik.handleSubmit}>
+        <div className="min-h-screen bg-paper py-8 text-ink">
+          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+            <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+              Step 2 of 3
+            </span>
+            <h1 className="font-display mt-3 text-4xl font-bold text-ink">Checkout</h1>
+            <p className="mt-2 text-ink/70">Almost there ΓÇö details, then done.</p>
+
+            <ol className="mb-8 mt-8 flex items-center gap-2 sm:gap-3" aria-label="Checkout progress">
+              {STEPS.map((label, i) => {
+                const done = i < 1;
+                const active = i === 1;
+                return (
+                  <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
+                    <span
+                      aria-current={active ? 'step' : undefined}
+                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink font-bold ${
+                        done ? 'bg-olive text-paper' : active ? 'bg-persimmon text-paper' : 'bg-paper text-ink/50'
+                      }`}
+                    >
+                      {done ? <Check className="h-4 w-4" /> : <span>{i + 1}</span>}
+                    </span>
+                    <span className={`font-display text-sm font-bold sm:text-base ${active ? 'text-ink' : 'text-ink/50'}`}>
+                      {label}
+                    </span>
+                    {i < STEPS.length - 1 && <span aria-hidden="true" className="h-0.5 flex-1 rounded bg-clay" />}
+                  </li>
+                );
+              })}
+            </ol>
+
+            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
+              {/* Checkout Form */}
+              <div className="space-y-6">
+                <Card className="p-6">
+                  <h2 className="font-display text-2xl font-bold text-ink">Shipping information</h2>
+                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
+                    <div>
+                      <Input
+                        type="text"
+                        placeholder="Full Name"
+                        aria-label="Full Name"
+                        name="FullName"
+                        id="FullName"
+                        required
+                        value={paymentFormik.values.FullName}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('FullName')}
+                      />
+                      <FieldError touched={paymentFormik.touched.FullName} error={paymentFormik.errors.FullName} />
+                    </div>
+                    <div>
+                      <Input
+                        type="phone"
+                        placeholder="Phone"
+                        aria-label="Phone"
+                        name="phone"
+                        id="phone"
+                        required
+                        value={paymentFormik.values.phone}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('phone')}
+                      />
+                      <FieldError touched={paymentFormik.touched.phone} error={paymentFormik.errors.phone} />
+                    </div>
+                    <div className="md:col-span-2">
+                      <Input
+                        type="email"
+                        placeholder="Email"
+                        aria-label="Email"
+                        name="email"
+                        id="email"
+                        required
+                        value={paymentFormik.values.email}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('email')}
+                      />
+                      <FieldError touched={paymentFormik.touched.email} error={paymentFormik.errors.email} />
+                    </div>
+                    <div className="md:col-span-2">
+                      <Input
+                        placeholder="Address"
+                        aria-label="Address"
+                        name="address"
+                        id="address"
+                        required
+                        value={paymentFormik.values.address}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('address')}
+                      />
+                      <FieldError touched={paymentFormik.touched.address} error={paymentFormik.errors.address} />
+                    </div>
+                    <div>
+                      <Input
+                        placeholder="City"
+                        aria-label="City"
+                        name="city"
+                        id="city"
+                        value={paymentFormik.values.city}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('city')}
+                      />
+                      <FieldError touched={paymentFormik.touched.city} error={paymentFormik.errors.city} />
+                    </div>
+                    <div>
+                      <Input
+                        placeholder="State"
+                        aria-label="State"
+                        name="state"
+                        id="state"
+                        value={paymentFormik.values.state}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('state')}
+                      />
+                      <FieldError touched={paymentFormik.touched.state} error={paymentFormik.errors.state} />
+                    </div>
+                    <div className="md:col-span-2">
+                      <Input
+                        placeholder="ZIP Code"
+                        aria-label="ZIP Code"
+                        name="zipCode"
+                        id="zipCode"
+                        value={paymentFormik.values.zipCode}
+                        onBlur={paymentFormik.handleBlur}
+                        onChange={paymentFormik.handleChange}
+                        className={fieldClass('zipCode')}
+                      />
+                      <FieldError touched={paymentFormik.touched.zipCode} error={paymentFormik.errors.zipCode} />
+                    </div>
+                  </div>
+                </Card>
+
+                <Card className="p-6">
+                  <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-ink">
+                    <CreditCard className="h-6 w-6 text-persimmon" />
+                    Payment
+                  </h2>
+                  <p className="mt-2 flex items-center gap-2 text-sm text-ink/70">
+                    <Lock className="h-4 w-4" />
+                    You&apos;ll complete payment securely on our checkout partner after placing the order.
+                  </p>
+                </Card>
+
+                <button
+                  type="button"
+                  onClick={() => navigate('/cart')}
+                  className="inline-flex items-center gap-2 font-bold text-olive underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                >
+                  <ArrowLeft className="h-4 w-4" />
+                  Back to cart
+                </button>
+              </div>
+
+              {/* Order Summary */}
+              <div className="lg:sticky lg:top-32 lg:self-start">
+                <Card className="h-fit p-6">
+                  <h2 className="font-display text-2xl font-bold text-ink">Order summary</h2>
 
-                        {/* Order Summary */}
-                        <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
-                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
-
-                            <div className="space-y-4 mb-6">
-                                {cartProduct.map((item) => (
-                                    <div key={item._id} className="flex items-center space-x-3">
-                                        <img
-                                            src={item.product.imageCover}
-                                            alt={item.product.title}
-                                            className="w-12 h-12 object-cover rounded-lg"
-                                        />
-                                        <div className="flex-1">
-                                            <p className="font-medium text-sm">{item.title}</p>
-                                            <p className="text-gray-500 text-sm">Qty: {item.count}</p>
-                                        </div>
-                                        <span className="font-semibold">${(item.price * item.count).toFixed(2)}</span>
-                                    </div>
-                                ))}
-                            </div>
-
-                            <div className="space-y-3 border-t pt-4">
-                                <div className="flex justify-between">
-                                    <span className="text-gray-600">Subtotal</span>
-                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
-                                </div>
-                                <div className="flex justify-between">
-                                    <span className="text-gray-600">Shipping</span>
-                                    <span className="font-semibold">
-                                        {shipping === 0 ? 'Free' : `${shipping.toFixed(2)}`}
-                                    </span>
-                                </div>
-                                <div className="flex justify-between">
-                                    <span className="text-gray-600">Tax</span>
-                                    <span className="font-semibold">${tax.toFixed(2)}</span>
-                                </div>
-                                <div className="border-t pt-3">
-                                    <div className="flex justify-between text-lg font-bold">
-                                        <span>Total</span>
-                                        <span>${total.toFixed(2)}</span>
-                                    </div>
-                                </div>
-                            </div>
-
-                            <Button
-                                onSubmit={paymentFormik.handleSubmit}
-                                type='submit'
-                                className="w-full mt-6"
-                                size="lg"
-                            >
-                                Place Order
-                            </Button>
+                  <ul className="mb-6 mt-4 max-h-64 space-y-3 overflow-y-auto">
+                    {cartProduct.map((item) => (
+                      <li key={item._id ?? item.product._id} className="flex items-center gap-3 rounded-xl border-2 border-ink bg-clay/40 p-2">
+                        <img
+                          src={item.product.imageCover}
+                          alt={item.product.title}
+                          loading="lazy"
+                          className="h-12 w-12 shrink-0 rounded-lg border-2 border-ink object-cover"
+                        />
+                        <div className="min-w-0 flex-1">
+                          <p className="truncate text-sm font-bold">{item.product.title}</p>
+                          <p className="text-sm text-ink/60">Qty: {item.count}</p>
                         </div>
+                        <span className="font-bold">${(item.price * item.count).toFixed(2)}</span>
+                      </li>
+                    ))}
+                  </ul>
+
+                  <dl className="space-y-3 border-t-2 border-ink pt-4">
+                    <div className="flex justify-between text-sm">
+                      <dt className="text-ink/70">Subtotal</dt>
+                      <dd className="font-bold">${subtotal.toFixed(2)}</dd>
+                    </div>
+                    <div className="flex justify-between text-sm">
+                      <dt className="text-ink/70">Shipping</dt>
+                      <dd className="font-bold text-olive">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
+                    </div>
+                    <div className="flex justify-between text-sm">
+                      <dt className="text-ink/70">Tax</dt>
+                      <dd className="font-bold">${tax.toFixed(2)}</dd>
                     </div>
-                </div>
+                    <div className="flex justify-between border-t-2 border-ink pt-3">
+                      <dt className="font-display text-lg font-bold">Total</dt>
+                      <dd className="font-display text-xl font-bold text-persimmon">${total.toFixed(2)}</dd>
+                    </div>
+                  </dl>
+
+                  <Button type="submit" className="mt-6 w-full" size="lg">
+                    Place Order
+                    <ArrowRight className="h-5 w-5" />
+                  </Button>
+                </Card>
+              </div>
             </div>
-        </form>
+          </div>
+        </div>
+      </form>
     </>
-    );
+  );
 };
 
-export default CheckoutPage;
\ No newline at end of file
+export default CheckoutPage;
diff --git a/src/Components/ProductDetails/ProductDetails.jsx b/src/Components/ProductDetails/ProductDetails.jsx
index 464dd09..afcdf76 100644
--- a/src/Components/ProductDetails/ProductDetails.jsx
+++ b/src/Components/ProductDetails/ProductDetails.jsx
@@ -8,21 +8,20 @@ import { ProductCard, ProductCardSkeleton } from './ProductCard';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { useDispatch } from 'react-redux';
 import { openCart } from '../../Redux/ToggleCartSlice';
 import { Helmet } from 'react-helmet';
 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
 import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
 import { Card } from '../ui/card';
 import { Skeleton } from '../ui/skeleton';
 import { BlurFade } from '../magic/blur-fade';
 import { cn } from '@/lib/utils';
-import toast from 'react-hot-toast';
 
 export default function ProductDetails() {
   const { data, isLoading, isError } = useAllProduct();
   const { addProduct } = useContext(CartContext);
   const dispatch = useDispatch();
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [qty, setQty] = useState(1);
   const navigate = useNavigate();
   const { id } = useParams();
   const relatedRef = useRef(null);
@@ -33,28 +32,28 @@ export default function ProductDetails() {
   const related = useMemo(() => {
     if (!currentProduct) return [];
     return products
       .filter((p) => p._id !== currentProduct._id && p.category?.name === currentProduct.category?.name)
       .slice(0, 8);
   }, [products, currentProduct]);
 
   // NOTE: qty stepper is display-only ΓÇö Cart API addProduct(productId) accepts
   // no quantity param (see CartProvider AddProduct mutation); quantity is
   // adjusted in-cart via UpdateCount.
-  function handleAddProduct(id, openSheet = true) {
-    addProduct(id, openSheet ? { onSuccess: () => dispatch(openCart()) } : undefined);
+  function handleAddProduct(productId, openSheet = true) {
+    addProduct(productId, openSheet ? { onSuccess: () => dispatch(openCart()) } : undefined);
   }
 
   function handleBuyNow() {
+    // No local error toast: CartProvider's toast.promise already surfaces errors.
     addProduct(currentProduct._id, {
       onSuccess: () => navigate('/cart'),
-      onError: () => toast.error('Failed to add product to cart'),
     });
   }
 
   if (isError) {
     return (
       <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12">
         <Card className="w-full max-w-md p-10 text-center">
           <h3 className="font-display text-2xl font-bold text-ink">Couldn&apos;t load this product</h3>
           <p className="mt-2 text-ink/70">Please check your connection and try again.</p>
           <div className="mt-6 flex justify-center gap-3">
@@ -267,21 +266,21 @@ export default function ProductDetails() {
               <AccordionItem value="details">
                 <AccordionTrigger>Details</AccordionTrigger>
                 <AccordionContent>
                   {currentProduct.description}
                   {currentProduct.slug && <p className="mt-2 text-ink/60">SKU: {currentProduct.slug}</p>}
                 </AccordionContent>
               </AccordionItem>
               <AccordionItem value="shipping">
                 <AccordionTrigger>Shipping</AccordionTrigger>
                 <AccordionContent>
-                  Orders ship within 2ΓÇô4 business days. Free shipping on orders over $75, tracked delivery, and careful
+                  Orders ship within 2ΓÇô4 business days. Free shipping on orders over $50, tracked delivery, and careful
                   bazaar-style packaging on every parcel.
                 </AccordionContent>
               </AccordionItem>
               <AccordionItem value="returns">
                 <AccordionTrigger>Returns</AccordionTrigger>
                 <AccordionContent>
                   30-day easy returns. Items must be unused and in original packaging ΓÇö refunds land within 5ΓÇô7 business
                   days after we receive your return.
                 </AccordionContent>
               </AccordionItem>
diff --git a/src/Components/Register/Register.jsx b/src/Components/Register/Register.jsx
index 43f6124..2b11e73 100644
--- a/src/Components/Register/Register.jsx
+++ b/src/Components/Register/Register.jsx
@@ -1,129 +1,138 @@
 import axios from 'axios';
 import { useFormik } from 'formik'
 import React, { useState } from 'react'
-import { useNavigate } from 'react-router-dom';
+import { Link, useNavigate } from 'react-router-dom';
 import { ClipLoader } from 'react-spinners';
 import * as yup from 'yup';
+import { Helmet } from 'react-helmet';
+import { toast } from 'sonner';
+import { UserPlus } from 'lucide-react';
+import Input from '../../ReusableComponents/Input';
+import Button from '../../ReusableComponents/Button';
 
 export default function Register() {
-
   const navigate = useNavigate();
   const [isSuccess, setIsSuccess] = useState(false);
   const [errorMassage, setErrorMassage] = useState(null);
   const [isClicked, setIsClicked] = useState(false);
 
-  
-
-  function registerUser(values){
-  setIsClicked(true);
-  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
-  .then(function () {
-    setIsSuccess(true);
-    setIsClicked(false);
-    setTimeout(() => {
-      navigate('/login');
-    }, 2000);
-
-
-  })
-  .catch(function (x) {
-    console.log(x);
-    setErrorMassage(x.response.data.message);
-    setIsClicked(false);
-    setTimeout(() => {
-      setErrorMassage(null);
-    }, 2000);
-  });
-  
+  function registerUser(values) {
+    setIsClicked(true);
+    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
+      .then(function () {
+        setIsSuccess(true);
+        setIsClicked(false);
+        toast.success('Account created ΓÇö see you at login!');
+        setTimeout(() => {
+          navigate('/login');
+        }, 2000);
+      })
+      .catch(function (x) {
+        setErrorMassage(x.response.data.message);
+        setIsClicked(false);
+        setTimeout(() => {
+          setErrorMassage(null);
+        }, 2000);
+      });
   }
 
-
-  const registerFormik= useFormik({   
+  const registerFormik = useFormik({
     initialValues: {
       name: '',
       email: '',
       phone: '',
       password: '',
-      rePassword: '',     
+      rePassword: '',
     },
-    onSubmit:registerUser,
-
-
-    validationSchema:yup.object().shape({
-      name:yup.string().required("Name is Required").min(3,"Minmum is 3 character").max(12,"Max is 12 character"),
-      email:yup.string().required("Email is Required").email("Invalid Email"),
-      phone:yup.string().required("Phone is Required").matches(/^01[0125][0-9]{8}$/),
-      password:yup.string().required("Password is Required").min(6).max(12),
-      rePassword:yup.string().required("re Password is Required").oneOf([yup.ref("password")],"re Password dosn't matches"),
+    onSubmit: registerUser,
+    validationSchema: yup.object().shape({
+      name: yup.string().required("Name is Required").min(3, "Minmum is 3 character").max(12, "Max is 12 character"),
+      email: yup.string().required("Email is Required").email("Invalid Email"),
+      phone: yup.string().required("Phone is Required").matches(/^01[0125][0-9]{8}$/),
+      password: yup.string().required("Password is Required").min(6).max(12),
+      rePassword: yup.string().required("re Password is Required").oneOf([yup.ref("password")], "re Password dosn't matches"),
     }),
+  });
 
+  const fields = [
+    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
+    { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@souq.com' },
+    { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '01xxxxxxxxx' },
+    { name: 'password', label: 'Password', type: 'password', placeholder: 'ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó' },
+    { name: 'rePassword', label: 'Confirm Password', type: 'password', placeholder: 'ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó' },
+  ];
 
-      });
   return (
-    <div className="flex items-center justify-center min-h-screen bg-gray-100">
-      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
-
-        {isSuccess ? <div className="p-3  text-sm text-green-800 rounded-lg bg-green-50" role='alert'>
-                    You are successfully registered
-        </div> :''}
-        {errorMassage ? <div className="p-3  text-sm text-red-800 rounded-lg bg-red-50" role='alert'>
-                    {errorMassage}
-        </div> :''}
-
-
-        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
-          <form onSubmit={registerFormik.handleSubmit} >
-
-              <div className="relative z-0 w-full mb-5 group">
-                  <input value={registerFormik.values.name} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-                  <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
-                  {registerFormik.errors.name && registerFormik.touched.name ? <div className="p-3  text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
-                    {registerFormik.errors.name}
-                  </div> :''}
+    <>
+      <Helmet><title>Register ΓÇö souq.</title></Helmet>
+      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12 text-ink">
+        <div className="hard-shadow w-full max-w-xl rounded-2xl border-2 border-ink bg-paper p-8">
+          <span className="mb-4 inline-block rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+            Join the bazaar
+          </span>
+          <h2 className="font-display text-3xl font-bold">Create your account</h2>
+          <p className="mb-6 mt-1 text-ink/70">Fresh drops, easy orders, 10% off your first haul.</p>
+
+          {isSuccess ? <div className="mb-4 rounded-xl border-2 border-ink bg-olive/10 p-3 text-sm font-semibold text-olive" role='alert'>
+            You are successfully registered
+          </div> : ''}
+          {errorMassage ? <div className="mb-4 rounded-xl border-2 border-ink bg-brick/10 p-3 text-sm font-semibold text-brick" role='alert'>
+            {errorMassage}
+          </div> : ''}
+
+          <div className="mb-6 grid grid-cols-2 gap-3">
+            <button
+              type="button"
+              onClick={() => toast.message('Social signup is coming soon ΓÇö use the form for now.')}
+              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            >
+              Sign up with Google
+            </button>
+            <button
+              type="button"
+              onClick={() => toast.message('Social signup is coming soon ΓÇö use the form for now.')}
+              className="rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            >
+              Sign up with Facebook
+            </button>
+          </div>
+
+          <div className="mb-6 flex items-center gap-3" aria-hidden="true">
+            <span className="h-0.5 flex-1 rounded bg-clay" />
+            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">or with email</span>
+            <span className="h-0.5 flex-1 rounded bg-clay" />
+          </div>
+
+          <form onSubmit={registerFormik.handleSubmit}>
+            {fields.map(({ name, label, type, placeholder }) => (
+              <div key={name} className="mb-4">
+                <label htmlFor={name} className="mb-1.5 block text-sm font-bold">{label}</label>
+                <Input
+                  value={registerFormik.values[name]}
+                  onBlur={registerFormik.handleBlur}
+                  onChange={registerFormik.handleChange}
+                  type={type}
+                  name={name}
+                  id={name}
+                  placeholder={placeholder}
+                  required
+                />
+                {registerFormik.errors[name] && registerFormik.touched[name] ? <div className="mt-1.5 rounded-lg border border-ink bg-brick/10 p-2.5 text-sm font-semibold text-brick" role='alert'>
+                  {registerFormik.errors[name]}
+                </div> : ''}
               </div>
-            
-            <div className="relative z-0 w-full mb-5 group">
-              <input value={registerFormik.values.email}   onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange}type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-              <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
-              {registerFormik.errors.email && registerFormik.touched.email ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
-                    {registerFormik.errors.email}
-                  </div> :''}
-            </div>
-
-            <div class="relative z-0 w-full mb-5 group">
-                  <input value={registerFormik.values.phone} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="tel"  name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-                  <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75  top-1   -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
-                  {registerFormik.errors.phone && registerFormik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
-                    {registerFormik.errors.phone}
-                  </div> :''}
-            </div>
-
-            <div className="relative z-0 w-full mb-5 group">
-                <input value={registerFormik.values.password} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-                <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
-                {registerFormik.errors.password && registerFormik.touched.password ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
-                    {registerFormik.errors.password}
-                  </div> :''}
-            </div>
+            ))}
 
-            <div className="relative z-0 w-full mb-5 group">
-                <input value={registerFormik.values.rePassword} onBlur={registerFormik.handleBlur} onChange={registerFormik.handleChange} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
-                <label for="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75   top-1  -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
-                {registerFormik.errors.rePassword && registerFormik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-80 rounded-lg bg-red-50" role='alert'>
-                    {registerFormik.errors.rePassword}
-                  </div> :''}
-            </div>
-
-            
-            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
-              { ! isClicked? 'Register':<ClipLoader
-                color="#fff"
-                size={20}
-              
-              /> }
-            </button>
+            <Button type="submit" className="mt-2 w-full" size="lg" disabled={isClicked}>
+              <UserPlus className="h-5 w-5" />
+              {!isClicked ? 'Register' : <ClipLoader color="#FAF6F0" size={20} />}
+            </Button>
           </form>
+          <p className="mt-4 text-sm text-ink/70">
+            Already have an account? <Link to="/login" className="font-bold text-persimmon underline-offset-4 hover:underline">Login</Link>
+          </p>
+        </div>
       </div>
-    </div>
+    </>
   )
 }
diff --git a/src/Components/Shop/ShopProducts.jsx b/src/Components/Shop/ShopProducts.jsx
index 73733dd..3c7345f 100644
--- a/src/Components/Shop/ShopProducts.jsx
+++ b/src/Components/Shop/ShopProducts.jsx
@@ -1,12 +1,12 @@
-import { useNavigate } from 'react-router-dom';
-import { useContext, useMemo, useState } from 'react';
+import { useNavigate, useSearchParams } from 'react-router-dom';
+import { useContext, useEffect, useMemo, useState } from 'react';
 import { ArrowUpDown, PackageSearch, RotateCcw, Search, SlidersHorizontal } from 'lucide-react';
 import Input from '../../ReusableComponents/Input';
 import { ProductCard, ProductCardSkeleton } from '../ProductDetails/ProductCard';
 import useAllProduct from '../../CustomHooks/useAllProduct';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { useDispatch } from 'react-redux';
 import { openCart } from "../../Redux/ToggleCartSlice"
 import { Helmet } from 'react-helmet';
 import Error from '../Error/Error';
 import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
@@ -42,33 +42,41 @@ const PRICE_OPTIONS = [
   { value: 'all', label: 'All prices' },
   { value: 'under-100', label: 'Under $100' },
   { value: '100-500', label: '$100 ΓÇô $500' },
   { value: 'over-500', label: 'Over $500' },
 ];
 
 export default function ShopProducts() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { addProduct } = useContext(CartContext);
-  const [searchQuery, setSearchQuery] = useState('');
+  const [searchParams] = useSearchParams();
+  // Navbar search passes ?q=; sync it into the local filter once per navigation.
+  const initialQuery = searchParams.get('q') || '';
+  const [searchQuery, setSearchQuery] = useState(initialQuery);
   const [sortBy, setSortBy] = useState('name');
   const [selectedCategory, setSelectedCategory] = useState('all');
   const [tab, setTab] = useState('all');
   const [priceFilter, setPriceFilter] = useState('all');
   const [selectedBrands, setSelectedBrands] = useState([]);
   const [minRating, setMinRating] = useState(0);
   const [page, setPage] = useState(1);
 
+  useEffect(() => {
+    setSearchQuery(searchParams.get('q') || '');
+    setPage(1);
+  }, [searchParams]);
+
   const { data, isError, isLoading } = useAllProduct();
 
-  function handleAddProduct(id) {
-    addProduct(id,
+  function handleAddProduct(productId) {
+    addProduct(productId,
       {
         onSuccess: () => {
           dispatch(openCart());
         }
       }
     );
   }
 
   const AllProducts = useMemo(() => data?.data?.data || [], [data]);
 
diff --git a/src/Context/CartContext/CartProvider.jsx b/src/Context/CartContext/CartProvider.jsx
index ab9485e..ef67506 100644
--- a/src/Context/CartContext/CartProvider.jsx
+++ b/src/Context/CartContext/CartProvider.jsx
@@ -1,15 +1,15 @@
 import { useState } from 'react';
 import axios from 'axios';
 import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
 import { CartContext } from './CartContext';
-import toast from 'react-hot-toast';
+import { toast } from 'sonner';
 
 
 export default function CartContextProvider({ children }) {
   const queryClient = useQueryClient();
   const [isCartOpen, setIsCartOpen] = useState(false);
   const handleOpen = () => setIsCartOpen(true);
   const handleClose = () => setIsCartOpen(false);
 
   const Header = {
     token: localStorage.getItem('tkn'),

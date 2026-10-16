diff --git a/src/Components/CartDrawer/Drawer.jsx b/src/Components/CartDrawer/Drawer.jsx
index 4464073..4200440 100644
--- a/src/Components/CartDrawer/Drawer.jsx
+++ b/src/Components/CartDrawer/Drawer.jsx
@@ -1,183 +1,188 @@
-import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
+import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"
 import { Button } from "../ui/button"
-import { Trash2, ShoppingCart, ShoppingBag, Plus, Minus, ArrowRight, Package } from "lucide-react"
+import { Trash2, ShoppingBag, ArrowRight, Package, Truck } from "lucide-react"
 import { useContext } from "react"
 import { useDispatch, useSelector } from "react-redux"
 import { closeCart, openCart } from "../../Redux/ToggleCartSlice"
 import { useNavigate } from "react-router-dom"
 import { CartContext } from "../../Context/CartContext/CartContext"
 
+const FREE_SHIPPING_GOAL = 75;
+
 export default function CartSheet() {
-    const {total, shipping, tax,numOfCartItems, subtotal, cartProduct, deleteProduct } = useContext(CartContext)
+    const { total, shipping, tax, numOfCartItems, subtotal, cartProduct, deleteProduct } = useContext(CartContext)
     const { isOpen } = useSelector((state) => state.cart)
     const dispatch = useDispatch()
     const navigate = useNavigate();
 
     async function handleDeleteProduct(id) {
         await deleteProduct(id);
     }
 
+    const progress = Math.min((subtotal || 0) / FREE_SHIPPING_GOAL, 1);
+    const remaining = Math.max(FREE_SHIPPING_GOAL - (subtotal || 0), 0);
+
     return (
         <Sheet open={isOpen} onOpenChange={(open) => open ? dispatch(openCart()) : dispatch(closeCart())}>
-            <SheetTrigger asChild>
-                <Button variant="outline" size="icon" className="relative group border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300">
-                    <ShoppingCart className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
-                </Button>
-            </SheetTrigger>
-
             <SheetContent
                 side="right"
-                className="w-[450px] sm:w-[450px] bg-gradient-to-br from-white via-purple-50/90 to-indigo-50/30 border-l border-purple-100 overflow-auto"
+                className="flex w-full flex-col border-l-2 border-ink bg-paper p-0 text-ink sm:max-w-[420px]"
             >
                 {/* Header */}
-                <SheetHeader className="pb-6 border-b border-purple-100">
+                <SheetHeader className="border-b-2 border-ink px-5 py-4 text-left">
                     <div className="flex items-center gap-3">
-                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
-                            <ShoppingBag className="w-6 h-6 text-white" />
+                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-ink bg-persimmon">
+                            <ShoppingBag className="h-5 w-5 text-paper" />
                         </div>
                         <div>
-                            <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
-                                Your Cart
+                            <SheetTitle className="font-display text-2xl font-bold text-ink">
+                                Your cart
                             </SheetTitle>
-                            <p className="text-sm text-gray-600 mt-1">
+                            <p className="text-sm text-ink/60">
                                 {cartProduct?.length || 0} {cartProduct?.length === 1 ? 'item' : 'items'}
                             </p>
                         </div>
                     </div>
                 </SheetHeader>
 
+                {/* Free-shipping bar */}
+                {cartProduct?.length > 0 && (
+                    <div className="border-b-2 border-ink bg-paper-deep px-5 py-3">
+                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
+                            <Truck className="h-4 w-4 text-olive" />
+                            {remaining > 0 ? (
+                                <span>${remaining.toFixed(2)} away from free shipping</span>
+                            ) : (
+                                <span className="text-olive">Free shipping unlocked</span>
+                            )}
+                        </div>
+                        <div
+                            className="h-3 overflow-hidden rounded-full border-2 border-ink bg-paper"
+                            role="progressbar"
+                            aria-valuenow={Math.round(progress * 100)}
+                            aria-valuemin={0}
+                            aria-valuemax={100}
+                            aria-label="Progress toward free shipping"
+                        >
+                            <div
+                                className="h-full rounded-full bg-olive transition-all duration-500"
+                                style={{ width: `${progress * 100}%` }}
+                            />
+                        </div>
+                    </div>
+                )}
+
                 {/* Cart Content */}
-                <div className="flex-1  py-6">
+                <div className="flex-1 overflow-y-auto px-5 py-5">
                     {cartProduct?.length === 0 ? (
-                        <div className="flex flex-col items-center justify-center h-96 text-center">
-                            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
-                                <Package className="w-12 h-12 text-gray-400" />
+                        <div className="flex h-full flex-col items-center justify-center text-center">
+                            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-clay">
+                                <Package className="h-9 w-9 text-ink/50" />
                             </div>
-                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
-                            <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
+                            <h3 className="font-display text-xl font-bold">Your cart is empty</h3>
+                            <p className="mb-5 mt-1 text-sm text-ink/60">Looks like you haven&apos;t added any items yet</p>
                             <Button
                                 onClick={() => {
                                     dispatch(closeCart());
                                     navigate('/products');
                                 }}
-                                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
+                                className="border-2 border-ink bg-persimmon text-paper hard-shadow-sm hover:bg-persimmon/90"
                             >
-                                Start Shopping
+                                Start shopping
                             </Button>
                         </div>
                     ) : (
-                        <div className="space-y-4">
-                            {cartProduct.map((item, index) => (
-                                <div
-                                    key={item._id}
-                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
-                                    style={{ animationDelay: `${index * 0.1}s` }}
+                        <ul className="space-y-3">
+                            {cartProduct.map((item) => (
+                                <li
+                                    key={item.product._id}
+                                    className="rounded-2xl border-2 border-ink bg-clay/40 p-3"
                                 >
-                                    <div className="flex items-center gap-4">
-                                        {/* Product Image */}
-                                        <div className="relative">
-                                            <img
-                                                src={item.product.imageCover}
-                                                alt={item.product.title}
-                                                className="w-20 h-20 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
-                                            />
-                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
-                                        </div>
-
-                                        {/* Product Details */}
-                                        <div className="flex-1 min-w-0">
-                                            <h3 className="font-bold text-gray-800 mb-1 truncate">
+                                    <div className="flex items-center gap-3">
+                                        <img
+                                            src={item.product.imageCover}
+                                            alt={item.product.title}
+                                            className="h-16 w-16 shrink-0 rounded-xl border-2 border-ink object-cover"
+                                        />
+                                        <div className="min-w-0 flex-1">
+                                            <h3 className="truncate text-sm font-bold">
                                                 {item.product.title.split(" ").slice(0, 3).join(" ")}
                                             </h3>
-                                            <div className="flex items-center gap-2 mb-2">
-                                                <span className="text-lg font-bold text-purple-600">
+                                            <p className="mt-0.5 text-sm">
+                                                <span className="font-bold text-persimmon">
                                                     ${item.price.toFixed(2)}
                                                 </span>
-                                                <span className="text-sm text-gray-500">
-                                                    ├ù {item.count}
-                                                </span>
-                                            </div>
-                                            <div className="text-sm font-semibold text-gray-700 bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full inline-block">
+                                                <span className="text-ink/60"> ├ù {item.count}</span>
+                                            </p>
+                                            <p className="mt-1 inline-block rounded-full border border-ink bg-paper px-2.5 py-0.5 text-xs font-bold">
                                                 Total: ${(item.price * item.count).toFixed(2)}
-                                            </div>
+                                            </p>
                                         </div>
-
-                                        {/* Delete Button */}
                                         <Button
                                             onClick={() => handleDeleteProduct(item.product._id)}
                                             size="icon"
-                                            className="w-10 h-10 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 text-red-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
+                                            variant="outline"
+                                            aria-label={`Remove ${item.product.title}`}
+                                            className="h-9 w-9 shrink-0 border-ink bg-paper text-brick hover:bg-brick/10"
                                         >
-                                            <Trash2 className="w-4 h-4" />
+                                            <Trash2 className="h-4 w-4" />
                                         </Button>
                                     </div>
-                                </div>
+                                </li>
                             ))}
-                        </div>
+                        </ul>
                     )}
                 </div>
 
                 {/* Footer */}
                 {cartProduct?.length > 0 && (
-                    <div className="border-t border-purple-100 pt-6 mt-6 space-y-4">
-                        {/* Summary */}
-                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
-                            <div className="flex items-center justify-between mb-4">
-                                <span className="text-lg font-semibold text-gray-700">Subtotal ({numOfCartItems} items)</span>
-                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
-                                    ${subtotal.toFixed(2)}
-                                </span>
+                    <div className="space-y-3 border-t-2 border-ink bg-paper px-5 py-4">
+                        <dl className="rounded-2xl border-2 border-ink bg-paper-deep p-4 text-sm">
+                            <div className="mb-1.5 flex justify-between">
+                                <dt className="font-medium text-ink/70">Subtotal ({numOfCartItems} items)</dt>
+                                <dd className="font-bold">${subtotal.toFixed(2)}</dd>
                             </div>
-
-                            <div className="space-y-1 text-sm text-gray-600 mb-4">
-                                <div className="flex justify-between">
-                                    <span className="text-gray-600">Tax</span>
-                                    <span className="font-semibold">
-                                        ${tax.toFixed(2)}
-                                    </span>
-                                </div>
-                                <div className="flex justify-between">
-                                    <span>Shipping</span>
-                                    <span className="text-green-600 font-semibold">
-                                        {shipping === 0 ? 'Free' : `${shipping.toFixed(2)}`}
-                                    </span>
-                                </div>
+                            <div className="mb-1.5 flex justify-between">
+                                <dt className="text-ink/70">Tax</dt>
+                                <dd className="font-semibold">${tax.toFixed(2)}</dd>
                             </div>
-
-                            <div className="border-t border-gray-200 pt-3">
-                                <div className="flex justify-between items-center">
-                                    <span className="text-xl font-bold text-gray-800">Total:</span>
-                                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
-                                        ${total.toFixed(2)}
-                                    </span>
-                                </div>
+                            <div className="mb-2 flex justify-between">
+                                <dt className="text-ink/70">Shipping</dt>
+                                <dd className="font-semibold text-olive">
+                                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
+                                </dd>
                             </div>
-                        </div>
-
-                        {/* Action Buttons */}
-                        <div className="space-y-3">
-                            <Button
-                                onClick={() => {
-                                    dispatch(closeCart());
-                                    navigate('/cart');
-                                }}
-                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group"
-                            >
-                                <span>Proceed to Checkout</span>
-                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
-                            </Button>
+                            <div className="flex items-center justify-between border-t-2 border-ink pt-2">
+                                <dt className="font-display text-lg font-bold">Total</dt>
+                                <dd className="font-display text-xl font-bold text-persimmon">
+                                    ${total.toFixed(2)}
+                                </dd>
+                            </div>
+                        </dl>
 
-                            <Button
-                                onClick={() => dispatch(closeCart())}
-                                variant="outline"
-                                className="w-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-600 hover:text-purple-700 py-3 rounded-xl font-semibold transition-all duration-300"
-                            >
-                                Continue Shopping
-                            </Button>
-                        </div>
+                        <Button
+                            onClick={() => {
+                                dispatch(closeCart());
+                                navigate('/checkOut');
+                            }}
+                            className="w-full border-2 border-ink bg-persimmon py-5 text-base font-bold text-paper hard-shadow-sm hover:bg-persimmon/90"
+                        >
+                            <span>Checkout</span>
+                            <ArrowRight className="ml-2 h-5 w-5" />
+                        </Button>
+                        <Button
+                            onClick={() => {
+                                dispatch(closeCart());
+                                navigate('/cart');
+                            }}
+                            variant="outline"
+                            className="w-full border-ink bg-paper text-olive hover:bg-clay/60"
+                        >
+                            View full cart
+                        </Button>
                     </div>
                 )}
             </SheetContent>
         </Sheet>
     )
-}
\ No newline at end of file
+}
diff --git a/src/Components/Footer/Footer.jsx b/src/Components/Footer/Footer.jsx
index 61352ea..c7a2b86 100644
--- a/src/Components/Footer/Footer.jsx
+++ b/src/Components/Footer/Footer.jsx
@@ -1,94 +1,119 @@
-import React from 'react'
-import { Facebook, Twitter, Instagram, Youtube, Linkedin, Github, MessageCircleCode, } from 'lucide-react';
+import { useState } from 'react'
+import { Facebook, Linkedin, Github, MessageCircleCode, Send, ShoppingBag } from 'lucide-react';
 import { Link } from 'react-router-dom';
+import { Input } from '../ui/input';
+import { Button } from '../ui/button';
 
 export default function Footer() {
+  const [email, setEmail] = useState('');
+
+  function handleSubscribe(e) {
+    e.preventDefault();
+    setEmail('');
+  }
+
   return (
-    <>
-      <footer className="bg-gray-900 text-white py-16">
-        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
-          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
-            <div className="space-y-6">
-              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
-                ShopFlow
-              </h3>
-              <p className="text-gray-400 leading-relaxed">
-                Where Shopping Flows Naturally
-              </p>
-              <div className="flex space-x-4">
-                <Link to="https://www.facebook.com/mahmoud.osama.550367" className="text-gray-400 hover:text-blue-400 transition-colors">
-                  <Facebook className="w-6 h-6" />
-                </Link>
-                <Link to="https://www.linkedin.com/in/ma252002/" className="text-gray-400 hover:text-blue-500 transition-colors">
-                  <Linkedin className="w-6 h-6" />
-                </Link>
-                <Link to="https://wa.me/+201016074277" className="text-gray-400 hover:text-green-600/80 transition-colors">
-                  <MessageCircleCode className="w-6 h-6" />
-                </Link>
-                <Link to="https://www.github.com/mahmoud25osama" className="text-gray-400 hover:text-white transition-colors">
-                  <Github className="w-6 h-6" />
-                </Link>
-              </div>
+    <footer className="border-t-2 border-ink bg-olive text-paper">
+      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
+        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
+          {/* Brand */}
+          <div className="space-y-5">
+            <Link to="/" className="flex items-center gap-2.5" aria-label="souq home">
+              <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper bg-persimmon">
+                <ShoppingBag className="h-5 w-5 text-paper" />
+              </span>
+              <span className="font-display text-3xl font-bold tracking-tight">
+                souq<span className="text-marigold">.</span>
+              </span>
+            </Link>
+            <p className="max-w-xs text-sm leading-relaxed text-paper/70">
+              Everything you love, souq-fresh daily. Curated goods from independent makers.
+            </p>
+            <div className="flex gap-2">
+              <Link to="https://www.facebook.com/mahmoud.osama.550367" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
+                <Facebook className="h-5 w-5" />
+              </Link>
+              <Link to="https://www.linkedin.com/in/ma252002/" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
+                <Linkedin className="h-5 w-5" />
+              </Link>
+              <Link to="https://wa.me/+201016074277" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
+                <MessageCircleCode className="h-5 w-5" />
+              </Link>
+              <Link to="https://www.github.com/mahmoud25osama" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
+                <Github className="h-5 w-5" />
+              </Link>
             </div>
+          </div>
 
-            <div>
-              <h4 className="font-semibold text-lg mb-6">Shop</h4>
-              <ul className="space-y-3 text-gray-400">
-                <li><Link to="/" className="hover:text-white transition-colors">New Arrivals</Link></li>
-                <li><Link to="/" className="hover:text-white transition-colors">Best Sellers</Link></li>
-                <li><Link to="/" className="hover:text-white transition-colors">Sale</Link></li>
-                <li><Link to="/" className="hover:text-white transition-colors">Gift Cards</Link></li>
-              </ul>
-            </div>
+          {/* Shop */}
+          <nav aria-label="Shop">
+            <h4 className="mb-5 font-display text-lg font-bold text-marigold">Shop</h4>
+            <ul className="space-y-3 text-sm text-paper/70">
+              <li><Link to="/products" className="transition-colors hover:text-paper">New Arrivals</Link></li>
+              <li><Link to="/products" className="transition-colors hover:text-paper">Best Sellers</Link></li>
+              <li><Link to="/categories" className="transition-colors hover:text-paper">Collections</Link></li>
+              <li><Link to="/brands" className="transition-colors hover:text-paper">Brands</Link></li>
+            </ul>
+          </nav>
 
-            <div>
-              <h4 className="font-semibold text-lg mb-6">Pages</h4>
-              <ul className="space-y-3 text-gray-400">
-                <li><Link to="/products" className="hover:text-white transition-colors">Collections</Link></li>
-                <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
-                <li><Link to="/brands" className="hover:text-white transition-colors">Brands</Link></li>
-                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
-                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
-              </ul>
-            </div>
+          {/* Company */}
+          <nav aria-label="Company">
+            <h4 className="mb-5 font-display text-lg font-bold text-marigold">Company</h4>
+            <ul className="space-y-3 text-sm text-paper/70">
+              <li><Link to="/about" className="transition-colors hover:text-paper">About Us</Link></li>
+              <li><Link to="/contact" className="transition-colors hover:text-paper">Contact Us</Link></li>
+              <li><Link to="/categories" className="transition-colors hover:text-paper">Categories</Link></li>
+              <li><Link to="/cart" className="transition-colors hover:text-paper">Your Cart</Link></li>
+            </ul>
+          </nav>
 
-            <div>
-              <h4 className="font-semibold text-lg mb-6">Other Sites</h4>
-              <ul className="space-y-3 text-gray-400">
-                <li><Link to="https://ali-dynasty-chronicles.vercel.app/" className="hover:text-white transition-colors">Ali-dynasty-chronicles</Link></li>
-                <li><Link to="https://mahmoud25osama.github.io/HTML_And_CSS_Template_Three/" className="hover:text-white transition-colors">Elrouby World</Link></li>
-                <li><Link to="https://mahmoud25osama.github.io/HTML_CSS_Template_Two/" className="hover:text-white transition-colors">Kasper - One Page</Link></li>
-              </ul>
-            </div>
+          {/* Support + newsletter */}
+          <div>
+            <h4 className="mb-5 font-display text-lg font-bold text-marigold">Stay in the loop</h4>
+            <ul className="mb-5 space-y-3 text-sm text-paper/70">
+              <li><Link to="/contact" className="transition-colors hover:text-paper">Help &amp; Support</Link></li>
+              <li><Link to="/about" className="transition-colors hover:text-paper">Shipping &amp; Returns</Link></li>
+            </ul>
+            <form onSubmit={handleSubscribe} className="flex gap-2">
+              <Input
+                type="email"
+                required
+                value={email}
+                onChange={(e) => setEmail(e.target.value)}
+                placeholder="Email for weekly drops"
+                aria-label="Email for newsletter"
+                className="border-paper/40 bg-paper text-ink placeholder:text-ink/40"
+              />
+              <Button
+                type="submit"
+                aria-label="Subscribe"
+                className="shrink-0 border-2 border-ink bg-marigold text-ink hover:bg-marigold/90"
+              >
+                <Send className="h-4 w-4" />
+              </Button>
+            </form>
+            <p className="mt-2 text-xs text-paper/50">One email a week. No spam, ever.</p>
           </div>
+        </div>
 
-          <div className="border-t border-gray-800 pt-8">
-            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
-              <p className="text-gray-400">
-                ┬⌐ Mahmoud Osama. All rights reserved.
-              </p>
-              <div className="flex items-center space-x-6">
-                <span className="text-gray-400">We accept:</span>
-                <div className="flex space-x-3">
-                  <div className="bg-white rounded px-2 py-1">
-                    <span className="text-blue-600 font-bold text-sm">VISA</span>
-                  </div>
-                  <div className="bg-white rounded px-2 py-1">
-                    <span className="text-orange-600 font-bold text-sm">MC</span>
-                  </div>
-                  <div className="bg-white rounded px-2 py-1">
-                    <span className="text-blue-800 font-bold text-sm">AMEX</span>
-                  </div>
-                  <div className="bg-white rounded px-2 py-1">
-                    <span className="text-yellow-600 font-bold text-sm">PP</span>
-                  </div>
-                </div>
+        <div className="mt-12 border-t border-paper/20 pt-6">
+          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
+            <p className="text-sm text-paper/60">
+              ┬⌐ Mahmoud Osama. All rights reserved.
+            </p>
+            <div className="flex items-center gap-3">
+              <span className="text-sm text-paper/60">We accept:</span>
+              <div className="flex gap-2">
+                {['VISA', 'MC', 'AMEX', 'PP'].map((label) => (
+                  <span key={label} className="rounded-lg border-2 border-paper bg-paper px-2 py-1 text-xs font-bold text-ink">
+                    {label}
+                  </span>
+                ))}
               </div>
             </div>
           </div>
         </div>
-      </footer>
-
-    </>
+      </div>
+    </footer>
   )
 }
diff --git a/src/Components/Layout/Layout.jsx b/src/Components/Layout/Layout.jsx
index 632138c..45689f7 100644
--- a/src/Components/Layout/Layout.jsx
+++ b/src/Components/Layout/Layout.jsx
@@ -1,17 +1,17 @@
 import Navbar from './../Navbar/Navbar';
 import Footer from './../Footer/Footer';
 import { Outlet } from 'react-router-dom';
 import CartDrawer from '../CartDrawer/Drawer';
 
 export default function Layout() {
   return (
-    <>
-
+    <div className="min-h-screen bg-paper font-sans text-ink">
       <Navbar />
       <CartDrawer />
-      <Outlet />
+      <div className="pt-[113px]">
+        <Outlet />
+      </div>
       <Footer />
-
-    </>
+    </div>
   )
 }
diff --git a/src/Components/Navbar/Navbar.jsx b/src/Components/Navbar/Navbar.jsx
index 0f12535..9b731de 100644
--- a/src/Components/Navbar/Navbar.jsx
+++ b/src/Components/Navbar/Navbar.jsx
@@ -1,227 +1,305 @@
-import { useContext, useState, } from 'react'
+import { useContext, useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 import { openCart } from "../../Redux/ToggleCartSlice";
 import { Link, NavLink } from 'react-router-dom'
-import { Home, LibraryBig, LogOut, Menu, Phone, ShoppingBag, ShoppingCart, Store, Users, X } from 'lucide-react';
+import { Home, LayoutGrid, LogOut, Menu, Phone, Search, ShoppingBag, ShoppingCart, Store, Users, UserRound } from 'lucide-react';
 import { useDispatch } from 'react-redux';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { AuthContext } from '@/Context/AuthContext/AuthContext';
+import { Marquee } from '../magic/marquee';
+import { Badge } from '../ui/badge';
+import { Input } from '../ui/input';
+import { Button } from '../ui/button';
+import {
+  DropdownMenu,
+  DropdownMenuContent,
+  DropdownMenuItem,
+  DropdownMenuLabel,
+  DropdownMenuSeparator,
+  DropdownMenuTrigger,
+} from '../ui/dropdown-menu';
+import {
+  Sheet,
+  SheetContent,
+  SheetHeader,
+  SheetTitle,
+} from '../ui/sheet';
+
+const PROMOS = [
+  'Free shipping over $75',
+  'New souq drop weekly',
+  'Easy 30-day returns',
+  'Fresh picks daily',
+];
 
 export default function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
+  const [query, setQuery] = useState('');
   const { token, setToken } = useContext(AuthContext);
   const { numOfCartItems } = useContext(CartContext);
   const dispatch = useDispatch();
   const navigate = useNavigate();
 
   function handleLogout() {
     localStorage.removeItem('tkn');
     setToken(null);
     navigate('/login');
     setMobileMenuOpen(false);
   }
 
+  function handleSearch(e) {
+    e.preventDefault();
+    navigate('/products');
+  }
 
   const navItems = [
     { to: '/', label: 'Home', icon: Home },
     { to: '/products', label: 'Shop', icon: ShoppingBag },
-    { to: '/categories', label: 'Collections', icon: LibraryBig },
+    { to: '/categories', label: 'Categories', icon: LayoutGrid },
     { to: '/brands', label: 'Brands', icon: Store },
     { to: '/about', label: 'About', icon: Users },
     { to: '/contact', label: 'Contact', icon: Phone },
   ];
 
   return (
     <>
-      <nav className="bg-white/95 backdrop-blur-md shadow-xl fixed w-full z-50 top-0 left-0 border-b border-white/20">
-        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
-          <div className="flex justify-between items-center h-20">
-
-            {/* Logo */}
-            <div className="flex items-center">
-              <Link
-                to=""
-                className="group flex items-center space-x-3"
-              >
-                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
-                  <ShoppingBag className="w-6 h-6 text-white" />
-                </div>
-                <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
-                  ShopFlow
-                </h1>
-              </Link>
-            </div>
-
-            {/* Desktop Navigation */}
-            <div className="hidden lg:flex items-center space-x-1 ">
-              {token && (
-                <ul className="flex items-center space-x-1">
-                  {navItems.map(({ to, label, icon: Icon }) => (
-                    <li key={to}>
-                      <NavLink
-                        to={to}
-                        className={({ isActive }) =>
-                          `group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold ${isActive
-                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
-                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600'
-                          }`
-                        }
-                      >
-                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
-                        <span>{label}</span>
-                      </NavLink>
-                    </li>
-                  ))}
-                </ul>
-              )}
-            </div>
+      <header className="fixed inset-x-0 top-0 z-50">
+        {/* Promo tape */}
+        <div className="bg-olive text-paper">
+          <Marquee repeat={3} className="py-1.5">
+            {PROMOS.map((promo) => (
+              <span key={promo} className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em]">
+                <span>{promo}</span>
+                <span aria-hidden="true" className="text-marigold">Γ£ª</span>
+              </span>
+            ))}
+          </Marquee>
+        </div>
 
-            {/* Right Side Actions */}
-            <div className="flex items-center space-x-4">
+        {/* Main bar */}
+        <nav className="border-b-2 border-ink bg-paper/90 backdrop-blur-md">
+          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
+            <div className="flex h-[72px] items-center justify-between gap-4">
+              {/* Wordmark */}
+              <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="souq home">
+                <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-persimmon hard-shadow-sm">
+                  <ShoppingBag className="h-5 w-5 text-paper" />
+                </span>
+                <span className="font-display text-3xl font-bold tracking-tight text-ink">
+                  souq<span className="text-persimmon">.</span>
+                </span>
+              </Link>
 
-              {/* Cart Button */}
-              <button
-                onClick={() => dispatch(openCart())}
-                className="group relative p-3 bg-gradient-to-r from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 rounded-xl transition-all duration-300 transform hover:scale-110"
-              >
-                <ShoppingCart className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
-                {numOfCartItems > 0 && (
-                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
-                    {numOfCartItems > 99 ? '99+' : numOfCartItems}
-                  </span>
-                )}
-                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
-              </button>
-
-              {/* Auth Actions */}
-              <div className="hidden lg:flex items-center space-x-3">
-                {token ? (
-                  <button
-                    onClick={handleLogout}
-                    className="group flex flex-col items-center space-y-1 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-xl transition-all duration-300 cursor-pointer"
-                  >
-                    <LogOut className="w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
-                    <span className="text-xs font-semibold text-red-600 group-hover:text-red-700">Logout</span>
-                  </button>
-                ) : (
-                  <div className="flex items-center space-x-2">
+              {/* Desktop links */}
+              <ul className="hidden items-center gap-1 lg:flex">
+                {navItems.map(({ to, label }) => (
+                  <li key={to}>
                     <NavLink
-                      to="/login"
-                      className="px-6 py-2 text-purple-600 hover:text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300"
+                      to={to}
+                      className="rounded-xl px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-clay/60 hover:text-persimmon"
                     >
-                      Login
+                      {label}
                     </NavLink>
-                    <NavLink
-                      to="/register"
-                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
+                  </li>
+                ))}
+              </ul>
+
+              {/* Right actions */}
+              <div className="flex items-center gap-2 sm:gap-3">
+                <form onSubmit={handleSearch} className="relative hidden md:block" role="search">
+                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
+                  <Input
+                    value={query}
+                    onChange={(e) => setQuery(e.target.value)}
+                    placeholder="Search the souqΓÇª"
+                    className="h-10 w-44 pl-9 lg:w-52"
+                    aria-label="Search products"
+                  />
+                </form>
+
+                {/* Account menu */}
+                <DropdownMenu>
+                  <DropdownMenuTrigger asChild>
+                    <Button
+                      variant="outline"
+                      size="icon"
+                      className="border-ink bg-paper text-ink hover:bg-clay/60"
+                      aria-label="Account menu"
                     >
-                      Register
-                    </NavLink>
-                  </div>
-                )}
-              </div>
+                      <UserRound className="h-5 w-5" />
+                    </Button>
+                  </DropdownMenuTrigger>
+                  <DropdownMenuContent align="end" className="w-52">
+                    <DropdownMenuLabel>{token ? 'My account' : 'Welcome to souq.'}</DropdownMenuLabel>
+                    <DropdownMenuSeparator />
+                    {token ? (
+                      <>
+                        <DropdownMenuItem onSelect={() => navigate('/cart')}>
+                          My orders
+                        </DropdownMenuItem>
+                        <DropdownMenuItem onSelect={() => navigate('/about')}>
+                          About the souq
+                        </DropdownMenuItem>
+                        <DropdownMenuSeparator />
+                        <DropdownMenuItem
+                          onSelect={handleLogout}
+                          className="text-brick focus:bg-brick/10"
+                        >
+                          <LogOut className="h-4 w-4" />
+                          Logout
+                        </DropdownMenuItem>
+                      </>
+                    ) : (
+                      <>
+                        <DropdownMenuItem onSelect={() => navigate('/login')}>
+                          Login
+                        </DropdownMenuItem>
+                        <DropdownMenuItem onSelect={() => navigate('/register')}>
+                          Create account
+                        </DropdownMenuItem>
+                      </>
+                    )}
+                  </DropdownMenuContent>
+                </DropdownMenu>
 
-              {/* Mobile Menu Toggle */}
-              <button
-                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
-                className="lg:hidden p-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-xl transition-all duration-300 transform hover:scale-110"
-              >
-                {mobileMenuOpen ? (
-                  <X className="w-6 h-6 text-gray-600" />
-                ) : (
-                  <Menu className="w-6 h-6 text-gray-600" />
-                )}
-              </button>
-            </div>
-          </div>
-        </div>
-      </nav>
-
-      {/* Mobile Menu Overlay */}
-      {mobileMenuOpen && (
-        <div className="fixed inset-0 z-40 lg:hidden">
-          {/* Backdrop */}
-          <div
-            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
-            onClick={() => setMobileMenuOpen(false)}
-          ></div>
-
-          {/* Mobile Menu */}
-          <div className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
-            <div className="p-6">
-
-              {/* Mobile Navigation Links */}
-              {token && (
-                <div className="space-y-2 mb-8">
-                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Navigation</h3>
-                  {navItems.map(({ to, label, icon: Icon }) => (
-                    <NavLink
-                      key={to}
-                      to={to}
-                      onClick={() => setMobileMenuOpen(false)}
-                      className={({ isActive }) =>
-                        `group flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 ${isActive
-                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
-                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600'
-                        }`
-                      }
+                {/* Cart trigger */}
+                <Button
+                  variant="outline"
+                  size="icon"
+                  onClick={() => dispatch(openCart())}
+                  className="relative border-ink bg-paper text-ink hover:bg-clay/60"
+                  aria-label={`Open cart, ${numOfCartItems || 0} items`}
+                >
+                  <ShoppingCart className="h-5 w-5" />
+                  {numOfCartItems > 0 && (
+                    <Badge className="absolute -right-2 -top-2 h-6 min-w-6 items-center justify-center px-1.5 text-[11px]">
+                      {numOfCartItems > 99 ? '99+' : numOfCartItems}
+                    </Badge>
+                  )}
+                </Button>
+
+                {/* Desktop auth */}
+                <div className="hidden items-center gap-2 lg:flex">
+                  {token ? (
+                    <Button
+                      onClick={handleLogout}
+                      variant="outline"
+                      className="border-ink bg-paper text-brick hover:bg-brick/10"
                     >
-                      <div className="p-2 bg-white/20 rounded-lg">
-                        <Icon className="w-5 h-5" />
-                      </div>
-                      <span className="font-semibold text-lg">{label}</span>
-                    </NavLink>
-                  ))}
+                      <LogOut className="h-4 w-4" />
+                      Logout
+                    </Button>
+                  ) : (
+                    <>
+                      <Button
+                        variant="ghost"
+                        onClick={() => navigate('/login')}
+                        className="text-ink hover:bg-clay/60 hover:text-persimmon"
+                      >
+                        Login
+                      </Button>
+                      <Button
+                        onClick={() => navigate('/register')}
+                        className="border-2 border-ink bg-persimmon text-paper hard-shadow-sm hover:bg-persimmon/90"
+                      >
+                        Register
+                      </Button>
+                    </>
+                  )}
                 </div>
-              )}
 
-              {/* Mobile Auth Actions */}
-              <div className="border-t border-gray-200 pt-6">
-                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Account</h3>
+                {/* Mobile hamburger */}
+                <Button
+                  variant="outline"
+                  size="icon"
+                  onClick={() => setMobileMenuOpen(true)}
+                  className="border-ink bg-paper text-ink lg:hidden"
+                  aria-label="Open navigation menu"
+                >
+                  <Menu className="h-5 w-5" />
+                </Button>
+              </div>
+            </div>
+          </div>
+        </nav>
+      </header>
+
+      {/* Mobile sheet nav */}
+      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
+        <SheetContent side="left" className="flex w-[320px] flex-col border-r-2 border-ink bg-paper text-ink">
+          <SheetHeader className="border-b-2 border-ink pb-4 text-left">
+            <SheetTitle className="font-display text-2xl font-bold text-ink">
+              souq<span className="text-persimmon">.</span>
+            </SheetTitle>
+            <p className="text-sm text-ink/60">Everything you love, souq-fresh daily.</p>
+          </SheetHeader>
 
-                {token ? (
-                  <button
-                    onClick={handleLogout}
-                    className="w-full group flex items-center space-x-4 px-4 py-4 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-2xl transition-all duration-300"
+          <form onSubmit={(e) => { handleSearch(e); setMobileMenuOpen(false); }} className="relative mt-4 md:hidden" role="search">
+            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
+            <Input
+              value={query}
+              onChange={(e) => setQuery(e.target.value)}
+              placeholder="Search the souqΓÇª"
+              className="pl-9"
+              aria-label="Search products"
+            />
+          </form>
+
+          <nav className="mt-4 flex-1 overflow-y-auto" aria-label="Mobile">
+            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Browse</p>
+            <ul className="space-y-1">
+              {navItems.map(({ to, label, icon: Icon }) => (
+                <li key={to}>
+                  <NavLink
+                    to={to}
+                    onClick={() => setMobileMenuOpen(false)}
+                    className="flex items-center gap-3 rounded-xl border-2 border-transparent px-3 py-2.5 font-semibold text-ink transition-colors hover:border-ink hover:bg-clay/50"
                   >
-                    <div className="p-2 bg-red-100 rounded-lg">
-                      <LogOut className="w-5 h-5 text-red-500" />
-                    </div>
-                    <span className="font-semibold text-lg text-red-600">Logout</span>
-                  </button>
-                ) : (
-                  <div className="space-y-3">
-                    <NavLink
-                      to="/login"
-                      onClick={() => setMobileMenuOpen(false)}
-                      className="w-full flex items-center justify-center py-3 text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300"
-                    >
-                      Login
-                    </NavLink>
-                    <NavLink
-                      to="/register"
-                      onClick={() => setMobileMenuOpen(false)}
-                      className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
-                    >
-                      Register
-                    </NavLink>
-                  </div>
-                )}
-              </div>
+                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-paper-deep">
+                      <Icon className="h-4 w-4" />
+                    </span>
+                    {label}
+                  </NavLink>
+                </li>
+              ))}
+            </ul>
+          </nav>
 
-              {/* Mobile Cart Info */}
-              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
-                <div className="flex items-center justify-between">
-                  <span className="text-gray-600 font-medium">Items in Cart</span>
-                  <span className="text-2xl font-bold text-purple-600">
-                    {numOfCartItems || 0}
-                  </span>
-                </div>
+          <div className="border-t-2 border-ink pt-4">
+            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Account</p>
+            {token ? (
+              <Button
+                onClick={handleLogout}
+                variant="outline"
+                className="w-full border-ink bg-paper text-brick hover:bg-brick/10"
+              >
+                <LogOut className="h-4 w-4" />
+                Logout
+              </Button>
+            ) : (
+              <div className="space-y-2">
+                <Button
+                  onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
+                  className="w-full border-2 border-ink bg-persimmon text-paper hard-shadow-sm"
+                >
+                  Register
+                </Button>
+                <Button
+                  onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
+                  variant="outline"
+                  className="w-full border-ink bg-paper text-ink"
+                >
+                  Login
+                </Button>
               </div>
+            )}
+            <div className="mt-3 flex items-center justify-between rounded-xl border-2 border-ink bg-paper-deep px-4 py-3">
+              <span className="text-sm font-medium text-ink/70">Items in cart</span>
+              <span className="font-display text-2xl font-bold text-persimmon">{numOfCartItems || 0}</span>
             </div>
           </div>
-        </div>
-      )}
+        </SheetContent>
+      </Sheet>
     </>
   );
-}
\ No newline at end of file
+}

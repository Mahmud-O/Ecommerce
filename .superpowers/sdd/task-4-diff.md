diff --git a/src/Components/CategoriesSlider/CategoriesSlider.jsx b/src/Components/CategoriesSlider/CategoriesSlider.jsx
index 8a3cc0e..38307b7 100644
--- a/src/Components/CategoriesSlider/CategoriesSlider.jsx
+++ b/src/Components/CategoriesSlider/CategoriesSlider.jsx
@@ -7,52 +7,78 @@ import useAllCategories from "../../CustomHooks/useAllCategories.jsx";
 
 
 export default function CategorySlider() {
 
 
   var settings = {
 
     dots: true,
     infinite: true,
     speed: 500,
-    slidesToShow: 10,
-    slidesToScroll: 5,
-    arrows: false,
-    autoPlay: true,
-    autoplaySpeed: 2000,
+    slidesToShow: 6,
+    slidesToScroll: 3,
+    arrows: true,
+    autoplay: true,
+    autoplaySpeed: 2500,
+    pauseOnHover: true,
+    responsive: [
+      {
+        breakpoint: 1024,
+        settings: { slidesToShow: 5, slidesToScroll: 3 },
+      },
+      {
+        breakpoint: 768,
+        settings: { slidesToShow: 4, slidesToScroll: 2 },
+      },
+      {
+        breakpoint: 480,
+        settings: { slidesToShow: 2, slidesToScroll: 2 },
+      },
+    ],
 
   };
 
 
   const { data, isLoading, isError } = useAllCategories();
 
 
 
   if (isError) {
     return (
-      <div className="flex flex-col justify-center items-center h-screen">
-        <h2 className="text-3xl text-red-500">Error Fetching Categories</h2>
+      <div className="flex flex-col justify-center items-center rounded-2xl border-2 border-ink bg-paper-deep p-12">
+        <h2 className="font-display text-2xl font-bold text-brick">Error Fetching Categories</h2>
       </div>
     );
   }
 
   if (isLoading) {
     return (
       <Rloader />
     );
   }
 
 
   return (
 
-    <div className="slider-container">
+    <div className="slider-container editorial-slick">
+      <style>{`
+        .editorial-slick .slick-dots li button:before { color: #E4572E; opacity: 0.35; font-size: 10px; }
+        .editorial-slick .slick-dots li.slick-active button:before { color: #E4572E; opacity: 1; }
+        .editorial-slick .slick-prev, .editorial-slick .slick-next { width: 40px; height: 40px; border: 2px solid #191410; border-radius: 9999px; background: #FAF6F0; z-index: 10; }
+        .editorial-slick .slick-prev { left: -8px; }
+        .editorial-slick .slick-next { right: -8px; }
+        .editorial-slick .slick-prev:before, .editorial-slick .slick-next:before { color: #191410; font-size: 18px; opacity: 1; }
+        .editorial-slick .slick-prev:hover, .editorial-slick .slick-next:hover { background: #FFB627; }
+      `}</style>
       <Slider {...settings}  >
         {data.data.data.map((category) => (
           <div key={category._id} className="category-item p-2">
-            <img src={category.image} alt={category.name} className="w-full h-36 object-cover" />
-            <h3 className="text-center text-xl  mt-2">{category.name}</h3>
+            <div className="hard-shadow-sm rounded-2xl border-2 border-ink bg-paper p-2 transition-transform hover:-translate-y-1">
+              <img src={category.image} alt={category.name} className="h-28 w-full rounded-xl border-2 border-ink object-cover" />
+              <h3 className="font-display mt-2 truncate text-center text-sm font-bold text-ink">{category.name}</h3>
+            </div>
           </div>
         ))}
 
       </Slider></div>
   );
-}
\ No newline at end of file
+}
diff --git a/src/Components/HomeSlick/HomeSlick.jsx b/src/Components/HomeSlick/HomeSlick.jsx
index 7461cef..24eaf3c 100644
--- a/src/Components/HomeSlick/HomeSlick.jsx
+++ b/src/Components/HomeSlick/HomeSlick.jsx
@@ -2,58 +2,55 @@ import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import SliderImage1 from '../../assets/img/slider-image-3-BtMvVf4V.jpeg';
 import SliderImage2 from '../../assets/img/slider-image-2-Xt88XJy9.jpeg';
 import SliderImage3 from '../../assets/img/10607573.jpg';
 import SliderImage4 from '../../assets/img/laptop_12.jpg';
 import SliderImage5 from '../../assets/img/mark-konig-Tl8mDaue_II-unsplash.jpg';
 import SliderImage6 from '../../assets/img/photo-14.jpg';
 import SliderImage7 from '../../assets/img/product shop.jpg';
 
-
+const images = [
+  { src: SliderImage1, alt: "Slider Image 1" },
+  { src: SliderImage2, alt: "Slider Image 2" },
+  { src: SliderImage3, alt: "Slider Image 3" },
+  { src: SliderImage4, alt: "Slider Image 4" },
+  { src: SliderImage5, alt: "Slider Image 5" },
+  { src: SliderImage6, alt: "Slider Image 6" },
+  { src: SliderImage7, alt: "Slider Image 7" },
+];
 
 export default function SimpleSlider() {
   var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
-    arrows: false,
-    autoplay_speed: 2000,
+    arrows: true,
     autoplay: true,
-    pause_on_hover: true,
-    pause_on_interaction: true,
+    autoplaySpeed: 2500,
+    pauseOnHover: true,
   };
   return (
-    <Slider {...settings} >
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage1} alt="Slider Image 1" className="w-full h-80" />
-      </div>
-
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage2} alt="Slider Image 2" className="w-full h-80" />
-      </div>
-
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage3} alt="Slider Image 3" className="w-full h-80" />
-      </div>
-
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage4} alt="Slider Image 4" className="w-full h-80" />
-      </div>
-
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage5} alt="Slider Image 5" className="w-full h-80" />
-      </div>
-
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage6} alt="Slider Image 6" className="w-full h-80" />
-      </div>
-
-      <div className="rounded-lg overflow-hidden">
-        <img src={SliderImage7} alt="Slider Image 7" className="w-full h-80" />
-      </div>
-
-    </Slider>
+    <div className="editorial-slick">
+      <style>{`
+        .editorial-slick .slick-dots li button:before { color: #E4572E; opacity: 0.35; font-size: 10px; }
+        .editorial-slick .slick-dots li.slick-active button:before { color: #E4572E; opacity: 1; }
+        .editorial-slick .slick-prev, .editorial-slick .slick-next { width: 40px; height: 40px; border: 2px solid #191410; border-radius: 9999px; background: #FAF6F0; z-index: 10; }
+        .editorial-slick .slick-prev { left: 12px; }
+        .editorial-slick .slick-next { right: 12px; }
+        .editorial-slick .slick-prev:before, .editorial-slick .slick-next:before { color: #191410; font-size: 18px; opacity: 1; }
+        .editorial-slick .slick-prev:hover, .editorial-slick .slick-next:hover { background: #FFB627; }
+      `}</style>
+      <Slider {...settings}>
+        {images.map((image) => (
+          <div key={image.alt} className="px-1">
+            <div className="overflow-hidden rounded-2xl border-2 border-ink">
+              <img src={image.src} alt={image.alt} className="h-80 w-full object-cover" />
+            </div>
+          </div>
+        ))}
+      </Slider>
+    </div>
   );
-}
\ No newline at end of file
+}
diff --git a/src/Components/LandingPage/Benefit.jsx b/src/Components/LandingPage/Benefit.jsx
index 0128e0e..b8b244b 100644
--- a/src/Components/LandingPage/Benefit.jsx
+++ b/src/Components/LandingPage/Benefit.jsx
@@ -1,50 +1,57 @@
-import { Headphones, RotateCcw, Shield, Truck } from "lucide-react";
+import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";
+import { BlurFade } from "../magic/blur-fade";
 
 const benefits = [
-{
-    icon: <Truck className="w-8 h-8" />,
-    title: "Free Shipping",
-    description: "On orders over $50"
-},
-{
-    icon: <Headphones className="w-8 h-8" />,
-    title: "24/7 Support",
-    description: "Always here to help"
-},
-{
-    icon: <RotateCcw className="w-8 h-8" />,
-    title: "Easy Returns",
-    description: "30-day return policy"
-},
-{
-    icon: <Shield className="w-8 h-8" />,
-    title: "Secure Checkout",
-    description: "100% secure payments"
-}
+    {
+        icon: <Truck className="h-7 w-7" />,
+        title: "Free Shipping",
+        description: "On orders over $50"
+    },
+    {
+        icon: <Headphones className="h-7 w-7" />,
+        title: "24/7 Support",
+        description: "Always here to help"
+    },
+    {
+        icon: <RotateCcw className="h-7 w-7" />,
+        title: "Easy Returns",
+        description: "30-day return policy"
+    },
+    {
+        icon: <ShieldCheck className="h-7 w-7" />,
+        title: "Secure Checkout",
+        description: "100% secure payments"
+    }
 ];
+
 export const Benefit = () => {
     return (
-        <section className="py-20 bg-white">
-            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-                <div className="text-center space-y-4 mb-16">
-                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Shop With Us</h2>
-                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
-                    Experience the difference with our commitment to excellence
-                </p>
+        <section className="bg-paper py-20">
+            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+                <div className="mb-14 space-y-3 text-center">
+                    <span className="inline-block rounded-full border-2 border-ink bg-clay px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+                        Our promise
+                    </span>
+                    <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Why Shop With Us</h2>
+                    <p className="mx-auto max-w-2xl text-lg text-ink/70">
+                        Experience the difference with our commitment to excellence
+                    </p>
                 </div>
-                
-                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
-                {benefits.map((benefit, index) => (
-                    <div key={index} className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-2">
-                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
-                        {benefit.icon}
-                    </div>
-                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
-                    <p className="text-gray-600">{benefit.description}</p>
-                    </div>
-                ))}
+
+                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
+                    {benefits.map((benefit, index) => (
+                        <BlurFade key={benefit.title} delay={Math.min(index * 0.06, 0.3)}>
+                            <div className="hard-shadow-sm group rounded-2xl border-2 border-ink bg-paper p-8 text-center transition-transform duration-300 hover:-translate-y-1.5">
+                                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-ink bg-marigold text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
+                                    {benefit.icon}
+                                </div>
+                                <h3 className="font-display mb-2 text-xl font-bold text-ink">{benefit.title}</h3>
+                                <p className="text-ink/70">{benefit.description}</p>
+                            </div>
+                        </BlurFade>
+                    ))}
                 </div>
             </div>
         </section>
     )
 }
diff --git a/src/Components/LandingPage/FeaturedProducts.jsx b/src/Components/LandingPage/FeaturedProducts.jsx
index 0045d39..d1e2a1c 100644
--- a/src/Components/LandingPage/FeaturedProducts.jsx
+++ b/src/Components/LandingPage/FeaturedProducts.jsx
@@ -1,110 +1,149 @@
 import ScaleLoading from '../Loader/ScaleLoader';
 import useAllProduct from '../../CustomHooks/useAllProduct';
-import { Eye, ShoppingCart, Star } from 'lucide-react';
-import { useContext } from 'react';
+import { Star } from 'lucide-react';
+import { useContext, useState } from 'react';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { useDispatch } from 'react-redux';
 import { openCart } from "../../Redux/ToggleCartSlice"
 import { ProductCard } from '../ProductDetails/ProductCard';
 import { useNavigate } from 'react-router-dom';
+import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
+import { BlurFade } from '../magic/blur-fade';
+
+const FILTERS = [
+    { value: 'all', label: 'All' },
+    { value: 'featured', label: 'Featured' },
+    { value: 'sale', label: 'On sale' },
+];
 
 export const FeaturedProducts = () => {
     const { addProduct } = useContext(CartContext);
     const { data, isError, isLoading } = useAllProduct();
     const dispatch = useDispatch();
     const navigate = useNavigate();
+    const [filter, setFilter] = useState('all');
+
     const handlAddProduct = async (id) => {
         await addProduct(id,
             {
                 onSuccess: () => {
                     dispatch(openCart());
                 }
             }
         )
-
     }
 
     let AllProducts = data?.data?.data || [];
+    const highestSold = AllProducts.length
+        ? [...AllProducts].sort((a, b) => (b.sold || 0) - (a.sold || 0))[0]
+        : null;
 
+    const filtered = AllProducts.filter((product) => {
+        if (filter === 'sale') return product.price > product.priceAfterDiscount;
+        if (filter === 'featured') return (product.ratingsAverage || 0) >= 4.5;
+        return true;
+    });
+    const visible = filtered.slice(0, 8);
 
     return (
-        <section className="py-20 bg-gray-50" >
-            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-                <div className="text-center space-y-4 mb-16">
-                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Featured Products</h2>
-                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
-                        Handpicked items that combine style, quality, and innovation
-                    </p>
+        <section className="border-y-2 border-ink bg-paper py-20">
+            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+                <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
+                    <div className="space-y-3">
+                        <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+                            Handpicked
+                        </span>
+                        <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Featured Products</h2>
+                        <p className="max-w-2xl text-lg text-ink/70">
+                            Handpicked items that combine style, quality, and innovation
+                        </p>
+                    </div>
+                    <Tabs value={filter} onValueChange={setFilter}>
+                        <TabsList aria-label="Filter featured products">
+                            {FILTERS.map((f) => (
+                                <TabsTrigger key={f.value} value={f.value}>{f.label}</TabsTrigger>
+                            ))}
+                        </TabsList>
+                    </Tabs>
                 </div>
+
                 {/* Highest Sold Product */}
-                {AllProducts.length > 0 && (
-                    <div className="mb-12">
-                        <h3 className="text-2xl font-bold text-blue-700 mb-4 text-left">≡ƒöÑ Highest Sold Product</h3>
-                        {(() => {
-                            const highestSold = [...AllProducts].sort((a, b) => (b.sold || 0) - (a.sold || 0))[0];
-                            if (!highestSold) return null;
-                            return (
-                                <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-6 mb-8">
-                                    <img
-                                        src={highestSold.imageCover}
-                                        alt={highestSold.title}
-                                        className="w-48 h-48 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-8"
-                                    />
-                                    <div className="flex-1">
-                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{highestSold.title}</h4>
-                                        <div className="flex items-center mb-2">
-                                            <div className="flex text-yellow-400">
-                                                {[...Array(5)].map((_, i) => (
-                                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(highestSold.ratingsAverage) ? 'fill-current' : ''}`} />
-                                                ))}
-                                            </div>
-                                            <span className="text-gray-600 text-sm ml-2">({highestSold.ratingsQuantity})</span>
-                                        </div>
-                                        <div className="flex items-center space-x-2 mb-2">
-                                            <span className="text-2xl font-bold text-gray-900">${highestSold.price}</span>
-                                            {highestSold.price > highestSold.priceAfterDiscount && (
-                                                <span className="text-xl text-gray-500 line-through">${highestSold.price}</span>
-                                            )}
-                                        </div>
-                                        <div className="text-gray-600 mb-2">
-                                            Sold: <span className="font-bold text-blue-600">{highestSold.sold || 0}</span>
-                                        </div>
-                                        <button
-                                            onClick={() => handlAddProduct(highestSold._id)}
-                                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-xl font-semibold transition-all duration-300 mt-2"
-                                        >
-                                            Add to Cart
-                                        </button>
-                                    </div>
+                {highestSold && (
+                    <div className="hard-shadow mb-12 flex flex-col items-center gap-6 rounded-2xl border-2 border-ink bg-paper-deep p-6 sm:flex-row sm:p-8">
+                        <div className="relative">
+                            <img
+                                src={highestSold.imageCover}
+                                alt={highestSold.title}
+                                className="h-48 w-48 rounded-xl border-2 border-ink object-cover"
+                            />
+                            <span className="absolute -right-3 -top-3 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold text-ink">
+                                Bestseller
+                            </span>
+                        </div>
+                        <div className="flex-1 text-center sm:text-left">
+                            <h3 className="font-display mb-2 text-2xl font-bold text-ink">{highestSold.title}</h3>
+                            <div className="mb-2 flex items-center justify-center sm:justify-start">
+                                <div className="flex text-marigold">
+                                    {[...Array(5)].map((_, i) => (
+                                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(highestSold.ratingsAverage) ? 'fill-current' : ''}`} />
+                                    ))}
                                 </div>
-                            );
-                        })()}
+                                <span className="ml-2 text-sm text-ink/60">({highestSold.ratingsQuantity})</span>
+                            </div>
+                            <div className="mb-2 flex items-center justify-center space-x-2 sm:justify-start">
+                                <span className="font-display text-2xl font-bold text-persimmon">
+                                    ${highestSold.priceAfterDiscount || highestSold.price}
+                                </span>
+                                {highestSold.price > highestSold.priceAfterDiscount && (
+                                    <span className="text-lg text-ink/50 line-through">${highestSold.price}</span>
+                                )}
+                            </div>
+                            <div className="mb-3 text-ink/70">
+                                Sold: <span className="font-bold text-olive">{highestSold.sold || 0}</span>
+                            </div>
+                            <button
+                                onClick={() => handlAddProduct(highestSold._id)}
+                                className="rounded-xl border-2 border-ink bg-persimmon px-6 py-2.5 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                            >
+                                Add to Cart
+                            </button>
+                        </div>
                     </div>
                 )}
+
                 {/* Featured Products */}
-                <div >
+                <div>
                     {isError ? (
-                        <div >
+                        <div>
                             <ScaleLoading />
                         </div>
                     ) : isLoading ? (
                         <ScaleLoading />
+                    ) : visible.length === 0 ? (
+                        <div className="rounded-2xl border-2 border-ink bg-clay/40 p-12 text-center">
+                            <p className="font-display mb-4 text-xl font-bold text-ink">Nothing in this shelf yet</p>
+                            <button
+                                onClick={() => setFilter('all')}
+                                className="rounded-xl border-2 border-ink bg-marigold px-6 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5"
+                            >
+                                Reset filter
+                            </button>
+                        </div>
                     ) : (
-                        <>
-                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
-                                {[...AllProducts].sort(() => Math.random()).slice(0, 8).map((product) => (
+                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
+                            {visible.map((product, i) => (
+                                <BlurFade key={product._id} delay={Math.min(i * 0.06, 0.4)}>
                                     <ProductCard
-                                        key={product._id}
                                         product={product}
                                         onQuickView={() => navigate(`/productDetails/${product._id}`)}
                                         onAddToCart={() => handlAddProduct(product._id)}
                                     />
-                                ))}
-                            </div>
-                        </>
+                                </BlurFade>
+                            ))}
+                        </div>
                     )}
                 </div>
             </div>
         </section>
     )
 }
diff --git a/src/Components/LandingPage/LandingPage.jsx b/src/Components/LandingPage/LandingPage.jsx
index 6e6e7d8..d6f47bf 100644
--- a/src/Components/LandingPage/LandingPage.jsx
+++ b/src/Components/LandingPage/LandingPage.jsx
@@ -1,92 +1,162 @@
-import { Star } from 'lucide-react';
+import { ArrowRight, Star } from 'lucide-react';
+import { Link } from 'react-router-dom';
+import { Helmet } from 'react-helmet';
 import { Testimonial } from './Testimonial';
-import SimpleSlider from '../HomeSlick/HomeSlick';
 import { Benefit } from './Benefit';
 import { FeaturedProducts } from './FeaturedProducts';
 import { NewsLetter } from './NewsLetter';
-import { Link } from 'react-router-dom';
-import { Helmet } from 'react-helmet';
-
-const EcommerceLanding = () => {
+import CategorySlider from '../CategoriesSlider/CategoriesSlider';
+import { ShimmerButton } from '../magic/shimmer-button';
+import { NumberTicker } from '../magic/number-ticker';
+import { BlurFade } from '../magic/blur-fade';
+import { Marquee } from '../magic/marquee';
+import SliderImage1 from '../../assets/img/slider-image-3-BtMvVf4V.jpeg';
+import SliderImage2 from '../../assets/img/slider-image-2-Xt88XJy9.jpeg';
+import SliderImage3 from '../../assets/img/laptop_12.jpg';
+import SliderImage4 from '../../assets/img/mark-konig-Tl8mDaue_II-unsplash.jpg';
 
+const promos = [
+  'Free shipping over $75',
+  'New souq drop weekly',
+  '30-day easy returns',
+  'Secure checkout',
+  'Independent makers',
+];
 
+const EcommerceLanding = () => {
   return (
     <>
       <Helmet><title>Ecommerce</title></Helmet>
-      <div className="min-h-screen bg-white">
-
-        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-900 min-h-screen flex items-center overflow-hidden">
-          <div className="absolute inset-0 bg-black/20"></div>
-          <div className="absolute inset-0">
-            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
-            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
-          </div>
+      <div className="min-h-screen bg-paper text-ink">
 
-          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
-            <div className="grid lg:grid-cols-2 gap-12 items-center">
-              <div className="text-white  space-y-8">
-                <div className="space-y-6 ">
-                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
-                    Elevate Your
-                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
-                      Style
-                    </span>
-                  </h1>
-                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
-                    Discover premium products that define modern elegance and exceptional quality
-                  </p>
-                </div>
+        {/* Editorial split hero */}
+        <section className="grain relative overflow-hidden border-b-2 border-ink bg-paper">
+          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
+            <BlurFade>
+              <div className="space-y-7">
+                <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-marigold px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+                  New season souq drop
+                </span>
+                <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink lg:text-7xl">
+                  Everything you love,
+                  <span className="block text-persimmon">souq-fresh daily.</span>
+                </h1>
+                <p className="max-w-xl text-lg leading-relaxed text-ink/70 lg:text-xl">
+                  Handpicked essentials from independent makers ΓÇö fresh drops daily,
+                  honest prices, delivered fast.
+                </p>
 
-                <div className="flex flex-col sm:flex-row  gap-4">
-                  <Link to={'/products'} className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
-                    Shop Now
-                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">ΓåÆ</span>
+                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
+                  <Link to="/products">
+                    <ShimmerButton>
+                      Shop Now
+                      <ArrowRight className="h-4 w-4" />
+                    </ShimmerButton>
                   </Link>
-                  <Link to={'/categories'} className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
+                  <Link
+                    to="/categories"
+                    className="inline-flex items-center justify-center rounded-xl border-2 border-olive px-6 py-3 text-sm font-bold text-olive transition-colors hover:bg-olive hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                  >
                     Explore Collection
                   </Link>
                 </div>
 
-                <div className="flex items-center space-x-8 pt-8">
-                  <div className="text-center">
-                    <div className="text-3xl font-bold">50K+</div>
-                    <div className="text-gray-400">Happy Customers</div>
+                <div className="flex items-center gap-8 pt-4">
+                  <div className="text-center sm:text-left">
+                    <NumberTicker value={50} suffix="K+" className="font-display text-3xl text-ink" />
+                    <div className="text-sm text-ink/60">Happy Customers</div>
                   </div>
-                  <div className="text-center">
-                    <div className="text-3xl font-bold">1M+</div>
-                    <div className="text-gray-400">Products Sold</div>
+                  <div className="h-10 w-0.5 bg-clay" aria-hidden />
+                  <div className="text-center sm:text-left">
+                    <NumberTicker value={1} suffix="M+" className="font-display text-3xl text-ink" />
+                    <div className="text-sm text-ink/60">Products Sold</div>
                   </div>
-                  <div className="text-center">
-                    <div className="text-3xl font-bold">4.9</div>
-                    <div className="flex text-yellow-400 justify-center">
+                  <div className="h-10 w-0.5 bg-clay" aria-hidden />
+                  <div className="text-center sm:text-left">
+                    <NumberTicker value={4.9} decimals={1} className="font-display text-3xl text-ink" />
+                    <div className="flex items-center justify-center gap-0.5 text-marigold sm:justify-start">
                       {[...Array(5)].map((_, i) => (
-                        <Star key={i} className="w-4 h-4 fill-current" />
+                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
+            </BlurFade>
 
-              <div className="relative hidden lg:inline">
-                <div className="relative z-10">
-                  <SimpleSlider />
-                </div>
-                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl"></div>
+            {/* Bento collage reusing HomeSlick imagery */}
+            <BlurFade delay={0.12}>
+              <div className="grid grid-cols-2 gap-4">
+                <figure className="hard-shadow relative col-span-2 overflow-hidden rounded-2xl border-2 border-ink">
+                  <img src={SliderImage1} alt="Souq drop ΓÇö featured collection" className="h-64 w-full object-cover sm:h-72" />
+                  <span className="absolute left-4 top-4 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold text-ink">
+                    $24 souq pick
+                  </span>
+                </figure>
+                <figure className="hard-shadow relative overflow-hidden rounded-2xl border-2 border-ink">
+                  <img src={SliderImage2} alt="Souq drop ΓÇö new arrival" className="h-44 w-full object-cover sm:h-52" />
+                  <span className="absolute left-3 top-3 rotate-3 rounded-lg border-2 border-ink bg-marigold px-2 py-0.5 text-xs font-bold text-ink">
+                    New drop
+                  </span>
+                </figure>
+                <figure className="hard-shadow relative overflow-hidden rounded-2xl border-2 border-ink">
+                  <img src={SliderImage3} alt="Souq drop ΓÇö tech essential" className="h-44 w-full object-cover sm:h-52" />
+                  <span className="absolute left-3 top-3 -rotate-3 rounded-lg border-2 border-ink bg-marigold px-2 py-0.5 text-xs font-bold text-ink">
+                    Top rated
+                  </span>
+                </figure>
+                <figure className="hard-shadow relative col-span-2 overflow-hidden rounded-2xl border-2 border-ink">
+                  <img src={SliderImage4} alt="Souq drop ΓÇö maker spotlight" className="h-40 w-full object-cover sm:h-48" />
+                  <span className="absolute bottom-3 right-4 rotate-2 rounded-lg border-2 border-ink bg-paper px-3 py-1 text-xs font-bold text-ink">
+                    Maker spotlight
+                  </span>
+                </figure>
               </div>
+            </BlurFade>
+          </div>
+        </section>
+
+        {/* Promo tape */}
+        <div className="border-b-2 border-ink bg-olive py-3 text-paper">
+          <Marquee>
+            {promos.map((promo) => (
+              <span key={promo} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
+                {promo}
+                <span className="text-marigold" aria-hidden>Γ£ª</span>
+              </span>
+            ))}
+          </Marquee>
+        </div>
+
+        {/* Categories band */}
+        <section className="bg-paper py-16">
+          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
+              <div>
+                <span className="mb-2 inline-block rounded-full border-2 border-ink bg-clay px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+                  Browse
+                </span>
+                <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">Shop by category</h2>
+              </div>
+              <Link
+                to="/categories"
+                className="rounded-xl border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+              >
+                View all ΓåÆ
+              </Link>
             </div>
+            <CategorySlider />
           </div>
         </section>
 
         <FeaturedProducts />
         <Benefit />
         <Testimonial />
         <NewsLetter />
 
       </div>
     </>
   );
 };
 
 export default EcommerceLanding;
-
-
diff --git a/src/Components/LandingPage/NewsLetter.jsx b/src/Components/LandingPage/NewsLetter.jsx
index bafce76..185c6a3 100644
--- a/src/Components/LandingPage/NewsLetter.jsx
+++ b/src/Components/LandingPage/NewsLetter.jsx
@@ -1,67 +1,60 @@
-import toast from 'react-hot-toast';
-import {useState} from 'react';
+import { toast } from 'sonner';
+import { useState } from 'react';
+import { Input } from '../ui/input';
+import { BlurFade } from '../magic/blur-fade';
 
 export const NewsLetter = () => {
-    const[email,setEmail]=useState(null);
+    const [email, setEmail] = useState('');
 
-const handleEmailSubmit = (e) => {
-e.preventDefault();
-email?
-(toast.success(`Thank you for subscribing! Welcome email sent to ${email}`,{
-    duration: 4000,
-    position: 'top-center',
-    style: {
-    background: '#333',
-    color: '#fff',
-    fontSize: '16px',
-    padding: '16px',
-    borderRadius: '8px',
-    }
-})):(toast.error('Please enter a valid email address',{
-    duration: 4000,
-    position: 'top-center',
-    style: {
-    background: '#333',
-    color: '#fff',
-    fontSize: '16px',
-    padding: '16px',
-    borderRadius: '8px',
-    }
-}));
-setEmail('');
-};
-return (
-<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
-    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
-        <div className="space-y-6">
-        <h2 className="text-4xl lg:text-5xl font-bold text-white">
-            Get 10% Off Your First Order
-        </h2>
-        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
-            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and style tips
-        </p>
-        
-        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
-            <input
-            type="email"
-            value={email??""}
-            onChange={(e) => setEmail(e.target.value)}
-            placeholder="Enter your email"
-            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
-            />
-            <button
-            onClick={handleEmailSubmit}
-            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
-            >
-            Subscribe
-            </button>
-        </div>
-        
-        <p className="text-blue-100 text-sm">
-            * No spam, unsubscribe at any time
-        </p>
-        </div>
-    </div>
-    </section>
-)
+    const handleEmailSubmit = (e) => {
+        e.preventDefault();
+        const valid = /.+@.+\..+/.test(email.trim());
+        if (valid) {
+            toast.success(`Welcome to the souq ΓÇö 10% off code sent to ${email.trim()}`);
+            setEmail('');
+        } else {
+            toast.error('Please enter a valid email address');
+        }
+    };
+
+    return (
+        <section className="bg-paper py-20">
+            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
+                <BlurFade>
+                    <div className="grain hard-shadow relative overflow-hidden rounded-3xl border-2 border-ink bg-olive px-6 py-12 text-center text-paper sm:px-12">
+                        <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+                            10% off your first order
+                        </span>
+                        <h2 className="font-display mb-3 text-4xl font-bold lg:text-5xl">
+                            Fresh drops, straight to your inbox
+                        </h2>
+                        <p className="mx-auto mb-8 max-w-2xl text-lg text-paper/80">
+                            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and style tips
+                        </p>
+
+                        <form onSubmit={handleEmailSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
+                            <Input
+                                type="email"
+                                value={email}
+                                onChange={(e) => setEmail(e.target.value)}
+                                placeholder="Enter your email"
+                                aria-label="Email address"
+                                className="h-12 flex-1 rounded-full border-ink bg-paper text-ink"
+                            />
+                            <button
+                                type="submit"
+                                className="h-12 shrink-0 rounded-full border-2 border-ink bg-marigold px-8 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marigold focus-visible:ring-offset-2 focus-visible:ring-offset-olive"
+                            >
+                                Subscribe
+                            </button>
+                        </form>
+
+                        <p className="mt-4 text-sm text-paper/70">
+                            * No spam, unsubscribe at any time
+                        </p>
+                    </div>
+                </BlurFade>
+            </div>
+        </section>
+    )
 }
diff --git a/src/Components/LandingPage/Testimonial.jsx b/src/Components/LandingPage/Testimonial.jsx
index db30df9..c4d6ac1 100644
--- a/src/Components/LandingPage/Testimonial.jsx
+++ b/src/Components/LandingPage/Testimonial.jsx
@@ -1,116 +1,120 @@
+import { useRef } from "react";
 import { Star } from "lucide-react";
-import Slider from "react-slick";
-
-
+import {
+    Carousel,
+    CarouselContent,
+    CarouselItem,
+    CarouselNext,
+    CarouselPrevious,
+} from "../ui/carousel";
+import { Card } from "../ui/card";
+import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
 
 const testimonials = [
-        {
-        id:1,
+    {
+        id: 1,
         name: "Sarah M.",
         photo: "https://randomuser.me/api/portraits/women/44.jpg",
         text: "Amazing quality and fast delivery! Highly recommended.",
-        rating:5
-        },
-        {
+        rating: 5
+    },
+    {
         id: 2,
         name: "Michael Chen",
         photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
         text: "Great customer service and excellent products. The fitness watch has completely changed my workout routine.",
         rating: 5
-        },
-        {
+    },
+    {
         id: 3,
         name: "Emma Williams",
         photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
         text: "Love the modern design and user-friendly website. Shopping here is always a pleasant experience.",
         rating: 5
-        },
-        
-        {
-        id:4,
+    },
+    {
+        id: 4,
         name: "James L.",
         photo: "https://randomuser.me/api/portraits/men/32.jpg",
         text: "The styles are so fresh and the support team is fantastic!",
         rating: 4
-        },
-        {
-        id:5,
+    },
+    {
+        id: 5,
         name: "Emily R.",
         photo: "https://randomuser.me/api/portraits/women/68.jpg",
         text: "Love the unique designs and the quality is top-notch!",
         rating: 3
-        },
-        {
-        id:6,
+    },
+    {
+        id: 6,
         name: "Michael B.",
         photo: "https://randomuser.me/api/portraits/men/65.jpg",
         text: "Customer service was super helpful and my order arrived quickly.",
         rating: 5
-        },
-        {
-        id:7,
+    },
+    {
+        id: 7,
         name: "Olivia P.",
         photo: "https://randomuser.me/api/portraits/women/12.jpg",
         text: "I always find something new and exciting every time I visit!",
         rating: 4
-        },
-    ];
-
-
-
-    var settings = {
-        dots: false,
-        arrows:false,
-        infinite: true,
-        slidesToShow: 1,
-        slidesToScroll: 1,
-        autoplay: true,
-        speed: 3000,
-        autoplaySpeed: 5000,
-        cssEase: "linear"
-        
-    };
+    },
+];
 
 export const Testimonial = () => {
+    const trackRef = useRef(null);
 
     return (
-        <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
-            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
-                <div className="text-center space-y-4 mb-16">
-                    <h2 className="text-4xl lg:text-5xl font-bold text-white">What Our Customers Say</h2>
-                    <p className="text-xl text-gray-300">Real experiences from our valued customers</p>
+        <section className="border-y-2 border-ink bg-paper-deep py-20">
+            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+                <div className="mb-12 space-y-3 text-center">
+                    <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+                        Reviews
+                    </span>
+                    <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">What Our Customers Say</h2>
+                    <p className="text-lg text-ink/70">Real experiences from our valued customers</p>
                 </div>
-                <div className="relative">
-                <div className="bg-white/90 rounded-3xl p-8 lg:p-12 shadow-2xl">
-                    <Slider {...settings}>
+
+                <Carousel>
+                    <CarouselContent ref={trackRef} className="pb-4">
                         {testimonials.map((testimonial) => (
-                                <div key={testimonial.id} className="flex items-center mb-6">
-                                    <img
-                                        src={testimonial.photo}
-                                        alt={testimonial.name}
-                                        className="w-16 h-16 rounded-full mr-8 object-cover"
-                                    />
-                                    <div>
-                                        <h4 className="font-semibold text-lg text-gray-900">
-                                        {testimonial.name}
-                                        </h4>
-                                        <div className="flex text-yellow-400">
-                                        {[...Array(testimonial.rating)].map((_, i) => (
-                                            <Star key={i} className="w-4 h-4 fill-current" />
-                                        ))}
+                            <CarouselItem key={testimonial.id} className="w-[85%] sm:w-[47%] lg:w-[31.5%]">
+                                <Card className="hard-shadow-sm flex h-full flex-col gap-4 bg-paper p-6">
+                                    <div className="flex items-center gap-4">
+                                        <Avatar className="h-14 w-14">
+                                            <AvatarImage src={testimonial.photo} alt={testimonial.name} />
+                                            <AvatarFallback>
+                                                {testimonial.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
+                                            </AvatarFallback>
+                                        </Avatar>
+                                        <div>
+                                            <h4 className="font-display text-lg font-bold text-ink">
+                                                {testimonial.name}
+                                            </h4>
+                                            <div className="flex text-marigold">
+                                                {[...Array(testimonial.rating)].map((_, i) => (
+                                                    <Star key={i} className="h-4 w-4 fill-current" />
+                                                ))}
+                                            </div>
                                         </div>
                                     </div>
-                                    <blockquote className="text-lg lg:text-xl text-gray-700">
+                                    <blockquote className="text-base leading-relaxed text-ink/80">
                                         ΓÇ£{testimonial.text}ΓÇ¥
                                     </blockquote>
-                                </div>
+                                </Card>
+                            </CarouselItem>
                         ))}
-                    </Slider>
-                </div>
-                </div>
+                    </CarouselContent>
+                    <div className="mt-6 flex items-center justify-center gap-3">
+                        <CarouselPrevious targetRef={trackRef} />
+                        <span className="text-sm font-semibold uppercase tracking-widest text-ink/50">
+                            Drag or scroll
+                        </span>
+                        <CarouselNext targetRef={trackRef} />
+                    </div>
+                </Carousel>
             </div>
-        </div>
+        </section>
     )
 }
-
-

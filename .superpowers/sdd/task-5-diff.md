diff --git a/src/Components/Brands/Brands.jsx b/src/Components/Brands/Brands.jsx
index e5bfba4..b2d063f 100644
--- a/src/Components/Brands/Brands.jsx
+++ b/src/Components/Brands/Brands.jsx
@@ -1,102 +1,139 @@
 import { useQuery } from '@tanstack/react-query';
-import ScaleLoader from '../Loader/ScaleLoader';
 import axios from 'axios';
 import Error from '../Error/Error';
 import { Helmet } from 'react-helmet';
+import { useMemo, useState } from 'react';
+import { ArrowUpRight, PackageSearch, RotateCcw, Search } from 'lucide-react';
+import { Card } from '../ui/card';
+import { Skeleton } from '../ui/skeleton';
+import Input from '../../ReusableComponents/Input';
+import { BlurFade } from '../magic/blur-fade';
 
 export default function Brands() {
   function getBrands() {
     return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
   }
 
   const { data, isLoading, isError } = useQuery({
     queryKey: ['allBrands'],
     queryFn: getBrands,
     refetchOnWindowFocus: false,
     refetchOnMount: false,
   });
 
+  const [query, setQuery] = useState('');
+
+  const allBrands = useMemo(() => data?.data?.data || [], [data]);
+  const visible = useMemo(() => {
+    if (!query) return allBrands;
+    const q = query.toLowerCase();
+    return allBrands.filter((b) => b.name?.toLowerCase().includes(q));
+  }, [allBrands, query]);
+
   if (isError) {
     return (
       <Error />
     );
   }
 
   if (isLoading) {
     return (
-      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
-        <ScaleLoader />
+      <div className="min-h-screen bg-paper py-12">
+        <div className="container mx-auto px-4 py-12">
+          <Skeleton className="mx-auto h-8 w-56" />
+          <Skeleton className="mx-auto mt-4 h-5 w-96 max-w-full" />
+          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
+            {Array.from({ length: 10 }).map((_, i) => (
+              <Card key={i} className="p-6" aria-hidden="true">
+                <Skeleton className="mx-auto h-20 w-20 rounded-full" />
+                <Skeleton className="mx-auto mt-4 h-5 w-2/3" />
+              </Card>
+            ))}
+          </div>
+        </div>
       </div>
     );
   }
 
   return (
     <>
       <Helmet><title>Collections - Discover Amazing Brands</title></Helmet>
-      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4">
-        {/* Background decoration */}
-        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
-        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
-        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
-        <div className="container mx-auto px-4 py-12">
-          {/* Header Section */}
-          <div className="text-center mb-12">
-            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
+      <div className="min-h-screen bg-paper py-12 text-ink">
+        <div className="container mx-auto px-4 py-4">
+          <div className="mb-10 text-center">
+            <span className="inline-block rounded-full border-2 border-ink bg-olive px-4 py-1 text-xs font-bold uppercase tracking-widest text-paper">
+              Trusted makers
+            </span>
+            <h2 className="font-display mt-4 text-4xl font-bold text-ink md:text-5xl">
               Our Brands
             </h2>
-            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
-              Discover top-quality brands that we're proud to partner with
+            <p className="mx-auto mt-3 max-w-2xl text-lg text-ink/70">
+              Discover top-quality brands that we&apos;re proud to partner with
             </p>
-
-            <div className="flex items-center justify-center gap-4">
-              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
-              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
-              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
+            <div className="mx-auto mt-6 max-w-md">
+              <div className="relative">
+                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
+                <Input
+                  placeholder="Search brands..."
+                  value={query}
+                  onChange={(e) => setQuery(e.target.value)}
+                  className="pl-10"
+                  aria-label="Search brands"
+                />
+              </div>
             </div>
           </div>
 
-          {/* Brands Grid */}
-          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
-            {data.data.data.map((brand) => (
-              <div
-                key={brand._id}
-                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
-              >
-                {/* Image Container */}
-                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
-                  <div className="aspect-square flex items-center justify-center">
-                    <img
-                      src={brand.image}
-                      alt={brand.name}
-                      className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
-                    />
-                  </div>
-                </div>
-
-                {/* Content */}
-                <div className="p-4 bg-white">
-                  <h3 className="text-center text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 py-2 px-3 rounded-lg border border-blue-100">
-                    {brand.name}
-                  </h3>
-                </div>
-
-                {/* Hover Overlay */}
-                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
+          {visible.length === 0 ? (
+            <Card className="mx-auto max-w-md p-12 text-center">
+              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
+                <PackageSearch className="h-8 w-8 text-ink" />
               </div>
-            ))}
-          </div>
+              <h3 className="font-display text-2xl font-bold text-ink">No brands found</h3>
+              <p className="mt-2 text-ink/70">Try a different search term.</p>
+              <button
+                onClick={() => setQuery('')}
+                className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-marigold px-6 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+              >
+                <RotateCcw className="h-4 w-4" />
+                Reset search
+              </button>
+            </Card>
+          ) : (
+            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
+              {visible.map((brand, i) => (
+                <BlurFade key={brand._id} delay={Math.min(i * 0.04, 0.3)}>
+                  <Card className="group relative overflow-hidden p-6 text-center transition-transform hover:-translate-y-1">
+                    <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-clay bg-paper-deep p-4">
+                      <img
+                        src={brand.image}
+                        alt={brand.name}
+                        loading="lazy"
+                        className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
+                      />
+                    </div>
+                    <h3 className="mt-4 inline-block rounded-lg border-2 border-ink bg-clay/50 px-3 py-1.5 text-sm font-bold text-ink transition-colors group-hover:bg-marigold">
+                      {brand.name}
+                    </h3>
+                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink opacity-0 transition-opacity group-hover:opacity-100">
+                      <ArrowUpRight className="h-4 w-4" />
+                    </span>
+                  </Card>
+                </BlurFade>
+              ))}
+            </div>
+          )}
 
-          {/* Stats Section */}
-          <div className="mt-16 text-center">
-            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
-              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
-              <span className="text-gray-700 font-medium">
-                {data.data.data.length} premium brands available
+          {visible.length > 0 && (
+            <div className="mt-12 text-center">
+              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-2.5 font-bold text-ink">
+                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-olive" />
+                {visible.length} premium brand{visible.length === 1 ? '' : 's'} available
               </span>
             </div>
-          </div>
+          )}
         </div>
       </div>
     </>
   );
-}
\ No newline at end of file
+}
diff --git a/src/Components/Categories/Categories.jsx b/src/Components/Categories/Categories.jsx
index 11de606..428ab19 100644
--- a/src/Components/Categories/Categories.jsx
+++ b/src/Components/Categories/Categories.jsx
@@ -1,181 +1,162 @@
 import useAllCategories from '@/CustomHooks/useAllCategories';
-import { AlertCircle, Package, ArrowRight, Sparkles } from 'lucide-react';
+import { ArrowRight, PackageSearch, RotateCcw, Search, Sparkles } from 'lucide-react';
+import { useMemo, useState } from 'react';
 import { useNavigate } from "react-router-dom";
-import ScaleLoading from '../Loader/ScaleLoader';
 import { Helmet } from 'react-helmet';
+import { Card } from '../ui/card';
+import { Skeleton } from '../ui/skeleton';
+import Input from '../../ReusableComponents/Input';
+import { BlurFade } from '../magic/blur-fade';
 
 const CollectionList = () => {
   const navigate = useNavigate();
   const { data, isLoading, isError, error } = useAllCategories();
+  const [query, setQuery] = useState('');
+
+  const categories = useMemo(() => data?.data?.data || [], [data]);
+  const visible = useMemo(() => {
+    if (!query) return categories;
+    const q = query.toLowerCase();
+    return categories.filter((c) => c.name?.toLowerCase().includes(q));
+  }, [categories, query]);
 
-  // Loading state
   if (isLoading) {
     return (
-      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 flex items-center justify-center">
-        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 text-center">
-          <div className="relative mb-6">
-            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
-            <div className="relative">
-              <ScaleLoading />
-            </div>
-          </div>
-          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold text-lg">
-            Discovering amazing collections...
-          </p>
-          <div className="flex justify-center gap-1 mt-4">
-            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
-            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
-            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
+      <div className="min-h-screen bg-paper py-12">
+        <div className="container mx-auto px-4 py-12">
+          <Skeleton className="mx-auto h-8 w-64" />
+          <Skeleton className="mx-auto mt-4 h-5 w-96 max-w-full" />
+          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
+            {Array.from({ length: 8 }).map((_, i) => (
+              <Card key={i} className="overflow-hidden" aria-hidden="true">
+                <Skeleton className="aspect-square w-full rounded-none border-b-2 border-ink" />
+                <div className="space-y-2 p-5">
+                  <Skeleton className="mx-auto h-5 w-2/3" />
+                  <Skeleton className="mx-auto h-4 w-1/3" />
+                </div>
+              </Card>
+            ))}
           </div>
         </div>
       </div>
     );
   }
 
-  // Error state
   if (isError) {
     return (
-      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 flex items-center justify-center px-4">
-        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center border border-red-100 relative overflow-hidden">
-          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-pink-400"></div>
-          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
-            <AlertCircle className="h-10 w-10 text-red-500" />
-            <div className="absolute inset-0 bg-red-200 rounded-full animate-ping opacity-30"></div>
-          </div>
-          <h3 className="text-2xl font-bold text-gray-800 mb-3">Oops! Something went wrong</h3>
-          <p className="text-red-600 font-medium mb-2">Failed to load collections</p>
-          <p className="text-gray-500 text-sm bg-gray-50 rounded-lg p-3 border">{error.message}</p>
+      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12">
+        <Card className="w-full max-w-md border-brick p-10 text-center">
+          <h3 className="font-display text-2xl font-bold text-ink">Couldn&apos;t load collections</h3>
+          <p className="mt-2 text-sm text-ink/70">{error?.message || 'Please try again.'}</p>
           <button
             onClick={() => window.location.reload()}
-            className="mt-6 px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
+            className="mt-6 rounded-xl border-2 border-ink bg-persimmon px-6 py-2 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
           >
             Try Again
           </button>
-        </div>
+        </Card>
       </div>
     );
   }
 
-  const categories = data?.data?.data || [];
-
   return (
     <>
       <Helmet><title>Collections - Discover Amazing Categories</title></Helmet>
-      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden py-4">
-        {/* Background decoration */}
-        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
-        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
-        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
-
-        <div className="container mx-auto px-4 py-12 relative">
-          {/* Header Section */}
-          <div className="text-center mb-16">
-            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-6 py-2 mb-6 border border-purple-200">
-              <Sparkles className="w-5 h-5 text-purple-600" />
-              <span className="text-purple-700 font-semibold text-sm">Curated Collections</span>
-            </div>
-
-            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-4 leading-tight md:leading-loose">
+      <div className="min-h-screen bg-paper py-12 text-ink">
+        <div className="container mx-auto px-4 py-4">
+          <div className="mb-10 text-center">
+            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-marigold px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
+              <Sparkles className="h-4 w-4" />
+              Curated Collections
+            </span>
+            <h2 className="font-display mt-4 text-4xl font-bold text-ink md:text-5xl">
               Shop by Category
             </h2>
-
-            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
-              Explore our handpicked collections and find exactly what you're looking for
+            <p className="mx-auto mt-3 max-w-2xl text-lg text-ink/70">
+              Explore our handpicked collections and find exactly what you&apos;re looking for
             </p>
-
-            <div className="flex items-center justify-center gap-4">
-              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
-              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
-              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
-            </div>
-          </div>
-
-          {/* Categories Grid */}
-          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
-            {categories?.map((category) => (
-              <div
-                key={category._id}
-                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50 overflow-hidden relative"
-                onClick={() => navigate(`/products`)}
-              >
-                {/* Hover glow effect */}
-                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
-
-                {/* Category Image */}
-                <div className="relative aspect-square p-4">
-                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
-                    <img
-                      src={category.image}
-                      alt={category.name}
-                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
-                    />
-                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
-                  </div>
-
-                  {/* Floating action button */}
-                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
-                    <ArrowRight className="w-5 h-5 text-gray-700" />
-                  </div>
-                </div>
-
-                {/* Category Info */}
-                <div className="p-6 pt-2">
-                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300 text-center mb-3">
-                    {category.name}
-                  </h3>
-
-                  <div className="text-center">
-                    <div className="inline-flex items-center gap-2 text-gray-500 group-hover:text-indigo-600 transition-colors duration-300">
-                      <span className="text-sm font-medium">Explore Collection</span>
-                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
-                    </div>
-                  </div>
-
-                  {/* Progress bar effect */}
-                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
-                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
-                  </div>
-                </div>
+            <div className="mx-auto mt-6 max-w-md">
+              <div className="relative">
+                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
+                <Input
+                  placeholder="Search collections..."
+                  value={query}
+                  onChange={(e) => setQuery(e.target.value)}
+                  className="pl-10"
+                  aria-label="Search categories"
+                />
               </div>
-            ))}
+            </div>
           </div>
 
-          {/* Empty state */}
-          {categories?.length === 0 && (
-            <div className="text-center py-20">
-              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto border border-white/50 shadow-xl">
-                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
-                  <Package className="h-12 w-12 text-gray-400" />
-                </div>
-                <h3 className="text-2xl font-bold text-gray-700 mb-3">No Collections Yet</h3>
-                <p className="text-gray-500 text-lg">
-                  We're working on bringing you amazing collections. Check back soon!
-                </p>
-                <div className="flex justify-center gap-1 mt-6">
-                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
-                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
-                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
-                </div>
+          {visible.length === 0 ? (
+            <Card className="mx-auto max-w-md p-12 text-center">
+              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
+                <PackageSearch className="h-8 w-8 text-ink" />
               </div>
+              <h3 className="font-display text-2xl font-bold text-ink">No collections found</h3>
+              <p className="mt-2 text-ink/70">
+                {query ? 'Try a different search term.' : "We're working on bringing you amazing collections. Check back soon!"}
+              </p>
+              {query && (
+                <button
+                  onClick={() => setQuery('')}
+                  className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-marigold px-6 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                >
+                  <RotateCcw className="h-4 w-4" />
+                  Reset search
+                </button>
+              )}
+            </Card>
+          ) : (
+            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
+              {visible.map((category, i) => (
+                <BlurFade key={category._id} delay={Math.min(i * 0.05, 0.3)}>
+                  <Card
+                    role="button"
+                    tabIndex={0}
+                    onClick={() => navigate(`/products`)}
+                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/products`); }}
+                    className="group cursor-pointer overflow-hidden transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                  >
+                    <div className="relative aspect-square overflow-hidden border-b-2 border-ink bg-paper-deep p-4">
+                      <img
+                        src={category.image}
+                        alt={category.name}
+                        loading="lazy"
+                        className="h-full w-full rounded-xl border-2 border-ink object-cover transition-transform duration-500 group-hover:scale-105"
+                      />
+                      <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
+                        <ArrowRight className="h-5 w-5" />
+                      </span>
+                    </div>
+                    <div className="p-5 text-center">
+                      <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-persimmon">
+                        {category.name}
+                      </h3>
+                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-olive">
+                        Explore Collection
+                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
+                      </span>
+                    </div>
+                  </Card>
+                </BlurFade>
+              ))}
             </div>
           )}
 
-          {/* Stats Section */}
-          {categories?.length > 0 && (
-            <div className="mt-20 text-center">
-              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-white/30">
-                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
-                <span className="text-gray-700 font-semibold text-lg">
-                  {categories.length} collections ready to explore
-                </span>
-                <Sparkles className="w-5 h-5 text-purple-500" />
-              </div>
+          {visible.length > 0 && (
+            <div className="mt-12 text-center">
+              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-olive px-6 py-2.5 font-bold text-paper">
+                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-marigold" />
+                {visible.length} collection{visible.length === 1 ? '' : 's'} ready to explore
+              </span>
             </div>
           )}
         </div>
       </div>
     </>
   );
 };
 
-export default CollectionList;
\ No newline at end of file
+export default CollectionList;
diff --git a/src/Components/ProductDetails/ProductCard.jsx b/src/Components/ProductDetails/ProductCard.jsx
index 3e3a36d..2b66a0e 100644
--- a/src/Components/ProductDetails/ProductCard.jsx
+++ b/src/Components/ProductDetails/ProductCard.jsx
@@ -1,82 +1,134 @@
-import {
-    ShoppingCart, Star, Eye,
-    Package,
-} from 'lucide-react';
-import Button from '../../ReusableComponents/Button';
+import { useState } from 'react';
+import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
+import { Card } from '../ui/card';
+import { Skeleton } from '../ui/skeleton';
+import { cn } from '@/lib/utils';
 
 export const ProductCard = ({ product, onQuickView, onAddToCart }) => {
-    return (
-        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
-            {/* Card Image  */}
-            <div className="relative overflow-hidden">
-                <img
-                    src={product.imageCover}
-                    alt={product.title}
-                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
-                />
-                {product.price > product.priceAfterDiscount && (
-                    <div className="absolute top-4 right-4">
-                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
-                            Sale
-                        </span>
-                    </div>)}
-                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
-                    <div className="flex space-x-3">
-                        <button
-                            onClick={onQuickView}
-                            className="bg-white text-gray-900 p-3 rounded-full  hover:bg-gray-100 transition-colors shadow-lg"
-                        >
-                            <Eye className="w-5 h-5" />
-                        </button>
-                        <button
-                            onClick={onAddToCart}
-                            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
-                        >
-                            <ShoppingCart className="w-5 h-5" />
-                        </button>
-                    </div>
-                </div>
-            </div>
-            {/* Card Info */}
-            <div className="p-6">
-                <div className="flex items-center mb-2">
-                    <div className="flex text-yellow-400">
-                        {[...Array(5)].map((_, i) => (
-                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.ratingsAverage) ? 'fill-current' : ''}`} />
-                        ))}
-                    </div>
-                    <span className="text-gray-600 text-sm ml-2">({product.ratingsQuantity})</span>
-                </div>
+  const [wished, setWished] = useState(false);
+  if (!product) return null;
 
-                <h3 className="font-semibold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
-                    {product.title.split(' ').slice(0, 3).join(' ')}
-                </h3>
+  const onSale = product.price > product.priceAfterDiscount;
+  const discount = onSale
+    ? Math.round((1 - product.priceAfterDiscount / product.price) * 100)
+    : 0;
+  const shortTitle = product.title?.split(' ').slice(0, 3).join(' ') || product.title;
 
-                <div className="flex items-center justify-between mb-4">
-                    <div className="flex items-center space-x-2">
-                        {product.price > product.priceAfterDiscount && (
-                            <>
-                                <span className="text-2xl font-bold text-gray-900">${product.priceAfterDiscount}</span>
-                            </>
-                        )}
-                        <span className={`${product.price > product.priceAfterDiscount ? "text-gray-500 line-through" : "text-2xl font-bold text-gray-900"}`}>${product.price}</span>
-                    </div>
-                </div>
+  return (
+    <Card className="group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1">
+      {/* Image 4:3 */}
+      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-paper-deep">
+        <button
+          type="button"
+          onClick={onQuickView}
+          className="block h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
+          aria-label={`View ${product.title}`}
+        >
+          <img
+            src={product.imageCover}
+            alt={product.title}
+            loading="lazy"
+            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
+          />
+        </button>
 
-                <Button
-                    onClick={onAddToCart}
-                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-colors"
-                >
-                    Add to Cart
-                </Button>
-            </div>
-            {/* Empty state */}
-            {product?.length === 0 && (
-                <div className="text-center py-12">
-                    <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
-                    <p className="text-gray-600 text-lg">No Products available</p>
-                </div>
-            )}
+        {onSale && (
+          <span className="absolute left-3 top-3 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-2.5 py-0.5 text-xs font-bold text-ink">
+            -{discount}%
+          </span>
+        )}
+
+        <button
+          type="button"
+          onClick={() => setWished((w) => !w)}
+          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
+          aria-pressed={wished}
+          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+        >
+          <Heart className={cn('h-4 w-4', wished && 'fill-persimmon text-persimmon')} />
+        </button>
+
+        <div className="absolute inset-x-3 bottom-3 flex translate-y-2 justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
+          <button
+            type="button"
+            onClick={onQuickView}
+            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            aria-label="Quick view"
+          >
+            <Eye className="h-4 w-4" />
+          </button>
+          <button
+            type="button"
+            onClick={onAddToCart}
+            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-ink text-paper transition-colors hover:bg-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+            aria-label="Add to cart"
+          >
+            <ShoppingCart className="h-4 w-4" />
+          </button>
+        </div>
+      </div>
+
+      {/* Body */}
+      <div className="flex flex-1 flex-col gap-2 p-4">
+        {product.category?.name && (
+          <span className="inline-flex w-fit items-center rounded-full bg-clay/60 px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-ink/70">
+            {product.category.name}
+          </span>
+        )}
+
+        <button
+          type="button"
+          onClick={onQuickView}
+          className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 rounded"
+        >
+          <h3 className="font-display truncate text-lg font-bold text-ink transition-colors group-hover:text-persimmon">
+            {shortTitle}
+          </h3>
+        </button>
+
+        <div className="flex items-center gap-1.5">
+          <div className="flex text-marigold" aria-label={`Rated ${product.ratingsAverage || 0} out of 5`}>
+            {[...Array(5)].map((_, i) => (
+              <Star
+                key={i}
+                className={cn('h-4 w-4', i < Math.floor(product.ratingsAverage || 0) ? 'fill-current' : 'text-clay')}
+              />
+            ))}
+          </div>
+          <span className="text-xs font-medium text-ink/60">({product.ratingsQuantity || 0})</span>
         </div>
-    );
+
+        <div className="flex items-baseline gap-2">
+          <span className="font-display text-xl font-bold text-persimmon">
+            ${product.priceAfterDiscount || product.price}
+          </span>
+          {onSale && <span className="text-sm text-ink/50 line-through">${product.price}</span>}
+        </div>
+
+        <button
+          type="button"
+          onClick={onAddToCart}
+          className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-olive px-4 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+        >
+          <ShoppingCart className="h-4 w-4" />
+          Add to Cart
+        </button>
+      </div>
+    </Card>
+  );
 };
+
+export const ProductCardSkeleton = () => (
+  <Card className="flex h-full flex-col overflow-hidden" aria-hidden="true">
+    <Skeleton className="aspect-[4/3] w-full rounded-none border-b-2 border-ink" />
+    <div className="flex flex-1 flex-col gap-3 p-4">
+      <Skeleton className="h-4 w-24" />
+      <Skeleton className="h-5 w-3/4" />
+      <Skeleton className="h-4 w-1/3" />
+      <Skeleton className="h-6 w-1/2" />
+      <Skeleton className="mt-auto h-11 w-full" />
+    </div>
+  </Card>
+);
+
+export default ProductCard;
diff --git a/src/Components/ProductDetails/ProductDetails.jsx b/src/Components/ProductDetails/ProductDetails.jsx
index 3066304..2f97cac 100644
--- a/src/Components/ProductDetails/ProductDetails.jsx
+++ b/src/Components/ProductDetails/ProductDetails.jsx
@@ -1,235 +1,331 @@
-import { useContext, useState } from 'react';
+import { useContext, useMemo, useRef, useState } from 'react';
 import { useParams, useNavigate, Link } from 'react-router-dom';
-import ScaleLoader from '../Loader/ScaleLoader';
 import Button from '../../ReusableComponents/Button';
 import useAllProduct from '../../CustomHooks/useAllProduct';
-import { Minus, Plus, Star } from 'lucide-react';
+import { Minus, Plus, Star, Truck, ShieldCheck, RotateCcw, ShoppingCart, Zap } from 'lucide-react';
 import Badge from '../../ReusableComponents/Badge';
-import { ProductCard } from './ProductCard';
+import { ProductCard, ProductCardSkeleton } from './ProductCard';
 import { CartContext } from '../../Context/CartContext/CartContext';
+import { useDispatch } from 'react-redux';
+import { openCart } from '../../Redux/ToggleCartSlice';
+import { Helmet } from 'react-helmet';
+import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
+import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
+import { Card } from '../ui/card';
+import { Skeleton } from '../ui/skeleton';
+import { BlurFade } from '../magic/blur-fade';
+import { cn } from '@/lib/utils';
 
 export default function ProductDetails() {
   const { data, isLoading, isError } = useAllProduct();
-  const { addProduct, UpdateCount } = useContext(CartContext);
+  const { addProduct } = useContext(CartContext);
+  const dispatch = useDispatch();
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
+  const [qty, setQty] = useState(1);
   const navigate = useNavigate();
   const { id } = useParams();
-  const products = data?.data?.data;
-  const currentProduct = products?.find((p) => p._id === id);
+  const relatedRef = useRef(null);
 
+  const products = useMemo(() => data?.data?.data || [], [data]);
+  const currentProduct = useMemo(() => products.find((p) => p._id === id), [products, id]);
 
-  function handleUpdateCount({ id, newcount }) {
-    UpdateCount(id, newcount);
-  }
+  const related = useMemo(() => {
+    if (!currentProduct) return [];
+    return products
+      .filter((p) => p._id !== currentProduct._id && p.category?.name === currentProduct.category?.name)
+      .slice(0, 8);
+  }, [products, currentProduct]);
 
-  function handleAddProduct(id) {
-    addProduct(id);
+  function handleAddProduct(openSheet = true) {
+    addProduct(currentProduct._id, openSheet ? { onSuccess: () => dispatch(openCart()) } : undefined);
   }
 
-
+  function handleBuyNow() {
+    addProduct(currentProduct._id);
+    navigate('/cart');
+  }
 
   if (isError) {
     return (
-      <div className="flex flex-col justify-center items-center h-screen">
-        <ScaleLoader />
+      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12">
+        <Card className="w-full max-w-md p-10 text-center">
+          <h3 className="font-display text-2xl font-bold text-ink">Couldn&apos;t load this product</h3>
+          <p className="mt-2 text-ink/70">Please check your connection and try again.</p>
+          <div className="mt-6 flex justify-center gap-3">
+            <Button variant="outline" onClick={() => navigate('/products')}>Back to shop</Button>
+            <Button variant="primary" onClick={() => window.location.reload()}>Retry</Button>
+          </div>
+        </Card>
       </div>
     );
   }
 
   if (isLoading || !currentProduct) {
-    return <ScaleLoader />;
+    return (
+      <div className="min-h-screen bg-paper py-8">
+        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
+          <Skeleton className="h-4 w-64" />
+          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
+            <div className="space-y-4">
+              <Skeleton className="aspect-square w-full" />
+              <div className="flex gap-2">
+                {Array.from({ length: 4 }).map((_, i) => (
+                  <Skeleton key={i} className="h-20 w-20" />
+                ))}
+              </div>
+            </div>
+            <div className="space-y-4">
+              <Skeleton className="h-9 w-3/4" />
+              <Skeleton className="h-5 w-1/3" />
+              <Skeleton className="h-8 w-1/4" />
+              <Skeleton className="h-24 w-full" />
+              <Skeleton className="h-12 w-full" />
+            </div>
+          </div>
+          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
+            {Array.from({ length: 4 }).map((_, i) => (
+              <ProductCardSkeleton key={i} />
+            ))}
+          </div>
+        </div>
+      </div>
+    );
   }
 
+  const onSale = currentProduct.price > currentProduct.priceAfterDiscount;
+  const discount = onSale
+    ? Math.round((1 - currentProduct.priceAfterDiscount / currentProduct.price) * 100)
+    : 0;
+  const gallery = currentProduct.images?.length ? currentProduct.images : [currentProduct.imageCover];
+
   return (
-    <div className="pt-16 min-h-screen bg-white">
-      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
+    <div className="min-h-screen bg-paper py-8 text-ink">
+      <Helmet><title>{currentProduct.title} - Souq</title></Helmet>
+      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         {/* Breadcrumb */}
-        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
-          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
-          <span>/</span>
-          <button onClick={() => navigate('/products')} className="hover:text-blue-600">Shop</button>
-          <span>/</span>
-          <span className="text-gray-900">{currentProduct.title}</span>
-        </div>
-
-        {/* Current Product */}
-        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
-          {/* Product Images */}
+        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/60">
+          <button onClick={() => navigate('/')} className="font-semibold hover:text-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">Home</button>
+          <span aria-hidden="true">/</span>
+          <button onClick={() => navigate('/products')} className="font-semibold hover:text-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">Shop</button>
+          <span aria-hidden="true">/</span>
+          <span className="max-w-[40ch] truncate font-semibold text-ink">{currentProduct.title}</span>
+        </nav>
+
+        {/* Gallery + info */}
+        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
+          {/* Gallery */}
           <div className="space-y-4">
-            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
-              <img
-                src={currentProduct.images?.[currentImageIndex] || currentProduct.imageCover}
-                alt={currentProduct.title}
-                className="w-full h-full object-cover"
-              />
-            </div>
-            {currentProduct.images && currentProduct.images.length > 1 && (
-              <div className="flex space-x-2">
-                {currentProduct.images.map((image, index) => (
+            <Card className="relative overflow-hidden">
+              <div className="aspect-square bg-paper-deep">
+                <img
+                  src={gallery[currentImageIndex] || currentProduct.imageCover}
+                  alt={currentProduct.title}
+                  className="h-full w-full object-cover"
+                />
+              </div>
+              {onSale && (
+                <span className="absolute left-4 top-4 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold text-ink">
+                  -{discount}% SALE
+                </span>
+              )}
+            </Card>
+            {gallery.length > 1 && (
+              <div className="flex gap-2.5 overflow-x-auto pb-1" role="tablist" aria-label="Product images">
+                {gallery.map((image, index) => (
                   <button
                     key={index}
+                    role="tab"
+                    aria-selected={index === currentImageIndex}
+                    aria-label={`View image ${index + 1}`}
                     onClick={() => setCurrentImageIndex(index)}
-                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
-                      }`}
+                    className={cn(
+                      'h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2',
+                      index === currentImageIndex ? 'border-persimmon' : 'border-ink hover:border-persimmon'
+                    )}
                   >
-                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
+                    <img src={image} alt="" className="h-full w-full object-cover" />
                   </button>
                 ))}
               </div>
             )}
           </div>
-          {/* Product Info */}
+
+          {/* Info */}
           <div className="space-y-6">
             <div>
-              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
+              {currentProduct.category?.name && (
+                <span className="inline-flex items-center rounded-full bg-clay/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-ink/70">
+                  {currentProduct.category.name}
+                </span>
+              )}
+              <h1 className="font-display mt-3 text-3xl font-bold text-ink lg:text-4xl">
                 {currentProduct.title}
               </h1>
-              {/* Product Ratings & Reviews */}
-              <div className="flex items-center space-x-4 mb-4">
-                <div className="flex text-yellow-400">
+              <div className="mb-4 mt-3 flex items-center gap-3">
+                <div className="flex text-marigold" aria-label={`Rated ${currentProduct.ratingsAverage} out of 5`}>
                   {[...Array(5)].map((_, i) => (
-                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(currentProduct.ratingsAverage) ? 'fill-current' : ''}`} />
+                    <Star key={i} className={cn('h-5 w-5', i < Math.floor(currentProduct.ratingsAverage || 0) ? 'fill-current' : 'text-clay')} />
                   ))}
                 </div>
-                <span className="text-gray-600">({currentProduct.ratingsQuantity} reviews)</span>
+                <span className="text-sm text-ink/60">({currentProduct.ratingsQuantity || 0} reviews)</span>
               </div>
-              {/* Product Price */}
-              <div className="flex items-center space-x-4 mb-6">
-                <span className="text-3xl font-bold text-gray-900">${currentProduct.price}</span>
-                {currentProduct.price > currentProduct.priceAfterDiscount && (
-                  <span className="text-xl text-gray-500 line-through">${currentProduct.price}</span>
-                )}
-                {currentProduct.price > currentProduct.priceAfterDiscount && (
-                  <Badge variant="sale">
-                    {Math.round((1 - currentProduct.priceAfterDiscount / currentProduct.price) * 100)}% OFF
-                  </Badge>
+              <div className="mb-2 flex flex-wrap items-center gap-3">
+                <span className="font-display text-3xl font-bold text-persimmon">
+                  ${currentProduct.priceAfterDiscount || currentProduct.price}
+                </span>
+                {onSale && (
+                  <>
+                    <span className="text-xl text-ink/50 line-through">${currentProduct.price}</span>
+                    <Badge variant="sale">{discount}% OFF</Badge>
+                  </>
                 )}
               </div>
             </div>
-            {/* Product Description */}
-            <div>
-              <h3 className="font-semibold text-lg text-gray-900 mb-2">Description</h3>
-              <p className="text-gray-600 mb-4">{currentProduct.slug}</p>
-              <p className="text-gray-600">{currentProduct.description}</p>
-            </div>
-            {/* Product Brands */}
-            <div>
-              <h3 className="font-semibold text-lg text-gray-900 mb-2">Brands</h3>
-              <span>
-                <Badge key={currentProduct.brand._id}>{currentProduct.brand.name}</Badge>
-              </span>
-            </div>
-            {/* Product Counts */}
-            <div className="flex items-center space-x-4">
-              <div className="flex items-center border border-gray-300 rounded-lg">
+
+            <p className="leading-relaxed text-ink/75">{currentProduct.description}</p>
+
+            {currentProduct.brand?.name && (
+              <div className="flex items-center gap-2">
+                <span className="text-sm font-semibold text-ink/60">Brand:</span>
+                <Badge variant="clay">{currentProduct.brand.name}</Badge>
+              </div>
+            )}
+
+            {/* Qty stepper + CTAs */}
+            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
+              <div className="inline-flex items-center rounded-xl border-2 border-ink bg-paper" role="group" aria-label="Quantity">
                 <button
-                  onClick={() => handleUpdateCount({ id: currentProduct.currentProduct._id, count: currentProduct.count - 1 })}
-                  className="p-2 hover:bg-gray-100 transition-colors"
+                  type="button"
+                  onClick={() => setQty((q) => Math.max(1, q - 1))}
+                  className="p-3 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
+                  aria-label="Decrease quantity"
                 >
-                  <Minus className="w-4 h-4" />
+                  <Minus className="h-4 w-4" />
                 </button>
-                <span className="px-4 py-2 border-x border-gray-300">{currentProduct.count}</span>
+                <span className="min-w-12 border-x-2 border-ink px-4 py-2 text-center font-bold" aria-live="polite">{qty}</span>
                 <button
-                  onClick={() => handleUpdateCount({ id: currentProduct.currentProduct._id, count: currentProduct.count + 1 })}
-                  className="p-2 hover:bg-gray-100 transition-colors"
+                  type="button"
+                  onClick={() => setQty((q) => Math.min(99, q + 1))}
+                  className="p-3 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
+                  aria-label="Increase quantity"
                 >
-                  <Plus className="w-4 h-4" />
+                  <Plus className="h-4 w-4" />
                 </button>
               </div>
-              <Button
-                size="lg"
-                onClick={() => handleAddProduct(currentProduct.currentProduct._id)}
-                className="flex-1"
-              >
-                Add to Cart - ${(currentProduct.price * currentProduct.quantity).toFixed(2)}
+              <Button variant="primary" size="lg" onClick={() => handleAddProduct(true)} className="flex-1">
+                <ShoppingCart className="h-5 w-5" />
+                Add to Cart
+              </Button>
+              <Button variant="secondary" size="lg" onClick={handleBuyNow} className="flex-1">
+                <Zap className="h-5 w-5" />
+                Buy Now
               </Button>
             </div>
-            {/* Product Categories */}
-            <div className="border-t pt-6">
-              <div className="grid grid-cols-2 gap-4 text-sm">
-                <div>
-                  <span className="text-gray-600">Category:</span>
-                  <span className="ml-2 font-medium">{currentProduct.category.name}</span>
-                </div>
-                <div>
-                  <span className="text-gray-600">{currentProduct.quantity}:</span>
-                  <span className="ml-2 font-medium text-green-600">In Stock</span>
-                </div>
+
+            {/* Trust row */}
+            <div className="grid grid-cols-3 gap-3">
+              <div className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink bg-paper-deep px-2 py-3 text-center">
+                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-marigold">
+                  <Truck className="h-4 w-4 text-ink" />
+                </span>
+                <span className="text-xs font-bold text-ink">Fast shipping</span>
+              </div>
+              <div className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink bg-paper-deep px-2 py-3 text-center">
+                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-marigold">
+                  <ShieldCheck className="h-4 w-4 text-ink" />
+                </span>
+                <span className="text-xs font-bold text-ink">Buyer protection</span>
+              </div>
+              <div className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink bg-paper-deep px-2 py-3 text-center">
+                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-marigold">
+                  <RotateCcw className="h-4 w-4 text-ink" />
+                </span>
+                <span className="text-xs font-bold text-ink">Easy returns</span>
               </div>
             </div>
+
+            {/* Meta */}
+            <div className="grid grid-cols-2 gap-4 rounded-2xl border-2 border-ink bg-paper-deep p-4 text-sm">
+              <div>
+                <span className="text-ink/60">Category: </span>
+                <span className="font-bold text-ink">{currentProduct.category?.name || 'ΓÇö'}</span>
+              </div>
+              <div>
+                <span className="text-ink/60">Availability: </span>
+                <span className="font-bold text-olive">{currentProduct.quantity > 0 ? 'In Stock' : 'In Stock'}</span>
+              </div>
+            </div>
+
+            {/* Accordion */}
+            <Accordion type="single" collapsible defaultValue="details" className="space-y-3">
+              <AccordionItem value="details">
+                <AccordionTrigger>Details</AccordionTrigger>
+                <AccordionContent>
+                  {currentProduct.description}
+                  {currentProduct.slug && <p className="mt-2 text-ink/60">SKU: {currentProduct.slug}</p>}
+                </AccordionContent>
+              </AccordionItem>
+              <AccordionItem value="shipping">
+                <AccordionTrigger>Shipping</AccordionTrigger>
+                <AccordionContent>
+                  Orders ship within 2ΓÇô4 business days. Free shipping on orders over $75, tracked delivery, and careful
+                  bazaar-style packaging on every parcel.
+                </AccordionContent>
+              </AccordionItem>
+              <AccordionItem value="returns">
+                <AccordionTrigger>Returns</AccordionTrigger>
+                <AccordionContent>
+                  30-day easy returns. Items must be unused and in original packaging ΓÇö refunds land within 5ΓÇô7 business
+                  days after we receive your return.
+                </AccordionContent>
+              </AccordionItem>
+            </Accordion>
           </div>
         </div>
+
+        {/* Related */}
+        {related.length > 0 && (
+          <section className="mt-16" aria-labelledby="related-heading">
+            <div className="mb-6 flex items-end justify-between gap-4">
+              <div>
+                <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+                  Pairs well with
+                </span>
+                <h2 id="related-heading" className="font-display mt-2 text-3xl font-bold text-ink">
+                  Related products
+                </h2>
+              </div>
+              <div className="flex gap-2">
+                <CarouselPrevious targetRef={relatedRef} />
+                <CarouselNext targetRef={relatedRef} />
+              </div>
+            </div>
+            <Carousel>
+              <CarouselContent ref={relatedRef}>
+                {related.map((product, i) => (
+                  <CarouselItem key={product._id} className="w-[260px] sm:w-[300px]">
+                    <BlurFade delay={Math.min(i * 0.05, 0.3)}>
+                      <ProductCard
+                        product={product}
+                        onQuickView={() => navigate(`/productDetails/${product._id}`)}
+                        onAddToCart={() => handleAddProduct(true)}
+                      />
+                    </BlurFade>
+                  </CarouselItem>
+                ))}
+              </CarouselContent>
+            </Carousel>
+            <p className="mt-6 text-center">
+              <Link
+                to="/products"
+                className="font-bold text-persimmon underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+              >
+                Browse the full souq ΓåÆ
+              </Link>
+            </p>
+          </section>
+        )}
       </div>
     </div>
   );
 }
-
-
-
-
-
-
-
-
-
-
-
-
-// "data"= [
-//   {
-//     "sold": 18672,
-//     "images": [
-//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
-//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
-//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
-//       "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
-//     ],
-//     "subcategory": [
-//       {
-//         "_id": "6407f1bcb575d3b90bf95797",
-//         "name": "Women's Clothing",
-//         "slug": "women's-clothing",
-//         "category": "6439d58a0049ad0b52b9003f"
-//       }
-//     ],
-//     "ratingsQuantity": 18,
-//     "_id": "6428ebc6dc1175abc65ca0b9",
-//     "title": "Woman Shawl",
-//     "slug": "woman-shawl",
-//     "description":
-//     "quantity": 225,
-//     "price": 191,
-//     "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
-//     "category": {
-//       "_id": "6439d58a0049ad0b52b9003f",
-//       "name": "Women's Fashion",
-//       "slug": "women's-fashion",
-//       "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
-//     },
-//     "brand": {
-//       "_id": "64089bbe24b25627a253158b",
-//       "name": "DeFacto",
-//       "slug": "defacto",
-//       "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
-//     },
-//     "ratingsAverage": 4.8,
-//     "createdAt": "2023-04-02T02:43:18.400Z",
-//     "updatedAt": "2025-08-05T18:55:36.632Z",
-//     "id": "6428ebc6dc1175abc65ca0b9"
-//   },
-
-// ]
-
-
-
-
-
-
-
-
-
-
-
-
-
-
diff --git a/src/Components/Shop/ShopProducts.jsx b/src/Components/Shop/ShopProducts.jsx
index 1ad9c7d..73733dd 100644
--- a/src/Components/Shop/ShopProducts.jsx
+++ b/src/Components/Shop/ShopProducts.jsx
@@ -1,166 +1,425 @@
-import Loader from '../Loader/ScaleLoader';
 import { useNavigate } from 'react-router-dom';
-import { useContext, useState } from 'react';
-import { Package, Search } from 'lucide-react';
+import { useContext, useMemo, useState } from 'react';
+import { ArrowUpDown, PackageSearch, RotateCcw, Search, SlidersHorizontal } from 'lucide-react';
 import Input from '../../ReusableComponents/Input';
-import { ProductCard } from '../ProductDetails/ProductCard';
+import { ProductCard, ProductCardSkeleton } from '../ProductDetails/ProductCard';
 import useAllProduct from '../../CustomHooks/useAllProduct';
 import { CartContext } from '../../Context/CartContext/CartContext';
 import { useDispatch } from 'react-redux';
 import { openCart } from "../../Redux/ToggleCartSlice"
 import { Helmet } from 'react-helmet';
 import Error from '../Error/Error';
+import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
+import {
+  DropdownMenu,
+  DropdownMenuContent,
+  DropdownMenuItem,
+  DropdownMenuLabel,
+  DropdownMenuTrigger,
+} from '../ui/dropdown-menu';
+import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
+import {
+  Pagination,
+  PaginationContent,
+  PaginationItem,
+  PaginationLink,
+  PaginationNext,
+  PaginationPrevious,
+} from '../ui/pagination';
+import { Card } from '../ui/card';
+import { BlurFade } from '../magic/blur-fade';
 
+const PAGE_SIZE = 9;
+
+const SORT_OPTIONS = [
+  { value: 'name', label: 'Sort by Name' },
+  { value: 'price-low', label: 'Price: Low to High' },
+  { value: 'price-high', label: 'Price: High to Low' },
+  { value: 'rating', label: 'Highest Rated' },
+];
+
+const PRICE_OPTIONS = [
+  { value: 'all', label: 'All prices' },
+  { value: 'under-100', label: 'Under $100' },
+  { value: '100-500', label: '$100 ΓÇô $500' },
+  { value: 'over-500', label: 'Over $500' },
+];
 
 export default function ShopProducts() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { addProduct } = useContext(CartContext);
   const [searchQuery, setSearchQuery] = useState('');
   const [sortBy, setSortBy] = useState('name');
   const [selectedCategory, setSelectedCategory] = useState('all');
+  const [tab, setTab] = useState('all');
+  const [priceFilter, setPriceFilter] = useState('all');
+  const [selectedBrands, setSelectedBrands] = useState([]);
+  const [minRating, setMinRating] = useState(0);
+  const [page, setPage] = useState(1);
 
   const { data, isError, isLoading } = useAllProduct();
 
-  if (isError) {
-    return (
-      <Error />
-    );
-  }
-
-  if (isLoading) {
-    return (
-      <Loader />
-    );
-  }
-
   function handleAddProduct(id) {
     addProduct(id,
       {
         onSuccess: () => {
           dispatch(openCart());
         }
       }
     );
   }
 
-  let AllProducts = data?.data?.data || [];
+  const AllProducts = useMemo(() => data?.data?.data || [], [data]);
 
-  // Filtering Product
-  const getFilteredProducts = () => {
-    let filtered = AllProducts;
+  const categories = useMemo(
+    () => ['all', ...Array.from(new Set(AllProducts.map((p) => (p.category?.name ? p.category.name : '')))).filter(Boolean)],
+    [AllProducts]
+  );
+  const brands = useMemo(
+    () => Array.from(new Set(AllProducts.map((p) => (p.brand?.name ? p.brand.name : '')))).filter(Boolean),
+    [AllProducts]
+  );
+
+  const filteredProducts = useMemo(() => {
+    let filtered = [...AllProducts];
+    if (tab === 'featured') {
+      filtered = filtered.filter((p) => (p.ratingsAverage || 0) >= 4.5);
+    }
+    if (tab === 'sale') {
+      filtered = filtered.filter((p) => p.price > p.priceAfterDiscount);
+    }
     if (selectedCategory !== 'all') {
-      filtered = filtered.filter(product => product.category.name && product.category.name === selectedCategory);
+      filtered = filtered.filter((product) => product.category?.name === selectedCategory);
     }
     if (searchQuery) {
-      filtered = filtered.filter(product =>
-        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
-        (product.category && product.category.name && product.category.name.toLowerCase().includes(searchQuery.toLowerCase()))
+      const q = searchQuery.toLowerCase();
+      filtered = filtered.filter((product) =>
+        product.title?.toLowerCase().includes(q) ||
+        product.category?.name?.toLowerCase().includes(q) ||
+        product.brand?.name?.toLowerCase().includes(q)
       );
     }
-    // Sorting
+    if (priceFilter === 'under-100') {
+      filtered = filtered.filter((p) => (p.priceAfterDiscount || p.price) < 100);
+    }
+    if (priceFilter === '100-500') {
+      filtered = filtered.filter((p) => {
+        const v = p.priceAfterDiscount || p.price;
+        return v >= 100 && v <= 500;
+      });
+    }
+    if (priceFilter === 'over-500') {
+      filtered = filtered.filter((p) => (p.priceAfterDiscount || p.price) > 500);
+    }
+    if (selectedBrands.length > 0) {
+      filtered = filtered.filter((p) => p.brand?.name && selectedBrands.includes(p.brand.name));
+    }
+    if (minRating > 0) {
+      filtered = filtered.filter((p) => (p.ratingsAverage || 0) >= minRating);
+    }
     filtered.sort((a, b) => {
       switch (sortBy) {
-        case 'price-low': return a.price - b.price;
-        case 'price-high': return b.price - a.price;
-        case 'rating': return b.ratingsAverage - a.ratingsAverage;
+        case 'price-low': return (a.priceAfterDiscount || a.price) - (b.priceAfterDiscount || b.price);
+        case 'price-high': return (b.priceAfterDiscount || b.price) - (a.priceAfterDiscount || a.price);
+        case 'rating': return (b.ratingsAverage || 0) - (a.ratingsAverage || 0);
         default:
-          if (!a.name && !b.name) return 0;
-          if (!a.name) return 1;
-          if (!b.name) return -1;
-          return a.name.localeCompare(b.name);
+          if (!a.title && !b.title) return 0;
+          if (!a.title) return 1;
+          if (!b.title) return -1;
+          return a.title.localeCompare(b.title);
       }
     });
     return filtered;
+  }, [AllProducts, tab, selectedCategory, searchQuery, priceFilter, selectedBrands, minRating, sortBy]);
+
+  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
+  const safePage = Math.min(page, totalPages);
+  const pagedProducts = filteredProducts.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
+
+  const resetFilters = () => {
+    setSearchQuery('');
+    setSortBy('name');
+    setSelectedCategory('all');
+    setTab('all');
+    setPriceFilter('all');
+    setSelectedBrands([]);
+    setMinRating(0);
+    setPage(1);
+  };
+
+  const toggleBrand = (name) => {
+    setPage(1);
+    setSelectedBrands((prev) => (prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]));
   };
 
-  const categories = ['all', ...Array.from(new Set(AllProducts.map(p => p.category.name && p.category.name ? p.category.name : ''))).filter(Boolean)];
+  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label || 'Sort';
+
+  const filterPanel = (
+    <div className="space-y-6">
+      <div>
+        <h3 className="font-display mb-3 text-base font-bold text-ink">Categories</h3>
+        <div className="space-y-1.5">
+          {categories.map((category) => (
+            <button
+              key={category}
+              type="button"
+              onClick={() => { setSelectedCategory(category); setPage(1); }}
+              className={`block w-full rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 ${selectedCategory === category
+                ? 'border-ink bg-ink text-paper'
+                : 'border-transparent text-ink/70 hover:border-clay hover:bg-clay/40'
+                }`}
+            >
+              {category === 'all' ? 'All products' : category.charAt(0).toUpperCase() + category.slice(1)}
+            </button>
+          ))}
+        </div>
+      </div>
+      <div>
+        <h3 className="font-display mb-3 text-base font-bold text-ink">Price</h3>
+        <div className="space-y-1.5" role="radiogroup" aria-label="Filter by price">
+          {PRICE_OPTIONS.map((opt) => (
+            <label
+              key={opt.value}
+              className={`flex cursor-pointer items-center gap-2.5 rounded-xl border-2 px-3 py-2 text-sm font-medium transition-colors ${priceFilter === opt.value ? 'border-ink bg-marigold/30' : 'border-transparent hover:bg-clay/40'}`}
+            >
+              <input
+                type="radio"
+                name="price-filter"
+                value={opt.value}
+                checked={priceFilter === opt.value}
+                onChange={() => { setPriceFilter(opt.value); setPage(1); }}
+                className="h-4 w-4 accent-[#E4572E]"
+              />
+              {opt.label}
+            </label>
+          ))}
+        </div>
+      </div>
+      <div>
+        <h3 className="font-display mb-3 text-base font-bold text-ink">Brand</h3>
+        <div className="space-y-1.5">
+          {brands.length === 0 && <p className="text-sm text-ink/60">No brands yet.</p>}
+          {brands.map((brand) => (
+            <label
+              key={brand}
+              className="flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-clay/40"
+            >
+              <input
+                type="checkbox"
+                checked={selectedBrands.includes(brand)}
+                onChange={() => toggleBrand(brand)}
+                className="h-4 w-4 rounded accent-[#223726]"
+              />
+              {brand}
+            </label>
+          ))}
+        </div>
+      </div>
+      <div>
+        <h3 className="font-display mb-3 text-base font-bold text-ink">Rating</h3>
+        <div className="flex gap-2">
+          {[0, 4, 4.5].map((r) => (
+            <button
+              key={r}
+              type="button"
+              onClick={() => { setMinRating(r); setPage(1); }}
+              aria-pressed={minRating === r}
+              className={`rounded-xl border-2 px-3 py-1.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 ${minRating === r ? 'border-ink bg-olive text-paper' : 'border-ink bg-paper text-ink hover:bg-marigold'}`}
+            >
+              {r === 0 ? 'Any' : `${r}+`}
+            </button>
+          ))}
+        </div>
+      </div>
+      <button
+        type="button"
+        onClick={resetFilters}
+        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+      >
+        <RotateCcw className="h-4 w-4" />
+        Reset filters
+      </button>
+    </div>
+  );
 
-  const filteredProducts = getFilteredProducts();
+  if (isError) {
+    return <Error />;
+  }
 
   return (
     <>
       <Helmet><title>Shop Products</title></Helmet>
-      <div className="py-8 min-h-screen bg-gray-50">
-        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
-          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>
-
-          <div className="mb-8">
-            <div className="flex flex-col lg:flex-row gap-4">
-              <div className="flex-1 relative">
-                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
-                <Input
-                  placeholder="Search products..."
-                  value={searchQuery}
-                  onChange={(e) => setSearchQuery(e.target.value)}
-                  className="pl-10"
-                />
-              </div>
-              <select
-                value={sortBy}
-                onChange={(e) => setSortBy(e.target.value)}
-                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
-              >
-                <option value="name">Sort by Name</option>
-                <option value="price-low">Price: Low to High</option>
-                <option value="price-high">Price: High to Low</option>
-                <option value="rating">Highest Rated</option>
-              </select>
-            </div>
-          </div>
+      <div className="min-h-screen bg-paper py-8 text-ink">
+        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
+          <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
+            The souq shelves
+          </span>
+          <h1 className="font-display mt-3 text-4xl font-bold text-ink">Shop All Products</h1>
+          <p className="mt-2 text-ink/70">Filter the bazaar by taste, price, and maker.</p>
 
-          <div className="flex flex-col lg:flex-row gap-8">
-            {/* Categories SideBar */}
-            <div className="lg:w-64 space-y-6">
-              <div className="bg-white p-6 rounded-xl shadow-lg">
-                <h3 className="font-semibold text-lg text-gray-900 mb-4">Categories</h3>
-                <div className="space-y-2">
-                  {categories.map(category => (
+          {/* Toolbar */}
+          <div className="mt-8 flex flex-col gap-4">
+            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
+              <Tabs value={tab} onValueChange={(v) => { setTab(v); setPage(1); }}>
+                <TabsList aria-label="Product collection">
+                  <TabsTrigger value="all">All</TabsTrigger>
+                  <TabsTrigger value="featured">Featured</TabsTrigger>
+                  <TabsTrigger value="sale">On sale</TabsTrigger>
+                </TabsList>
+              </Tabs>
+              <div className="flex flex-1 flex-col gap-3 sm:flex-row">
+                <div className="relative flex-1">
+                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
+                  <Input
+                    placeholder="Search products, categories, brands..."
+                    value={searchQuery}
+                    onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
+                    className="pl-10"
+                    aria-label="Search products"
+                  />
+                </div>
+                <DropdownMenu>
+                  <DropdownMenuTrigger asChild>
                     <button
-                      key={category}
-                      onClick={() => setSelectedCategory(category)}
-                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category
-                        ? 'bg-blue-100 text-blue-600'
-                        : 'text-gray-600 hover:bg-gray-100'
-                        }`}
+                      type="button"
+                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink bg-paper px-4 text-sm font-bold text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                     >
-                      {category.charAt(0).toUpperCase() + category.slice(1)}
+                      <ArrowUpDown className="h-4 w-4" />
+                      {activeSortLabel}
                     </button>
-                  ))}
-                </div>
+                  </DropdownMenuTrigger>
+                  <DropdownMenuContent align="end" className="w-52">
+                    <DropdownMenuLabel>Sort products</DropdownMenuLabel>
+                    {SORT_OPTIONS.map((opt) => (
+                      <DropdownMenuItem key={opt.value} onSelect={() => setSortBy(opt.value)}>
+                        {opt.label}
+                      </DropdownMenuItem>
+                    ))}
+                  </DropdownMenuContent>
+                </DropdownMenu>
+                <Sheet>
+                  <SheetTrigger asChild>
+                    <button
+                      type="button"
+                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink bg-olive px-4 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 lg:hidden"
+                    >
+                      <SlidersHorizontal className="h-4 w-4" />
+                      Filters
+                    </button>
+                  </SheetTrigger>
+                  <SheetContent side="left" className="overflow-y-auto border-ink bg-paper">
+                    <SheetHeader>
+                      <SheetTitle className="font-display text-ink">Filters</SheetTitle>
+                    </SheetHeader>
+                    <div className="mt-6">{filterPanel}</div>
+                  </SheetContent>
+                </Sheet>
               </div>
-
-              
             </div>
+          </div>
+
+          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
+            {/* Sidebar */}
+            <aside className="hidden w-64 shrink-0 lg:block">
+              <Card className="sticky top-24 p-5">{filterPanel}</Card>
+            </aside>
 
             <div className="flex-1">
-              <div className="flex justify-between items-center mb-6">
-                <p className="text-gray-600">
-                  Showing {filteredProducts.length} products
+              <div className="mb-6 flex items-center justify-between">
+                <p className="text-sm font-medium text-ink/70">
+                  {isLoading ? 'Loading the shelves...' : `Showing ${pagedProducts.length} of ${filteredProducts.length} products`}
                 </p>
-              </div>
-              {/* Product Items & Cards */}
-              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
-                {filteredProducts.map((product) => (
-                  <ProductCard
-                    key={product._id}
-                    product={product}
-                    onQuickView={() => navigate(`/productDetails/${product._id}`)}
-                    onAddToCart={() => handleAddProduct(product._id)}
-                  />
-                ))}
+                {(searchQuery || tab !== 'all' || selectedCategory !== 'all' || priceFilter !== 'all' || selectedBrands.length > 0 || minRating > 0) && (
+                  <button
+                    type="button"
+                    onClick={resetFilters}
+                    className="inline-flex items-center gap-1.5 text-sm font-bold text-persimmon underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                  >
+                    <RotateCcw className="h-3.5 w-3.5" />
+                    Reset
+                  </button>
+                )}
               </div>
 
-              {filteredProducts.length === 0 && (
-                <div className="text-center py-12">
-                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
+              {isLoading ? (
+                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="Loading products">
+                  {Array.from({ length: 9 }).map((_, i) => (
+                    <ProductCardSkeleton key={i} />
+                  ))}
                 </div>
+              ) : pagedProducts.length === 0 ? (
+                <Card className="p-12 text-center">
+                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
+                    <PackageSearch className="h-8 w-8 text-ink" />
+                  </div>
+                  <h2 className="font-display text-2xl font-bold text-ink">Nothing on this shelf</h2>
+                  <p className="mx-auto mt-2 max-w-sm text-ink/70">
+                    No products match your filters. Try a different search or clear everything to browse the full souq.
+                  </p>
+                  <button
+                    type="button"
+                    onClick={resetFilters}
+                    className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-marigold px-6 py-2.5 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
+                  >
+                    <RotateCcw className="h-4 w-4" />
+                    Reset filters
+                  </button>
+                </Card>
+              ) : (
+                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
+                  {pagedProducts.map((product, i) => (
+                    <BlurFade key={product._id} delay={Math.min(i * 0.05, 0.3)}>
+                      <ProductCard
+                        product={product}
+                        onQuickView={() => navigate(`/productDetails/${product._id}`)}
+                        onAddToCart={() => handleAddProduct(product._id)}
+                      />
+                    </BlurFade>
+                  ))}
+                </div>
+              )}
+
+              {!isLoading && totalPages > 1 && (
+                <Pagination className="mt-10">
+                  <PaginationContent>
+                    <PaginationItem>
+                      <PaginationPrevious
+                        href="#"
+                        onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }}
+                        aria-disabled={safePage === 1}
+                        className={safePage === 1 ? 'pointer-events-none opacity-50' : ''}
+                      />
+                    </PaginationItem>
+                    {Array.from({ length: totalPages }).slice(0, 5).map((_, i) => {
+                      const n = i + 1;
+                      return (
+                        <PaginationItem key={n}>
+                          <PaginationLink
+                            href="#"
+                            isActive={safePage === n}
+                            onClick={(e) => { e.preventDefault(); setPage(n); }}
+                          >
+                            {n}
+                          </PaginationLink>
+                        </PaginationItem>
+                      );
+                    })}
+                    <PaginationItem>
+                      <PaginationNext
+                        href="#"
+                        onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }}
+                        aria-disabled={safePage === totalPages}
+                        className={safePage === totalPages ? 'pointer-events-none opacity-50' : ''}
+                      />
+                    </PaginationItem>
+                  </PaginationContent>
+                </Pagination>
               )}
             </div>
           </div>
-
-
         </div>
       </div>
-    </>);
-};
\ No newline at end of file
+    </>
+  );
+}
diff --git a/src/ReusableComponents/Badge.jsx b/src/ReusableComponents/Badge.jsx
index 99dd3c9..4304496 100644
--- a/src/ReusableComponents/Badge.jsx
+++ b/src/ReusableComponents/Badge.jsx
@@ -1,16 +1,16 @@
 export const Badge = ({ children, variant = 'default' }) => {
     const variants = {
-        default: 'bg-gray-100 text-gray-800',
-        success: 'bg-green-100 text-green-800',
-        warning: 'bg-yellow-100 text-yellow-800',
-        danger: 'bg-red-100 text-red-800',
-        sale: 'bg-red-500 text-white'
+        default: 'bg-persimmon text-paper',
+        olive: 'bg-olive text-paper',
+        marigold: 'bg-marigold text-ink',
+        clay: 'bg-clay text-ink',
+        sale: 'bg-marigold text-ink',
+        outline: 'bg-paper text-ink'
     };
     return (
-    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
-        {children}    
+    <span className={`inline-flex items-center px-2.5 py-1 rounded-full border-2 border-ink text-xs font-bold ${variants[variant] || variants.default}`}>
+        {children}
     </span>
     );
 };
 export default Badge;
-
diff --git a/src/ReusableComponents/Button.jsx b/src/ReusableComponents/Button.jsx
index 4e5643f..340f658 100644
--- a/src/ReusableComponents/Button.jsx
+++ b/src/ReusableComponents/Button.jsx
@@ -1,25 +1,26 @@
-const Button = ({ children, type, variant = 'primary', size = 'md', className = '', onClick, disabled }) => {
-    const baseClasses = 'font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
+const Button = ({ children, type = 'button', variant = 'primary', size = 'md', className = '', onClick, disabled }) => {
+    const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0';
     const variants = {
-        primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl',
-        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
-        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
-        danger: 'bg-red-500 hover:bg-red-600 text-white'
+        primary: 'bg-persimmon text-paper hover:bg-persimmon/90',
+        secondary: 'bg-olive text-paper hover:bg-olive/90',
+        marigold: 'bg-marigold text-ink hover:bg-marigold/90',
+        outline: 'bg-paper text-ink hover:bg-marigold',
+        danger: 'bg-brick text-paper hover:bg-brick/90'
     };
     const sizes = {
         sm: 'px-3 py-1.5 text-sm',
         md: 'px-6 py-2.5',
         lg: 'px-8 py-3 text-lg'
     };
     return (
         <button
             type={type}
-            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
+            className={`${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
             onClick={onClick}
             disabled={disabled}
         >
             {children}
         </button>
     );
 };
-export default Button;
\ No newline at end of file
+export default Button;
diff --git a/src/ReusableComponents/Input.jsx b/src/ReusableComponents/Input.jsx
index 57e1e3a..8c4375f 100644
--- a/src/ReusableComponents/Input.jsx
+++ b/src/ReusableComponents/Input.jsx
@@ -1,17 +1,16 @@
-
 export const Input = ({ name, required, onBlur, id, type = 'text', placeholder, value, onChange, className = '' }) => {
     return (
         <input
             name={name}
             type={type}
             placeholder={placeholder}
             value={value}
             id={id}
             required={required}
             onBlur={onBlur}
             onChange={onChange}
-            className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
+            className={`w-full px-4 py-2.5 rounded-xl border-2 border-ink bg-paper text-ink placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 transition-all ${className}`}
         />
     );
 }
-export default Input;
\ No newline at end of file
+export default Input;

diff --git a/src/Components/ProductDetails/ProductDetails.jsx b/src/Components/ProductDetails/ProductDetails.jsx
index 2f97cac..464dd09 100644
--- a/src/Components/ProductDetails/ProductDetails.jsx
+++ b/src/Components/ProductDetails/ProductDetails.jsx
@@ -8,20 +8,21 @@ import { ProductCard, ProductCardSkeleton } from './ProductCard';
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
+import toast from 'react-hot-toast';
 
 export default function ProductDetails() {
   const { data, isLoading, isError } = useAllProduct();
   const { addProduct } = useContext(CartContext);
   const dispatch = useDispatch();
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [qty, setQty] = useState(1);
   const navigate = useNavigate();
   const { id } = useParams();
   const relatedRef = useRef(null);
@@ -29,27 +30,32 @@ export default function ProductDetails() {
   const products = useMemo(() => data?.data?.data || [], [data]);
   const currentProduct = useMemo(() => products.find((p) => p._id === id), [products, id]);
 
   const related = useMemo(() => {
     if (!currentProduct) return [];
     return products
       .filter((p) => p._id !== currentProduct._id && p.category?.name === currentProduct.category?.name)
       .slice(0, 8);
   }, [products, currentProduct]);
 
-  function handleAddProduct(openSheet = true) {
-    addProduct(currentProduct._id, openSheet ? { onSuccess: () => dispatch(openCart()) } : undefined);
+  // NOTE: qty stepper is display-only ΓÇö Cart API addProduct(productId) accepts
+  // no quantity param (see CartProvider AddProduct mutation); quantity is
+  // adjusted in-cart via UpdateCount.
+  function handleAddProduct(id, openSheet = true) {
+    addProduct(id, openSheet ? { onSuccess: () => dispatch(openCart()) } : undefined);
   }
 
   function handleBuyNow() {
-    addProduct(currentProduct._id);
-    navigate('/cart');
+    addProduct(currentProduct._id, {
+      onSuccess: () => navigate('/cart'),
+      onError: () => toast.error('Failed to add product to cart'),
+    });
   }
 
   if (isError) {
     return (
       <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12">
         <Card className="w-full max-w-md p-10 text-center">
           <h3 className="font-display text-2xl font-bold text-ink">Couldn&apos;t load this product</h3>
           <p className="mt-2 text-ink/70">Please check your connection and try again.</p>
           <div className="mt-6 flex justify-center gap-3">
             <Button variant="outline" onClick={() => navigate('/products')}>Back to shop</Button>
@@ -205,21 +211,21 @@ export default function ProductDetails() {
                 <span className="min-w-12 border-x-2 border-ink px-4 py-2 text-center font-bold" aria-live="polite">{qty}</span>
                 <button
                   type="button"
                   onClick={() => setQty((q) => Math.min(99, q + 1))}
                   className="p-3 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
                   aria-label="Increase quantity"
                 >
                   <Plus className="h-4 w-4" />
                 </button>
               </div>
-              <Button variant="primary" size="lg" onClick={() => handleAddProduct(true)} className="flex-1">
+              <Button variant="primary" size="lg" onClick={() => handleAddProduct(currentProduct._id, true)} className="flex-1">
                 <ShoppingCart className="h-5 w-5" />
                 Add to Cart
               </Button>
               <Button variant="secondary" size="lg" onClick={handleBuyNow} className="flex-1">
                 <Zap className="h-5 w-5" />
                 Buy Now
               </Button>
             </div>
 
             {/* Trust row */}
@@ -245,21 +251,21 @@ export default function ProductDetails() {
             </div>
 
             {/* Meta */}
             <div className="grid grid-cols-2 gap-4 rounded-2xl border-2 border-ink bg-paper-deep p-4 text-sm">
               <div>
                 <span className="text-ink/60">Category: </span>
                 <span className="font-bold text-ink">{currentProduct.category?.name || 'ΓÇö'}</span>
               </div>
               <div>
                 <span className="text-ink/60">Availability: </span>
-                <span className="font-bold text-olive">{currentProduct.quantity > 0 ? 'In Stock' : 'In Stock'}</span>
+                <span className={currentProduct.quantity > 0 ? 'font-bold text-olive' : 'font-bold text-brick'}>{currentProduct.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span>
               </div>
             </div>
 
             {/* Accordion */}
             <Accordion type="single" collapsible defaultValue="details" className="space-y-3">
               <AccordionItem value="details">
                 <AccordionTrigger>Details</AccordionTrigger>
                 <AccordionContent>
                   {currentProduct.description}
                   {currentProduct.slug && <p className="mt-2 text-ink/60">SKU: {currentProduct.slug}</p>}
@@ -301,21 +307,21 @@ export default function ProductDetails() {
               </div>
             </div>
             <Carousel>
               <CarouselContent ref={relatedRef}>
                 {related.map((product, i) => (
                   <CarouselItem key={product._id} className="w-[260px] sm:w-[300px]">
                     <BlurFade delay={Math.min(i * 0.05, 0.3)}>
                       <ProductCard
                         product={product}
                         onQuickView={() => navigate(`/productDetails/${product._id}`)}
-                        onAddToCart={() => handleAddProduct(true)}
+                        onAddToCart={() => handleAddProduct(product._id, true)}
                       />
                     </BlurFade>
                   </CarouselItem>
                 ))}
               </CarouselContent>
             </Carousel>
             <p className="mt-6 text-center">
               <Link
                 to="/products"
                 className="font-bold text-persimmon underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
diff --git a/src/ReusableComponents/Input.jsx b/src/ReusableComponents/Input.jsx
index 8c4375f..ad5f656 100644
--- a/src/ReusableComponents/Input.jsx
+++ b/src/ReusableComponents/Input.jsx
@@ -1,16 +1,17 @@
-export const Input = ({ name, required, onBlur, id, type = 'text', placeholder, value, onChange, className = '' }) => {
+export const Input = ({ name, required, onBlur, id, type = 'text', placeholder, value, onChange, className = '', ...rest }) => {
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
+            {...rest}
             className={`w-full px-4 py-2.5 rounded-xl border-2 border-ink bg-paper text-ink placeholder:text-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 transition-all ${className}`}
         />
     );
 }
 export default Input;

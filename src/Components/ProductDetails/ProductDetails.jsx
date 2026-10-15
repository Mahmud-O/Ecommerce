import { useContext, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '../../ReusableComponents/Button';
import useAllProduct from '../../CustomHooks/useAllProduct';
import { Minus, Plus, Star, Truck, ShieldCheck, RotateCcw, ShoppingCart, Zap } from 'lucide-react';
import Badge from '../../ReusableComponents/Badge';
import { ProductCard, ProductCardSkeleton } from './ProductCard';
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
import toast from 'react-hot-toast';

export default function ProductDetails() {
  const { data, isLoading, isError } = useAllProduct();
  const { addProduct } = useContext(CartContext);
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const relatedRef = useRef(null);

  const products = useMemo(() => data?.data?.data || [], [data]);
  const currentProduct = useMemo(() => products.find((p) => p._id === id), [products, id]);

  const related = useMemo(() => {
    if (!currentProduct) return [];
    return products
      .filter((p) => p._id !== currentProduct._id && p.category?.name === currentProduct.category?.name)
      .slice(0, 8);
  }, [products, currentProduct]);

  // NOTE: qty stepper is display-only — Cart API addProduct(productId) accepts
  // no quantity param (see CartProvider AddProduct mutation); quantity is
  // adjusted in-cart via UpdateCount.
  function handleAddProduct(id, openSheet = true) {
    addProduct(id, openSheet ? { onSuccess: () => dispatch(openCart()) } : undefined);
  }

  function handleBuyNow() {
    addProduct(currentProduct._id, {
      onSuccess: () => navigate('/cart'),
      onError: () => toast.error('Failed to add product to cart'),
    });
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12">
        <Card className="w-full max-w-md p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-ink">Couldn&apos;t load this product</h3>
          <p className="mt-2 text-ink/70">Please check your connection and try again.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" onClick={() => navigate('/products')}>Back to shop</Button>
            <Button variant="primary" onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </Card>
      </div>
    );
  }

  if (isLoading || !currentProduct) {
    return (
      <div className="min-h-screen bg-paper py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-4 w-64" />
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <Skeleton className="aspect-square w-full" />
              <div className="flex gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-20" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-9 w-3/4" />
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const onSale = currentProduct.price > currentProduct.priceAfterDiscount;
  const discount = onSale
    ? Math.round((1 - currentProduct.priceAfterDiscount / currentProduct.price) * 100)
    : 0;
  const gallery = currentProduct.images?.length ? currentProduct.images : [currentProduct.imageCover];

  return (
    <div className="min-h-screen bg-paper py-8 text-ink">
      <Helmet><title>{currentProduct.title} - Souq</title></Helmet>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/60">
          <button onClick={() => navigate('/')} className="font-semibold hover:text-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">Home</button>
          <span aria-hidden="true">/</span>
          <button onClick={() => navigate('/products')} className="font-semibold hover:text-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">Shop</button>
          <span aria-hidden="true">/</span>
          <span className="max-w-[40ch] truncate font-semibold text-ink">{currentProduct.title}</span>
        </nav>

        {/* Gallery + info */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div className="space-y-4">
            <Card className="relative overflow-hidden">
              <div className="aspect-square bg-paper-deep">
                <img
                  src={gallery[currentImageIndex] || currentProduct.imageCover}
                  alt={currentProduct.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {onSale && (
                <span className="absolute left-4 top-4 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold text-ink">
                  -{discount}% SALE
                </span>
              )}
            </Card>
            {gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1" role="tablist" aria-label="Product images">
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === currentImageIndex}
                    aria-label={`View image ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      'h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2',
                      index === currentImageIndex ? 'border-persimmon' : 'border-ink hover:border-persimmon'
                    )}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              {currentProduct.category?.name && (
                <span className="inline-flex items-center rounded-full bg-clay/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-ink/70">
                  {currentProduct.category.name}
                </span>
              )}
              <h1 className="font-display mt-3 text-3xl font-bold text-ink lg:text-4xl">
                {currentProduct.title}
              </h1>
              <div className="mb-4 mt-3 flex items-center gap-3">
                <div className="flex text-marigold" aria-label={`Rated ${currentProduct.ratingsAverage} out of 5`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn('h-5 w-5', i < Math.floor(currentProduct.ratingsAverage || 0) ? 'fill-current' : 'text-clay')} />
                  ))}
                </div>
                <span className="text-sm text-ink/60">({currentProduct.ratingsQuantity || 0} reviews)</span>
              </div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="font-display text-3xl font-bold text-persimmon">
                  ${currentProduct.priceAfterDiscount || currentProduct.price}
                </span>
                {onSale && (
                  <>
                    <span className="text-xl text-ink/50 line-through">${currentProduct.price}</span>
                    <Badge variant="sale">{discount}% OFF</Badge>
                  </>
                )}
              </div>
            </div>

            <p className="leading-relaxed text-ink/75">{currentProduct.description}</p>

            {currentProduct.brand?.name && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-ink/60">Brand:</span>
                <Badge variant="clay">{currentProduct.brand.name}</Badge>
              </div>
            )}

            {/* Qty stepper + CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex items-center rounded-xl border-2 border-ink bg-paper" role="group" aria-label="Quantity">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 transition-colors hover:bg-clay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
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
              <Button variant="primary" size="lg" onClick={() => handleAddProduct(currentProduct._id, true)} className="flex-1">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="secondary" size="lg" onClick={handleBuyNow} className="flex-1">
                <Zap className="h-5 w-5" />
                Buy Now
              </Button>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink bg-paper-deep px-2 py-3 text-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-marigold">
                  <Truck className="h-4 w-4 text-ink" />
                </span>
                <span className="text-xs font-bold text-ink">Fast shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink bg-paper-deep px-2 py-3 text-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-marigold">
                  <ShieldCheck className="h-4 w-4 text-ink" />
                </span>
                <span className="text-xs font-bold text-ink">Buyer protection</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink bg-paper-deep px-2 py-3 text-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-marigold">
                  <RotateCcw className="h-4 w-4 text-ink" />
                </span>
                <span className="text-xs font-bold text-ink">Easy returns</span>
              </div>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl border-2 border-ink bg-paper-deep p-4 text-sm">
              <div>
                <span className="text-ink/60">Category: </span>
                <span className="font-bold text-ink">{currentProduct.category?.name || '—'}</span>
              </div>
              <div>
                <span className="text-ink/60">Availability: </span>
                <span className={currentProduct.quantity > 0 ? 'font-bold text-olive' : 'font-bold text-brick'}>{currentProduct.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible defaultValue="details" className="space-y-3">
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
                  Orders ship within 2–4 business days. Free shipping on orders over $75, tracked delivery, and careful
                  bazaar-style packaging on every parcel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>Returns</AccordionTrigger>
                <AccordionContent>
                  30-day easy returns. Items must be unused and in original packaging — refunds land within 5–7 business
                  days after we receive your return.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
                  Pairs well with
                </span>
                <h2 id="related-heading" className="font-display mt-2 text-3xl font-bold text-ink">
                  Related products
                </h2>
              </div>
              <div className="flex gap-2">
                <CarouselPrevious targetRef={relatedRef} />
                <CarouselNext targetRef={relatedRef} />
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
                        onAddToCart={() => handleAddProduct(product._id, true)}
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
              >
                Browse the full souq →
              </Link>
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

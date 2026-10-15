import { useState } from 'react';
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';

export const ProductCard = ({ product, onQuickView, onAddToCart }) => {
  const [wished, setWished] = useState(false);
  if (!product) return null;

  const onSale = product.price > product.priceAfterDiscount;
  const discount = onSale
    ? Math.round((1 - product.priceAfterDiscount / product.price) * 100)
    : 0;
  const shortTitle = product.title?.split(' ').slice(0, 3).join(' ') || product.title;

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1">
      {/* Image 4:3 */}
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-paper-deep">
        <button
          type="button"
          onClick={onQuickView}
          className="block h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-inset"
          aria-label={`View ${product.title}`}
        >
          <img
            src={product.imageCover}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {onSale && (
          <span className="absolute left-3 top-3 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-2.5 py-0.5 text-xs font-bold text-ink">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => setWished((w) => !w)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wished}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
        >
          <Heart className={cn('h-4 w-4', wished && 'fill-persimmon text-persimmon')} />
        </button>

        <div className="absolute inset-x-3 bottom-3 flex translate-y-2 justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={onQuickView}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onAddToCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-ink text-paper transition-colors hover:bg-persimmon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {product.category?.name && (
          <span className="inline-flex w-fit items-center rounded-full bg-clay/60 px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-ink/70">
            {product.category.name}
          </span>
        )}

        <button
          type="button"
          onClick={onQuickView}
          className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 rounded"
        >
          <h3 className="font-display truncate text-lg font-bold text-ink transition-colors group-hover:text-persimmon">
            {shortTitle}
          </h3>
        </button>

        <div className="flex items-center gap-1.5">
          <div className="flex text-marigold" aria-label={`Rated ${product.ratingsAverage || 0} out of 5`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn('h-4 w-4', i < Math.floor(product.ratingsAverage || 0) ? 'fill-current' : 'text-clay')}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-ink/60">({product.ratingsQuantity || 0})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold text-persimmon">
            ${product.priceAfterDiscount || product.price}
          </span>
          {onSale && <span className="text-sm text-ink/50 line-through">${product.price}</span>}
        </div>

        <button
          type="button"
          onClick={onAddToCart}
          className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-olive px-4 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </Card>
  );
};

export const ProductCardSkeleton = () => (
  <Card className="flex h-full flex-col overflow-hidden" aria-hidden="true">
    <Skeleton className="aspect-[4/3] w-full rounded-none border-b-2 border-ink" />
    <div className="flex flex-1 flex-col gap-3 p-4">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="mt-auto h-11 w-full" />
    </div>
  </Card>
);

export default ProductCard;

import useAllCategories from '@/CustomHooks/useAllCategories';
import { ArrowRight, PackageSearch, RotateCcw, Search, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import Input from '../../ReusableComponents/Input';
import { BlurFade } from '../magic/blur-fade';

const CollectionList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useAllCategories();
  const [query, setQuery] = useState('');

  const categories = useMemo(() => data?.data?.data || [], [data]);
  const visible = useMemo(() => {
    if (!query) return categories;
    const q = query.toLowerCase();
    return categories.filter((c) => c.name?.toLowerCase().includes(q));
  }, [categories, query]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-paper py-12">
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="mx-auto h-8 w-64" />
          <Skeleton className="mx-auto mt-4 h-5 w-96 max-w-full" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="overflow-hidden" aria-hidden="true">
                <Skeleton className="aspect-square w-full rounded-none border-b-2 border-ink" />
                <div className="space-y-2 p-5">
                  <Skeleton className="mx-auto h-5 w-2/3" />
                  <Skeleton className="mx-auto h-4 w-1/3" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-12">
        <Card className="w-full max-w-md border-brick p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-ink">Couldn&apos;t load collections</h3>
          <p className="mt-2 text-sm text-ink/70">{error?.message || 'Please try again.'}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl border-2 border-ink bg-persimmon px-6 py-2 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
          >
            Try Again
          </button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet><title>Collections - Discover Amazing Categories</title></Helmet>
      <div className="min-h-screen bg-paper py-12 text-ink">
        <div className="container mx-auto px-4 py-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-marigold px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              <Sparkles className="h-4 w-4" />
              Curated Collections
            </span>
            <h2 className="font-display mt-4 text-4xl font-bold text-ink md:text-5xl">
              Shop by Category
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-ink/70">
              Explore our handpicked collections and find exactly what you&apos;re looking for
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
                <Input
                  placeholder="Search collections..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                  aria-label="Search categories"
                />
              </div>
            </div>
          </div>

          {visible.length === 0 ? (
            <Card className="mx-auto max-w-md p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
                <PackageSearch className="h-8 w-8 text-ink" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink">No collections found</h3>
              <p className="mt-2 text-ink/70">
                {query ? 'Try a different search term.' : "We're working on bringing you amazing collections. Check back soon!"}
              </p>
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-marigold px-6 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset search
                </button>
              )}
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((category, i) => (
                <BlurFade key={category._id} delay={Math.min(i * 0.05, 0.3)}>
                  <Card
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/products`)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/products`); }}
                    className="group cursor-pointer overflow-hidden transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-square overflow-hidden border-b-2 border-ink bg-paper-deep p-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        loading="lazy"
                        className="h-full w-full rounded-xl border-2 border-ink object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-persimmon">
                        {category.name}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-olive">
                        Explore Collection
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Card>
                </BlurFade>
              ))}
            </div>
          )}

          {visible.length > 0 && (
            <div className="mt-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-olive px-6 py-2.5 font-bold text-paper">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-marigold" />
                {visible.length} collection{visible.length === 1 ? '' : 's'} ready to explore
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CollectionList;

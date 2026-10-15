import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Error from '../Error/Error';
import { Helmet } from 'react-helmet';
import { useMemo, useState } from 'react';
import { ArrowUpRight, PackageSearch, RotateCcw, Search } from 'lucide-react';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import Input from '../../ReusableComponents/Input';
import { BlurFade } from '../magic/blur-fade';

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

  const [query, setQuery] = useState('');

  const allBrands = useMemo(() => data?.data?.data || [], [data]);
  const visible = useMemo(() => {
    if (!query) return allBrands;
    const q = query.toLowerCase();
    return allBrands.filter((b) => b.name?.toLowerCase().includes(q));
  }, [allBrands, query]);

  if (isError) {
    return (
      <Error />
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-paper py-12">
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="mx-auto h-8 w-56" />
          <Skeleton className="mx-auto mt-4 h-5 w-96 max-w-full" />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i} className="p-6" aria-hidden="true">
                <Skeleton className="mx-auto h-20 w-20 rounded-full" />
                <Skeleton className="mx-auto mt-4 h-5 w-2/3" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet><title>Collections - Discover Amazing Brands</title></Helmet>
      <div className="min-h-screen bg-paper py-12 text-ink">
        <div className="container mx-auto px-4 py-4">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border-2 border-ink bg-olive px-4 py-1 text-xs font-bold uppercase tracking-widest text-paper">
              Trusted makers
            </span>
            <h2 className="font-display mt-4 text-4xl font-bold text-ink md:text-5xl">
              Our Brands
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-ink/70">
              Discover top-quality brands that we&apos;re proud to partner with
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
                <Input
                  placeholder="Search brands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                  aria-label="Search brands"
                />
              </div>
            </div>
          </div>

          {visible.length === 0 ? (
            <Card className="mx-auto max-w-md p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
                <PackageSearch className="h-8 w-8 text-ink" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink">No brands found</h3>
              <p className="mt-2 text-ink/70">Try a different search term.</p>
              <button
                onClick={() => setQuery('')}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-marigold px-6 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset search
              </button>
            </Card>
          ) : (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {visible.map((brand, i) => (
                <BlurFade key={brand._id} delay={Math.min(i * 0.04, 0.3)}>
                  <Card className="group relative overflow-hidden p-6 text-center transition-transform hover:-translate-y-1">
                    <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-clay bg-paper-deep p-4">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        loading="lazy"
                        className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mt-4 inline-block rounded-lg border-2 border-ink bg-clay/50 px-3 py-1.5 text-sm font-bold text-ink transition-colors group-hover:bg-marigold">
                      {brand.name}
                    </h3>
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Card>
                </BlurFade>
              ))}
            </div>
          )}

          {visible.length > 0 && (
            <div className="mt-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-2.5 font-bold text-ink">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-olive" />
                {visible.length} premium brand{visible.length === 1 ? '' : 's'} available
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

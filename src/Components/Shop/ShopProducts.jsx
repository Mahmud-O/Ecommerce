import { useNavigate } from 'react-router-dom';
import { useContext, useMemo, useState } from 'react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { Card } from '../ui/card';
import { BlurFade } from '../magic/blur-fade';

const PAGE_SIZE = 9;

const SORT_OPTIONS = [
  { value: 'name', label: 'Sort by Name' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const PRICE_OPTIONS = [
  { value: 'all', label: 'All prices' },
  { value: 'under-100', label: 'Under $100' },
  { value: '100-500', label: '$100 – $500' },
  { value: 'over-500', label: 'Over $500' },
];

export default function ShopProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addProduct } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [tab, setTab] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isError, isLoading } = useAllProduct();

  function handleAddProduct(id) {
    addProduct(id,
      {
        onSuccess: () => {
          dispatch(openCart());
        }
      }
    );
  }

  const AllProducts = useMemo(() => data?.data?.data || [], [data]);

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(AllProducts.map((p) => (p.category?.name ? p.category.name : '')))).filter(Boolean)],
    [AllProducts]
  );
  const brands = useMemo(
    () => Array.from(new Set(AllProducts.map((p) => (p.brand?.name ? p.brand.name : '')))).filter(Boolean),
    [AllProducts]
  );

  const filteredProducts = useMemo(() => {
    let filtered = [...AllProducts];
    if (tab === 'featured') {
      filtered = filtered.filter((p) => (p.ratingsAverage || 0) >= 4.5);
    }
    if (tab === 'sale') {
      filtered = filtered.filter((p) => p.price > p.priceAfterDiscount);
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category?.name === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.title?.toLowerCase().includes(q) ||
        product.category?.name?.toLowerCase().includes(q) ||
        product.brand?.name?.toLowerCase().includes(q)
      );
    }
    if (priceFilter === 'under-100') {
      filtered = filtered.filter((p) => (p.priceAfterDiscount || p.price) < 100);
    }
    if (priceFilter === '100-500') {
      filtered = filtered.filter((p) => {
        const v = p.priceAfterDiscount || p.price;
        return v >= 100 && v <= 500;
      });
    }
    if (priceFilter === 'over-500') {
      filtered = filtered.filter((p) => (p.priceAfterDiscount || p.price) > 500);
    }
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => p.brand?.name && selectedBrands.includes(p.brand.name));
    }
    if (minRating > 0) {
      filtered = filtered.filter((p) => (p.ratingsAverage || 0) >= minRating);
    }
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return (a.priceAfterDiscount || a.price) - (b.priceAfterDiscount || b.price);
        case 'price-high': return (b.priceAfterDiscount || b.price) - (a.priceAfterDiscount || a.price);
        case 'rating': return (b.ratingsAverage || 0) - (a.ratingsAverage || 0);
        default:
          if (!a.title && !b.title) return 0;
          if (!a.title) return 1;
          if (!b.title) return -1;
          return a.title.localeCompare(b.title);
      }
    });
    return filtered;
  }, [AllProducts, tab, selectedCategory, searchQuery, priceFilter, selectedBrands, minRating, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagedProducts = filteredProducts.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const resetFilters = () => {
    setSearchQuery('');
    setSortBy('name');
    setSelectedCategory('all');
    setTab('all');
    setPriceFilter('all');
    setSelectedBrands([]);
    setMinRating(0);
    setPage(1);
  };

  const toggleBrand = (name) => {
    setPage(1);
    setSelectedBrands((prev) => (prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]));
  };

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label || 'Sort';

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <h3 className="font-display mb-3 text-base font-bold text-ink">Categories</h3>
        <div className="space-y-1.5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => { setSelectedCategory(category); setPage(1); }}
              className={`block w-full rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 ${selectedCategory === category
                ? 'border-ink bg-ink text-paper'
                : 'border-transparent text-ink/70 hover:border-clay hover:bg-clay/40'
                }`}
            >
              {category === 'all' ? 'All products' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display mb-3 text-base font-bold text-ink">Price</h3>
        <div className="space-y-1.5" role="radiogroup" aria-label="Filter by price">
          {PRICE_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2.5 rounded-xl border-2 px-3 py-2 text-sm font-medium transition-colors ${priceFilter === opt.value ? 'border-ink bg-marigold/30' : 'border-transparent hover:bg-clay/40'}`}
            >
              <input
                type="radio"
                name="price-filter"
                value={opt.value}
                checked={priceFilter === opt.value}
                onChange={() => { setPriceFilter(opt.value); setPage(1); }}
                className="h-4 w-4 accent-[#E4572E]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display mb-3 text-base font-bold text-ink">Brand</h3>
        <div className="space-y-1.5">
          {brands.length === 0 && <p className="text-sm text-ink/60">No brands yet.</p>}
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-clay/40"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 rounded accent-[#223726]"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display mb-3 text-base font-bold text-ink">Rating</h3>
        <div className="flex gap-2">
          {[0, 4, 4.5].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => { setMinRating(r); setPage(1); }}
              aria-pressed={minRating === r}
              className={`rounded-xl border-2 px-3 py-1.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 ${minRating === r ? 'border-ink bg-olive text-paper' : 'border-ink bg-paper text-ink hover:bg-marigold'}`}
            >
              {r === 0 ? 'Any' : `${r}+`}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={resetFilters}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
      >
        <RotateCcw className="h-4 w-4" />
        Reset filters
      </button>
    </div>
  );

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Helmet><title>Shop Products</title></Helmet>
      <div className="min-h-screen bg-paper py-8 text-ink">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
            The souq shelves
          </span>
          <h1 className="font-display mt-3 text-4xl font-bold text-ink">Shop All Products</h1>
          <p className="mt-2 text-ink/70">Filter the bazaar by taste, price, and maker.</p>

          {/* Toolbar */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <Tabs value={tab} onValueChange={(v) => { setTab(v); setPage(1); }}>
                <TabsList aria-label="Product collection">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="sale">On sale</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
                  <Input
                    placeholder="Search products, categories, brands..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                    className="pl-10"
                    aria-label="Search products"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink bg-paper px-4 text-sm font-bold text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                    >
                      <ArrowUpDown className="h-4 w-4" />
                      {activeSortLabel}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-52">
                    <DropdownMenuLabel>Sort products</DropdownMenuLabel>
                    {SORT_OPTIONS.map((opt) => (
                      <DropdownMenuItem key={opt.value} onSelect={() => setSortBy(opt.value)}>
                        {opt.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink bg-olive px-4 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 lg:hidden"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="overflow-y-auto border-ink bg-paper">
                    <SheetHeader>
                      <SheetTitle className="font-display text-ink">Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">{filterPanel}</div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <Card className="sticky top-24 p-5">{filterPanel}</Card>
            </aside>

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-medium text-ink/70">
                  {isLoading ? 'Loading the shelves...' : `Showing ${pagedProducts.length} of ${filteredProducts.length} products`}
                </p>
                {(searchQuery || tab !== 'all' || selectedCategory !== 'all' || priceFilter !== 'all' || selectedBrands.length > 0 || minRating > 0) && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-persimmon underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset
                  </button>
                )}
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-label="Loading products">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              ) : pagedProducts.length === 0 ? (
                <Card className="p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-clay/60">
                    <PackageSearch className="h-8 w-8 text-ink" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-ink">Nothing on this shelf</h2>
                  <p className="mx-auto mt-2 max-w-sm text-ink/70">
                    No products match your filters. Try a different search or clear everything to browse the full souq.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-marigold px-6 py-2.5 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset filters
                  </button>
                </Card>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {pagedProducts.map((product, i) => (
                    <BlurFade key={product._id} delay={Math.min(i * 0.05, 0.3)}>
                      <ProductCard
                        product={product}
                        onQuickView={() => navigate(`/productDetails/${product._id}`)}
                        onAddToCart={() => handleAddProduct(product._id)}
                      />
                    </BlurFade>
                  ))}
                </div>
              )}

              {!isLoading && totalPages > 1 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }}
                        aria-disabled={safePage === 1}
                        className={safePage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }).slice(0, 5).map((_, i) => {
                      const n = i + 1;
                      return (
                        <PaginationItem key={n}>
                          <PaginationLink
                            href="#"
                            isActive={safePage === n}
                            onClick={(e) => { e.preventDefault(); setPage(n); }}
                          >
                            {n}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }}
                        aria-disabled={safePage === totalPages}
                        className={safePage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

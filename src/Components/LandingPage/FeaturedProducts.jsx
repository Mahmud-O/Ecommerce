import ScaleLoading from '../Loader/ScaleLoader';
import useAllProduct from '../../CustomHooks/useAllProduct';
import { Star } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { useDispatch } from 'react-redux';
import { openCart } from "../../Redux/ToggleCartSlice"
import { ProductCard } from '../ProductDetails/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { BlurFade } from '../magic/blur-fade';

const FILTERS = [
    { value: 'all', label: 'All' },
    { value: 'featured', label: 'Featured' },
    { value: 'sale', label: 'On sale' },
];

export const FeaturedProducts = () => {
    const { addProduct } = useContext(CartContext);
    const { data, isError, isLoading } = useAllProduct();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('all');

    const handlAddProduct = async (id) => {
        await addProduct(id,
            {
                onSuccess: () => {
                    dispatch(openCart());
                }
            }
        )
    }

    let AllProducts = data?.data?.data || [];
    const highestSold = AllProducts.length
        ? [...AllProducts].sort((a, b) => (b.sold || 0) - (a.sold || 0))[0]
        : null;

    const filtered = AllProducts.filter((product) => {
        if (filter === 'sale') return product.price > product.priceAfterDiscount;
        if (filter === 'featured') return (product.ratingsAverage || 0) >= 4.5;
        return true;
    });
    const visible = filtered.slice(0, 8);

    return (
        <section className="border-y-2 border-ink bg-paper py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="space-y-3">
                        <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
                            Handpicked
                        </span>
                        <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Featured Products</h2>
                        <p className="max-w-2xl text-lg text-ink/70">
                            Handpicked items that combine style, quality, and innovation
                        </p>
                    </div>
                    <Tabs value={filter} onValueChange={setFilter}>
                        <TabsList aria-label="Filter featured products">
                            {FILTERS.map((f) => (
                                <TabsTrigger key={f.value} value={f.value}>{f.label}</TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                {/* Highest Sold Product */}
                {highestSold && (
                    <div className="hard-shadow mb-12 flex flex-col items-center gap-6 rounded-2xl border-2 border-ink bg-paper-deep p-6 sm:flex-row sm:p-8">
                        <div className="relative">
                            <img
                                src={highestSold.imageCover}
                                alt={highestSold.title}
                                className="h-48 w-48 rounded-xl border-2 border-ink object-cover"
                            />
                            <span className="absolute -right-3 -top-3 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold text-ink">
                                Bestseller
                            </span>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="font-display mb-2 text-2xl font-bold text-ink">{highestSold.title}</h3>
                            <div className="mb-2 flex items-center justify-center sm:justify-start">
                                <div className="flex text-marigold">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(highestSold.ratingsAverage) ? 'fill-current' : ''}`} />
                                    ))}
                                </div>
                                <span className="ml-2 text-sm text-ink/60">({highestSold.ratingsQuantity})</span>
                            </div>
                            <div className="mb-2 flex items-center justify-center space-x-2 sm:justify-start">
                                <span className="font-display text-2xl font-bold text-persimmon">
                                    ${highestSold.priceAfterDiscount || highestSold.price}
                                </span>
                                {highestSold.price > highestSold.priceAfterDiscount && (
                                    <span className="text-lg text-ink/50 line-through">${highestSold.price}</span>
                                )}
                            </div>
                            <div className="mb-3 text-ink/70">
                                Sold: <span className="font-bold text-olive">{highestSold.sold || 0}</span>
                            </div>
                            <button
                                onClick={() => handlAddProduct(highestSold._id)}
                                className="rounded-xl border-2 border-ink bg-persimmon px-6 py-2.5 font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )}

                {/* Featured Products */}
                <div>
                    {isError ? (
                        <div>
                            <ScaleLoading />
                        </div>
                    ) : isLoading ? (
                        <ScaleLoading />
                    ) : visible.length === 0 ? (
                        <div className="rounded-2xl border-2 border-ink bg-clay/40 p-12 text-center">
                            <p className="font-display mb-4 text-xl font-bold text-ink">Nothing in this shelf yet</p>
                            <button
                                onClick={() => setFilter('all')}
                                className="rounded-xl border-2 border-ink bg-marigold px-6 py-2 font-bold text-ink transition-transform hover:-translate-y-0.5"
                            >
                                Reset filter
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {visible.map((product, i) => (
                                <BlurFade key={product._id} delay={Math.min(i * 0.06, 0.4)}>
                                    <ProductCard
                                        product={product}
                                        onQuickView={() => navigate(`/productDetails/${product._id}`)}
                                        onAddToCart={() => handlAddProduct(product._id)}
                                    />
                                </BlurFade>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

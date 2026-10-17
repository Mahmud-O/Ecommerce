import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Testimonial } from './Testimonial';
import { Benefit } from './Benefit';
import { FeaturedProducts } from './FeaturedProducts';
import { NewsLetter } from './NewsLetter';
import CategorySlider from '../CategoriesSlider/CategoriesSlider';
import { ShimmerButton } from '../magic/shimmer-button';
import { NumberTicker } from '../magic/number-ticker';
import { BlurFade } from '../magic/blur-fade';
import { Marquee } from '../magic/marquee';
import SliderImage1 from '../../assets/img/slider-image-3-BtMvVf4V.jpeg';
import SliderImage2 from '../../assets/img/slider-image-2-Xt88XJy9.jpeg';
import SliderImage3 from '../../assets/img/laptop_12.jpg';
import SliderImage4 from '../../assets/img/mark-konig-Tl8mDaue_II-unsplash.jpg';

const promos = [
  'Free shipping over $50',
  'New souq drop weekly',
  '30-day easy returns',
  'Secure checkout',
  'Independent makers',
];

const EcommerceLanding = () => {
  return (
    <>
      <Helmet><title>Ecommerce</title></Helmet>
      <div className="min-h-screen bg-paper text-ink">

        {/* Editorial split hero — fills the viewport under the fixed navbar */}
        <section className="grain relative flex min-h-[calc(100vh-113px)] items-center overflow-hidden border-b-2 border-ink bg-paper">
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:px-8 lg:py-12">
            <BlurFade>
              <div className="space-y-7">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-marigold px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                  New season souq drop
                </span>
                <h1 className="font-display text-5xl font-bold leading-[1.05] text-ink lg:text-7xl">
                  Everything you love,
                  <span className="block text-persimmon">souq-fresh daily.</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-ink/70 lg:text-xl">
                  Handpicked essentials from independent makers — fresh drops daily,
                  honest prices, delivered fast.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link to="/products">
                    <ShimmerButton>
                      Shop Now
                      <ArrowRight className="h-4 w-4" />
                    </ShimmerButton>
                  </Link>
                  <Link
                    to="/categories"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-olive px-6 py-3 text-sm font-bold text-olive transition-colors hover:bg-olive hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
                  >
                    Explore Collection
                  </Link>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center sm:text-left">
                    <NumberTicker value={50} suffix="K+" className="font-display text-3xl text-ink" />
                    <div className="text-sm text-ink/60">Happy Customers</div>
                  </div>
                  <div className="h-10 w-0.5 bg-clay" aria-hidden />
                  <div className="text-center sm:text-left">
                    <NumberTicker value={1} suffix="M+" className="font-display text-3xl text-ink" />
                    <div className="text-sm text-ink/60">Products Sold</div>
                  </div>
                  <div className="h-10 w-0.5 bg-clay" aria-hidden />
                  <div className="text-center sm:text-left">
                    <NumberTicker value={4.9} decimals={1} className="font-display text-3xl text-ink" />
                    <div className="flex items-center justify-center gap-0.5 text-marigold sm:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Bento collage reusing HomeSlick imagery */}
            <BlurFade delay={0.12} className="flex">
              <div className="grid w-full grid-cols-2 gap-4 lg:h-full lg:min-h-[540px]">
                 <figure className="hard-shadow relative col-span-2 min-h-[300px] overflow-hidden rounded-2xl border-2 border-ink sm:min-h-[340px] lg:min-h-0">
                  <img src={SliderImage1} alt="Souq drop — featured collection" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 -rotate-6 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold text-ink">
                    $24 souq pick
                  </span>
                </figure> 
                <figure className="hard-shadow relative min-h-[150px] overflow-hidden rounded-2xl border-2 border-ink sm:min-h-[170px] lg:min-h-0">
                  <img src={SliderImage2} alt="Souq drop — new arrival" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rotate-3 rounded-lg border-2 border-ink bg-marigold px-2 py-0.5 text-xs font-bold text-ink">
                    New drop
                  </span>
                </figure>
                <figure className="hard-shadow relative min-h-[150px] overflow-hidden rounded-2xl border-2 border-ink sm:min-h-[170px] lg:min-h-0">
                  <img src={SliderImage3} alt="Souq drop — tech essential" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 -rotate-3 rounded-lg border-2 border-ink bg-marigold px-2 py-0.5 text-xs font-bold text-ink">
                    Top rated
                  </span>
                </figure>
                <figure className="hard-shadow relative col-span-2 min-h-[170px] overflow-hidden rounded-2xl border-2 border-ink sm:min-h-[190px] lg:min-h-0">
                  <img src={SliderImage4} alt="Souq drop — maker spotlight" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute bottom-3 right-4 rotate-2 rounded-lg border-2 border-ink bg-paper px-3 py-1 text-xs font-bold text-ink">
                    Maker spotlight
                  </span>
                </figure>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Promo tape */}
        <div className="border-b-2 border-ink bg-olive py-3 text-paper">
          <Marquee>
            {promos.map((promo) => (
              <span key={promo} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
                {promo}
                <span className="text-marigold" aria-hidden>✦</span>
              </span>
            ))}
          </Marquee>
        </div>

        {/* Categories band */}
        <section className="bg-paper py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="mb-2 inline-block rounded-full border-2 border-ink bg-clay px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
                  Browse
                </span>
                <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">Shop by category</h2>
              </div>
              <Link
                to="/categories"
                className="rounded-xl border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2"
              >
                View all →
              </Link>
            </div>
            <CategorySlider />
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

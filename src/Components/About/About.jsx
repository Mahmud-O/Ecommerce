import heroImg from '../../assets/img/mainabout.334f9a75.webp';
import storyImg from '../../assets/img/aboutteemwork2.webp';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Gem, Leaf, Lightbulb, Users } from 'lucide-react';
import { BlurFade } from '../magic/blur-fade';

const VALUES = [
  { icon: Gem, title: 'Quality Materials', text: 'We source only the finest fabrics and materials for lasting comfort and style.' },
  { icon: Lightbulb, title: 'Thoughtful Design', text: "Every detail is considered, from fit to finish, for pieces you'll love to wear." },
  { icon: Leaf, title: 'Sustainable Practices', text: 'We care for the planet with eco-friendly processes and mindful production.' },
  { icon: Users, title: 'Customer First', text: "Your happiness is our priority. We're here to support you every step of the way." },
];

const STATS = [
  { value: '50K+', label: 'Happy shoppers' },
  { value: '1M+', label: 'Orders delivered' },
  { value: '4.9', label: 'Average rating' },
];

export default function About() {
  return (
    <>
      <Helmet><title>About Us — souq.</title></Helmet>
      <div className="bg-paper pb-5 text-ink">
        {/* Hero Section */}
        <div className="grain relative flex h-[340px] w-full items-center justify-center overflow-hidden border-b-2 border-ink bg-olive md:h-[450px]">
          <img src={heroImg} alt="About us banner" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              Our story
            </span>
            <h1 className="font-display text-5xl font-bold text-paper md:text-6xl">About us</h1>
            <p className="mt-3 text-xl font-medium tracking-wide text-paper/80 md:text-2xl">Style meets simplicity</p>
          </div>
        </div>

        {/* Stats band */}
        <div className="border-b-2 border-ink bg-paper-deep">
          <dl className="container mx-auto grid grid-cols-3 gap-4 px-4 py-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 block text-sm font-semibold text-ink/60">{s.label}</dt>
                <dd className="font-display order-1 text-3xl font-bold text-persimmon md:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Our Story Section */}
        <div className="container mx-auto flex flex-col items-center gap-10 px-4 py-16 md:flex-row">
          <BlurFade className="w-full md:w-1/2">
            <img src={storyImg} alt="Our story" loading="lazy" className="hard-shadow h-[320px] w-full rounded-2xl border-2 border-ink object-cover md:h-[400px]" />
          </BlurFade>
          <div className="w-full md:w-1/2">
            <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
              Since day one
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink">Our story</h2>
            <p className="mb-4 mt-4 text-lg text-ink/75">
              Founded with a passion for effortless style, our brand was born from the belief that fashion should be both inspiring and accessible. We started as a small team of dreamers, united by a love for design and a desire to make everyday dressing joyful and easy.
            </p>
            <p className="mb-4 text-lg text-ink/75">
              Our mission is to empower you to express your individuality with confidence. Every piece is thoughtfully crafted, blending timeless elegance with modern simplicity—so you can look and feel your best, always.
            </p>
            <p className="text-lg text-ink/75">
              What sets us apart? A relentless focus on quality, sustainability, and you—our community. Thank you for being part of our journey.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="border-y-2 border-ink bg-olive py-12 text-paper">
          <div className="container mx-auto px-4">
            <h2 className="font-display mb-8 text-center text-2xl font-bold md:text-3xl">Why choose us</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {VALUES.map((value) => (
                <div key={value.title} className="rounded-2xl border-2 border-ink bg-paper p-6 text-center text-ink">
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-marigold">
                    <value.icon className="h-6 w-6 text-ink" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{value.title}</h3>
                  <p className="text-ink/70">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team/Philosophy Section */}
        <div className="container mx-auto mb-16 px-4 pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-ink">Meet the team</h2>
            <p className="mb-2 mt-4 text-lg text-ink/75">Our founder, Alex Morgan, leads with a vision for authentic, effortless style. Together, our team is dedicated to creating pieces that inspire confidence and celebrate individuality.</p>
            <p className="text-lg text-ink/75">We believe in building a community where everyone feels seen, valued, and empowered to express themselves.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-20 flex justify-center">
          <Link to="/products" className="hard-shadow rounded-xl border-2 border-ink bg-persimmon px-8 py-3 text-lg font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}

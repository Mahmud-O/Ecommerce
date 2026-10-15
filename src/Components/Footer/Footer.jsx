import { useState } from 'react'
import { Facebook, Linkedin, Github, MessageCircleCode, Send, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');

  function handleSubscribe(e) {
    e.preventDefault();
    setEmail('');
  }

  return (
    <footer className="border-t-2 border-ink bg-olive text-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5" aria-label="souq home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper bg-persimmon">
                <ShoppingBag className="h-5 w-5 text-paper" />
              </span>
              <span className="font-display text-3xl font-bold tracking-tight">
                souq<span className="text-marigold">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-paper/70">
              Everything you love, souq-fresh daily. Curated goods from independent makers.
            </p>
            <div className="flex gap-2">
              <Link to="https://www.facebook.com/mahmoud.osama.550367" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="https://www.linkedin.com/in/ma252002/" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="https://wa.me/+201016074277" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
                <MessageCircleCode className="h-5 w-5" />
              </Link>
              <Link to="https://www.github.com/mahmoud25osama" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-paper/30 text-paper/70 transition-colors hover:border-marigold hover:text-marigold">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <h4 className="mb-5 font-display text-lg font-bold text-marigold">Shop</h4>
            <ul className="space-y-3 text-sm text-paper/70">
              <li><Link to="/products" className="transition-colors hover:text-paper">New Arrivals</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-paper">Best Sellers</Link></li>
              <li><Link to="/categories" className="transition-colors hover:text-paper">Collections</Link></li>
              <li><Link to="/brands" className="transition-colors hover:text-paper">Brands</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="mb-5 font-display text-lg font-bold text-marigold">Company</h4>
            <ul className="space-y-3 text-sm text-paper/70">
              <li><Link to="/about" className="transition-colors hover:text-paper">About Us</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-paper">Contact Us</Link></li>
              <li><Link to="/categories" className="transition-colors hover:text-paper">Categories</Link></li>
              <li><Link to="/cart" className="transition-colors hover:text-paper">Your Cart</Link></li>
            </ul>
          </nav>

          {/* Support + newsletter */}
          <div>
            <h4 className="mb-5 font-display text-lg font-bold text-marigold">Stay in the loop</h4>
            <ul className="mb-5 space-y-3 text-sm text-paper/70">
              <li><Link to="/contact" className="transition-colors hover:text-paper">Help &amp; Support</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-paper">Shipping &amp; Returns</Link></li>
            </ul>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email for weekly drops"
                aria-label="Email for newsletter"
                className="border-paper/40 bg-paper text-ink placeholder:text-ink/40"
              />
              <Button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 border-2 border-ink bg-marigold text-ink hover:bg-marigold/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-2 text-xs text-paper/50">One email a week. No spam, ever.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-paper/60">
              © Mahmoud Osama. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-paper/60">We accept:</span>
              <div className="flex gap-2">
                {['VISA', 'MC', 'AMEX', 'PP'].map((label) => (
                  <span key={label} className="rounded-lg border-2 border-paper bg-paper px-2 py-1 text-xs font-bold text-ink">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

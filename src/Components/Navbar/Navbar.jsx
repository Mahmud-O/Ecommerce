import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { openCart } from "../../Redux/ToggleCartSlice";
import { Link, NavLink } from 'react-router-dom'
import { Home, LayoutGrid, LogOut, Menu, Phone, Search, ShoppingBag, ShoppingCart, Store, Users, UserRound } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { CartContext } from '../../Context/CartContext/CartContext';
import { AuthContext } from '@/Context/AuthContext/AuthContext';
import { Marquee } from '../magic/marquee';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';

const PROMOS = [
  'Free shipping over $50',
  'New souq drop weekly',
  'Easy 30-day returns',
  'Fresh picks daily',
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { token, setToken } = useContext(AuthContext);
  const { numOfCartItems } = useContext(CartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('tkn');
    setToken(null);
    navigate('/login');
    setMobileMenuOpen(false);
  }

  function handleSearch(e) {
    e.preventDefault();
    const trimmed = query.trim();
    // Pass the query through to /products via ?q= so the shop can
    // pre-filter; ShopProducts reads + syncs this param.
    navigate(trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : '/products');
    setQuery('');
  }

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/products', label: 'Shop', icon: ShoppingBag },
    { to: '/categories', label: 'Categories', icon: LayoutGrid },
    { to: '/brands', label: 'Brands', icon: Store },
    { to: '/about', label: 'About', icon: Users },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Promo tape */}
        <div className="bg-olive text-paper">
          <Marquee repeat={3} className="py-1.5">
            {PROMOS.map((promo) => (
              <span key={promo} className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em]">
                <span>{promo}</span>
                <span aria-hidden="true" className="text-marigold">✦</span>
              </span>
            ))}
          </Marquee>
        </div>

        {/* Main bar */}
        <nav className="border-b-2 border-ink bg-paper/90 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-[72px] items-center justify-between gap-4">
              {/* Wordmark */}
              <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="souq home">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-ink bg-persimmon hard-shadow-sm">
                  <ShoppingBag className="h-5 w-5 text-paper" />
                </span>
                <span className="font-display text-3xl font-bold tracking-tight text-ink">
                  souq<span className="text-persimmon">.</span>
                </span>
              </Link>

              {/* Desktop links */}
              <ul className="hidden items-center gap-1 lg:flex">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        cn(
                          'rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-clay/60 hover:text-persimmon',
                          isActive ? 'text-persimmon underline underline-offset-4' : 'text-ink'
                        )
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Right actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                <form onSubmit={handleSearch} className="relative hidden md:block" role="search">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the souq…"
                    className="h-10 w-44 pl-9 lg:w-52"
                    aria-label="Search products"
                  />
                </form>

                {/* Account menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-ink bg-paper text-ink hover:bg-clay/60"
                      aria-label="Account menu"
                    >
                      <UserRound className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-52">
                    <DropdownMenuLabel>{token ? 'My account' : 'Welcome to souq.'}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {token ? (
                      <>
                        <DropdownMenuItem onSelect={() => navigate('/cart')}>
                          My orders
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => navigate('/about')}>
                          About the souq
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onSelect={handleLogout}
                          className="text-brick focus:bg-brick/10"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem onSelect={() => navigate('/login')}>
                          Login
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => navigate('/register')}>
                          Create account
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Cart trigger */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => dispatch(openCart())}
                  className="relative border-ink bg-paper text-ink hover:bg-clay/60"
                  aria-label={`Open cart, ${numOfCartItems || 0} items`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {numOfCartItems > 0 && (
                    <Badge className="absolute -right-2 -top-2 h-6 min-w-6 items-center justify-center px-1.5 text-[11px]">
                      {numOfCartItems > 99 ? '99+' : numOfCartItems}
                    </Badge>
                  )}
                </Button>

                {/* Desktop auth */}
                <div className="hidden items-center gap-2 lg:flex">
                  {token ? (
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="border-ink bg-paper text-brick hover:bg-brick/10"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => navigate('/login')}
                        className="text-ink hover:bg-clay/60 hover:text-persimmon"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => navigate('/register')}
                        className="border-2 border-ink bg-persimmon text-paper hard-shadow-sm hover:bg-persimmon/90"
                      >
                        Register
                      </Button>
                    </>
                  )}
                </div>

                {/* Mobile hamburger */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setMobileMenuOpen(true)}
                  className="border-ink bg-paper text-ink lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile sheet nav */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="flex w-[320px] flex-col border-r-2 border-ink bg-paper text-ink">
          <SheetHeader className="border-b-2 border-ink pb-4 text-left">
            <SheetTitle className="font-display text-2xl font-bold text-ink">
              souq<span className="text-persimmon">.</span>
            </SheetTitle>
            <p className="text-sm text-ink/60">Everything you love, souq-fresh daily.</p>
          </SheetHeader>

          <form onSubmit={(e) => { handleSearch(e); setMobileMenuOpen(false); }} className="relative mt-4 md:hidden" role="search">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the souq…"
              className="pl-9"
              aria-label="Search products"
            />
          </form>

          <nav className="mt-4 flex-1 overflow-y-auto" aria-label="Mobile">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Browse</p>
            <ul className="space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 font-semibold transition-colors hover:border-ink hover:bg-clay/50',
                        isActive ? 'border-ink bg-clay/50 text-persimmon underline underline-offset-4' : 'border-transparent text-ink'
                      )
                    }
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-paper-deep">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t-2 border-ink pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Account</p>
            {token ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full border-ink bg-paper text-brick hover:bg-brick/10"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            ) : (
              <div className="space-y-2">
                <Button
                  onClick={() => { navigate('/register'); setMobileMenuOpen(false); }}
                  className="w-full border-2 border-ink bg-persimmon text-paper hard-shadow-sm"
                >
                  Register
                </Button>
                <Button
                  onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                  variant="outline"
                  className="w-full border-ink bg-paper text-ink"
                >
                  Login
                </Button>
              </div>
            )}
            <div className="mt-3 flex items-center justify-between rounded-xl border-2 border-ink bg-paper-deep px-4 py-3">
              <span className="text-sm font-medium text-ink/70">Items in cart</span>
              <span className="font-display text-2xl font-bold text-persimmon">{numOfCartItems || 0}</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useScrollState } from '@/hooks/useScrollState';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Working Groups', href: '/working-groups' },
  { label: 'UNEA', href: '/unea-and-core-processes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Team', href: '/team' },
  { label: 'Join', href: '/join' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const { isPastThreshold } = useScrollState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSolid = isPastThreshold || !isHome;

  const isActive = (href: string) =>
    location.pathname === href || (href !== '/' && location.pathname.startsWith(href + '/'));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isSolid ? 'backdrop-blur-xl border-b bg-[var(--surface)] border-[var(--line)]' : 'bg-transparent'
      )}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)] rounded">
          <img
            src="/cymg-logo-refined.svg"
            alt="CYMG — Children and Youth Major Group"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-sm font-semibold tracking-wide px-4 py-2 rounded-lg transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]',
                isActive(item.href)
                  ? 'bg-[var(--assembly-blue)] text-white hover:bg-[var(--assembly-blue-deep)]'
                  : isSolid
                    ? 'text-[var(--ink)]'
                    : 'text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className={cn(
              'p-2.5 rounded-full transition-colors duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]',
              isSolid ? 'text-[var(--ink)]' : 'text-white'
            )}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'lg:hidden p-2.5 rounded-full transition-colors duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]',
                  isSolid ? 'text-[var(--ink)]' : 'text-white'
                )}
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(340px,85vw)] p-0 flex flex-col bg-[var(--surface)] border-[var(--line)]"
            >
              <SheetHeader className="px-6 py-5 border-b border-[var(--line)]">
                <SheetTitle className="flex items-center">
                  <img src="/cymg-logo-refined.svg" alt="CYMG" className="h-9 w-auto" />
                  <span className="sr-only">CYMG — Children and Youth Major Group</span>
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex-1 overflow-y-auto flex flex-col gap-1 px-4 py-4"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]',
                      isActive(item.href)
                        ? 'bg-[var(--assembly-blue)] text-white'
                        : 'text-[var(--ink)] hover:bg-black/5 dark:hover:bg-white/10'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-3 border-t border-[var(--line)]" />

                <Link
                  to="/calendar"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors text-[var(--ink-60)] hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]"
                >
                  Calendar
                </Link>
                <Link
                  to="/documents"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors text-[var(--ink-60)] hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]"
                >
                  Documents
                </Link>
              </nav>

              <div className="px-4 py-4 border-t border-[var(--line)]">
                <Link
                  to="/join"
                  onClick={() => setMobileOpen(false)}
                  className="btn-pill w-full inline-flex items-center justify-center gap-2 font-semibold bg-[var(--signal-lime)] text-[#0B1220] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]"
                >
                  Join CYMG
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

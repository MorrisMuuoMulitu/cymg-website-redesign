import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Who we are', href: '/about' },
  { label: 'Working Groups', href: '/working-groups' },
  { label: 'UNEA', href: '/unea-and-core-processes' },
  { label: 'Regions', href: '/regions' },
  { label: 'Blog', href: '/blog' },
  { label: 'Join', href: '/join' },
  { label: 'Contact', href: '/contact' },
];

const utilityNav = [
  { label: 'News & Stories', href: '/blog' },
  { label: 'Events', href: '/calendar' },
  { label: 'Documents', href: '/documents' },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    location.pathname === href || (href !== '/' && location.pathname.startsWith(href + '/'));

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-line">
      {/* Top utility bar */}
      <div className="bg-[var(--cymg-green-dark)] text-white text-[11px] uppercase tracking-[0.08em]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <span className="hidden sm:inline font-light opacity-90">
            Save the planet. Opt not to print.
          </span>
          <nav className="flex items-center gap-5 ml-auto" aria-label="Utility navigation">
            {utilityNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="hover:opacity-80 transition-opacity font-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cymg-green)]">
          <img
            src="/cymg-logo-refined.svg"
            alt="CYMG — Children and Youth Major Group"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'relative text-sm px-3 py-2 transition-colors hover:text-[var(--cymg-green)]',
                  active ? 'text-[var(--cymg-green)] font-medium' : 'text-ink'
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--cymg-green)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 text-ink hover:text-[var(--cymg-green)] transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-ink hover:text-[var(--cymg-green)] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(300px,85vw)] p-0 flex flex-col bg-paper border-line"
            >
              <SheetHeader className="px-5 py-4 border-b border-line">
                <SheetTitle className="flex items-center">
                  <img src="/cymg-logo-refined.svg" alt="CYMG" className="h-8 w-auto" />
                  <span className="sr-only">CYMG — Children and Youth Major Group</span>
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex-1 overflow-y-auto flex flex-col px-4 py-4"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-4 py-3 text-sm transition-colors border-l-2 hover:text-[var(--cymg-green)]',
                      isActive(item.href)
                        ? 'text-[var(--cymg-green)] font-medium border-[var(--cymg-green)]'
                        : 'text-ink border-transparent'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

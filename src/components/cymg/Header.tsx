

import { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu } from 'lucide-react'
import Button from '@/components/ui/Button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useRouter } from '@/components/cymg/Router'
import type { PageName } from '@/components/cymg/Router'

/* ------------------------------------------------------------------ */
/*  Nav items — SPA pages                                              */
/* ------------------------------------------------------------------ */
const NAV_ITEMS: { label: string; page: PageName }[] = [
  { label: 'About', page: 'about' },
  { label: 'Working Groups', page: 'working-groups' },
  { label: 'UNEA', page: 'unea' },
  { label: 'Regions', page: 'regions' },
  { label: 'Blog', page: 'blog' },
  { label: 'Documents', page: 'documents' },
  { label: 'Contact', page: 'contact' },
]

/* ------------------------------------------------------------------ */
/*  CYMG brand green — the real logo color                            */
/* ------------------------------------------------------------------ */
const CYMG_GREEN = '#0B5F11'

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { currentPage, navigate } = useRouter()

  /* Scroll listener — sets `scrolled` after 16px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Navigate handler */
  const handleNavClick = useCallback(
    (page: PageName) => {
      navigate(page)
      setMobileOpen(false)
    },
    [navigate]
  )

  /* Toggle dark mode */
  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  /* Determine if header should be transparent (only on home page when not scrolled) */
  const isTransparent = currentPage === 'home' && !scrolled

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isTransparent
          ? 'bg-transparent border-b border-transparent'
          : scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b shadow-sm dark:bg-ink/90 dark:border-white/10'
            : 'bg-paper/90 backdrop-blur-md border-b dark:bg-ink/90 dark:border-white/10'
      )}
      style={{
        borderColor: !isTransparent && scrolled ? CYMG_GREEN : undefined,
        borderBottomWidth: !isTransparent && scrolled ? '2px' : undefined,
      }}
    >
      <div className="mx-auto flex h-14 md:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ---- Logo ---- */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="CYMG — Go to homepage"
        >
          <img
            src="/cymg-logo.svg"
            alt="CYMG"
            className={cn(
              'h-8 md:h-10 w-auto',
              isTransparent && 'brightness-0 invert'
            )}
          />
        </button>

        {/* ---- Desktop nav ---- */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors',
                  isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink hover:text-cymg-green dark:text-dark-paper dark:hover:text-cymg-green',
                  isActive && !isTransparent && 'text-cymg-green dark:text-cymg-green',
                  isActive && isTransparent && 'text-white'
                )}
              >
                {item.label}
                {/* Active underline */}
                <span
                  className={cn(
                    'absolute bottom-0 left-3 right-3 h-0.5 transition-transform duration-300',
                    isTransparent ? 'bg-white' : 'bg-cymg-green',
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  )}
                />
              </button>
            )
          })}
        </nav>

        {/* ---- Right actions ---- */}
        <div className="flex items-center gap-2">
          {/* Join CYMG CTA */}
          <Button
            onClick={() => handleNavClick('join')}
            className={cn(
              'hidden rounded-full font-bold',
              'bg-signal-lime text-ink hover:brightness-110',
              'hover:shadow-md transition-all duration-200',
              'sm:inline-flex h-9 px-5 text-sm'
            )}
          >
            Join CYMG
          </Button>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={cn(
              'h-9 w-9',
              isTransparent ? 'text-white hover:bg-white/10' : 'text-ink dark:text-dark-paper'
            )}
          >
            <Sun className="size-4 hidden dark:block" />
            <Moon className="size-4 block dark:hidden" />
          </Button>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'lg:hidden h-9 w-9',
                  isTransparent ? 'text-white hover:bg-white/10' : 'text-ink dark:text-dark-paper'
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] bg-paper dark:bg-ink border-l border-line dark:border-white/10 flex flex-col h-full"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/cymg-logo.svg" alt="CYMG" className="h-7 w-auto" />
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex-1 overflow-y-auto flex flex-col gap-1 px-4 mt-4 pb-[env(safe-area-inset-bottom,0px)]"
                aria-label="Mobile navigation"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.page
                  return (
                    <SheetClose asChild key={item.page}>
                      <button
                        onClick={() => handleNavClick(item.page)}
                        className={cn(
                          'flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors text-left',
                          isActive
                            ? 'text-cymg-green dark:text-cymg-green'
                            : 'text-ink hover:text-cymg-green dark:text-dark-paper dark:hover:text-cymg-green'
                        )}
                        style={isActive ? { backgroundColor: 'rgba(11, 95, 17, 0.08)' } : undefined}
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  )
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-auto px-4 pb-4 pt-4 border-t border-line/50 dark:border-white/10">
                <Button
                  onClick={() => handleNavClick('join')}
                  className={cn(
                    'w-full rounded-full bg-signal-lime text-ink font-bold',
                    'hover:brightness-110 hover:shadow-md',
                    'transition-all duration-200 h-11 text-sm'
                  )}
                >
                  Join CYMG
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

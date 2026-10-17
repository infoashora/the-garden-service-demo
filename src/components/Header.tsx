import { useState } from 'react';
import { Menu, X, Sprout, ArrowUpRight } from 'lucide-react';
import { business } from '@/content';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'How It Works', href: '#how-it-works' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const isGardenService = business.name === 'The Garden Service';

  return (
    <header className="sticky top-0 z-50 border-b border-mist-300/80 bg-white">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="focus-ring flex shrink-0 items-center gap-3 rounded-lg text-green"
            aria-label={`${business.name} home`}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-bl-2xl rounded-tr-2xl bg-green">
              <Sprout
                className="h-6 w-6 text-lime"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>

            <span>
              {isGardenService ? (
                <>
                  <span className="block text-[10px] font-bold uppercase leading-none tracking-[0.2em] text-ink">
                    The Garden
                  </span>
                  <span className="mt-1 block text-xl font-extrabold leading-none tracking-tight">
                    Service
                  </span>
                </>
              ) : (
                <span className="block text-base font-extrabold tracking-tight">
                  {business.name}
                </span>
              )}
            </span>
          </a>

          <nav
            className="hidden items-center gap-3 md:flex"
            aria-label="Primary"
          >
            <div className="flex items-center gap-1 rounded-full border border-mist-300/70 bg-mist/70 p-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded-full px-3 py-2 text-xs font-bold text-ink transition-colors hover:bg-white hover:text-green lg:px-4"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#quote"
              className="focus-ring inline-flex items-center gap-3 rounded-full bg-green px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-green-800"
            >
              Request a Quote
              <ArrowUpRight
                className="h-4 w-4 text-lime"
                aria-hidden="true"
              />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist-300 bg-mist text-green md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-mist-300/80 bg-white md:hidden"
        >
          <nav
            className="mx-auto flex max-w-content flex-col gap-1 px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mist"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="focus-ring mt-3 inline-flex items-center justify-between rounded-full bg-green px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-800"
            >
              Request a Quote
              <ArrowUpRight
                className="h-4 w-4 text-lime"
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
import { ArrowRight, ArrowUp, Leaf } from 'lucide-react';
import { business } from '@/content';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'How It Works', href: '#how-it-works' },
];

export default function Footer() {
  return (
    <footer className="bg-green text-white">
      <div className="mx-auto max-w-content px-5 pb-6 pt-10 sm:px-8 sm:pt-12">
        <div className="grid gap-9 border-b border-white/20 pb-9 md:grid-cols-2 md:gap-12">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-green"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime/30">
                <Leaf
                  className="h-5 w-5 text-lime"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>

              <span className="text-lg font-extrabold tracking-tight">
                {business.name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              {business.tagline}
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded text-xs font-semibold text-white/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
              Your garden, your next step
            </p>

            <p className="mt-3 max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              Let’s make room
              <br />
              for your garden.
            </p>

            <a
              href="#quote"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-lime px-5 py-3 text-sm font-bold text-green transition-colors hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 focus-visible:ring-offset-green"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-white/70">
              © {new Date().getFullYear()} {business.name}
            </p>
            <p className="text-xs text-white/60">
              {business.credit}
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 rounded text-xs font-semibold text-white/80 transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
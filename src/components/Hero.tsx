import { ArrowRight, Sprout } from 'lucide-react';
import { hero } from '@/content';

export default function Hero() {
  const highlightedText = 'without the hassle';
  const highlightIndex = hero.headline
    .toLowerCase()
    .indexOf(highlightedText);

  return (
    <section id="top" className="overflow-hidden bg-white">
      <div className="mx-auto max-w-content px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-5 left-1/4 right-0 rounded-[32px] bg-mist"
          />

          <div className="relative grid items-center gap-9 lg:grid-cols-2 lg:gap-12">
            <div className="py-4 sm:py-6 lg:py-10">
              <div className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-green"
                />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-green">
                  The Garden Service · London
                </p>
              </div>

              <h1 className="mt-5 max-w-lg text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-green sm:text-5xl">
                {highlightIndex >= 0 ? (
                  <>
                    {hero.headline.slice(0, highlightIndex)}
                    <span className="mt-2 block">
                      <span className="bg-lime px-1 [box-decoration-break:clone]">
                        {hero.headline.slice(highlightIndex)}
                      </span>
                    </span>
                  </>
                ) : (
                  hero.headline
                )}
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-ink">
                {hero.supporting}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#quote"
                  className="focus-ring inline-flex items-center gap-3 rounded-full bg-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-800"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#services"
                  className="focus-ring inline-flex items-center gap-2 rounded text-sm font-bold text-green underline decoration-green/30 underline-offset-4 transition-colors hover:text-green-600"
                >
                  Explore Our Services
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-green/15 pt-5">
                <Sprout
                  className="h-5 w-5 shrink-0 text-green"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold text-ink">
                  General gardening & garden maintenance
                </p>
              </div>
            </div>

            <div className="relative pb-5 pl-3 pr-3 sm:pl-5 sm:pr-4 lg:py-5">
              <div
                aria-hidden="true"
                className="absolute bottom-1 left-0 right-7 top-8 rounded-bl-[64px] rounded-tr-[80px] bg-lime lg:bottom-1"
              />

              <figure className="relative">
                <div className="h-[320px] overflow-hidden rounded-bl-[64px] rounded-tr-[80px] bg-mist sm:h-[400px] lg:h-[460px]">
                  <img
                    src={hero.image}
                    alt={hero.imageAlt}
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>

                <figcaption className="absolute bottom-5 left-4 right-4 flex items-center gap-3 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-sm sm:left-6 sm:right-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-green">
                    <Sprout
                      className="h-5 w-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-sm font-extrabold text-green">
                      Space to enjoy.
                    </p>
                    <p className="mt-0.5 text-xs text-ink">
                      General gardening & maintenance
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
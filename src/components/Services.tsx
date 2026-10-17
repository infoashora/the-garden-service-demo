import { ArrowRight } from 'lucide-react';
import { services } from '@/content';

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-mist-300 lg:grid-cols-2">
          <div className="relative flex flex-col justify-between overflow-hidden bg-green p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-white/10"
            />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest text-lime">
                The Garden Service
              </p>

              <h2 className="mt-5 max-w-sm text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {services.heading}
              </h2>

              <div className="mt-6 h-1 w-12 rounded-full bg-lime" />
            </div>

            <a
              href="#quote"
              className="focus-ring relative mt-10 inline-flex w-fit items-center gap-3 rounded-lg bg-lime px-5 py-3 text-sm font-bold text-green transition-colors hover:bg-lime-200"
            >
              Tell us what you need
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="bg-mist px-6 sm:px-9">
            {services.items.map((service, index) => (
              <div
                key={service.title}
                className={`flex gap-4 py-7 sm:gap-5 sm:py-8 ${
                  index > 0 ? 'border-t border-mist-300' : ''
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green/20 bg-white text-xs font-extrabold text-green">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="pt-1">
                  <h3 className="text-lg font-extrabold text-green">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
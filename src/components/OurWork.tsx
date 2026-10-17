import { ArrowRight } from 'lucide-react';
import { ourWork } from '@/content';

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="scroll-mt-24 overflow-hidden bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
              A little inspiration
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-green sm:text-4xl">
              {ourWork.heading}
            </h2>
          </div>

          <a
            href="#quote"
            className="focus-ring inline-flex w-fit shrink-0 items-center gap-2 rounded text-sm font-bold text-green underline decoration-green/30 underline-offset-4 transition-colors hover:text-green-600"
          >
            Tell us about your garden
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-3 -top-3 h-24 w-24 rounded-tl-[40px] bg-lime sm:-left-4 sm:-top-4"
          />

          <div className="relative grid gap-4 sm:grid-cols-2">
            {ourWork.images.map((img, index) => (
              <div
                key={img.src}
                className={`group relative overflow-hidden bg-mist ${
                  index === 0
                    ? 'h-[300px] rounded-tl-[40px] rounded-br-[40px] sm:row-span-2 sm:h-full sm:min-h-[456px]'
                    : 'h-[220px] rounded-2xl'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 border-t border-mist-300 pt-4">
          <span
            aria-hidden="true"
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
          />
          <p className="text-xs leading-relaxed text-ink">
            {ourWork.note}
          </p>
        </div>
      </div>
    </section>
  );
}
import { howItWorks } from '@/content';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="overflow-hidden rounded-tl-[40px] rounded-br-[40px] bg-green px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
                Getting started
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                How it works
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              From your first enquiry to a quote for your garden.
            </p>
          </div>

          <div className="mt-8 grid gap-7 border-t border-white/20 pt-7 md:grid-cols-3 md:gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.title}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime text-sm font-extrabold text-green">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Info, Sprout } from 'lucide-react';

type Errors = Partial<
  Record<'name' | 'postcode' | 'contact' | 'message', string>
>;

const serviceOptions = [
  'Garden Maintenance',
  'General Gardening',
  'One-Off Garden Visit',
  'Not sure yet',
];

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: HTMLFormElement): Errors {
    const fd = new FormData(form);
    const next: Errors = {};
    const name = String(fd.get('name') ?? '').trim();
    const postcode = String(fd.get('postcode') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const phone = String(fd.get('phone') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    if (!name) next.name = 'Please enter your name.';
    if (!postcode) next.postcode = 'Please enter your postcode.';
    if (!message) next.message = 'Please tell us about the work.';
    if (!email && !phone) {
      next.contact = 'Please provide an email or phone number.';
    }

    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  }

  const inputClass =
    'mt-2 block w-full rounded-lg border border-mist-300 bg-mist/50 px-3.5 py-3 text-sm text-ink transition-colors focus:border-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-green/20';

  const labelClass = 'block text-xs font-bold text-green';
  const errorClass = 'mt-1.5 text-xs font-medium text-green';

  return (
    <section
      id="quote"
      className="scroll-mt-24 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-mist-300 lg:grid-cols-5">
          <div className="flex flex-col justify-between bg-mist p-6 sm:p-9 lg:col-span-2">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime text-green">
                <Sprout
                  className="h-6 w-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-green">
                Request a quote
              </p>

              <h2 className="mt-3 max-w-sm text-3xl font-extrabold leading-tight tracking-tight text-green sm:text-4xl">
                Let’s talk about your garden.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink">
                Share a few details about your garden and the work you have
                in mind. We’ll get back to you to discuss it.
              </p>

              <div className="mt-7 border-t border-green/15 pt-5">
                <p className="text-sm font-bold text-green">
                  Not sure where to start?
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink">
                  Describe what needs attention and include your postcode.
                  You can select “Not sure yet” for the service.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-green/10 bg-white/70 px-4 py-3">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-green"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-ink">
                Demo form — enquiries are not sent yet.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-9 lg:col-span-3">
            {submitted ? (
              <div
                role="status"
                className="flex min-h-[360px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2
                  className="h-10 w-10 text-green"
                  aria-hidden="true"
                />
                <p className="mt-4 text-lg font-bold text-green">
                  Demo only — your enquiry has not been sent.
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink">
                  This form is for demonstration. No information was stored
                  or sent.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="focus-ring mt-6 rounded-full border border-mist-300 px-5 py-3 text-sm font-bold text-green transition-colors hover:bg-mist"
                >
                  Clear and start again
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="border-b border-mist-300 pb-4">
                  <h3 className="text-lg font-extrabold text-green">
                    Tell us what you need
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink">
                    Fields marked * are required. Add an email or phone
                    number so we can contact you.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className={inputClass}
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? 'name-error' : undefined
                      }
                    />
                    {errors.name && (
                      <p id="name-error" className={errorClass}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="postcode" className={labelClass}>
                      Postcode *
                    </label>
                    <input
                      id="postcode"
                      name="postcode"
                      type="text"
                      autoComplete="postal-code"
                      required
                      className={inputClass}
                      aria-invalid={!!errors.postcode}
                      aria-describedby={
                        errors.postcode ? 'postcode-error' : undefined
                      }
                    />
                    {errors.postcode && (
                      <p id="postcode-error" className={errorClass}>
                        {errors.postcode}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      aria-invalid={!!errors.contact}
                      aria-describedby={
                        errors.contact ? 'contact-error' : undefined
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      aria-invalid={!!errors.contact}
                      aria-describedby={
                        errors.contact ? 'contact-error' : undefined
                      }
                    />
                  </div>
                </div>

                {errors.contact && (
                  <p id="contact-error" className={errorClass}>
                    {errors.contact}
                  </p>
                )}

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={inputClass}
                    defaultValue="Not sure yet"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell us about the work *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={inputClass}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" className={errorClass}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="focus-ring inline-flex w-full items-center justify-center gap-3 rounded-full bg-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-800 sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
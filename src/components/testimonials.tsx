import { Quote } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    quote: 'I finally stopped wondering where my money went every month. FinTrack makes it obvious.',
    name: 'Sarah M.',
    role: 'Product Designer',
  },
  {
    quote: 'I used to track everything in Google Sheets. Now I can understand my spending in seconds.',
    name: 'Daniel R.',
    role: 'Freelancer',
  },
  {
    quote: 'The budget alerts alone have helped me cut unnecessary spending.',
    name: 'Maya K.',
    role: 'Marketing Manager',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <Reveal>
        <div className="flex flex-col items-start gap-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-sulfur px-16 py-8 font-sans text-[12px] font-medium leading-none text-obsidian">
              Loved by thousands
            </span>
            <h2 className="mt-24 max-w-[520px] font-display text-[44px] leading-[0.95] tracking-display text-obsidian sm:text-[56px] lg:text-[64px]">
              People finally understand their money
            </h2>
          </div>
          <p className="max-w-[320px] text-body text-obsidian/60">
            Real users, real habits changed. No more guessing at the end of the month.
          </p>
        </div>
      </Reveal>

      <div className="mt-64 grid gap-16 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-cards bg-limestone p-40">
              <Quote className="h-24 w-24 text-ember" strokeWidth={2.5} />
              <blockquote className="mt-16 flex-1 text-body text-obsidian">{t.quote}</blockquote>
              <figcaption className="mt-24 flex items-center gap-12 border-t border-dotted border-obsidian/20 pt-24">
                <span className="grid h-40 w-40 place-items-center rounded-full bg-ember font-sans text-[14px] font-medium text-chalk">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-sans text-[15px] font-medium leading-none text-obsidian">
                    {t.name}
                  </p>
                  <p className="mt-4 font-sans text-[12px] leading-none text-obsidian/50">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

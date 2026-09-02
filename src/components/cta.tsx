import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="cta" className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-cards bg-obsidian px-32 py-64 md:px-64 md:py-96">
          <div className="mx-auto max-w-[660px] text-center">
            <h2 className="font-display text-[42px] leading-[0.95] tracking-display text-chalk sm:text-[54px] lg:text-[64px]">
              Your money deserves more than guesswork.
            </h2>
            <p className="mx-auto mt-24 max-w-[420px] text-body text-chalk/70">
              Start tracking your finances today and build better money habits.
            </p>

            {submitted ? (
              <div className="mx-auto mt-40 flex max-w-[460px] items-center justify-center gap-12 rounded-full bg-chalk/10 px-32 py-24">
                <span className="grid h-24 w-24 place-items-center rounded-full bg-ember">
                  <ArrowRight className="h-14 w-14 text-obsidian" strokeWidth={3} />
                </span>
                <p className="font-sans text-[15px] font-medium text-chalk">
                  You&apos;re on the list! Check your inbox.
                </p>
              </div>
            ) : (
              <form
                className="mx-auto mt-40 flex max-w-[520px] items-center gap-8 rounded-full border-[1.5px] border-chalk bg-transparent p-8 pl-32"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email.trim()) setSubmitted(true)
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent py-16 text-[16px] font-medium text-chalk placeholder:text-chalk/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-ember px-24 py-16 text-[16px] font-medium leading-none text-obsidian transition-colors hover:bg-[#e64800]"
                >
                  Start for free
                </button>
              </form>
            )}

            <p className="mt-16 font-sans text-[12px] text-chalk/50">Free forever · No credit card required</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

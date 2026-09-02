import { ArrowDown, Sparkles } from 'lucide-react'
import { Button } from './button'
import { cn } from '../lib/utils'

const bars = [42, 68, 46, 82, 56, 92, 72]
const categories = [
  { label: 'Food & dining', pct: 76, color: 'bg-ember' },
  { label: 'Housing', pct: 54, color: 'bg-obsidian' },
  { label: 'Transport', pct: 32, color: 'bg-pumice' },
]

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-24 pt-64 md:px-32 lg:pt-96">
      <div className="grid gap-64 lg:grid-cols-2 lg:items-center lg:gap-80">
        {/* Left — headline */}
        <div>
          <span className="inline-flex items-center gap-8 rounded-full bg-sulfur px-16 py-8 font-sans text-[12px] font-medium leading-none text-obsidian">
            <Sparkles className="h-14 w-14" />
            Personal finance, simplified
          </span>

          <h1 className="mt-32 font-display tracking-display text-obsidian">
            <span className="block text-[46px] leading-[0.95] sm:text-[58px] md:text-[66px] lg:text-[72px] xl:text-[82px]">
              Take control
            </span>
            <span className="block text-[46px] leading-[0.95] sm:text-[58px] md:text-[66px] lg:text-[72px] xl:text-[82px]">
              of your money.
            </span>
            <span className="mt-16 block text-[30px] leading-[1] text-ember sm:text-[38px] lg:text-[44px] xl:text-[48px]">
              Without the{' '}
              <span className="relative inline-block whitespace-nowrap">
                spreadsheet
                <span
                  aria-hidden
                  className="absolute left-[-2%] top-1/2 h-[0.07em] w-[104%] -translate-y-1/2 bg-obsidian"
                />
              </span>
              .
            </span>
          </h1>

          <p className="mt-32 max-w-[440px] text-body text-obsidian/70">
            FinTrack makes it simple to track expenses, manage budgets, and understand your
            financial habits — all in one place.
          </p>

          <div className="mt-40 flex flex-wrap items-center gap-16">
            <Button href="#cta">Start tracking for free</Button>
            <Button href="#how-it-works" variant="secondary">
              See how it works
            </Button>
          </div>

          <p className="mt-24 flex items-center gap-8 font-sans text-[13px] text-obsidian/50">
            <ArrowDown className="h-14 w-14" />
            Free forever · No credit card required
          </p>
        </div>

        {/* Right — halftone block + product preview */}
        <div className="relative mt-24 lg:mt-0">
          <div className="halftone-hero aspect-[4/5] w-full rounded-cards sm:aspect-[5/6]" />

          {/* floating saved chip */}
          <div className="absolute -right-8 top-40 hidden items-center gap-12 rounded-full bg-limestone px-20 py-12 sm:flex lg:-right-16">
            <span className="font-sans text-[14px] font-medium leading-none text-obsidian/80">
              Saved this month
            </span>
            <span className="font-display text-[20px] leading-none tracking-display text-ember">
              $312
            </span>
          </div>

          {/* product UI preview */}
          <div className="absolute -bottom-40 -left-8 w-[88%] max-w-[400px] rounded-2xl bg-chalk p-24 sm:-left-24">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[13px] font-medium leading-none text-obsidian/60">
                Spending — July
              </span>
              <span className="rounded-full bg-sulfur px-10 py-4 font-sans text-[11px] font-medium leading-none text-obsidian">
                −12.4%
              </span>
            </div>

            <p className="mt-12 font-display text-[34px] leading-none tracking-display text-obsidian">
              $4,218.50
            </p>
            <p className="mt-4 font-sans text-[12px] text-obsidian/50">Total spent this month</p>

            <div className="mt-20 flex h-90 items-end gap-6">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={cn('flex-1 rounded-full', i === 5 ? 'bg-ember' : 'bg-pumice')}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="mt-20 space-y-12">
              {categories.map((c) => (
                <div key={c.label}>
                  <div className="flex items-center justify-between font-sans text-[12px] font-medium leading-none text-obsidian">
                    <span>{c.label}</span>
                    <span className="text-obsidian/45">{c.pct}%</span>
                  </div>
                  <div className="mt-6 h-8 w-full overflow-hidden rounded-full bg-pumice">
                    <div
                      className={cn('h-full rounded-full', c.color)}
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

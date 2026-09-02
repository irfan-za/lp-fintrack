import { Link2, LineChart, Tags, type LucideIcon } from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '../lib/utils'

type Step = {
  num: string
  icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  {
    num: '01',
    icon: Link2,
    title: 'Connect or add transactions',
    desc: 'Link your bank account or add expenses by hand in seconds. Every purchase lands in one place.',
  },
  {
    num: '02',
    icon: Tags,
    title: 'Categorize automatically',
    desc: 'Smart categories sort each transaction for you, so nothing slips through the cracks.',
  },
  {
    num: '03',
    icon: LineChart,
    title: 'Understand your spending',
    desc: 'Clear charts and insights show exactly where your money goes — and where to cut back.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <Reveal>
        <div className="flex flex-col items-start gap-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-sulfur px-16 py-8 font-sans text-[12px] font-medium leading-none text-obsidian">
              How it works
            </span>
            <h2 className="mt-24 max-w-[520px] font-display text-[44px] leading-[0.95] tracking-display text-obsidian sm:text-[56px] lg:text-[64px]">
              Three steps to clarity
            </h2>
          </div>
          <p className="max-w-[320px] text-body text-obsidian/60">
            From scattered transactions to a clear picture in minutes — not hours.
          </p>
        </div>
      </Reveal>

      <div className="mt-64 grid gap-40 md:grid-cols-3 md:gap-0">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08}>
            <div
              className={cn(
                'md:px-32',
                i > 0 && 'md:border-l md:border-dotted md:border-obsidian/30',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[56px] leading-none tracking-display text-ember sm:text-[64px]">
                  {s.num}
                </span>
                <span className="grid h-48 w-48 place-items-center rounded-2xl bg-limestone">
                  <s.icon className="h-24 w-24 text-obsidian" strokeWidth={2} />
                </span>
              </div>
              <h3 className="mt-24 font-display text-[24px] leading-[1.05] tracking-display text-obsidian">
                {s.title}
              </h3>
              <p className="mt-12 text-body text-obsidian/70">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import { BarChart3, CalendarClock, PieChart, Receipt, Target, type LucideIcon } from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '../lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  desc: string
}

const smallFeatures: Feature[] = [
  {
    icon: Receipt,
    title: 'Track every expense',
    desc: 'Quickly record and categorize where your money goes.',
  },
  {
    icon: Target,
    title: 'Set smarter budgets',
    desc: 'Create monthly budgets and know when you\u2019re spending too much.',
  },
  {
    icon: CalendarClock,
    title: 'Recurring expenses',
    desc: 'Never forget subscriptions, bills, or regular payments.',
  },
  {
    icon: BarChart3,
    title: 'Monthly reports',
    desc: 'See how your spending changes over time.',
  },
]

const donutLegend = [
  { color: 'bg-ember', label: 'Food & dining' },
  { color: 'bg-obsidian', label: 'Housing' },
  { color: 'bg-plasma-violet', label: 'Bills' },
  { color: 'bg-pumice', label: 'Other' },
]

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <Reveal>
        <div className="flex flex-col items-start gap-24 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[600px] font-display text-[44px] leading-[0.95] tracking-display text-obsidian sm:text-[56px] lg:text-[64px]">
            Everything you need to see your money clearly
          </h2>
          <p className="max-w-[340px] text-body text-obsidian/60">
            Five tools that turn a pile of transactions into a plan you can actually act on.
          </p>
        </div>
      </Reveal>

      <div className="mt-64 grid gap-16 md:grid-cols-3">
        {/* Big feature card */}
        <Reveal className="md:col-span-2">
          <div className="h-full rounded-cards bg-limestone p-40">
            <div className="grid h-full gap-32 md:grid-cols-2 md:items-center">
              <div>
                <span className="grid h-48 w-48 place-items-center rounded-2xl bg-pumice">
                  <PieChart className="h-24 w-24 text-obsidian" strokeWidth={2} />
                </span>
                <h3 className="mt-24 font-display text-[26px] leading-[1.05] tracking-display text-obsidian md:text-[30px]">
                  See where your money goes
                </h3>
                <p className="mt-16 max-w-[320px] text-body text-obsidian/70">
                  Clear charts and insights turn your transactions into useful information — no
                  number-crunching required.
                </p>
              </div>

              <div className="flex items-center justify-center gap-24">
                <div className="relative h-160 w-160 shrink-0">
                  <div
                    className="h-full w-full rounded-full"
                    style={{
                      background:
                        'conic-gradient(#fc5000 0 38%, #070607 38% 62%, #524ae9 62% 82%, #e2e2df 82% 100%)',
                    }}
                  />
                  <div className="absolute inset-16 rounded-full bg-limestone" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <span className="block font-display text-[26px] leading-none tracking-display text-obsidian">
                        $2,847
                      </span>
                      <span className="mt-4 block font-sans text-[12px] text-obsidian/50">
                        spent in July
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-12">
                  {donutLegend.map((d) => (
                    <div key={d.label} className="flex items-center gap-8">
                      <span className={cn('h-12 w-12 rounded-full', d.color)} />
                      <span className="font-sans text-[13px] font-medium leading-none text-obsidian">
                        {d.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* First small card */}
        <Reveal delay={0.05}>
          <FeatureCard feature={smallFeatures[0]} />
        </Reveal>

        {/* Remaining small cards */}
        {smallFeatures.slice(1).map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <FeatureCard feature={f} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon
  return (
    <div className="h-full rounded-cards bg-limestone p-40">
      <span className="grid h-48 w-48 place-items-center rounded-2xl bg-pumice">
        <Icon className="h-24 w-24 text-obsidian" strokeWidth={2} />
      </span>
      <h3 className="mt-24 font-display text-[24px] leading-[1.05] tracking-display text-obsidian">
        {feature.title}
      </h3>
      <p className="mt-12 text-body text-obsidian/70">{feature.desc}</p>
    </div>
  )
}

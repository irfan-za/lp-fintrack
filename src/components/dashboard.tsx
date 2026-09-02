import {
  ArrowLeftRight,
  ArrowUpRight,
  FileText,
  LayoutDashboard,
  PiggyBank,
  Plus,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '../lib/utils'

const navItems: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ArrowLeftRight, label: 'Transactions' },
  { icon: PiggyBank, label: 'Budgets' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

const statCards = [
  { label: 'Total balance', value: '$12,480.25' },
  { label: 'Spent this month', value: '$4,218.50' },
  { label: 'Saved', value: '$1,392.00' },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const barHeights = [38, 52, 34, 68, 58, 84, 95]

const transactions = [
  { name: 'Grocery store', cat: 'Food', amount: '-$84.20', dot: 'bg-ember' },
  { name: 'Netflix', cat: 'Subscription', amount: '-$15.49', dot: 'bg-plasma-violet' },
  { name: 'Paycheck', cat: 'Income', amount: '+$2,400.00', dot: 'bg-sulfur', positive: true },
  { name: 'Gas station', cat: 'Transport', amount: '-$52.10', dot: 'bg-pumice' },
]

export function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <Reveal>
        <div className="flex flex-col items-start gap-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-sulfur px-16 py-8 font-sans text-[12px] font-medium leading-none text-obsidian">
              The dashboard
            </span>
            <h2 className="mt-24 max-w-[560px] font-display text-[44px] leading-[0.95] tracking-display text-obsidian sm:text-[56px] lg:text-[64px]">
              Your entire financial life, one screen
            </h2>
          </div>
          <p className="max-w-[320px] text-body text-obsidian/60">
            Balances, budgets, and bills — a clear snapshot the moment you open the app.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-64 overflow-hidden rounded-cards bg-obsidian">
          {/* browser chrome */}
          <div className="flex items-center gap-8 border-b border-chalk/10 px-32 py-16">
            <span className="h-12 w-12 rounded-full bg-chalk/25" />
            <span className="h-12 w-12 rounded-full bg-chalk/25" />
            <span className="h-12 w-12 rounded-full bg-chalk/25" />
            <span className="ml-16 rounded-full bg-chalk/10 px-20 py-8 font-sans text-[12px] leading-none text-chalk/50">
              app.fintrack.io
            </span>
          </div>

          <div className="grid md:grid-cols-[230px_1fr]">
            {/* sidebar */}
            <aside className="hidden flex-col justify-between border-r border-chalk/10 p-24 md:flex">
              <div>
                <div className="flex items-center gap-8 px-8">
                  <span className="grid h-28 w-28 place-items-center rounded-2xl bg-ember">
                    <ArrowUpRight className="h-16 w-16 text-chalk" strokeWidth={2.75} />
                  </span>
                  <span className="font-display text-[18px] leading-none tracking-display text-chalk">
                    FINTRACK
                  </span>
                </div>

                <nav className="mt-32 space-y-4">
                  {navItems.map((n) => (
                    <a
                      key={n.label}
                      href="#"
                      className={cn(
                        'flex items-center gap-12 rounded-full px-16 py-12 font-sans text-[14px] font-medium leading-none transition-colors',
                        n.active
                          ? 'bg-chalk text-obsidian'
                          : 'text-chalk/55 hover:bg-chalk/10 hover:text-chalk',
                      )}
                    >
                      <n.icon className="h-16 w-16" strokeWidth={2} />
                      {n.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-12 rounded-2xl bg-chalk/5 p-12">
                <span className="grid h-32 w-32 place-items-center rounded-full bg-chalk/15 font-sans text-[12px] font-medium text-chalk">
                  SM
                </span>
                <div>
                  <p className="font-sans text-[13px] font-medium leading-none text-chalk">Sarah M.</p>
                  <p className="mt-4 font-sans text-[11px] leading-none text-chalk/45">Free plan</p>
                </div>
              </div>
            </aside>

            {/* main */}
            <div className="p-24 md:p-32">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-[22px] leading-none tracking-display text-chalk">
                    Good morning, Sarah
                  </h3>
                  <p className="mt-8 font-sans text-[12px] leading-none text-chalk/50">July 2026</p>
                </div>
                <span className="inline-flex items-center gap-8 rounded-full bg-ember px-20 py-12 font-sans text-[14px] font-medium leading-none text-obsidian">
                  <Plus className="h-16 w-16" strokeWidth={2.5} />
                  Add expense
                </span>
              </div>

              {/* stat cards */}
              <div className="mt-24 grid gap-12 sm:grid-cols-3">
                {statCards.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-chalk/5 p-20">
                    <p className="font-sans text-[12px] font-medium leading-none text-chalk/50">
                      {s.label}
                    </p>
                    <p className="mt-12 font-display text-[24px] leading-none tracking-display text-chalk sm:text-[26px]">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* chart + transactions */}
              <div className="mt-24 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
                <div className="rounded-2xl bg-chalk/5 p-24">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-[14px] font-medium leading-none text-chalk">
                      Spending overview
                    </p>
                    <span className="font-sans text-[12px] leading-none text-chalk/45">Last 7 months</span>
                  </div>
                  <div className="mt-24 flex h-160 items-end gap-12">
                    {barHeights.map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-8">
                        <div
                          className={cn('w-full rounded-full', i === 6 ? 'bg-ember' : 'bg-chalk/20')}
                          style={{ height: `${h}%` }}
                        />
                        <span className="font-sans text-[10px] leading-none text-chalk/40">
                          {months[i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-chalk/5 p-24">
                  <p className="font-sans text-[14px] font-medium leading-none text-chalk">
                    Recent transactions
                  </p>
                  <div className="mt-20 space-y-4">
                    {transactions.map((t) => (
                      <div key={t.name} className="flex items-center gap-12 py-8">
                        <span className={cn('h-8 w-8 shrink-0 rounded-full', t.dot)} />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-sans text-[13px] font-medium leading-none text-chalk">
                            {t.name}
                          </p>
                          <p className="mt-4 font-sans text-[11px] leading-none text-chalk/45">
                            {t.cat}
                          </p>
                        </div>
                        <span
                          className={cn(
                            'font-sans text-[13px] font-medium leading-none',
                            t.positive ? 'text-chalk' : 'text-chalk/70',
                          )}
                        >
                          {t.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

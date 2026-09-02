import { Check } from 'lucide-react'
import { Reveal } from './reveal'

type Row = {
  label: string
  spreadsheet: string
}

const rows: Row[] = [
  { label: 'Automatic insights', spreadsheet: '—' },
  { label: 'Budget tracking', spreadsheet: 'Manual' },
  { label: 'Spending categories', spreadsheet: 'Manual' },
  { label: 'Monthly reports', spreadsheet: 'Manual' },
  { label: 'Easy to use', spreadsheet: 'Takes time' },
]

export function Comparison() {
  return (
    <section id="compare" className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <Reveal>
        <div className="flex flex-col items-start gap-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full bg-sulfur px-16 py-8 font-sans text-[12px] font-medium leading-none text-obsidian">
              The comparison
            </span>
            <h2 className="mt-24 max-w-[520px] font-display text-[44px] leading-[0.95] tracking-display text-obsidian sm:text-[56px] lg:text-[64px]">
              FinTrack vs. the spreadsheet
            </h2>
          </div>
          <p className="max-w-[320px] text-body text-obsidian/60">
            A spreadsheet holds your numbers. FinTrack actually understands them.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-64 overflow-hidden rounded-cards bg-limestone">
          {/* header */}
          <div className="grid grid-cols-[1fr_96px_120px] items-center gap-16 border-b border-dotted border-obsidian/30 px-32 py-32 sm:grid-cols-[1fr_140px_160px] sm:px-40">
            <span className="font-sans text-[14px] font-medium text-obsidian/40">Compare</span>
            <div className="flex items-center gap-8">
              <span className="grid h-24 w-24 place-items-center rounded-2xl bg-ember">
                <Check className="h-14 w-14 text-chalk" strokeWidth={3} />
              </span>
              <span className="font-display text-[20px] leading-none tracking-display text-obsidian">
                FinTrack
              </span>
            </div>
            <span className="font-sans text-[15px] font-medium text-obsidian/50">Spreadsheet</span>
          </div>

          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[1fr_96px_120px] items-center gap-16 border-b border-dotted border-obsidian/30 px-32 py-24 last:border-0 sm:grid-cols-[1fr_140px_160px] sm:px-40"
            >
              <span className="font-sans text-body text-obsidian">{r.label}</span>
              <span className="grid h-28 w-28 place-items-center rounded-full bg-ember">
                <Check className="h-16 w-16 text-chalk" strokeWidth={3} />
              </span>
              <span className="font-sans text-[14px] font-medium text-obsidian/45">
                {r.spreadsheet}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

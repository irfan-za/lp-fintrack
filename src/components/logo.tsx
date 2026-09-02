import { TrendingUp } from 'lucide-react'
import { cn } from '../lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-3', className)}>
      <span className="grid h-40 w-40 place-items-center rounded-2xl bg-ember">
        <TrendingUp className="h-20 w-20 text-chalk" strokeWidth={2.75} />
      </span>
      <span className="font-display text-[22px] leading-none tracking-display text-obsidian">
        FINTRACK
      </span>
    </a>
  )
}

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from './logo'
import { Button } from './button'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Compare', href: '#compare' },
  { label: 'Reviews', href: '#reviews' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header id="top" className="mx-auto w-full max-w-[1280px] px-24 pt-24 md:px-32">
      <nav className="flex items-center justify-between rounded-full bg-limestone py-12 pl-24 pr-12">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[16px] leading-none text-obsidian/75 transition-colors hover:text-obsidian"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-16">
          <a
            href="#cta"
            className="hidden text-[16px] leading-none text-obsidian/75 transition-colors hover:text-obsidian sm:block"
          >
            Log in
          </a>
          <Button href="#cta" className="hidden sm:inline-flex">
            Start free
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-40 w-40 place-items-center rounded-full bg-pumice text-obsidian lg:hidden"
          >
            {open ? <X className="h-20 w-20" /> : <Menu className="h-20 w-20" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-8 rounded-cards bg-limestone p-24 lg:hidden">
          <div className="flex flex-col gap-20">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[18px] leading-none text-obsidian"
              >
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="text-[18px] leading-none text-obsidian/70">
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

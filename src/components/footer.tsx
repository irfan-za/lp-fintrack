import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Logo } from './logo'

const columns = [
  { title: 'Product', links: ['Features', 'How it works', 'Pricing', 'Changelog'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
]

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-24 pb-48 pt-32 md:px-32">
      <div className="rounded-cards bg-limestone p-40 md:p-64">
        <div className="grid gap-40 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-16 max-w-[280px] text-body text-obsidian/60">
              A simple personal finance tracker that helps you understand where your money goes.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[14px] font-medium leading-none text-obsidian/50">
                {col.title}
              </p>
              <ul className="mt-20 space-y-12">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-[15px] font-medium leading-none text-obsidian transition-colors hover:text-ember"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-48 flex flex-col gap-16 border-t border-dotted border-obsidian/30 pt-32 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] text-obsidian/50">
            © 2026 FinTrack. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-40 w-40 place-items-center rounded-full bg-pumice text-obsidian transition-colors hover:bg-ember hover:text-chalk"
              >
                <s.icon className="h-16 w-16" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Reveal } from './reveal'

const stats = [
  { label: 'Active users', value: '12,500+' },
  { label: 'Transactions tracked', value: '1.2M+' },
  { label: 'Expenses analyzed', value: '$8.4M+' },
]

export function Stats() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-24 py-96 md:px-32">
      <div className="grid gap-16 md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="rounded-cards bg-ember p-40">
              <p className="font-sans text-[14px] font-medium leading-none text-chalk/80">
                {s.label}
              </p>
              <p className="mt-24 font-display text-[42px] leading-none tracking-display text-chalk sm:text-[50px] lg:text-[58px] xl:text-[68px]">
                {s.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

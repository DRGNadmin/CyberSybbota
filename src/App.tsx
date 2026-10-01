import { motion, useReducedMotion } from 'framer-motion'
import {
  budgetRows,
  eventMeta,
  formatRub,
  genshinPoints,
  metrics,
  mlbbPoints,
  schedule,
} from './data/brief'

const ease = [0.22, 1, 0.36, 1] as const

function Lantern({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`animate-float pointer-events-none absolute ${className ?? ''}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      <svg viewBox="0 0 64 96" className="h-full w-full drop-shadow-[0_0_18px_rgba(212,168,75,0.35)]">
        <line x1="32" y1="4" x2="32" y2="14" stroke="#d4a84b" strokeWidth="2" />
        <ellipse cx="32" cy="18" rx="10" ry="4" fill="#d4a84b" />
        <path
          d="M16 24c0-2 4-6 16-6s16 4 16 6v40c0 10-8 18-16 22-8-4-16-12-16-22V24z"
          fill="url(#lanternGrad)"
          stroke="#e8c97a"
          strokeWidth="1.2"
        />
        <path d="M22 34h20M20 46h24M22 58h20" stroke="#e8c97a" strokeOpacity="0.55" strokeWidth="1.5" />
        <path d="M28 86c2 4 4 6 4 8 0-2 2-4 4-8" stroke="#d4a84b" strokeWidth="2" fill="none" />
        <defs>
          <linearGradient id="lanternGrad" x1="32" y1="18" x2="32" y2="86">
            <stop offset="0%" stopColor="#c43a45" />
            <stop offset="55%" stopColor="#9b1c2c" />
            <stop offset="100%" stopColor="#6e0f1c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function App() {
  const reduce = useReducedMotion()
  const total = budgetRows.reduce((sum, row) => sum + row.amount, 0)

  return (
    <div className="lantern-glow pattern-veil min-h-screen overflow-x-hidden">
      <header className="relative isolate min-h-[100svh] px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="font-display text-sm tracking-[0.18em] text-[var(--gold-soft)] uppercase">
            Киберсуббота
          </p>
          <a
            href="/MLBB_CyberSaturday_CNY_Brief_Budget.docx"
            className="rounded-sm border border-[var(--line)] bg-[rgba(155,28,44,0.25)] px-4 py-2 text-sm text-[var(--paper)] transition hover:border-[var(--gold)] hover:bg-[rgba(155,28,44,0.45)]"
          >
            Скачать .docx
          </a>
        </nav>

        <Lantern className="top-[18%] right-[8%] hidden h-28 w-20 opacity-90 md:block" delay={0} />
        <Lantern className="top-[42%] left-[6%] hidden h-20 w-14 opacity-70 lg:block" delay={1.2} />
        <Lantern className="right-[22%] bottom-[18%] hidden h-16 w-12 opacity-50 xl:block" delay={2.1} />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center pt-[12vh] sm:pt-[16vh]">
          <motion.p
            className="mb-4 text-sm tracking-[0.22em] text-[var(--muted)] uppercase"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {eventMeta.date} · {eventMeta.place}
          </motion.p>
          <motion.h1
            className="font-display max-w-4xl text-4xl leading-[1.05] font-semibold text-[var(--paper)] sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
          >
            {eventMeta.title}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg text-[var(--paper-dim)] sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
          >
            Зона Mobile Legends и уголок Genshin Impact к Китайскому Новому году — турнир, косплей,
            фонарики на ТВ и мини-игры с компами.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
          >
            <a
              href="#budget"
              className="bg-[var(--crimson)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--paper)] transition hover:bg-[var(--crimson-deep)]"
            >
              Бюджет {eventMeta.budgetLabel}
            </a>
            <a
              href="#schedule"
              className="border border-[var(--line)] px-6 py-3 text-sm text-[var(--gold-soft)] transition hover:border-[var(--gold)]"
            >
              Расписание дня
            </a>
          </motion.div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-24 px-5 pb-24 sm:px-8 lg:px-12">
        <section id="about" className="scroll-mt-8">
          <h2 className="font-display text-2xl text-[var(--gold-soft)] sm:text-3xl">Описание</h2>
          <p className="mt-4 max-w-3xl text-[var(--paper-dim)] leading-relaxed">
            Тематическая зона внутри фестиваля «Киберсуббота». В эти даты у Genshin Impact проходит
            внутриигровой CNY-ивент — его используем как визуальный и смысловой якорь уголка: декор,
            фонарики на экране и мини-игры на ПК.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-lg text-[var(--paper)]">Mobile Legends</h3>
              <ul className="mt-4 space-y-2.5">
                {mlbbPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[var(--paper-dim)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg text-[var(--paper)]">Genshin Impact</h3>
              <ul className="mt-4 space-y-2.5">
                {genshinPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[var(--paper-dim)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                Мини-игры и запуск фонариков в сезонной ивенте обычно бесплатны. В смету заложено
                12 000 ₽ на Welkin / кристаллы / косметику, чтобы демо выглядело аккуратно. Основная
                статья — физический декор зоны и косплеерша.
              </p>
            </div>
          </div>
        </section>

        <section id="schedule" className="scroll-mt-8">
          <h2 className="font-display text-2xl text-[var(--gold-soft)] sm:text-3xl">
            Расписание дня
          </h2>
          <p className="mt-3 text-[var(--muted)]">{eventMeta.date}</p>
          <div className="mt-8 overflow-hidden border border-[var(--line)]">
            <div className="divide-y divide-[var(--line)]">
              {schedule.map((row, i) => (
                <motion.div
                  key={row.time + row.activity}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 px-4 py-3.5 sm:grid-cols-[9.5rem_1fr] sm:px-5"
                  style={{ background: i % 2 === 0 ? 'rgba(42,22,25,0.55)' : 'rgba(18,8,10,0.35)' }}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.03, 0.3), ease }}
                >
                  <span className="font-medium whitespace-nowrap text-[var(--gold)]">{row.time}</span>
                  <span className="text-[var(--paper-dim)]">{row.activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="budget" className="scroll-mt-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl text-[var(--gold-soft)] sm:text-3xl">Смета</h2>
              <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
                В итоговую сумму входит возвращаемый залог за телефоны 40 000 ₽.
              </p>
            </div>
            <p className="font-display text-3xl text-[var(--paper)] sm:text-4xl">
              {formatRub(total)} ₽
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-[var(--line)]">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[var(--crimson-deep)] text-[var(--paper)]">
                <tr>
                  <th className="px-4 py-3 font-medium">Статья</th>
                  <th className="hidden px-4 py-3 font-medium md:table-cell">Комментарий</th>
                  <th className="px-4 py-3 text-right font-medium">Сумма, ₽</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, i) => (
                  <tr
                    key={row.item}
                    className="border-t border-[var(--line)]"
                    style={{ background: i % 2 === 0 ? 'rgba(42,22,25,0.45)' : 'transparent' }}
                  >
                    <td className="px-4 py-3 text-[var(--paper)]">
                      {row.item}
                      <p className="mt-1 text-xs text-[var(--muted)] md:hidden">{row.note}</p>
                    </td>
                    <td className="hidden px-4 py-3 text-[var(--muted)] md:table-cell">{row.note}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap text-[var(--gold-soft)]">
                      {formatRub(row.amount)}
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-[var(--gold)] bg-[rgba(212,168,75,0.12)]">
                  <td className="px-4 py-3 font-semibold text-[var(--paper)]">Итого</td>
                  <td className="hidden px-4 py-3 md:table-cell" />
                  <td className="px-4 py-3 text-right font-semibold text-[var(--gold)]">
                    {formatRub(total)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="metrics" className="scroll-mt-8">
          <h2 className="font-display text-2xl text-[var(--gold-soft)] sm:text-3xl">
            Ожидаемые метрики
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {metrics.map((row) => (
              <div
                key={row.metric}
                className="flex items-baseline justify-between gap-4 border border-[var(--line)] bg-[rgba(42,22,25,0.4)] px-4 py-3"
              >
                <span className="text-sm text-[var(--paper-dim)]">{row.metric}</span>
                <span className="shrink-0 font-medium text-[var(--gold)]">{row.goal}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-8 text-center text-sm text-[var(--muted)] sm:px-8">
        Бриф зоны MLBB + Genshin · {eventMeta.title} · {eventMeta.date}
      </footer>
    </div>
  )
}

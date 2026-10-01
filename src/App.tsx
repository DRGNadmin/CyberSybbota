import { motion, useReducedMotion } from 'framer-motion'
import {
  budgetRows,
  eventMeta,
  formatRub,
  genshinPoints,
  metrics,
  mlbbPoints,
  promoNote,
  schedule,
  scheduleNote,
} from './data/brief'

const ease = [0.22, 1, 0.36, 1] as const

function Lantern({
  className,
  delay = 0,
  tone = 'red',
}: {
  className?: string
  delay?: number
  tone?: 'red' | 'gold'
}) {
  const gid = `lg-${tone}-${delay}`
  const top = tone === 'gold' ? '#ffe09a' : '#e63950'
  const mid = tone === 'gold' ? '#f0c14b' : '#c41e3a'
  const bot = tone === 'gold' ? '#b8860b' : '#8b0a1e'

  return (
    <div
      className={`animate-float pointer-events-none absolute ${className ?? ''}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      <svg viewBox="0 0 64 100" className="h-full w-full drop-shadow-[0_0_22px_rgba(240,193,75,0.4)]">
        <line x1="32" y1="2" x2="32" y2="12" stroke="#f0c14b" strokeWidth="2.2" />
        <ellipse cx="32" cy="15" rx="11" ry="4.5" fill="#f0c14b" />
        <path
          d="M14 22c0-3 5-8 18-8s18 5 18 8v42c0 12-9 20-18 24-9-4-18-12-18-24V22z"
          fill={`url(#${gid})`}
          stroke="#ffe09a"
          strokeWidth="1.4"
        />
        <path
          d="M22 34c3 2 7 2 10 0s7-2 10 0M20 48c4 2 8 2 12 0s8-2 12 0M22 62c3 2 7 2 10 0s7-2 10 0"
          stroke="#ffe09a"
          strokeOpacity="0.65"
          strokeWidth="1.4"
          fill="none"
        />
        <path d="M27 88c2.5 5 4 7.5 5 10 1-2.5 2.5-5 5-10" stroke="#f0c14b" strokeWidth="2" fill="none" />
        <circle cx="32" cy="42" r="5" fill="#ffe09a" fillOpacity="0.25" />
        <defs>
          <linearGradient id={gid} x1="32" y1="14" x2="32" y2="88">
            <stop offset="0%" stopColor={top} />
            <stop offset="55%" stopColor={mid} />
            <stop offset="100%" stopColor={bot} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function RisingLanterns() {
  const items = [
    { left: '8%', delay: '0s', dur: '18s', size: 'h-10 w-7' },
    { left: '22%', delay: '4s', dur: '22s', size: 'h-8 w-5' },
    { left: '48%', delay: '2s', dur: '20s', size: 'h-12 w-8' },
    { left: '68%', delay: '7s', dur: '24s', size: 'h-9 w-6' },
    { left: '86%', delay: '1s', dur: '19s', size: 'h-11 w-7' },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((item) => (
        <div
          key={item.left}
          className={`animate-drift absolute bottom-[-10%] opacity-60 ${item.size}`}
          style={{ left: item.left, animationDelay: item.delay, animationDuration: item.dur }}
        >
          <svg viewBox="0 0 40 64" className="h-full w-full">
            <ellipse cx="20" cy="10" rx="7" ry="3" fill="#f0c14b" />
            <path
              d="M10 14c0-2 3-5 10-5s10 3 10 5v28c0 7-5 12-10 14-5-2-10-7-10-14V14z"
              fill="#c41e3a"
              stroke="#ffe09a"
              strokeWidth="1"
            />
            <path d="M17 56c1.5 3 2.5 4.5 3 6 .5-1.5 1.5-3 3-6" stroke="#f0c14b" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ))}
    </div>
  )
}

function CloudOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} aria-hidden fill="none">
      <path
        d="M8 28c10-18 34-22 50-8 10-16 34-20 52-6 16-14 40-10 50 8 14-8 34-4 40 10H8z"
        stroke="#f0c14b"
        strokeOpacity="0.55"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function SectionTitle({
  zh,
  children,
}: {
  zh: string
  children: string
}) {
  return (
    <div className="relative">
      <p className="font-festive animate-shimmer text-5xl leading-none text-[var(--crimson-bright)]/80 sm:text-6xl">
        {zh}
      </p>
      <h2 className="font-display mt-1 text-2xl text-[var(--gold-soft)] sm:text-3xl">{children}</h2>
      <div className="ornament-line mt-4 w-40" />
    </div>
  )
}

export default function App() {
  const reduce = useReducedMotion()
  const total = budgetRows.reduce((sum, row) => sum + row.amount, 0)

  return (
    <div className="cny-scene cny-clouds min-h-screen overflow-x-hidden">
      <header className="relative isolate min-h-[100svh] px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        {!reduce && <RisingLanterns />}

        <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="cny-seal font-festive flex h-11 w-11 items-center justify-center text-2xl text-[var(--gold-soft)]">
              春
            </span>
            <p className="font-display text-sm tracking-[0.18em] text-[var(--gold-soft)] uppercase">
              Киберсуббота
            </p>
          </div>
          <a
            href="/MLBB_CyberSaturday_CNY_Brief_Budget.docx"
            className="border border-[var(--gold)]/50 bg-[rgba(196,30,58,0.35)] px-4 py-2 text-sm text-[var(--paper)] transition hover:border-[var(--gold)] hover:bg-[rgba(196,30,58,0.55)]"
          >
            Скачать .docx
          </a>
        </nav>

        <Lantern className="top-[14%] right-[6%] hidden h-40 w-28 opacity-95 md:block" delay={0} />
        <Lantern className="top-[34%] left-[3%] hidden h-28 w-20 opacity-90 lg:block" delay={1.1} />
        <Lantern className="top-[22%] right-[22%] hidden h-24 w-16 opacity-75 xl:block" delay={1.8} />
        <Lantern
          className="right-[18%] bottom-[12%] hidden h-20 w-14 opacity-80 xl:block"
          delay={2.4}
          tone="gold"
        />

        <div
          className="pointer-events-none absolute top-28 right-0 hidden w-14 flex-col items-center gap-2 lg:flex"
          aria-hidden
        >
          <div className="cny-seal font-festive flex h-12 w-12 items-center justify-center text-2xl text-[var(--gold-soft)]">
            福
          </div>
          <div className="w-10 bg-[var(--crimson)] px-1 py-6 text-center shadow-[0_0_20px_rgba(196,30,58,0.4)]">
            <p className="font-festive writing-vertical text-xl leading-tight text-[var(--gold-soft)]">
              新春快乐
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center pt-[10vh] sm:pt-[14vh]">
          <CloudOrnament className="mb-6 h-8 w-48 text-[var(--gold)] opacity-80" />
          <motion.p
            className="font-festive mb-2 text-4xl text-[var(--crimson-bright)] sm:text-5xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            新年快乐
          </motion.p>
          <motion.p
            className="mb-4 text-sm tracking-[0.22em] text-[var(--muted)] uppercase"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
          >
            {eventMeta.date} · {eventMeta.place}
          </motion.p>
          <motion.h1
            className="font-display max-w-4xl text-4xl leading-[1.05] font-semibold text-[var(--paper)] sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
          >
            {eventMeta.title}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg text-[var(--paper-dim)] sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            Зона Mobile Legends и уголок Genshin Impact к Китайскому Новому году: турнир,
            косплей, фонарики и мини-игры.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease }}
          >
            <a
              href="#budget"
              className="bg-[var(--crimson)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--paper)] shadow-[0_0_24px_rgba(196,30,58,0.45)] transition hover:bg-[var(--crimson-deep)]"
            >
              Бюджет {eventMeta.budgetLabel}
            </a>
            <a
              href="#schedule"
              className="border border-[var(--gold)]/55 px-6 py-3 text-sm text-[var(--gold-soft)] transition hover:border-[var(--gold)] hover:bg-[rgba(240,193,75,0.08)]"
            >
              Расписание дня
            </a>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--ink)] to-transparent" />
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-24 px-5 pb-24 sm:px-8 lg:px-12">
        <section id="about" className="scroll-mt-8">
          <SectionTitle zh="活动">Описание</SectionTitle>
          <p className="mt-5 max-w-3xl leading-relaxed text-[var(--paper-dim)]">
            Зона внутри фестиваля «Киберсуббота». Команды на турнир 5×5 регистрируются заранее.
            Компьютеры, столы, телевизоры, звук и приставка — оборудование площадки. Активности
            доступны всё время работы зоны.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="panel-cny p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-festive text-3xl text-[var(--crimson-bright)]">武</span>
                <h3 className="font-display text-lg text-[var(--paper)]">Mobile Legends</h3>
              </div>
              <ul className="space-y-2.5">
                {mlbbPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[var(--paper-dim)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson-bright)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel-cny p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-festive text-3xl text-[var(--gold)]">灯</span>
                <h3 className="font-display text-lg text-[var(--paper)]">Genshin Impact</h3>
              </div>
              <ul className="space-y-2.5">
                {genshinPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-[var(--paper-dim)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="schedule" className="scroll-mt-8">
          <SectionTitle zh="日程">Расписание дня</SectionTitle>
          <p className="mt-3 text-[var(--muted)]">
            {eventMeta.date}. {scheduleNote}
          </p>
          <div className="panel-cny mt-8 overflow-hidden">
            <div className="divide-y divide-[var(--line)]">
              {schedule.map((row, i) => (
                <motion.div
                  key={row.time + row.activity}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 px-4 py-3.5 sm:grid-cols-[9.5rem_1fr] sm:px-5"
                  style={{
                    background:
                      i % 2 === 0 ? 'rgba(196,30,58,0.12)' : 'rgba(20,3,6,0.25)',
                  }}
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
            <SectionTitle zh="预算">Смета</SectionTitle>
            <p className="font-display text-3xl text-[var(--gold-soft)] sm:text-4xl">
              {formatRub(total)} ₽
            </p>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            В итоговую сумму входит возвращаемый залог за телефоны 40 000 ₽.
          </p>

          <div className="panel-cny mt-8 overflow-x-auto">
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
                    style={{
                      background: i % 2 === 0 ? 'rgba(196,30,58,0.1)' : 'transparent',
                    }}
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
                <tr className="border-t border-[var(--gold)] bg-[rgba(240,193,75,0.14)]">
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
          <SectionTitle zh="目标">Ожидаемые метрики</SectionTitle>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {metrics.map((row) => (
              <div
                key={row.metric}
                className="panel-cny flex items-baseline justify-between gap-4 px-4 py-3"
              >
                <span className="text-sm text-[var(--paper-dim)]">{row.metric}</span>
                <span className="shrink-0 font-medium text-[var(--gold)]">{row.goal}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-[var(--line)] px-5 py-10 text-center sm:px-8">
        <p className="font-festive text-3xl text-[var(--crimson-bright)]">恭喜发财</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Бриф зоны · {eventMeta.title} · {eventMeta.date}
        </p>
      </footer>
    </div>
  )
}

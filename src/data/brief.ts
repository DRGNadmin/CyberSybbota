export const eventMeta = {
  title: 'Киберсуббота',
  subtitle: 'Mobile Legends и Genshin Impact · Китайский Новый год',
  date: '6 февраля 2027',
  place: 'Сколково',
  budget: 900_000,
  budgetLabel: '900 000 ₽',
  vatRate: 0.05,
}

export const mlbbPoints = [
  'турнир 5×5: команды регистрируются заранее, приз 20 000 ₽ и алмазы',
  '«царь горы» 1×1 за алмазы',
  'викторина, бинго, конкурс рисунков',
  '2 косплеера и фотозона 3×2 м — фото весь день',
  'зона отдыха с приставкой',
  'медийный гость',
  'трансляция с площадки',
  'размещение ивента в официальных пабликах Mobile Legends',
]

export const promoNote =
  'Ивент получит размещение в официальных пабликах Mobile Legends.'

export const genshinPoints = [
  'декор в стиле китайского Нового года и игрового праздника фонарей',
  '4 компьютера с мини-играми Genshin Impact',
  'телевизор: запуск фонариков из игрового события',
  '1 косплеерша — фото весь день',
]

export const scheduleNote =
  'Зона работает до 18:00. Мини-игры, фотозона, косплей и фонарики доступны всё время.'

export const schedule = [
  { time: '10:00–11:00', activity: 'Подготовка зоны, проверка техники, брифинг' },
  { time: '11:00', activity: 'Открытие зоны' },
  { time: '12:00', activity: 'Сверка команд турнира 5×5 и публикация сетки' },
  { time: '12:30', activity: 'Старт турнира 5×5' },
  { time: '14:00', activity: 'Бинго и викторина' },
  { time: '14:45', activity: 'Медийный гость на зоне' },
  { time: '15:15', activity: 'Игры на вылет, турнир 5×5' },
  { time: '16:15', activity: 'Полуфиналы' },
  { time: '17:00', activity: 'Финал' },
  { time: '17:30', activity: 'Награждение' },
  { time: '18:00', activity: 'Закрытие зоны' },
]

export type BudgetLine = {
  item: string
  note: string
  unit?: string
  qty?: number
  price?: number
  amount: number
}

export type BudgetSection = {
  title: string
  rows: BudgetLine[]
}

/** Суммы без НДС. НДС 5% сверху → итого 900 000 ₽ */
export const budgetSections: BudgetSection[] = [
  {
    title: '1. Обеспечение площадки',
    rows: [
      {
        item: 'Организация пространства зоны',
        note: 'выделение и оформление зоны под программу дня',
        unit: 'проект',
        qty: 1,
        price: 85714,
        amount: 85714,
      },
      {
        item: 'Подготовка и сетап площадки',
        note: 'монтаж зоны до открытия, подготовка рабочих мест',
        unit: 'проект',
        qty: 1,
        price: 52381,
        amount: 52381,
      },
      {
        item: 'Техническое обеспечение площадки',
        note: 'базовый свет, звук и видео инфраструктуры арены',
        unit: 'проект',
        qty: 1,
        price: 76190,
        amount: 76190,
      },
      {
        item: 'Инфраструктура и коммутация',
        note: 'интернет, экраны арены, коммутация сигналов',
        unit: 'проект',
        qty: 1,
        price: 61905,
        amount: 61905,
      },
      {
        item: 'Сопровождение площадки в день мероприятия',
        note: 'работа площадки до 18:00',
        unit: 'проект',
        qty: 1,
        price: 55238,
        amount: 55238,
      },
    ],
  },
  {
    title: '2. Техническое обслуживание зон',
    rows: [
      {
        item: 'Администратор зоны',
        note: 'операционные вопросы на площадке',
        unit: 'чел.',
        qty: 4,
        price: 7428.5,
        amount: 29714,
      },
      {
        item: 'Технический администратор',
        note: 'звук, экран, интернет, коммутация',
        unit: 'чел.',
        qty: 1,
        price: 13714,
        amount: 13714,
      },
    ],
  },
  {
    title: '3. Медиа / трансляция',
    rows: [
      {
        item: 'Режиссёр трансляции',
        note: 'управление эфиром, камеры, графика',
        unit: 'чел.',
        qty: 1,
        price: 23810,
        amount: 23810,
      },
      {
        item: 'Обсервер',
        note: 'внутриигровая режиссура',
        unit: 'чел.',
        qty: 1,
        price: 19048,
        amount: 19048,
      },
      {
        item: 'Инженер по звуку',
        note: 'звук на площадке и в эфире',
        unit: 'чел.',
        qty: 1,
        price: 17143,
        amount: 17143,
      },
      {
        item: 'Инженер трансляции',
        note: 'сигнал, стабильность эфира',
        unit: 'чел.',
        qty: 1,
        price: 23810,
        amount: 23810,
      },
      {
        item: 'Режиссёр по графике',
        note: 'графика в трансляции',
        unit: 'чел.',
        qty: 1,
        price: 19048,
        amount: 19048,
      },
    ],
  },
  {
    title: '4. Оборудование',
    rows: [
      {
        item: 'Студийный свет',
        note: '',
        unit: 'комплект',
        qty: 1,
        price: 24762,
        amount: 24762,
      },
      {
        item: 'Игровой компьютер',
        note: 'зона Genshin Impact, мини-игры; смена до 12 ч',
        unit: 'шт.',
        qty: 4,
        price: 9942.75,
        amount: 39771,
      },
      {
        item: 'Телевизор 65″',
        note: 'зона Genshin Impact и показ на зоне; смена до 12 ч',
        unit: 'шт.',
        qty: 2,
        price: 2857,
        amount: 5714,
      },
    ],
  },
  {
    title: '5. Менеджмент',
    rows: [
      {
        item: 'Менеджмент мероприятия',
        note: 'координация зоны и программы',
        unit: 'проект',
        qty: 1,
        price: 76190,
        amount: 76190,
      },
    ],
  },
  {
    title: '6. Организация ивента',
    rows: [
      { item: 'Косплееры Mobile Legends (2 чел.)', note: 'фото весь день', amount: 38095 },
      { item: 'Косплеерша Genshin Impact (1 чел.)', note: 'фото весь день', amount: 23810 },
      { item: 'Фотозона Mobile Legends 3×2 м', note: 'каркас, печать, монтаж', amount: 14286 },
      { item: 'Декор зоны Genshin Impact', note: 'панели, ткань, фонари, фотофон', amount: 28571 },
      { item: 'Декор под Китайский Новый год', note: 'зона Mobile Legends и проходы', amount: 20562 },
      { item: 'Ведущий', note: '', amount: 20952 },
      { item: 'Алмазы Mobile Legends 15 000 шт.', note: 'призы', amount: 23000 },
      { item: 'Денежный приз турнира 5×5', note: '', amount: 19048 },
      { item: 'Бинго и расходники', note: '', amount: 5714 },
      { item: 'Покупки в Genshin Impact для зоны', note: 'валюта и оформление', amount: 4762 },
      { item: 'Аренда 14 смартфонов', note: '2 суток, с резервом', amount: 15143 },
      { item: 'Медийный гость', note: '', amount: 19048 },
    ],
  },
]

export const budgetRows = budgetSections.flatMap((section) => section.rows)

export const metrics = [
  { metric: 'Уникальные гости зоны', goal: '500–650' },
  { metric: 'Пик одновременно на зоне', goal: '70–90' },
  { metric: 'Команды в турнире 5×5', goal: '8–12' },
  { metric: 'Участники «царя горы»', goal: '40–55' },
  { metric: 'Фото у зоны и с косплеем', goal: '250–350' },
  { metric: 'Гости уголка Genshin Impact', goal: '120–180' },
  { metric: 'Участники викторины и бинго', goal: '70–100' },
  { metric: 'Длительность трансляции', goal: 'до 18:00' },
  { metric: 'Пик зрителей трансляции', goal: '250–400' },
  { metric: 'Уникальные зрители трансляции', goal: '1 800–3 000' },
  { metric: 'Короткие ролики за неделю', goal: '10–14 шт. / 10–20 тыс. охват' },
]

export function formatRub(n: number) {
  return new Intl.NumberFormat('ru-RU').format(n)
}

export function sectionTotal(section: BudgetSection) {
  return section.rows.reduce((sum, row) => sum + row.amount, 0)
}

export function budgetNetTotal() {
  return budgetSections.reduce((sum, section) => sum + sectionTotal(section), 0)
}

export function budgetVatAmount() {
  return eventMeta.budget - budgetNetTotal()
}

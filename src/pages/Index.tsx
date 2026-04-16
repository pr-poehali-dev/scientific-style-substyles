import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const substyles = [
  {
    id: 1,
    name: "Собственно научный",
    icon: "FlaskConical",
    audience: "Учёные, исследователи",
    description:
      "Используется в научных статьях, монографиях, диссертациях. Отличается максимальной точностью, насыщенностью терминологией и строгой логической структурой. Допускает сложный синтаксис и развёрнутые рассуждения.",
    examples: ["Научные статьи", "Монографии", "Диссертации", "Тезисы"],
  },
  {
    id: 2,
    name: "Научно-учебный",
    icon: "GraduationCap",
    audience: "Студенты, школьники",
    description:
      "Применяется в учебниках, пособиях, лекциях. Сохраняет точность и системность научного стиля, но упрощает подачу: термины объясняются, приводятся примеры, используется педагогическая риторика.",
    examples: ["Учебники", "Лекции", "Учебные пособия", "Задачники"],
  },
  {
    id: 3,
    name: "Научно-популярный",
    icon: "BookOpen",
    audience: "Широкая аудитория",
    description:
      "Рассчитан на читателей без специальной подготовки. Сложные понятия передаются через аналогии, образы и сравнения. Допускает элементы публицистического и разговорного стилей для оживления текста.",
    examples: ["Научпоп-книги", "Журналы", "Подкасты", "Лекции TED"],
  },
  {
    id: 4,
    name: "Научно-деловой",
    icon: "FileText",
    audience: "Специалисты, организации",
    description:
      "Применяется в технической документации, отчётах, заключениях экспертов. Сочетает признаки научного и официально-делового стилей: точность формулировок и стандартизированность форм.",
    examples: ["Технические отчёты", "Экспертизы", "Инструкции", "Акты"],
  },
  {
    id: 5,
    name: "Научно-информационный",
    icon: "Newspaper",
    audience: "Профессиональное сообщество",
    description:
      "Обслуживает сферу научной коммуникации: рефераты, аннотации, патенты, обзоры литературы. Главная задача — максимально сжато и точно передать содержание первоисточника.",
    examples: ["Рефераты", "Аннотации", "Патенты", "Обзоры"],
  },
];

const features = [
  { icon: "Sigma", label: "Точность", desc: "Каждое слово имеет одно чёткое значение, исключается двусмысленность" },
  { icon: "Layers", label: "Логичность", desc: "Суждения последовательно вытекают одно из другого" },
  { icon: "Eye", label: "Объективность", desc: "Устраняется субъективная оценка, факты излагаются нейтрально" },
  { icon: "AlignLeft", label: "Обобщённость", desc: "Язык передаёт абстрактные понятия и закономерности" },
];

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background font-body">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-display text-xl font-light tracking-wide text-foreground">Scientia</span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="BookOpen" size={13} />
            <span>Лекция · Русский язык</span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <div className="flex items-center gap-3 text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <span>Стилистика</span>
            <span className="w-4 h-px bg-border inline-block"></span>
            <span>Функциональные стили</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-6">
            Научный стиль речи
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Один из функциональных стилей современного русского литературного языка, обслуживающий сферу науки и научного общения.
          </p>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={12} />Чтение: ~7 минут</span>
            <span className="flex items-center gap-1.5"><Icon name="Layers" size={12} />5 подстилей</span>
          </div>
        </div>

        <div className="w-full h-px bg-border mb-16" />

        {/* Definition */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <h2 className="font-display text-3xl font-light text-foreground mb-5">Что такое научный стиль</h2>
          <div className="space-y-4 text-[15px] text-foreground/80 leading-[1.85]">
            <p>
              <strong className="text-foreground font-medium">Научный стиль</strong> — это функциональная разновидность литературного языка, которая исторически сложилась в сфере науки и применяется для передачи, хранения и систематизации знаний о мире.
            </p>
            <p>
              Главная цель научного стиля — <em>точная и однозначная передача информации</em>. В отличие от художественной литературы, где слово многозначно и образно, научный текст стремится к максимальной ясности: каждый термин должен обозначать строго одно понятие.
            </p>
            <p>
              Становление научного стиля в русском языке связано с реформами Петра I и деятельностью М. В. Ломоносова, который заложил основы отечественной научной терминологии. К XIX–XX векам сложилась развитая система научных жанров и устойчивых речевых формул.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="my-10 pl-6 border-l-2 border-accent">
            <p className="font-display text-xl font-light text-foreground leading-relaxed italic">
              «Язык науки — это язык точных понятий, а не красивых образов»
            </p>
          </blockquote>
        </section>

        {/* Key features */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h2 className="font-display text-3xl font-light text-foreground mb-8">Основные черты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {features.map((f, i) => (
              <div key={i} className="bg-background p-6 flex gap-4">
                <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name={f.icon} size={15} fallback="Check" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">{f.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 bg-secondary border border-border text-sm text-foreground/80 leading-relaxed">
            <strong className="text-foreground">Языковые средства:</strong> широкое использование терминов, отглагольных существительных (<em>исследование, рассмотрение</em>), пассивных конструкций (<em>было установлено, является</em>), вводных слов логической связи (<em>следовательно, таким образом</em>), безличных предложений.
          </div>
        </section>

        <div className="w-full h-px bg-border mb-16" />

        {/* Substyles */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          <div className="mb-10">
            <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Классификация</div>
            <h2 className="font-display text-3xl font-light text-foreground">Подстили научного стиля</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-xl">
              Внутри научного стиля выделяют несколько подстилей — в зависимости от адресата, цели и сферы применения.
            </p>
          </div>

          <div className="space-y-px">
            {substyles.map((s, i) => (
              <div key={s.id} className="group border border-border p-8 hover:bg-secondary transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-display text-2xl font-light text-border group-hover:text-accent transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                      <Icon name={s.icon} size={15} fallback="BookOpen" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                      <h3 className="font-display text-xl font-light text-foreground">{s.name}</h3>
                      <span className="text-xs text-muted-foreground border border-border px-2 py-0.5">{s.audience}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.examples.map(ex => (
                        <span key={ex} className="text-xs bg-background border border-border px-3 py-1 text-foreground/70 group-hover:border-foreground/20 transition-colors">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <div className="border border-border p-8 bg-foreground text-background">
            <div className="text-xs tracking-widest uppercase text-background/50 mb-4">Итог</div>
            <h2 className="font-display text-2xl font-light mb-4">Коротко о главном</h2>
            <ul className="space-y-3 text-sm text-background/75 leading-relaxed">
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Научный стиль обслуживает сферу науки и служит передаче точного знания</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Его главные черты: точность, логичность, объективность и обобщённость</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Выделяют 5 подстилей: собственно научный, учебный, популярный, деловой и информационный</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Каждый подстиль ориентирован на свою аудиторию и систему жанров</span></li>
            </ul>
          </div>
        </section>

        {/* Next lecture CTA */}
        <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
          <div className="border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Следующая лекция</div>
              <div className="font-display text-xl font-light text-foreground">Научная речь и терминология</div>
              <div className="text-sm text-muted-foreground mt-1">Виды терминов: общенаучные, частнонаучные, технологические</div>
            </div>
            <button
              onClick={() => navigate("/terminology")}
              className="shrink-0 flex items-center gap-2 bg-foreground text-background text-sm px-6 py-3 hover:bg-foreground/85 transition-all group"
            >
              Читать лекцию
              <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="font-display text-lg font-light text-foreground">Scientia</span>
          <span className="text-xs text-muted-foreground">© 2026</span>
        </div>
      </footer>

    </div>
  );
}
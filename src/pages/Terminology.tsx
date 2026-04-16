import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const termTypes = [
  {
    id: 1,
    name: "Общенаучные термины",
    icon: "Globe",
    color: "text-blue-700",
    bg: "bg-blue-50",
    description:
      "Используются в большинстве научных дисциплин, независимо от области знания. Образуют универсальный понятийный аппарат науки в целом.",
    details:
      "Эти термины не принадлежат какой-либо одной дисциплине — они одинаково употребляются в физике, биологии, лингвистике и праве. Именно они составляют «общий язык» учёных разных специальностей.",
    examples: [
      { term: "система", def: "совокупность взаимосвязанных элементов" },
      { term: "анализ", def: "расчленение целого на составные части" },
      { term: "функция", def: "роль, выполняемая элементом в системе" },
      { term: "структура", def: "внутреннее строение объекта" },
      { term: "метод", def: "способ достижения научной цели" },
      { term: "гипотеза", def: "предположение, требующее проверки" },
    ],
  },
  {
    id: 2,
    name: "Частнонаучные термины",
    icon: "Microscope",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    description:
      "Принадлежат конкретной научной дисциплине и понятны прежде всего специалистам в данной области знаний.",
    details:
      "Частнонаучные термины отражают специфику конкретной науки. Один и тот же термин в разных дисциплинах может иметь разный смысл — например, «реакция» в химии и в психологии означает разное.",
    examples: [
      { term: "фонема", def: "(лингв.) минимальная звуковая единица языка" },
      { term: "валентность", def: "(хим.) способность атома образовывать связи" },
      { term: "синапс", def: "(биол.) место контакта двух нейронов" },
      { term: "деривация", def: "(лингв.) образование новых слов" },
      { term: "изотоп", def: "(физ.) разновидность атома одного элемента" },
      { term: "морфема", def: "(лингв.) минимальная значимая единица слова" },
    ],
  },
  {
    id: 3,
    name: "Технологические термины",
    icon: "Settings",
    color: "text-orange-700",
    bg: "bg-orange-50",
    description:
      "Обслуживают сферу производства, техники и технологических процессов. Часто переходят из профессионального жаргона в литературный язык.",
    details:
      "Технологические термины связаны с практическим применением научных знаний. Они описывают оборудование, процессы и операции в конкретных отраслях — машиностроении, IT, строительстве и других.",
    examples: [
      { term: "алгоритм", def: "точная последовательность действий для решения задачи" },
      { term: "протокол", def: "стандарт взаимодействия между системами" },
      { term: "рендеринг", def: "процесс формирования изображения из данных" },
      { term: "компиляция", def: "перевод кода в машинные инструкции" },
      { term: "фрезерование", def: "(произв.) обработка заготовки вращающимся инструментом" },
      { term: "интерфейс", def: "граница взаимодействия двух систем" },
    ],
  },
];

const speechTypes = [
  {
    icon: "MessageSquare",
    name: "Монолог",
    desc: "Развёрнутое высказывание одного лица — лекция, доклад, научная речь. Характерна сложная синтаксическая структура и полнота изложения.",
  },
  {
    icon: "Users",
    name: "Диалог",
    desc: "Обмен репликами между участниками — научная дискуссия, защита работы, интервью с учёным. Реплики короче, допускается неполнота.",
  },
  {
    icon: "Presentation",
    name: "Полилог",
    desc: "Речь нескольких участников — круглый стол, симпозиум, конференция. Совмещает черты монолога и диалога.",
  },
];

export default function Terminology() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-body">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Icon name="ArrowLeft" size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Назад
          </button>
          <span className="font-display text-xl font-light tracking-wide text-foreground">Scientia</span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="BookOpen" size={13} />
            <span>Лекция · Русский язык</span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.05s", opacity: 0 }}>
          <div className="flex items-center gap-3 text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <button onClick={() => navigate("/")} className="hover:text-foreground transition-colors">Научный стиль</button>
            <span className="w-4 h-px bg-border inline-block"></span>
            <span>Речь и терминология</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-6">
            Научная речь<br />и терминология
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Термин — основная единица научного стиля. Разберём виды речи в науке и три главных пласта научной терминологии.
          </p>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={12} />Чтение: ~8 минут</span>
            <span className="flex items-center gap-1.5"><Icon name="Tag" size={12} />3 вида терминов</span>
          </div>
        </div>

        <div className="w-full h-px bg-border mb-16" />

        {/* Speech section */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <h2 className="font-display text-3xl font-light text-foreground mb-5">Виды научной речи</h2>
          <div className="space-y-4 text-[15px] text-foreground/80 leading-[1.85] mb-10">
            <p>
              Научная речь — это особая форма коммуникации, в которой язык используется для создания, передачи и обсуждения знаний. По форме она делится на <strong className="text-foreground font-medium">устную</strong> и <strong className="text-foreground font-medium">письменную</strong>, а по структуре участия — на монолог, диалог и полилог.
            </p>
            <p>
              Письменная научная речь более нормативна: здесь строго соблюдаются стандарты оформления, цитирования и структуры. Устная допускает некоторую импровизацию, но сохраняет терминологическую точность.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {speechTypes.map((s, i) => (
              <div key={i} className="bg-background p-6">
                <div className="w-9 h-9 border border-border flex items-center justify-center mb-4">
                  <Icon name={s.icon} size={15} fallback="MessageSquare" />
                </div>
                <div className="font-medium text-foreground mb-2">{s.name}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-border mb-16" />

        {/* Terminology section */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <div className="mb-10">
            <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Терминология</div>
            <h2 className="font-display text-3xl font-light text-foreground mb-4">Что такое термин</h2>
            <div className="space-y-4 text-[15px] text-foreground/80 leading-[1.85]">
              <p>
                <strong className="text-foreground font-medium">Термин</strong> — это слово или словосочетание, которое точно и однозначно называет понятие в рамках определённой области знания. В отличие от обычных слов, термин лишён эмоциональной окраски и не зависит от контекста.
              </p>
              <p>
                Основные требования к термину: <em>однозначность</em> (одно слово — одно понятие), <em>системность</em> (термин входит в систему понятий дисциплины), <em>краткость</em> и <em>интернациональность</em> (многие термины имеют греко-латинские корни).
              </p>
            </div>
          </div>

          <blockquote className="my-10 pl-6 border-l-2 border-accent">
            <p className="font-display text-xl font-light text-foreground leading-relaxed italic">
              «Термин не просто называет вещь — он фиксирует место понятия в системе знаний»
            </p>
          </blockquote>

          {/* Term types */}
          <div className="space-y-6">
            {termTypes.map((type, i) => (
              <div key={type.id} className="border border-border">
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center gap-4">
                  <span className="font-display text-2xl font-light text-border">{String(i + 1).padStart(2, "0")}</span>
                  <div className={`w-9 h-9 ${type.bg} flex items-center justify-center shrink-0`}>
                    <Icon name={type.icon} size={15} className={type.color} fallback="Tag" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-light text-foreground">{type.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{type.description}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="px-6 py-4 border-b border-border bg-secondary">
                  <p className="text-sm text-foreground/75 leading-relaxed">{type.details}</p>
                </div>

                {/* Examples grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
                  {type.examples.map((ex) => (
                    <div key={ex.term} className="bg-background px-5 py-4">
                      <div className="font-medium text-foreground text-sm mb-1">{ex.term}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{ex.def}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="border border-border p-8 bg-foreground text-background">
            <div className="text-xs tracking-widest uppercase text-background/50 mb-4">Итог</div>
            <h2 className="font-display text-2xl font-light mb-4">Коротко о главном</h2>
            <ul className="space-y-3 text-sm text-background/75 leading-relaxed">
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Научная речь бывает монологической, диалогической и полилогической</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Термин — точное, однозначное и системное обозначение научного понятия</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Общенаучные термины используются во всех дисциплинах (анализ, метод, система)</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Частнонаучные принадлежат конкретной науке (фонема, синапс, валентность)</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Технологические термины обслуживают сферу производства и техники (алгоритм, протокол)</span></li>
            </ul>
          </div>
        </section>

        {/* Next lecture CTA */}
        <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          <div className="border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Следующая лекция</div>
              <div className="font-display text-xl font-light text-foreground">Официально-деловой стиль</div>
              <div className="text-sm text-muted-foreground mt-1">Подстили, жанры и языковые маркеры деловой речи</div>
            </div>
            <button
              onClick={() => navigate("/official-style")}
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
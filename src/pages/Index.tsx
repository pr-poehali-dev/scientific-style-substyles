import { useState } from "react";
import Icon from "@/components/ui/icon";

const courses = [
  {
    id: 1,
    category: "Физика",
    title: "Квантовая механика: от основ к реальности",
    description: "Изучите принципы квантового мира — суперпозиция, запутанность и волновые функции",
    lectures: 24,
    duration: "12 недель",
    level: "Продвинутый",
    icon: "Atom",
  },
  {
    id: 2,
    category: "Математика",
    title: "Высшая математика и анализ",
    description: "Пределы, производные, интегралы и ряды. Строгое математическое мышление",
    lectures: 36,
    duration: "16 недель",
    level: "Базовый",
    icon: "Calculator",
  },
  {
    id: 3,
    category: "Биология",
    title: "Молекулярная биология клетки",
    description: "ДНК, синтез белков, регуляция генов и современные методы исследования",
    lectures: 28,
    duration: "14 недель",
    level: "Средний",
    icon: "Dna",
  },
  {
    id: 4,
    category: "Химия",
    title: "Органическая химия: механизмы реакций",
    description: "Углубитесь в механизмы органических реакций и синтез сложных молекул",
    lectures: 32,
    duration: "15 недель",
    level: "Продвинутый",
    icon: "FlaskConical",
  },
  {
    id: 5,
    category: "Астрономия",
    title: "Вселенная: от Большого взрыва до сегодня",
    description: "История и эволюция Вселенной, звёзды, галактики и тёмная материя",
    lectures: 20,
    duration: "10 недель",
    level: "Базовый",
    icon: "Telescope",
  },
  {
    id: 6,
    category: "Информатика",
    title: "Алгоритмы и структуры данных",
    description: "Классические алгоритмы, анализ сложности и структуры данных для решения задач",
    lectures: 40,
    duration: "18 недель",
    level: "Средний",
    icon: "BrainCircuit",
  },
];

const stats = [
  { value: "120+", label: "Курсов" },
  { value: "48 000", label: "Студентов" },
  { value: "240", label: "Лекторов" },
  { value: "98%", label: "Довольны" },
];

const levelColors: Record<string, string> = {
  "Базовый": "bg-emerald-50 text-emerald-700",
  "Средний": "bg-amber-50 text-amber-700",
  "Продвинутый": "bg-rose-50 text-rose-700",
};

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const categories = ["Все", "Физика", "Математика", "Биология", "Химия", "Астрономия", "Информатика"];

  const filtered = activeCategory === "Все"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-body">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-2xl font-light tracking-wide text-foreground">
            Scientia
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Курсы</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О платформе</a>
            <a href="#lectures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Лекции</a>
          </div>
          <button className="bg-foreground text-background text-sm px-5 py-2 hover:bg-foreground/80 transition-colors">
            Начать учиться
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220,20%,12%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase text-muted-foreground mb-8 border border-border px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
              Образование нового поколения
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-light leading-[1.05] tracking-tight text-foreground mb-6">
              Наука<br />
              <em className="not-italic text-accent">открытая</em><br />
              для всех
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-sm">
              Глубокие курсы по точным и естественным наукам. Лекции от ведущих учёных. Системный подход к знаниям.
            </p>

            <div className="flex items-center gap-4">
              <button
                className="bg-foreground text-background px-7 py-3.5 text-sm font-body hover:bg-foreground/85 transition-all hover:translate-y-[-1px] active:translate-y-0"
                onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
              >
                Смотреть курсы
              </button>
              <button className="text-sm text-foreground flex items-center gap-2 hover:gap-3 transition-all group">
                Как это работает
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/ec9e815b-6f1d-47bd-871e-d4b5af6fc92a/files/bf19d330-165f-4a0f-92de-1678f962d93c.jpg"
                alt="Scientia — образовательная платформа"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-background border border-border p-4 shadow-sm">
                <div className="text-2xl font-display font-light text-foreground">2 400+</div>
                <div className="text-xs text-muted-foreground font-body mt-0.5">лекций доступно</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-0 border border-border mt-20 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          {stats.map((stat, i) => (
            <div key={i} className={`px-8 py-6 ${i < stats.length - 1 ? "border-r border-border" : ""}`}>
              <div className="font-display text-3xl font-light text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Программы</div>
            <h2 className="font-display text-4xl font-light text-foreground">Курсы</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="bg-background p-8 group hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                  <Icon name={course.icon} size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" fallback="BookOpen" />
                </div>
                <span className={`text-xs px-2 py-1 font-body ${levelColors[course.level]}`}>
                  {course.level}
                </span>
              </div>

              <div className="text-xs tracking-widest uppercase text-accent mb-2 font-body">{course.category}</div>
              <h3 className="font-display text-xl font-light text-foreground leading-snug mb-3">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                <span className="flex items-center gap-1.5">
                  <Icon name="PlayCircle" size={13} fallback="Play" />
                  {course.lectures} лекций
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="Clock" size={13} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1 text-foreground font-medium group-hover:gap-2 transition-all">
                  Подробнее
                  <Icon name="ArrowRight" size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3">О платформе</div>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                Знания без<br />компромиссов
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Scientia — это образовательная платформа, где наука преподаётся на академическом уровне. Мы работаем с университетскими профессорами и исследователями, чтобы каждый курс отражал реальное состояние науки.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Никаких упрощений ради доступности. Только глубокое погружение, структурированное обучение и сопровождение на каждом этапе.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "GraduationCap", text: "Академическая программа" },
                  { icon: "Users", text: "Сообщество учёных" },
                  { icon: "FileText", text: "Конспекты и материалы" },
                  { icon: "Award", text: "Сертификаты" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={14} fallback="Check" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-px">
              {[
                { num: "01", title: "Выбери курс", desc: "Более 120 программ по точным и естественным наукам" },
                { num: "02", title: "Учись в своём темпе", desc: "Видеолекции, конспекты и задачи доступны 24/7" },
                { num: "03", title: "Задавай вопросы", desc: "Прямые сессии с лекторами и форум сообщества" },
                { num: "04", title: "Получи сертификат", desc: "Подтверди знания документом установленного образца" },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-6 border border-border hover:bg-secondary transition-colors group">
                  <span className="font-display text-3xl font-light text-border group-hover:text-accent transition-colors shrink-0">{step.num}</span>
                  <div>
                    <div className="font-body font-medium text-foreground mb-1">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="text-xs tracking-widest uppercase text-background/50 mb-4 font-body">Начните сегодня</div>
          <h2 className="font-display text-5xl font-light mb-6">
            Готовы погрузиться<br />в науку?
          </h2>
          <p className="text-background/60 max-w-md mx-auto mb-10 leading-relaxed">
            Присоединяйтесь к тысячам студентов, которые уже изучают науку серьёзно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-foreground px-8 py-3.5 text-sm hover:bg-background/90 transition-colors">
              Записаться бесплатно
            </button>
            <button className="border border-background/30 text-background px-8 py-3.5 text-sm hover:border-background/60 transition-colors">
              Смотреть каталог
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl font-light text-foreground">Scientia</span>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Курсы</a>
            <a href="#" className="hover:text-foreground transition-colors">Лекторы</a>
            <a href="#" className="hover:text-foreground transition-colors">Блог</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
          <span className="text-xs text-muted-foreground">© 2026 Scientia</span>
        </div>
      </footer>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const substyles = [
  {
    id: 1,
    name: "Законодательный",
    icon: "Scale",
    description: "Язык законов, кодексов, указов и нормативных актов. Отличается предельной точностью формулировок — каждое слово имеет юридическую силу.",
    genres: ["Законы", "Кодексы", "Указы", "Постановления"],
    markers: ["обязан", "запрещается", "в соответствии с", "настоящий Федеральный закон"],
  },
  {
    id: 2,
    name: "Административно-канцелярский",
    icon: "FolderOpen",
    description: "Язык внутренней документации организаций: приказов, актов, протоколов. Строго регламентирован ГОСТами и стандартами делопроизводства.",
    genres: ["Приказы", "Акты", "Протоколы", "Справки"],
    markers: ["приказываю", "настоящим актом", "в целях", "во исполнение"],
  },
  {
    id: 3,
    name: "Дипломатический",
    icon: "Globe",
    description: "Язык международных отношений: договоров, нот, меморандумов. Сочетает строгость с высоким стилем и устойчивыми формулами вежливости.",
    genres: ["Договоры", "Ноты", "Меморандумы", "Коммюнике"],
    markers: ["высокие договаривающиеся стороны", "выражает протест", "нижайше просит", "имеет честь"],
  },
];

const features = [
  {
    icon: "Lock",
    label: "Стандартизованность",
    desc: "Документы составляются по жёстким шаблонам — реквизиты, структура и оформление строго регламентированы",
  },
  {
    icon: "Minus",
    label: "Безличность",
    desc: "Личное «я» исчезает: «настоящим сообщается», «приказываю», «в соответствии с»",
  },
  {
    icon: "BookMarked",
    label: "Клишированность",
    desc: "Устойчивые речевые формулы ускоряют составление и восприятие документов",
  },
  {
    icon: "AlertCircle",
    label: "Императивность",
    desc: "Многие тексты содержат предписания, запреты или разрешения, обязательные к исполнению",
  },
];

const genres = [
  { name: "Заявление", icon: "PenLine", desc: "Просьба физического или юридического лица к организации или должностному лицу" },
  { name: "Договор", icon: "Handshake", desc: "Соглашение двух и более сторон, порождающее права и обязанности" },
  { name: "Доверенность", icon: "UserCheck", desc: "Документ, передающий полномочия одного лица другому" },
  { name: "Протокол", icon: "ClipboardList", desc: "Фиксация хода и решений совещания, заседания, переговоров" },
  { name: "Резюме", icon: "Contact", desc: "Документ, представляющий личные и профессиональные данные соискателя" },
  { name: "Акт", icon: "FileCheck", desc: "Официальное удостоверение факта, события или действия" },
];

export default function OfficialStyle() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-body">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate("/terminology")}
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
            <button onClick={() => navigate("/terminology")} className="hover:text-foreground transition-colors">Терминология</button>
            <span className="w-4 h-px bg-border inline-block"></span>
            <span>Официально-деловой стиль</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-6">
            Официально-<br />деловой стиль
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Функциональный стиль, обслуживающий сферу права, государственного управления и деловых отношений между людьми и организациями.
          </p>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={12} />Чтение: ~8 минут</span>
            <span className="flex items-center gap-1.5"><Icon name="Layers" size={12} />3 подстиля</span>
            <span className="flex items-center gap-1.5"><Icon name="FileText" size={12} />6 жанров</span>
          </div>
        </div>

        <div className="w-full h-px bg-border mb-16" />

        {/* Definition */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <h2 className="font-display text-3xl font-light text-foreground mb-5">Что такое официально-деловой стиль</h2>
          <div className="space-y-4 text-[15px] text-foreground/80 leading-[1.85]">
            <p>
              <strong className="text-foreground font-medium">Официально-деловой стиль</strong> — это функциональная разновидность литературного языка, используемая в сфере права, делопроизводства, дипломатии и деловой коммуникации. Его главная задача — <em>юридически точная фиксация фактов, обязательств и предписаний</em>.
            </p>
            <p>
              В отличие от научного стиля, который ищет истину, официально-деловой стиль <em>регулирует отношения</em>: он определяет, кто, что и в какие сроки обязан сделать. Именно поэтому здесь так важна буквальная точность — неудачно выбранное слово может изменить правовой смысл документа.
            </p>
            <p>
              Стиль окончательно сложился в России к XVIII веку с развитием государственного аппарата. Пётр I ввёл коллегии и реформировал делопроизводство, заложив основу современной системы документации.
            </p>
          </div>

          <blockquote className="my-10 pl-6 border-l-2 border-accent">
            <p className="font-display text-xl font-light text-foreground leading-relaxed italic">
              «Документ — это не просто текст, это юридическое действие, воплощённое в словах»
            </p>
          </blockquote>
        </section>

        {/* Features */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <h2 className="font-display text-3xl font-light text-foreground mb-8">Языковые черты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-6">
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

          <div className="p-6 bg-secondary border border-border text-sm text-foreground/80 leading-relaxed">
            <strong className="text-foreground">Типичные языковые средства:</strong> существительные с суффиксом <em>-ние/-ение</em> (исполнение, уведомление), отыменные предлоги (в целях, на основании, в соответствии с), страдательные причастия (установленный, утверждённый), сложноподчинённые предложения с придаточными условия и цели.
          </div>
        </section>

        <div className="w-full h-px bg-border mb-16" />

        {/* Substyles */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="mb-10">
            <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Классификация</div>
            <h2 className="font-display text-3xl font-light text-foreground mb-3">Подстили</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              Внутри официально-делового стиля выделяют три подстиля в зависимости от сферы применения.
            </p>
          </div>

          <div className="space-y-px">
            {substyles.map((s, i) => (
              <div key={s.id} className="group border border-border hover:bg-secondary transition-colors">
                <div className="p-6 flex items-start gap-5">
                  <span className="font-display text-2xl font-light text-border group-hover:text-accent transition-colors shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0 mt-0.5 group-hover:border-foreground/30 transition-colors">
                    <Icon name={s.icon} size={15} fallback="FileText" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-light text-foreground mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>

                    <div className="flex flex-wrap gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Жанры</div>
                        <div className="flex flex-wrap gap-2">
                          {s.genres.map(g => (
                            <span key={g} className="text-xs bg-background border border-border px-3 py-1 text-foreground/70">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Маркеры</div>
                        <div className="flex flex-wrap gap-2">
                          {s.markers.map(m => (
                            <span key={m} className="text-xs bg-background border border-border border-dashed px-3 py-1 text-foreground/60 italic">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-border mb-16" />

        {/* Genres */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          <div className="mb-8">
            <div className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Жанры</div>
            <h2 className="font-display text-3xl font-light text-foreground">Основные документы</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {genres.map((g, i) => (
              <div key={i} className="bg-background p-6 hover:bg-secondary transition-colors group">
                <div className="w-9 h-9 border border-border flex items-center justify-center mb-4 group-hover:border-foreground/30 transition-colors">
                  <Icon name={g.icon} size={15} fallback="File" />
                </div>
                <div className="font-medium text-foreground mb-2">{g.name}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{g.desc}</div>
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
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Официально-деловой стиль регулирует правовые и деловые отношения</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Главные черты: стандартизованность, безличность, клишированность, императивность</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Три подстиля: законодательный, административно-канцелярский, дипломатический</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Типичные жанры: заявление, договор, протокол, акт, доверенность</span></li>
              <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">—</span><span>Языковые маркеры: отыменные предлоги, причастия, существительные на -ние/-ение</span></li>
            </ul>
          </div>
        </section>

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

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/bucket/ccd4d207-2337-4a2c-a3ef-f6730965d18e.jpg';

const timeline = [
  { time: '15:00', title: 'Сбор гостей', desc: 'Welcome-зона, лёгкие закуски и напитки', icon: 'Coffee' },
  { time: '16:00', title: 'Церемония', desc: 'Обмен клятвами в цветущем саду', icon: 'Heart' },
  { time: '17:30', title: 'Фуршет', desc: 'Поздравления и семейные фото', icon: 'GlassWater' },
  { time: '19:00', title: 'Банкет', desc: 'Ужин, тосты и первый танец', icon: 'UtensilsCrossed' },
  { time: '22:00', title: 'Вечеринка', desc: 'Танцы до утра и фейерверк', icon: 'Music' },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Index() {
  const [name, setName] = useState('');
  const [plusOne, setPlusOne] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');
  const [allergies, setAllergies] = useState('');
  const [wishes, setWishes] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${name || 'дорогой гость'}! Мы очень ждём вас!`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sand via-background to-background px-6 py-16 text-center">
        <div className="animate-fade-in relative z-10 mx-auto flex aspect-[9/11] w-full max-w-md items-center justify-center bg-contain bg-center bg-no-repeat px-10 py-16 md:max-w-lg"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/deca0f6a-56e4-430a-a9ec-e36e2d2dd7a8.jpg)`,
          }}
        >
          <div>
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Вы приглашены на свадьбу
            </p>
            <div className="floral-divider my-5" />
            <h1 className="font-serif text-5xl font-medium leading-none text-foreground md:text-7xl">
              Дарья <span className="text-rose">&</span> Григорий
            </h1>
            <div className="floral-divider my-5" />
            <p className="font-serif text-xl tracking-[0.3em] text-muted-foreground md:text-2xl">
              12 · 09 · 2026
            </p>
            <p className="mt-5 font-script text-2xl text-rose md:text-3xl">Ждём вас!</p>
          </div>
        </div>

        <a
          href="#story"
          className="relative z-10 mt-6 flex flex-col items-center gap-2 text-gold transition-opacity hover:opacity-70"
        >
          <span className="font-serif text-lg tracking-widest">листайте вниз</span>
          <Icon name="ChevronDown" className="animate-float" size={26} />
        </a>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <div className="relative mx-auto mb-10 w-64 md:w-80">
            <img
              src={HERO_IMG}
              alt="Дарья и Григорий"
              className="w-full rounded-2xl border-4 border-card object-cover shadow-xl"
            />
            <img
              src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/9c86208a-963f-41ea-8753-f1942e03cc1d.jpg"
              alt=""
              className="pointer-events-none absolute -bottom-8 -right-8 w-24 opacity-95 mix-blend-multiply md:w-32"
            />
          </div>
          <h2 className="font-serif text-5xl text-foreground md:text-6xl">Наша история</h2>
          <div className="floral-divider my-8" />
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Мы встретились случайно тёплым майским вечером — за одним столиком маленькой кофейни, где
            оба спрятались от внезапного дождя. Один общий зонт, один разговор до самого закрытия — и с
            тех пор мы больше не расставались.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            За эти годы мы прошли вместе радости и испытания, объехали любимые города и построили дом,
            в котором всегда пахнет свежим кофе. Теперь пришло время сказать друг другу самое главное
            «да» — и мы будем счастливы разделить этот день с вами.
          </p>
        </Reveal>
      </section>

      {/* PROGRAM */}
      <section className="bg-secondary/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-serif text-5xl text-foreground md:text-6xl">Программа праздника</h2>
            <div className="floral-divider my-8" />
          </Reveal>
          <div className="relative mt-12">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gold/40 md:block" />
            {timeline.map((item, i) => (
              <Reveal key={item.time} delay={i * 100}>
                <div className="relative mb-8 flex items-start gap-5 rounded-2xl bg-card p-6 shadow-sm md:ml-16">
                  <div className="absolute -left-[52px] top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-rose text-primary-foreground shadow md:flex">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush text-rose md:hidden">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-rose">{item.time}</p>
                    <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + MAP */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-serif text-5xl text-foreground md:text-6xl">Место проведения</h2>
          <div className="floral-divider my-8" />
          <p className="mb-2 flex items-center justify-center gap-2 text-lg text-foreground">
            <Icon name="MapPin" size={20} className="text-rose" />
            Усадьба «Цветущий сад»
          </p>
          <p className="mb-8 text-muted-foreground">Москва, ул. Тверская, 1</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border-4 border-blush shadow-lg">
            <iframe
              title="Карта места проведения"
              src="https://yandex.ru/map-widget/v1/?ll=37.612%2C55.757&z=15&pt=37.612,55.757,pm2rdm"
              className="h-[380px] w-full md:h-[440px]"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* DRESS CODE */}
      <section className="bg-secondary/60 px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-5xl text-foreground md:text-6xl">Дресс-код</h2>
            <div className="floral-divider my-8" />
            <p className="mb-8 text-lg text-muted-foreground">
              Мы будем благодарны, если вы поддержите нежную палитру торжества в своих нарядах
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { c: 'hsl(345 55% 92%)', n: 'Нежно-розовый' },
                { c: 'hsl(345 50% 80%)', n: 'Розовый' },
                { c: 'hsl(42 33% 94%)', n: 'Миндальный' },
                { c: 'hsl(100 18% 52%)', n: 'Зелёный' },
              ].map((color) => (
                <div key={color.n} className="flex flex-col items-center gap-2">
                  <span
                    className="h-16 w-16 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: color.c }}
                  />
                  <span className="font-serif text-lg text-foreground">{color.n}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RSVP */}
      <section className="mx-auto max-w-xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="text-center font-serif text-5xl text-foreground md:text-6xl">
            Подтвердите присутствие
          </h2>
          <div className="floral-divider my-8" />
          <p className="mb-10 text-center text-muted-foreground">
            Пожалуйста, дайте нам знать до 1 августа 2026
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} className="space-y-5 rounded-3xl bg-card p-8 shadow-lg">
            <div>
              <label className="mb-1.5 block font-serif text-lg text-foreground">Ваше имя</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Как к вам обращаться?"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-rose focus:ring-2 focus:ring-rose/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block font-serif text-lg text-foreground">Гость +1</label>
              <input
                value={plusOne}
                onChange={(e) => setPlusOne(e.target.value)}
                placeholder="Имя вашего спутника (если есть)"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-rose focus:ring-2 focus:ring-rose/30"
              />
            </div>

            <div>
              <label className="mb-2 block font-serif text-lg text-foreground">Придёте ли вы?</label>
              <div className="grid grid-cols-2 gap-3">
                {(['yes', 'no'] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setAttendance(opt)}
                    className={`rounded-xl border px-4 py-3 font-serif text-lg transition ${
                      attendance === opt
                        ? 'border-rose bg-rose text-primary-foreground shadow'
                        : 'border-input bg-background text-foreground hover:border-rose'
                    }`}
                  >
                    {opt === 'yes' ? 'Приду 💐' : 'Не приду'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-serif text-lg text-foreground">
                Пищевые аллергии
              </label>
              <input
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                placeholder="Есть ли ограничения в еде?"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-rose focus:ring-2 focus:ring-rose/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block font-serif text-lg text-foreground">
                Пожелания и советы молодым
              </label>
              <textarea
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                rows={4}
                placeholder="Напишите нам тёплые слова..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-rose focus:ring-2 focus:ring-rose/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-rose py-4 font-serif text-xl text-primary-foreground shadow-md transition hover:brightness-105 active:scale-[0.99]"
            >
              Отправить ответ
            </button>
          </form>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 text-center">
        <p className="font-script text-4xl text-rose">Дарья & Григорий</p>
        <p className="mt-2 font-serif tracking-[0.3em] text-muted-foreground">12 · 09 · 2026</p>
        <p className="mt-4 text-2xl">🌸 🌷 🌸</p>
      </footer>
    </div>
  );
}
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/bucket/ccd4d207-2337-4a2c-a3ef-f6730965d18e.jpg';

const timeline = [
  { time: '10:00', title: 'Бракосочетание', desc: 'Церемония в Дворце бракосочетания', icon: 'Heart' },
  { time: '', title: 'Фуршет', desc: 'Поздравления и семейные фото', icon: 'GlassWater' },
  { time: '', title: 'Банкет', desc: 'Ужин, тосты и первый танец', icon: 'UtensilsCrossed' },
  { time: '', title: 'Вечеринка', desc: 'Танцы до утра и фейерверк', icon: 'Music' },
];

const couple = [
  {
    name: 'Дарья',
    role: 'Невеста',
    bio: 'Любит утренний кофе, книги о путешествиях и долгие прогулки. Мечтает объехать весь мир вместе с Григорием.',
  },
  {
    name: 'Григорий',
    role: 'Жених',
    bio: 'Обожает готовить, играть на гитаре и строить планы на будущее. Рядом с Дарьей чувствует себя дома.',
  },
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
        <div className="animate-fade-in relative z-10 mx-auto flex aspect-square w-full max-w-lg items-center justify-center bg-contain bg-center bg-no-repeat md:max-w-2xl"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/deca0f6a-56e4-430a-a9ec-e36e2d2dd7a8.jpg)`,
          }}
        >
          <div className="w-[42%] md:w-[40%]">
            <p className="mb-1.5 font-sans text-[7px] uppercase tracking-[0.15em] text-muted-foreground md:text-[10px] md:tracking-[0.3em]">
              Вы приглашены на свадьбу
            </p>
            <div className="floral-divider my-2 md:my-4" />
            <h1 className="font-serif text-xl font-medium leading-tight text-foreground md:text-4xl">
              Дарья <span className="text-rose">&</span> Григорий
            </h1>
            <div className="floral-divider my-2 md:my-4" />
            <p className="font-serif text-[10px] tracking-[0.15em] text-muted-foreground md:text-base md:tracking-[0.25em]">
              05 · 10 · 2026
            </p>
            <p className="mt-2 font-script text-sm text-rose md:mt-4 md:text-xl">Ждём вас!</p>
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

      {/* COUPLE */}
      <section className="relative overflow-hidden bg-secondary/60 px-6 py-24 text-center md:py-32">
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -right-12 -top-8 w-36 opacity-70 mix-blend-multiply md:w-52"
        />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-5xl text-foreground md:text-6xl">Молодожёны</h2>
            <div className="floral-divider my-8" />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {couple.map((person, i) => (
              <Reveal key={person.name} delay={i * 120}>
                <div className="rounded-3xl bg-card p-8 shadow-sm">
                  <p className="mb-2 font-sans text-xs uppercase tracking-[0.3em] text-rose">{person.role}</p>
                  <h3 className="mb-4 font-serif text-3xl text-foreground">{person.name}</h3>
                  <p className="text-muted-foreground">{person.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -left-10 top-10 w-32 -scale-x-100 opacity-80 mix-blend-multiply md:w-48"
        />
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -right-10 bottom-10 w-32 rotate-180 opacity-80 mix-blend-multiply md:w-48"
        />
        <Reveal>
          <div className="relative mx-auto mb-10 w-64 md:w-80">
            <img
              src={HERO_IMG}
              alt="Дарья и Григорий"
              className="w-full rounded-2xl border-4 border-card object-cover shadow-xl"
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
      <section className="relative overflow-hidden bg-secondary/60 px-6 py-24 md:py-32">
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -right-12 -top-8 w-36 opacity-70 mix-blend-multiply md:w-52"
        />
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
                    {item.time && <p className="font-serif text-2xl text-rose">{item.time}</p>}
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
      <section className="relative mx-auto max-w-4xl overflow-hidden px-6 py-24 text-center md:py-32">
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -left-12 bottom-0 w-36 -scale-x-100 opacity-70 mix-blend-multiply md:w-52"
        />
        <Reveal>
          <h2 className="font-serif text-5xl text-foreground md:text-6xl">Место проведения</h2>
          <div className="floral-divider my-8" />
          <p className="mb-2 flex items-center justify-center gap-2 text-lg text-foreground">
            <Icon name="MapPin" size={20} className="text-rose" />
            Дворец бракосочетания (ЗАГС)
          </p>
          <p className="mb-8 text-muted-foreground">г. Электросталь, ул. Трудовая, 32</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border-4 border-blush shadow-lg">
            <iframe
              title="Карта места проведения"
              src="https://yandex.ru/map-widget/v1/?text=Электросталь%2C%20улица%20Трудовая%2C%2032&z=16"
              className="h-[380px] w-full md:h-[440px]"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* RSVP */}
      <section className="relative mx-auto max-w-xl overflow-hidden px-6 py-24 md:py-32">
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -left-12 bottom-0 w-32 -scale-x-100 opacity-70 mix-blend-multiply md:w-44"
        />
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
      <footer className="relative overflow-hidden border-t border-border py-12 text-center">
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -left-8 -top-4 w-24 -scale-x-100 opacity-70 mix-blend-multiply md:w-32"
        />
        <img
          src="https://cdn.poehali.dev/projects/df973f56-3ced-4dbb-8c1a-63d6cdb83dd7/files/b220abd6-72bc-498c-8d1e-b007a4d198d7.jpg"
          alt=""
          className="pointer-events-none absolute -right-8 -top-4 w-24 rotate-180 opacity-70 mix-blend-multiply md:w-32"
        />
        <p className="font-script text-4xl text-rose">Дарья & Григорий</p>
        <p className="mt-2 font-serif tracking-[0.3em] text-muted-foreground">05 · 10 · 2026</p>
      </footer>
    </div>
  );
}
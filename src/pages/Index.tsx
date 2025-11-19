import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Language = 'ru' | 'en';

interface Translation {
  nav: {
    home: string;
    portfolio: string;
    pricing: string;
    about: string;
    process: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewWork: string;
    contactMe: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    order: string;
  };
  about: {
    title: string;
  };
  process: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    description: string;
  };
}

const translations: Record<Language, Translation> = {
  ru: {
    nav: {
      home: 'Главная',
      portfolio: 'Портфолио',
      pricing: 'Прайс',
      about: 'Обо мне',
      process: 'Процесс',
      contact: 'Контакты'
    },
    hero: {
      title: 'Создание карт',
      subtitle: 'Профессиональная разработка карт для CS:GO, CS2, Team Fortress 2 и других игр на Source Engine',
      viewWork: 'Смотреть работы',
      contactMe: 'Связаться'
    },
    portfolio: {
      title: 'Портфолио',
      subtitle: 'Примеры моих работ'
    },
    pricing: {
      title: 'Прайс',
      subtitle: 'Выберите подходящий пакет',
      popular: 'Популярный',
      order: 'Заказать'
    },
    about: {
      title: 'Обо мне'
    },
    process: {
      title: 'Процесс работы',
      subtitle: 'Как создаётся карта'
    },
    contact: {
      title: 'Контакты',
      description: 'Готов обсудить ваш проект и воплотить идею в жизнь. Свяжитесь со мной удобным способом:'
    }
  },
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      about: 'About',
      process: 'Process',
      contact: 'Contact'
    },
    hero: {
      title: 'Map Creation',
      subtitle: 'Professional map development for CS:GO, CS2, Team Fortress 2 and other Source Engine games',
      viewWork: 'View Projects',
      contactMe: 'Contact Me'
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Examples of my work'
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose the right package',
      popular: 'Popular',
      order: 'Order'
    },
    about: {
      title: 'About Me'
    },
    process: {
      title: 'Work Process',
      subtitle: 'How a map is created'
    },
    contact: {
      title: 'Contact',
      description: 'Ready to discuss your project and bring your idea to life. Contact me in any convenient way:'
    }
  }
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('ru');

  const t = translations[lang];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      title: 'de_industrial',
      type: 'CS:GO Defuse Map',
      description: lang === 'ru' 
        ? 'Промышленная зона с вертикальной игрой и тактическими возможностями'
        : 'Industrial zone with vertical gameplay and tactical opportunities',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/83ffdd8b-d4b7-4dec-843f-40a42618802a.jpg',
      tags: ['Competitive', '5v5', 'Defuse']
    },
    {
      title: 'aim_reflex_v2',
      type: 'Training Map',
      description: lang === 'ru'
        ? 'Карта для тренировки рефлексов и точности стрельбы'
        : 'Map for training reflexes and shooting accuracy',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/e027c4dd-48b9-4af5-9707-311b3cf9067a.jpg',
      tags: ['Training', 'Aim', 'Practice']
    },
    {
      title: 'surf_neon_city',
      type: 'Surf Map',
      description: lang === 'ru'
        ? 'Футуристичная сёрф-карта в неоновом киберпанк-сеттинге'
        : 'Futuristic surf map in neon cyberpunk setting',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/08128871-2e1f-496e-afc7-0f1abfd86e96.jpg',
      tags: ['Surf', 'Fun', 'Neon']
    }
  ];

  const pricingPlans = lang === 'ru' ? [
    {
      name: 'Базовый',
      price: '15 000 ₽',
      features: [
        'Простая карта для CS:GO/CS2',
        'Базовая оптимизация',
        '1 раунд правок',
        'Срок: 7-10 дней'
      ],
      popular: false
    },
    {
      name: 'Стандарт',
      price: '35 000 ₽',
      features: [
        'Средняя по сложности карта',
        'Полная оптимизация',
        'Кастомные текстуры',
        '3 раунда правок',
        'Срок: 14-21 день'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '70 000 ₽',
      features: [
        'Сложная карта любого типа',
        'Максимальная детализация',
        'Уникальные модели и текстуры',
        'Неограниченные правки',
        'Срок: 30-45 дней'
      ],
      popular: false
    }
  ] : [
    {
      name: 'Basic',
      price: '$200',
      features: [
        'Simple CS:GO/CS2 map',
        'Basic optimization',
        '1 revision round',
        'Timeline: 7-10 days'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$450',
      features: [
        'Medium complexity map',
        'Full optimization',
        'Custom textures',
        '3 revision rounds',
        'Timeline: 14-21 days'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$900',
      features: [
        'Complex map of any type',
        'Maximum detail',
        'Unique models and textures',
        'Unlimited revisions',
        'Timeline: 30-45 days'
      ],
      popular: false
    }
  ];

  const workProcess = lang === 'ru' ? [
    { step: 1, title: 'Бриф', description: 'Обсуждаем идею, концепцию и требования к карте' },
    { step: 2, title: 'Блокаут', description: 'Создаём базовую геометрию и тестируем геймплей' },
    { step: 3, title: 'Детализация', description: 'Добавляем текстуры, модели и атмосферу' },
    { step: 4, title: 'Оптимизация', description: 'Настраиваем освещение и производительность' },
    { step: 5, title: 'Тестирование', description: 'Проводим плейтесты и исправляем баги' },
    { step: 6, title: 'Релиз', description: 'Финальная версия и публикация в Workshop' }
  ] : [
    { step: 1, title: 'Brief', description: 'Discuss idea, concept and map requirements' },
    { step: 2, title: 'Blockout', description: 'Create basic geometry and test gameplay' },
    { step: 3, title: 'Detailing', description: 'Add textures, models and atmosphere' },
    { step: 4, title: 'Optimization', description: 'Configure lighting and performance' },
    { step: 5, title: 'Testing', description: 'Conduct playtests and fix bugs' },
    { step: 6, title: 'Release', description: 'Final version and Workshop publication' }
  ];

  const aboutText = lang === 'ru' ? {
    p1: 'Привет! Я — профессиональный мапмейкер с 8-летним опытом создания карт для Source Engine. Начинал с простых aim-карт для CS 1.6, а теперь разрабатываю сложные competitive-карты для CS:GO и CS2.',
    p2: 'Моя специализация — создание сбалансированных карт с продуманным геймплеем и атмосферной визуальной составляющей. Работаю с Hammer Editor, Blender для моделирования, Substance Painter для текстур.',
    stats: ['Завершённых карт', 'Лет опыта', 'Загрузок в Workshop']
  } : {
    p1: 'Hi! I\'m a professional map maker with 8 years of experience creating maps for Source Engine. Started with simple aim maps for CS 1.6, and now develop complex competitive maps for CS:GO and CS2.',
    p2: 'My specialization is creating balanced maps with thoughtful gameplay and atmospheric visuals. I work with Hammer Editor, Blender for modeling, Substance Painter for textures.',
    stats: ['Completed Maps', 'Years Experience', 'Workshop Downloads']
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">SOURCE</div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {['home', 'portfolio', 'pricing', 'about', 'process', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-primary uppercase text-sm tracking-wide ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="px-3 py-1 border border-border rounded hover:border-primary transition-colors text-sm uppercase"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">{t.hero.title}</span>
            <br />
            SOURCE ENGINE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('portfolio')} className="rounded-full">
              {t.hero.viewWork}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')} 
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t.hero.contactMe}
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.portfolio.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">{t.portfolio.subtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale group border-border/50">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-primary text-sm">{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">{t.pricing.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-border/50 ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">{t.pricing.popular}</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-full" variant={plan.popular ? 'default' : 'outline'}>
                    {t.pricing.order}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">{t.about.title}</h2>
          <Card className="border-border/50">
            <CardContent className="pt-6 space-y-6">
              <p className="text-muted-foreground">{aboutText.p1}</p>
              <p className="text-muted-foreground">{aboutText.p2}</p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">{aboutText.stats[0]}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">{aboutText.stats[1]}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">30K+</div>
                  <div className="text-sm text-muted-foreground">{aboutText.stats[2]}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="process" className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.process.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">{t.process.subtitle}</p>
          <div className="max-w-4xl mx-auto space-y-6">
            {workProcess.map((item, index) => (
              <Card key={index} className="hover-scale border-border/50">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.contact.title}</h2>
          <Card className="border-border/50">
            <CardContent className="pt-6 space-y-6">
              <p className="text-muted-foreground">
                {t.contact.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button size="lg" className="w-full rounded-full" asChild>
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-full" asChild>
                  <a href="https://discord.com/users/yourid" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Discord
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-full" asChild>
                  <a href="mailto:your@email.com">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-full" asChild>
                  <a href="https://steamcommunity.com/id/yourprofile" target="_blank" rel="noopener noreferrer">
                    <Icon name="Gamepad2" className="mr-2" size={20} />
                    Steam
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        <p>© 2024 Source Maps Portfolio</p>
      </footer>
    </div>
  );
}

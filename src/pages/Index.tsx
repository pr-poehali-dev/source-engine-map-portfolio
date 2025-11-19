import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      title: 'de_industrial',
      type: 'CS:GO Defuse Map',
      description: 'Промышленная зона с вертикальной игрой и тактическими возможностями',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/83ffdd8b-d4b7-4dec-843f-40a42618802a.jpg',
      tags: ['Competitive', '5v5', 'Defuse']
    },
    {
      title: 'aim_reflex_v2',
      type: 'Training Map',
      description: 'Карта для тренировки рефлексов и точности стрельбы',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/e027c4dd-48b9-4af5-9707-311b3cf9067a.jpg',
      tags: ['Training', 'Aim', 'Practice']
    },
    {
      title: 'surf_neon_city',
      type: 'Surf Map',
      description: 'Футуристичная сёрф-карта в неоновом киберпанк-сеттинге',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/08128871-2e1f-496e-afc7-0f1abfd86e96.jpg',
      tags: ['Surf', 'Fun', 'Neon']
    }
  ];

  const pricingPlans = [
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
  ];

  const workProcess = [
    { step: 1, title: 'Бриф', description: 'Обсуждаем идею, концепцию и требования к карте' },
    { step: 2, title: 'Блокаут', description: 'Создаём базовую геометрию и тестируем геймплей' },
    { step: 3, title: 'Детализация', description: 'Добавляем текстуры, модели и атмосферу' },
    { step: 4, title: 'Оптимизация', description: 'Настраиваем освещение и производительность' },
    { step: 5, title: 'Тестирование', description: 'Проводим плейтесты и исправляем баги' },
    { step: 6, title: 'Релиз', description: 'Финальная версия и публикация в Workshop' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">SOURCE MAPS</div>
          <div className="hidden md:flex gap-6">
            {['home', 'portfolio', 'pricing', 'about', 'process', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'pricing' && 'Прайс'}
                {section === 'about' && 'Обо мне'}
                {section === 'process' && 'Процесс'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            СОЗДАНИЕ КАРТ
            <br />
            <span className="text-primary">SOURCE ENGINE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная разработка карт для CS:GO, CS2, Team Fortress 2 и других игр на Source Engine
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('portfolio')} className="text-lg">
              <Icon name="Map" className="mr-2" size={20} />
              Смотреть работы
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Портфолио</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">Примеры моих работ</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-primary">{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="min-h-screen py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Прайс</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">Выберите подходящий пакет</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-8 text-center">Обо мне</h2>
          <Card>
            <CardContent className="pt-6 space-y-6 text-lg">
              <p>
                Привет! Я — профессиональный мапмейкер с 8-летним опытом создания карт для Source Engine. 
                Начинал с простых aim-карт для CS 1.6, а теперь разрабатываю сложные competitive-карты для CS:GO и CS2.
              </p>
              <p>
                Моя специализация — создание сбалансированных карт с продуманным геймплеем и атмосферной визуальной составляющей. 
                Работаю с Hammer Editor, Blender для моделирования, Substance Painter для текстур.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Завершённых карт</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">30K+</div>
                  <div className="text-muted-foreground">Загрузок в Workshop</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="process" className="min-h-screen py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Процесс работы</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">Как создаётся карта</p>
          <div className="max-w-4xl mx-auto space-y-6">
            {workProcess.map((item, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-8">Контакты</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <p className="text-xl text-muted-foreground">
                Готов обсудить ваш проект и воплотить идею в жизнь. Свяжитесь со мной удобным способом:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button size="lg" className="w-full text-lg" asChild>
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" asChild>
                  <a href="https://discord.com/users/yourid" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Discord
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" asChild>
                  <a href="mailto:your@email.com">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg" asChild>
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

      <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground">
        <p>© 2024 Source Maps Portfolio. Все права защищены.</p>
      </footer>
    </div>
  );
}
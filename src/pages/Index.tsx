import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Language = 'en' | 'fr';

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
    tagline: string;
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
  en: {
    nav: {
      home: 'HOME',
      portfolio: 'PORTFOLIO',
      pricing: 'PRICING',
      about: 'ABOUT',
      process: 'PROCESS',
      contact: 'CONTACT'
    },
    hero: {
      tagline: 'Professional Creations',
      title: 'Source Engine',
      subtitle: 'Building innovative maps & immersive experiences for CS:GO, CS2, Team Fortress 2 and other Source Engine games.',
      viewWork: 'View Projects',
      contactMe: 'Contact me'
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'My recent work'
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose your package',
      popular: 'Popular',
      order: 'Order Now'
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
      description: 'Ready to discuss your project and bring your idea to life. Contact me:'
    }
  },
  fr: {
    nav: {
      home: 'ACCUEIL',
      portfolio: 'PORTFOLIO',
      pricing: 'TARIFS',
      about: 'À PROPOS',
      process: 'PROCESSUS',
      contact: 'CONTACT'
    },
    hero: {
      tagline: 'Créations Professionnelles',
      title: 'Source Engine',
      subtitle: 'Création de cartes innovantes et d\'expériences immersives pour CS:GO, CS2, Team Fortress 2 et autres jeux Source Engine.',
      viewWork: 'Voir les projets',
      contactMe: 'Me contacter'
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Mes travaux récents'
    },
    pricing: {
      title: 'Tarifs',
      subtitle: 'Choisissez votre forfait',
      popular: 'Populaire',
      order: 'Commander'
    },
    about: {
      title: 'À propos'
    },
    process: {
      title: 'Processus',
      subtitle: 'Comment créer une carte'
    },
    contact: {
      title: 'Contact',
      description: 'Prêt à discuter de votre projet et donner vie à votre idée. Contactez-moi:'
    }
  }
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      title: 'de_industrial',
      type: 'CS:GO Defuse Map',
      description: lang === 'en' 
        ? 'Industrial zone with vertical gameplay and tactical opportunities'
        : 'Zone industrielle avec gameplay vertical et opportunités tactiques',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/83ffdd8b-d4b7-4dec-843f-40a42618802a.jpg',
      tags: ['Competitive', '5v5', 'Defuse']
    },
    {
      title: 'aim_reflex_v2',
      type: 'Training Map',
      description: lang === 'en'
        ? 'Map for training reflexes and shooting accuracy'
        : 'Carte pour entraîner les réflexes et la précision de tir',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/e027c4dd-48b9-4af5-9707-311b3cf9067a.jpg',
      tags: ['Training', 'Aim', 'Practice']
    },
    {
      title: 'surf_neon_city',
      type: 'Surf Map',
      description: lang === 'en'
        ? 'Futuristic surf map in neon cyberpunk setting'
        : 'Carte surf futuriste dans un décor cyberpunk néon',
      image: 'https://cdn.poehali.dev/projects/c43594d0-7b65-45d2-9893-6e2e45a20938/files/08128871-2e1f-496e-afc7-0f1abfd86e96.jpg',
      tags: ['Surf', 'Fun', 'Neon']
    }
  ];

  const pricingPlans = lang === 'en' ? [
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
  ] : [
    {
      name: 'Basique',
      price: '180€',
      features: [
        'Carte CS:GO/CS2 simple',
        'Optimisation de base',
        '1 tour de révision',
        'Délai: 7-10 jours'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '400€',
      features: [
        'Carte de complexité moyenne',
        'Optimisation complète',
        'Textures personnalisées',
        '3 tours de révision',
        'Délai: 14-21 jours'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '800€',
      features: [
        'Carte complexe de tout type',
        'Détails maximaux',
        'Modèles et textures uniques',
        'Révisions illimitées',
        'Délai: 30-45 jours'
      ],
      popular: false
    }
  ];

  const workProcess = lang === 'en' ? [
    { step: 1, title: 'Brief', description: 'Discuss idea, concept and map requirements' },
    { step: 2, title: 'Blockout', description: 'Create basic geometry and test gameplay' },
    { step: 3, title: 'Detailing', description: 'Add textures, models and atmosphere' },
    { step: 4, title: 'Optimization', description: 'Configure lighting and performance' },
    { step: 5, title: 'Testing', description: 'Conduct playtests and fix bugs' },
    { step: 6, title: 'Release', description: 'Final version and Workshop publication' }
  ] : [
    { step: 1, title: 'Brief', description: 'Discuter de l\'idée, du concept et des exigences' },
    { step: 2, title: 'Blockout', description: 'Créer la géométrie de base et tester le gameplay' },
    { step: 3, title: 'Détails', description: 'Ajouter textures, modèles et atmosphère' },
    { step: 4, title: 'Optimisation', description: 'Configurer l\'éclairage et les performances' },
    { step: 5, title: 'Tests', description: 'Effectuer des playtests et corriger les bugs' },
    { step: 6, title: 'Publication', description: 'Version finale et publication Workshop' }
  ];

  const aboutText = lang === 'en' ? {
    p1: 'Hi! I\'m a professional map maker with 8 years of experience creating maps for Source Engine. Started with simple aim maps for CS 1.6, and now develop complex competitive maps for CS:GO and CS2.',
    p2: 'My specialization is creating balanced maps with thoughtful gameplay and atmospheric visuals. I work with Hammer Editor, Blender for modeling, Substance Painter for textures.',
    stats: ['Completed Maps', 'Years Experience', 'Workshop Downloads']
  } : {
    p1: 'Salut! Je suis un créateur de cartes professionnel avec 8 ans d\'expérience dans la création de cartes pour Source Engine. J\'ai commencé avec de simples cartes d\'entraînement pour CS 1.6, et maintenant je développe des cartes compétitives complexes pour CS:GO et CS2.',
    p2: 'Ma spécialisation est la création de cartes équilibrées avec un gameplay réfléchi et des visuels atmosphériques. Je travaille avec Hammer Editor, Blender pour la modélisation, Substance Painter pour les textures.',
    stats: ['Cartes Complétées', 'Années d\'Expérience', 'Téléchargements Workshop']
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <div className="text-xl font-bold text-primary">Source</div>
            <div className="text-[10px] text-muted-foreground tracking-wide">Map Creator</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'pricing', 'about', 'process', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-xs font-medium tracking-wider transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.nav[section as keyof typeof t.nav]}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-xl hover:scale-110 transition-transform"
              title={lang === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
            >
              {lang === 'en' ? '🇫🇷' : '🇬🇧'}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-primary underline decoration-primary decoration-4 underline-offset-8">{t.hero.tagline.split(' ')[0]}</span>{' '}
            <span className="text-foreground">{t.hero.tagline.split(' ')[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('portfolio')} 
              className="bg-primary hover:bg-primary/90 text-white px-8 rounded-lg font-medium"
            >
              {t.hero.viewWork}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')} 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 rounded-lg font-medium"
            >
              {t.hero.contactMe}
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.portfolio.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16">{t.portfolio.subtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-card/50 border-border/30 backdrop-blur-sm hover:border-primary/50 transition-all group">
                <div className="aspect-video bg-muted/30 relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  <CardDescription className="text-primary text-sm">{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-muted/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="min-h-screen py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16">{t.pricing.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-card/50 backdrop-blur-sm border-border/30 ${plan.popular ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">{t.pricing.popular}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-semibold mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-lg font-medium ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'border-primary/50 text-primary hover:bg-primary/10'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {t.pricing.order}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t.about.title}</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-border/30">
            <CardContent className="pt-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">{aboutText.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{aboutText.p2}</p>
              <div className="grid md:grid-cols-3 gap-4 pt-6">
                <div className="text-center p-6 bg-muted/20 rounded-lg border border-border/20">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">{aboutText.stats[0]}</div>
                </div>
                <div className="text-center p-6 bg-muted/20 rounded-lg border border-border/20">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">{aboutText.stats[1]}</div>
                </div>
                <div className="text-center p-6 bg-muted/20 rounded-lg border border-border/20">
                  <div className="text-4xl font-bold text-primary mb-2">30K+</div>
                  <div className="text-sm text-muted-foreground">{aboutText.stats[2]}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="process" className="min-h-screen py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.process.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16">{t.process.subtitle}</p>
          <div className="max-w-4xl mx-auto space-y-4">
            {workProcess.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all">
                <CardContent className="flex items-start gap-6 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">{t.contact.title}</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-border/30">
            <CardContent className="pt-8 space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                {t.contact.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button size="lg" className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white font-medium" asChild>
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-lg border-border/50 hover:bg-muted/30 font-medium" asChild>
                  <a href="https://discord.com/users/yourid" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Discord
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-lg border-border/50 hover:bg-muted/30 font-medium" asChild>
                  <a href="mailto:your@email.com">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-lg border-border/50 hover:bg-muted/30 font-medium" asChild>
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

      <footer className="border-t border-border/30 py-8 px-6 text-center text-sm text-muted-foreground bg-background/50 backdrop-blur-sm">
        <p>© 2024 Source Engine Portfolio</p>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const privileges = [
    {
      id: 1,
      name: 'КРУТОЙ',
      price: '18 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/9a7af4b9-e5ac-4c5b-a247-c4b669572e7b.jpg',
      features: [
        'Крутой статус',
        'Стильный префикс',
        'Базовые команды',
        '3 дома',
        'Доступ к арене'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'АБОБА',
      price: '30 ₽',
      oldPrice: null,
      features: [
        'Начальные возможности',
        'Цветной чат',
        'Базовые команды',
        '5 домов',
        'Доступ к мини-играм'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      name: 'ГЕЙМЕР',
      price: '100 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/76620bd0-4973-4ed9-8853-7fac372726f9.jpg',
      features: [
        'Геймерский статус',
        'RGB эффекты',
        'Команда /game',
        '15 домов',
        'Доступ к турнирам',
        'Эксклюзивные скины'
      ],
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 4,
      name: 'ПРОГРАММИСТ',
      price: '130 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/600c028a-34cd-44d7-973d-4a9882ba7fcb.jpg',
      features: [
        'Матричные эффекты',
        'Команда /code',
        'Хакерский префикс',
        '20 домов',
        'Доступ к редстоуну',
        'Командные блоки'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 5,
      name: 'VIP',
      price: '299 ₽',
      oldPrice: null,
      features: [
        'Доступ к VIP зонам',
        'Приоритет в очереди',
        'Цветной ник',
        'Уникальный префикс',
        '10 домов'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 6,
      name: 'ЭНЕРГЕТИК',
      price: '300 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/176f9bf3-2ce1-4cda-92a4-a148317b3c16.jpg',
      features: [
        'Молниеносная скорость',
        'Электрические эффекты',
        'Команда /boost',
        '30 домов',
        'Бесконечная энергия',
        'Двойной опыт'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 7,
      name: 'КОРОЛЬ',
      price: '405 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/9e1782d2-3303-40c4-8255-1e060557e5b2.jpg',
      features: [
        'Королевская корона',
        'Золотые эффекты',
        'Команда /king',
        '50 домов',
        'Королевские привилегии',
        'Тронный зал'
      ],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 8,
      name: 'PREMIUM',
      price: '599 ₽',
      oldPrice: null,
      features: [
        'Все возможности VIP',
        'Команда /fly',
        'Команда /heal',
        'Набор кейсов',
        '25 домов',
        'Кастомные эффекты'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 9,
      name: 'ДРАГОН',
      price: '600 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/8e488384-13fb-4b50-b88b-3f51f2f25c18.jpg',
      features: [
        'Драконья сила',
        'Огненные эффекты',
        'Команда /dragon',
        '60 домов',
        'Полет дракона',
        'Драконье дыхание'
      ],
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 10,
      name: 'ТАНОС',
      price: '666 ₽',
      oldPrice: null,
      features: [
        'Абсолютная мощь',
        'Камни бесконечности',
        'Щелчок /snap',
        'Контроль реальности',
        '66 домов',
        'Телепортация'
      ],
      color: 'from-purple-600 to-violet-900',
      featured: true
    },
    {
      id: 11,
      name: 'ELITE',
      price: '999 ₽',
      oldPrice: null,
      features: [
        'Все возможности PREMIUM',
        'Расширенные команды',
        'Креатив режим',
        '50 домов',
        'Уникальные скины',
        'Эксклюзивные эффекты'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 12,
      name: 'ИМПЕРАТОР',
      price: '1 000 ₽',
      oldPrice: null,
      avatar: 'https://cdn.poehali.dev/projects/6a96c73f-5a81-4b02-9ae8-4a4044541cd7/files/09577952-ce4a-4920-b8df-c05dc5de9998.jpg',
      features: [
        'Императорская власть',
        'Имперские эффекты',
        'Команда /emperor',
        '100 домов',
        'Абсолютный контроль',
        'Имперская гвардия',
        'VIP поддержка'
      ],
      color: 'from-red-600 to-amber-600'
    },
    {
      id: 13,
      name: 'ГИДРА',
      price: '1 000 ₽',
      oldPrice: null,
      features: [
        'Все возможности ELITE',
        'Двойной опыт',
        'Эксклюзивное оружие',
        '75 домов',
        'Команды модерации',
        'Секретные локации'
      ],
      color: 'from-red-600 to-red-900'
    },
    {
      id: 14,
      name: 'PEGAS',
      price: '2 126 ₽',
      oldPrice: '7777 ₽',
      discount: 'СКИДКА',
      features: [
        'Все возможности ГИДРА',
        'Полный доступ к серверу',
        'Неограниченные дома',
        'Эксклюзивные киты',
        'VIP саппорт 24/7',
        'Уникальные партиклы',
        'Доступ к закрытым мирам'
      ],
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 15,
      name: 'КОБРА',
      price: '5 000 ₽',
      oldPrice: null,
      features: [
        'Все возможности PEGAS',
        'Ядовитые способности',
        'Эксклюзивные эффекты яда',
        '150 домов',
        'Команда /venom',
        'Уникальная броня Кобры',
        'Приоритет выше всех'
      ],
      color: 'from-lime-500 to-green-600'
    },
    {
      id: 16,
      name: 'ADMIN',
      price: '7 777 ₽',
      oldPrice: null,
      features: [
        'Все возможности КОБРА',
        'Доступ к панели управления',
        'Креатив режим без ограничений',
        '200 домов',
        'Приоритетная поддержка',
        'Модераторские команды',
        'Управление событиями'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'privileges', label: 'Привилегии', icon: 'Crown' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
    { id: 'about', label: 'О сервисе', icon: 'Info' }
  ];

  return (
    <div className="min-h-screen bg-background cyberpunk-grid overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-black text-primary neon-glow glitch">
              MC.REALLYHAPPY.RU
            </h1>
            <nav className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    currentSection === item.id
                      ? 'bg-primary/20 text-primary neon-border'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-primary/50 text-primary"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {currentSection === 'home' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="corner-cut metal-gradient p-8 mb-8 neon-border">
              <h2 className="text-5xl md:text-7xl font-black mb-6 neon-glow animate-fade-in">
                WELCOME TO THE FUTURE
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in">
                Выбери свою привилегию и получи доступ к эксклюзивным возможностям
              </p>
              <div className="flex gap-4 justify-center animate-scale-in">
                <Button
                  size="lg"
                  onClick={() => setCurrentSection('privileges')}
                  className="bg-primary hover:bg-primary/80 text-background font-bold px-8 neon-border"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Выбрать привилегию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setCurrentSection('about')}
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { label: 'ONLINE', value: '1,234', icon: 'Users' },
                { label: 'PLAYERS', value: '15,678', icon: 'Gamepad2' },
                { label: 'UPTIME', value: '99.9%', icon: 'Activity' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="corner-cut border border-primary/30 bg-card p-4 hover:neon-border transition-all"
                >
                  <Icon name={stat.icon as any} size={24} className="text-primary mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentSection === 'privileges' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 neon-glow">
              ВЫБЕРИ СВОЮ ПРИВИЛЕГИЮ
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Разблокируй эксклюзивные возможности и стань частью элиты
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {privileges.map((privilege, idx) => (
                <Card
                  key={privilege.id}
                  className={`corner-cut border-primary/30 bg-card/50 backdrop-blur-sm p-6 hover:neon-border transition-all animate-scale-in relative ${
                    privilege.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-secondary' : ''
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {privilege.featured && (
                    <div className="absolute -top-3 -right-3 bg-secondary text-background px-4 py-1 rounded-full text-xs font-bold neon-border">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}
                  
                  {privilege.avatar ? (
                    <div className="w-16 h-16 rounded-lg mb-4 neon-border overflow-hidden">
                      <img src={privilege.avatar} alt={privilege.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${privilege.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 neon-border`}>
                      <Icon name="Crown" size={32} className="text-white" />
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-black mb-2 text-primary">{privilege.name}</h3>
                  
                  <div className="mb-6">
                    {privilege.oldPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-destructive bg-destructive/20 px-2 py-0.5 rounded">
                          {privilege.discount}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {privilege.oldPrice}
                        </span>
                      </div>
                    )}
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {privilege.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {privilege.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-primary hover:bg-primary/80 text-background font-bold neon-border"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    КУПИТЬ
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentSection === 'profile' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="corner-cut metal-gradient p-8 neon-border">
              <h2 className="text-4xl font-black mb-6 neon-glow">ПРОФИЛЬ</h2>
              <p className="text-muted-foreground text-lg">
                Раздел в разработке. Скоро здесь появится возможность просмотра вашего профиля, статистики и активных привилегий.
              </p>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'contacts' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="corner-cut metal-gradient p-8 neon-border">
              <h2 className="text-4xl font-black mb-6 neon-glow">КОНТАКТЫ</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-primary/30 rounded bg-card/50">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон для заказов</div>
                    <div className="text-xl font-bold text-primary">+7 (950) 524-46-76</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-primary/30 rounded bg-card/50">
                  <Icon name="Globe" size={24} className="text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Сервер</div>
                    <div className="text-xl font-bold text-primary">MC.REALLYHAPPY.RU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentSection === 'about' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="corner-cut metal-gradient p-8 neon-border">
              <h2 className="text-4xl font-black mb-6 neon-glow">О СЕРВИСЕ</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                MC.REALLYHAPPY.RU — это современный игровой сервер с уникальными возможностями и киберпанк атмосферой.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Мы предлагаем широкий выбор привилегий для улучшения вашего игрового опыта. Присоединяйтесь к нашему сообществу и получите доступ к эксклюзивным функциям!
              </p>
            </div>
          </div>
        </section>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="corner-cut border-primary/50 bg-card neon-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-primary neon-glow">
              ОФОРМЛЕНИЕ ЗАКАЗА
            </DialogTitle>
            <DialogDescription className="text-foreground/70">
              Свяжитесь с нами для завершения покупки
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="corner-cut border border-primary/30 bg-background p-6 text-center">
              <Icon name="Phone" size={48} className="text-primary mb-4 mx-auto" />
              <p className="text-sm text-muted-foreground mb-2">
                Позвоните нам для оформления заказа:
              </p>
              <a
                href="tel:+79505244676"
                className="text-3xl font-black text-primary neon-glow hover:scale-105 transition-transform inline-block"
              >
                +7 (950) 524-46-76
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground bg-muted/20 p-4 rounded">
              <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <p>
                Наши операторы работают ежедневно и помогут вам выбрать оптимальную привилегию
              </p>
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/80 text-background font-bold"
              onClick={() => setIsDialogOpen(false)}
            >
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-primary/30 backdrop-blur-md bg-background/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2026 MC.REALLYHAPPY.RU — All Rights Reserved
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {['Github', 'Twitter', 'MessageCircle'].map((icon) => (
              <Button
                key={icon}
                variant="ghost"
                size="icon"
                className="text-primary/50 hover:text-primary hover:bg-primary/10"
              >
                <Icon name={icon as any} size={20} />
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
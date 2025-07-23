import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [serverStats, setServerStats] = useState({
    usa: Math.floor(Math.random() * 100),
    europe: Math.floor(Math.random() * 100),
    asia: Math.floor(Math.random() * 100),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setServerStats({
        usa: Math.floor(Math.random() * 100),
        europe: Math.floor(Math.random() * 100),
        asia: Math.floor(Math.random() * 100),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '299',
      features: ['1 подключение', '50+ серверов', 'Базовая защита', 'Email поддержка'],
      popular: false
    },
    {
      id: 'pro',
      name: 'Про',
      price: '599',
      features: ['5 подключений', '200+ серверов', 'Продвинутая защита', '24/7 поддержка'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '999',
      features: ['10 подключений', '500+ серверов', 'Максимальная защита', 'Приоритетная поддержка'],
      popular: false
    }
  ];

  const servers = [
    { location: 'США', count: 150, load: serverStats.usa, flag: '🇺🇸' },
    { location: 'Европа', count: 200, load: serverStats.europe, flag: '🇪🇺' },
    { location: 'Азия', count: 100, load: serverStats.asia, flag: '🌏' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="p-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={32} className="text-blue-400" />
            <span className="text-2xl font-bold text-white font-orbitron">SecureVPN</span>
          </div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#home" className="hover:text-blue-400 transition-colors">Главная</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Тарифы</a>
            <a href="#servers" className="hover:text-blue-400 transition-colors">Серверы</a>
            <a href="#security" className="hover:text-blue-400 transition-colors">Безопасность</a>
            <a href="#support" className="hover:text-blue-400 transition-colors">Поддержка</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Попробовать бесплатно
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 font-orbitron">
            Защитите свою
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> приватность</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Быстрый, надежный и безопасный VPN с мониторингом производительности в реальном времени. 
            Подключайтесь к любому серверу одним кликом.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Icon name="Play" size={20} className="mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          {/* Server Performance Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {servers.map((server) => (
              <Card key={server.location} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <span className="text-2xl">{server.flag}</span>
                      <span>{server.location}</span>
                    </span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      Онлайн
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-300">
                      <span>Серверов:</span>
                      <span className="font-bold">{server.count}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>Нагрузка:</span>
                        <span className="font-bold">{server.load}%</span>
                      </div>
                      <Progress value={server.load} className="bg-white/20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" className="font-orbitron">
              Выберите свой план
            </h2>
            <p className="text-xl text-gray-300">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-white text-2xl text-center font-orbitron">
                    {plan.name}
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white">₽{plan.price}</span>
                    <span className="text-gray-300">/месяц</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Icon name="Check" size={16} className="text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4" className="font-orbitron">
              Максимальная безопасность
            </h2>
            <p className="text-xl text-gray-300">
              Военный уровень шифрования и защиты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'AES-256 шифрование', desc: 'Военный стандарт защиты данных' },
              { icon: 'Lock', title: 'Kill Switch', desc: 'Автоматическое отключение при сбоях' },
              { icon: 'Eye', title: 'No-logs политика', desc: 'Мы не храним ваши данные' },
              { icon: 'Zap', title: 'DNS защита', desc: 'Блокировка вредоносных сайтов' }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <Icon name={feature.icon as any} size={48} className="text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4" className="font-orbitron">
            Нужна помощь?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Наша служба поддержки работает 24/7
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Онлайн чат
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <Icon name="Mail" size={20} className="mr-2" />
              Email поддержка
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Shield" size={24} className="text-blue-400" />
            <span className="text-xl font-bold text-white font-orbitron">SecureVPN</span>
          </div>
          <p className="text-gray-400">
            © 2024 SecureVPN. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
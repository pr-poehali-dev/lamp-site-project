
import React, { useState, useEffect } from 'react';
import LampBulb from '@/components/LampBulb';
import LightSwitch from '@/components/LightSwitch';
import InfoCard from '@/components/InfoCard';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isOn, setIsOn] = useState(false);
  const [timeOn, setTimeOn] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Эффект для отслеживания времени работы лампочки
  useEffect(() => {
    if (isOn) {
      const interval = setInterval(() => {
        setTimeOn(prev => prev + 1);
      }, 1000);
      setTimer(interval);
    } else if (timer) {
      clearInterval(timer);
      setTimer(null);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOn]);

  // Функция переключения лампочки
  const toggleLight = () => {
    setIsOn(prev => !prev);
  };

  // Сброс счетчика
  const resetTimer = () => {
    setTimeOn(0);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center transition-all duration-500 ${isOn ? 'light-on' : 'light-off'}`}>
      <header className="w-full py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Виртуальная Лампочка</h1>
        <p className="text-muted-foreground mt-2">Простое интерактивное приложение</p>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-4 py-8">
        <div className="relative mb-6">
          {/* Подвес лампочки */}
          <div className="h-16 w-2 bg-gradient-to-b from-[#333] to-[#222] mx-auto mb-2"></div>
          
          {/* Компонент лампочки */}
          <LampBulb isOn={isOn} />
        </div>
        
        {/* Управление и информация */}
        <div className="w-full max-w-lg mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <LightSwitch isOn={isOn} toggle={toggleLight} />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetTimer}
              className="flex items-center gap-1"
            >
              <Icon name="TimerReset" size={16} />
              Сбросить таймер
            </Button>
          </div>
          
          <InfoCard isOn={isOn} timeOn={timeOn} />
        </div>
      </main>

      <footer className="w-full py-4 text-center text-sm text-muted-foreground">
        <p>Создано с помощью Поехали.dev &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;

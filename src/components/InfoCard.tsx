
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface InfoCardProps {
  isOn: boolean;
  timeOn: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ isOn, timeOn }) => {
  // Форматирование времени в формат MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Расчет потребляемой энергии (для примера, условные значения)
  const energyUsed = timeOn * 0.06; // 60 Вт в час = 0.06 Вт в секунду
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center px-2 py-1 rounded-md bg-secondary/40">
            <div className="flex items-center">
              <Icon name="Zap" className={`mr-2 ${isOn ? 'text-yellow-400' : 'text-gray-500'}`} size={18} />
              <span>Статус:</span>
            </div>
            <span className={`font-bold ${isOn ? 'text-primary' : 'text-gray-500'}`}>
              {isOn ? 'Включена' : 'Выключена'}
            </span>
          </div>

          <div className="flex justify-between items-center px-2 py-1 rounded-md bg-secondary/40">
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2" size={18} />
              <span>Время работы:</span>
            </div>
            <span className="font-mono">{formatTime(timeOn)}</span>
          </div>

          {isOn && (
            <div className="flex justify-between items-center px-2 py-1 rounded-md bg-secondary/40">
              <div className="flex items-center">
                <Icon name="Bolt" className="mr-2 text-yellow-400" size={18} />
                <span>Потреблено энергии:</span>
              </div>
              <span className="font-mono">{energyUsed.toFixed(2)} Вт</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

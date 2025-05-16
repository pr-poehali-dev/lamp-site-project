
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface InfoCardProps {
  isOn: boolean;
  timeOn: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ isOn, timeOn }) => {
  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds} сек.`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} мин. ${remainingSeconds} сек.`;
  };

  // Получаем текущую дату и время
  const now = new Date();
  const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <Card className="w-full max-w-sm bg-secondary/80 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Icon name={isOn ? "Lightbulb" : "LightbulbOff"} />
          Состояние лампочки
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Статус:</span>
          <span className={`font-semibold ${isOn ? 'text-primary' : 'text-muted-foreground'}`}>
            {isOn ? 'Включена' : 'Выключена'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Время работы:</span>
          <span className="font-medium">{formatTime(timeOn)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Текущее время:</span>
          <span className="font-medium">{currentTime}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 text-xs text-muted-foreground">
        <p>Нажмите на переключатель чтобы изменить состояние</p>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;

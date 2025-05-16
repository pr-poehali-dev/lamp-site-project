
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface InfoCardProps {
  isOn: boolean;
  timeOn: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ isOn, timeOn }) => {
  // Форматируем время в формат "чч:мм:сс"
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":");
  };

  // Расчет потребленной энергии (условно: 60 Вт * время в часах)
  const energyConsumption = isOn ? (60 * timeOn / 3600).toFixed(4) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Информация</span>
          <span className={`flex items-center text-sm ${isOn ? "text-green-500" : "text-red-500"}`}>
            <Icon name={isOn ? "Power" : "PowerOff"} className="mr-1" size={16} />
            {isOn ? "Включено" : "Выключено"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-muted-foreground">Время работы:</div>
            <div className="text-lg font-mono">{formatTime(timeOn)}</div>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="text-sm text-muted-foreground">Потребление энергии:</div>
            <div className="text-lg font-mono">
              {isOn ? `${energyConsumption} Вт*ч` : "0.0000 Вт*ч"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

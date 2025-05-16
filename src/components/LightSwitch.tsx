
import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface LightSwitchProps {
  isOn: boolean;
  toggle: () => void;
}

const LightSwitch: React.FC<LightSwitchProps> = ({ isOn, toggle }) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch 
        id="light-switch" 
        checked={isOn} 
        onCheckedChange={toggle} 
        className="data-[state=checked]:bg-primary"
      />
      <Label 
        htmlFor="light-switch" 
        className="text-lg font-medium cursor-pointer"
      >
        {isOn ? "Выключить" : "Включить"}
      </Label>
    </div>
  );
};

export default LightSwitch;

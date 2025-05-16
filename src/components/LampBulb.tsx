
import React from 'react';

interface LampBulbProps {
  isOn: boolean;
}

const LampBulb: React.FC<LampBulbProps> = ({ isOn }) => {
  return (
    <svg 
      width="180" 
      height="250" 
      viewBox="0 0 180 250" 
      className={`transition-all duration-300 ${isOn ? 'bulb-on' : 'opacity-75'}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Лампочка */}
      <path 
        d="M90 12C53.55 12 25 40.55 25 77C25 97.85 34.95 116.1 50 127.5V157.5C50 167.15 57.85 175 67.5 175H112.5C122.15 175 130 167.15 130 157.5V127.5C145.05 116.1 155 97.85 155 77C155 40.55 126.45 12 90 12Z"
        fill={isOn ? "#FFC107" : "#656565"} 
        className="transition-colors duration-300"
      />
      
      {/* Цоколь */}
      <path 
        d="M112.5 175H67.5C57.85 175 50 167.15 50 157.5V150H130V157.5C130 167.15 122.15 175 112.5 175Z" 
        fill="#424242"
      />
      
      {/* Контакты */}
      <rect x="55" y="175" width="70" height="15" fill="#212121" />
      <rect x="65" y="190" width="50" height="10" fill="#212121" />
      
      {/* Внутренние элементы (нить накала) */}
      {isOn && (
        <path 
          d="M85 80C85 80 75 90 75 105C75 120 85 130 85 130" 
          stroke="#FFEB3B" 
          strokeWidth="2" 
          fill="none"
        />
      )}
      {isOn && (
        <path 
          d="M95 80C95 80 105 90 105 105C105 120 95 130 95 130" 
          stroke="#FFEB3B" 
          strokeWidth="2" 
          fill="none"
        />
      )}
      
      {/* Блик */}
      {isOn && (
        <ellipse 
          cx="90" 
          cy="70" 
          rx="30" 
          ry="20" 
          fill="rgba(255, 255, 255, 0.3)"
        />
      )}
    </svg>
  );
};

export default LampBulb;

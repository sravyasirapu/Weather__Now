import React from "react";
import { bgByCode, DEFAULT_DAY_BG, DEFAULT_NIGHT_BG } from "../utils/weatherMaps";

interface BackgroundProps {
  code?: number;
  isDay?: 0 | 1;
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ code, isDay = 1, children }) => {
  const map = code !== undefined ? bgByCode[code] : undefined;
  const bgClass =
    isDay === 1
      ? map?.day || DEFAULT_DAY_BG
      : map?.night || DEFAULT_NIGHT_BG;

  return (
    <div
      className={`relative min-h-screen ${bgClass} transition-colors duration-700 overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default Background;

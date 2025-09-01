import React from "react";
import { isClearish, isCloudy, isFog, isRainy, isSnowy, isThunder } from "../utils/weatherMaps";
import Sun from "./animations/Sun";
import MoonStars from "./animations/MoonStars";
import Clouds from "./animations/Clouds";
import Rain from "./animations/Rain";
import Snow from "./animations/Snow";
import Fog from "./animations/Fog";
import Lightning from "./animations/Lightning";

interface Props {
  code: number;
  isDay: 0 | 1;
}

const WeatherAnimation: React.FC<Props> = ({ code, isDay }) => {
  return (
    <>
      {/* Clear-ish */}
      {isClearish(code) && (isDay ? <Sun /> : <MoonStars />)}

      {/* Clouds can appear with many conditions */}
      {(isCloudy(code) || isRainy(code) || isSnowy(code)) && <Clouds />}

      {/* Fog */}
      {isFog(code) && <Fog />}

      {/* Rain / Snow */}
      {isRainy(code) && <Rain />}
      {isSnowy(code) && <Snow />}

      {/* Thunder */}
      {isThunder(code) && (
        <>
          <Rain />
          <Lightning />
        </>
      )}
    </>
  );
};

export default WeatherAnimation;

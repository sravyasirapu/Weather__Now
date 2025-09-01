// Open-Meteo weather codes: https://open-meteo.com/en/docs#weathervariables
export type ConditionKey =
  | 0 | 1 | 2 | 3     // clear, mainly clear, partly cloudy, overcast
  | 45 | 48           // fog
  | 51 | 53 | 55      // drizzle
  | 61 | 63 | 65      // rain
  | 71 | 73 | 75 | 77 // snow
  | 80 | 81 | 82      // showers
  | 95 | 96 | 99;     // thunder

export const isRainy = (code: number) =>
  [51,53,55,61,63,65,80,81,82].includes(code);

export const isSnowy = (code: number) =>
  [71,73,75,77].includes(code);

export const isThunder = (code: number) =>
  [95,96,99].includes(code);

export const isFog = (code: number) =>
  [45,48].includes(code);

export const isCloudy = (code: number) =>
  [2,3].includes(code);

export const isClearish = (code: number) =>
  [0,1].includes(code);

export const bgByCode: Record<number, { day: string; night: string }> = {
  0:  { day: "bg-sky-200",  night: "bg-gradient-to-b from-gray-900 to-blue-950" },
  1:  { day: "bg-sky-300",  night: "bg-gray-900" },
  2:  { day: "bg-sky-400",  night: "bg-gray-800" },
  3:  { day: "bg-gray-300", night: "bg-gray-900" },
  45: { day: "bg-gray-200", night: "bg-gray-800" },
  48: { day: "bg-gray-200", night: "bg-gray-800" },
  51: { day: "bg-blue-200", night: "bg-blue-900" },
  53: { day: "bg-blue-200", night: "bg-blue-900" },
  55: { day: "bg-blue-200", night: "bg-blue-900" },
  61: { day: "bg-blue-300", night: "bg-blue-950" },
  63: { day: "bg-blue-300", night: "bg-blue-950" },
  65: { day: "bg-blue-400", night: "bg-blue-950" },
  71: { day: "bg-indigo-200", night: "bg-indigo-950" },
  73: { day: "bg-indigo-200", night: "bg-indigo-950" },
  75: { day: "bg-indigo-200", night: "bg-indigo-950" },
  77: { day: "bg-indigo-200", night: "bg-indigo-950" },
  80: { day: "bg-blue-300", night: "bg-blue-950" },
  81: { day: "bg-blue-300", night: "bg-blue-950" },
  82: { day: "bg-blue-400", night: "bg-blue-950" },
  95: { day: "bg-yellow-100", night: "bg-purple-950" },
  96: { day: "bg-yellow-100", night: "bg-purple-950" },
  99: { day: "bg-yellow-100", night: "bg-purple-950" },
};

export const DEFAULT_DAY_BG = "bg-sky-100";
export const DEFAULT_NIGHT_BG = "bg-gray-900";

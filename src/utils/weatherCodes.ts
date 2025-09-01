// utils/weatherCodes.ts
export const weatherBackgrounds: Record<
  number,
  { day: string; night: string }
> = {
  0: { day: "bg-sky-200", night: "bg-gradient-to-b from-gray-900 to-blue-900" },
  1: { day: "bg-sky-300", night: "bg-gray-800" },
  2: { day: "bg-sky-400", night: "bg-gray-700" },
  3: { day: "bg-gray-400", night: "bg-gray-900" },
  61: { day: "bg-blue-300", night: "bg-blue-900" },
  71: { day: "bg-indigo-200", night: "bg-indigo-900" },
  95: { day: "bg-yellow-200", night: "bg-purple-900" },
};

export const defaultBackgroundDay = "bg-sky-100";
export const defaultBackgroundNight = "bg-gray-900";

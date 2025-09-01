import { weatherLabels, defaultLabel } from "../utils/weatherLabels";

interface WeatherCardProps {
  data: {
    city: string;
    temp: number;
    wind: number;
    condition: number;
  };
}

export default function WeatherCard({ data }: WeatherCardProps) {
  const label = weatherLabels[data.condition] || defaultLabel;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center text-gray-800">
      <h2 className="text-xl font-semibold mb-2">{data.city}</h2>
      <p className="text-5xl font-bold text-sky-600">{data.temp}°C</p>
      <p className="mt-2 text-gray-700">💨 Wind: {data.wind} km/h</p>
      <p className="mt-1 text-lg font-medium">{label}</p>
    </div>
  );
}

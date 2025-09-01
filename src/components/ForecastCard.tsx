import { formatDate } from "../utils/formatDate";

interface ForecastCardProps {
  date: string;
  tempMax: number;
  tempMin: number;
}

export default function ForecastCard({ date, tempMax, tempMin }: ForecastCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center w-32 hover:shadow-lg transition">
      <p className="text-gray-600 text-sm font-medium">{formatDate(date)}</p>
      <p className="font-semibold text-gray-800 mt-2">
        {tempMax}° / {tempMin}°
      </p>
    </div>
  );
}

import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import TempToggle from "./components/TempToggle";
import Background from "./components/Background";
import WeatherAnimation from "./components/WeatherAnimation";

interface WeatherData {
  city: string;
  temp: number;
  wind: number;
  condition: number;
  isDay: 0 | 1;
}

interface ForecastData {
  date: string;
  tempMax: number;
  tempMin: number;
}

export default function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Toggle between °C and °F
  const toggleUnit = () => setUnit(unit === "C" ? "F" : "C");

  // Convert °C → °F if needed
  const convertTemp = (temp: number) =>
    unit === "C" ? temp : Math.round((temp * 9) / 5 + 32);

  // Fetch weather by city
  const fetchWeather = async (city: string) => {
    try {
      setError("");
      setWeather(null);
      setForecast([]);
      setLoading(true);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found!");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Fetch current weather + forecast
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      // Current
      setWeather({
        city: `${name}, ${country}`,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        condition: weatherData.current_weather.weathercode,
        isDay: weatherData.current_weather.is_day,
      });

      // Forecast
      const forecastArr: ForecastData[] = weatherData.daily.time.map(
        (date: string, i: number) => ({
          date,
          tempMax: weatherData.daily.temperature_2m_max[i],
          tempMin: weatherData.daily.temperature_2m_min[i],
        })
      );
      setForecast(forecastArr.slice(1, 6)); // next 5 days
    } catch {
      setError("Failed to fetch weather. Try again!");
    } finally {
      setLoading(false);
    }
  };

  // Detect user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setLoading(true);
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
            );
            const data = await weatherRes.json();
            setWeather({
              city: "Your Location",
              temp: data.current_weather.temperature,
              wind: data.current_weather.windspeed,
              condition: data.current_weather.weathercode,
              isDay: data.current_weather.is_day,
            });
            const forecastArr: ForecastData[] = data.daily.time.map(
              (date: string, i: number) => ({
                date,
                tempMax: data.daily.temperature_2m_max[i],
                tempMin: data.daily.temperature_2m_min[i],
              })
            );
            setForecast(forecastArr.slice(1, 6));
          } catch {
            setError("Could not detect your location");
          } finally {
            setLoading(false);
          }
        },
        () => setError("Location access denied")
      );
    }
  }, []);

  const code = weather?.condition;
  const isDay = weather?.isDay ?? 1;

  return (
    <Background code={code} isDay={isDay}>
      {weather && !loading && code !== undefined && (
        <WeatherAnimation code={code} isDay={isDay} />
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-sm">
          🌤️ Weather Now
        </h1>

        <SearchBar onSearch={fetchWeather} />
        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}

        {weather && !loading && (
          <>
            <div className="transform transition hover:scale-105">
              <WeatherCard
                data={{
                  ...weather,
                  temp: convertTemp(weather.temp),
                }}
              />
            </div>

            <TempToggle unit={unit} onToggle={toggleUnit} />

            <div className="flex gap-4 mt-6 flex-wrap justify-center">
              {forecast.map((day, i) => (
                <ForecastCard
                  key={i}
                  date={day.date}
                  tempMax={convertTemp(day.tempMax)}
                  tempMin={convertTemp(day.tempMin)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Background>
  );
}

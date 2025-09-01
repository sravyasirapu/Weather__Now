# 🌤️ Weather Now

A modern, responsive weather application built with **React + Tailwind CSS** as part of the **Aganitha Take-Home UI Challenge**.  
It allows users to quickly check current weather conditions, see a 5-day forecast, and experience dynamic visuals that adapt to weather and day/night.
_____________________________________________________________________________________________________________________________________________________________________________________________________________________

## ✨ Features

- **🔍 Search by City** – Get real-time weather for any city in the world.
- **📍 Auto-detect Location** – Uses the browser Geolocation API to fetch weather for your current position.
- **🌤️ Dynamic Visuals** – Backgrounds and animations adapt based on:
  - ☀️ Sun (daytime clear)
  - 🌙 Moon + ✨ stars (night clear)
  - ☁️ Floating clouds
  - 🌧️ Rain drops
  - ❄️ Falling snow
  - 🌫️ Fog layers
  - ⚡ Lightning for thunderstorms
- **🌗 Day/Night Modes** – Backgrounds change automatically with time of day.
- **🌡️ Temperature Toggle** – Switch between °C and °F.
- **📅 5-Day Forecast** – With formatted, human-readable dates.
- **⏳ Loading Overlay** – Full-screen spinner while fetching data.
- **📱 Responsive UI** – Works on desktop, tablet, and mobile.
_____________________________________________________________________________________________________________________________________________________________________________________________________________________

## 🛠️ Tech Stack

- Framework: [React (Vite)](https://vitejs.dev/) + TypeScript
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- APIs:
  - [Open-Meteo Weather API](https://open-meteo.com/)
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- Deployment: CodeSandbox / Netlify / Vercel
_____________________________________________________________________________________________________________________________________________________________________________________________________________________

## 🚀 Getting Started
1. Clone Repository
```bash
git clone https://github.com/your-username/weather-now.git
cd weather-now
```
2. Install Dependencies 
```npm install```

3. Run Development Server 
```npm run dev```

4. Build for Production 
```npm run build```

_____________________________________________________________________________________________________________________________________________________________________________________________________________________

🌍 Live Demo

👉 View Vercel link -->  https://weather-now-blue-ten.vercel.app/
_____________________________________________________________________________________________________________________________________________________________________________________________________________________

📖 Project Structure
```
src/
├─ components/
│   ├─ Background.tsx
│   ├─ ErrorMessage.tsx
│   ├─ SearchBar.tsx
│   ├─ WeatherCard.tsx
│   ├─ ForecastCard.tsx
│   ├─ TempToggle.tsx
│   ├─ Loader.tsx
│   ├─ WeatherAnimation.tsx
│   └─ animations/
│       ├─ Sun.tsx
│       ├─ MoonStars.tsx
│       ├─ Clouds.tsx
│       ├─ Rain.tsx
│       ├─ Snow.tsx
│       ├─ Fog.tsx
│       └─ Lightning.tsx
├─ utils/
│   ├─ weatherMaps.ts
│   ├─ weatherLabels.ts
│   ├─ formatDate.ts
│   └─ weatherCodes.ts
├─ App.tsx
├─ main.tsx
└─ index.css
```
_____________________________________________________________________________________________________________________________________________________________________________________________________________________





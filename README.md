# 🌤️ Weather Now

A modern, responsive weather application built with **React + Tailwind CSS** as part of the **Aganitha Take-Home UI Challenge**.  
It allows users to quickly check current weather conditions, see a 5-day forecast, and experience dynamic visuals that adapt to weather and day/night.
____________________________________________________________________________________________________________________________________________________________________________________________________________________

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
____________________________________________________________________________________________________________________________________________________________________________________________________________________

```🌍 Live Demo```

👉 View Vercel link -->  https://weather-now-blue-ten.vercel.app/

____________________________________________________________________________________________________________________________________________________________________________________________________________________

## 🛠️ Tech Stack

- Framework: [React (Vite)](https://vitejs.dev/) + TypeScript
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- APIs:
  - [Open-Meteo Weather API](https://open-meteo.com/)
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- Deployment: CodeSandbox / Netlify / Vercel
____________________________________________________________________________________________________________________________________________________________________________________________________________________

## 🚀 Getting Started
1. Clone Repository
```bash
git clone --> https://github.com/sravyasirapu/Weather__Now.git
cd weather-now
```
2. Install Dependencies 
```npm install```

3. Run Development Server 
```npm run dev```

4. Build for Production 
```npm run build```

____________________________________________________________________________________________________________________________________________________________________________________________________________________

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
____________________________________________________________________________________________________________________________________________________________________________________________________________________

🧩 Requirements Coverage

✅ Level 1: AI collaboration (ChatGPT guidance included).

✅ Level 2: Working application deployed online.

✅ Level 3: Code shared with documentation (README.md).
____________________________________________________________________________________________________________________________________________________________________________________________________________________

🙌 Acknowledgements

Open-Meteo
 for free weather APIs.

Tailwind CSS
 for fast styling.

Icons/emoji for weather inspired by standard weather codes.
____________________________________________________________________________________________________________________________________________________________________________________________________________________
```
🤖 How I Used ChatGPT

During the development of Weather Now, I collaborated with ChatGPT as a coding assistant to accelerate my problem-solving and decision-making.

Here’s how ChatGPT supported my workflow:

Project Setup & Architecture

Guided me in choosing React + Vite + Tailwind CSS for fast development.

Helped structure the app into reusable components (SearchBar, WeatherCard, ForecastCard, WeatherAnimation, etc.).

API Integration

Explained how to use the Open-Meteo Weather & Geocoding APIs.

Provided example fetch logic and how to handle latitude/longitude resolution from city names.

Styling & UI Enhancements

Suggested Tailwind utility classes for a clean, responsive design.

Helped create animated backgrounds and weather effects (sun rays, clouds, rain, snow, fog, lightning, moon + stars).

Improved cards with shadows, rounded corners, and hover transitions.

Feature Implementation

Added °C / °F toggle for temperatures.

Implemented 5-day forecast with formatted dates.

Integrated Geolocation API for auto-detecting the user’s location.

Designed loading states with a full-screen spinner overlay.

Polish & Documentation

Helped me refactor into reusable, modular components.

Drafted this professional README.md.

Suggested a “How I used ChatGPT” section to explicitly cover Level 1 requirements.
```

⚡ Summary:
ChatGPT acted like a pair-programmer & mentor, helping me quickly interpret requirements, generate code snippets, improve UI/UX, and document the project. This collaboration saved time and helped me focus on building a polished, user-friendly weather app.

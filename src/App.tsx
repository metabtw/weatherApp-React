import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hava Durumu Uygulaması</h1>
        <SearchBar setWeatherData={setWeatherData} setError={setError} />
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </header>
    </div>
  );
}

export default App; 
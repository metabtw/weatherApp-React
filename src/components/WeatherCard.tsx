import React from 'react';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  name: string;
  sys: {
    country: string;
  };
  dt: number;
}

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p className="date">{formatDate(data.dt)}</p>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <p className="description">{data.weather[0].description}</p>
      </div>
      <div className="weather-details">
        <div className="detail-item">
          <p className="label">Hissedilen</p>
          <p className="value">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="detail-item">
          <p className="label">Min/Max</p>
          <p className="value">{Math.round(data.main.temp_min)}°/{Math.round(data.main.temp_max)}°</p>
        </div>
        <div className="detail-item">
          <p className="label">Nem</p>
          <p className="value">{data.main.humidity}%</p>
        </div>
        <div className="detail-item">
          <p className="label">Rüzgar</p>
          <p className="value">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard; 
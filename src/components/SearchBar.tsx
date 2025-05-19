import React, { useState } from 'react';
import axios from 'axios';

interface SearchBarProps {
  setWeatherData: (data: any) => void;
  setError: (error: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWeatherData, setError }) => {
  const [city, setCity] = useState('');

  const API_KEY = 'a7a652dd0dc5e4fd3b59a7ff0590b16f';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Lütfen bir şehir adı girin.');
      return;
    }

    try {
      const encodedCity = encodeURIComponent(city.trim());
      const response = await axios.get(
        `${BASE_URL}?q=${encodedCity}&appid=${API_KEY}&units=metric&lang=tr`
      );
      
      if (response.data && response.data.cod === 200) {
        setWeatherData(response.data);
        setError('');
      } else {
        setError('Hava durumu verisi alınamadı.');
        setWeatherData(null);
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 404) {
          setError(`${city} şehri bulunamadı. Lütfen geçerli bir şehir adı girin.`);
        } else if (error.response.status === 401) {
          setError('API anahtarı geçersiz. Lütfen daha sonra tekrar deneyin.');
        } else {
          setError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        }
      } else if (error.request) {
        setError('Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.');
      } else {
        setError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
      setWeatherData(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Şehir adı girin..."
        required
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default SearchBar; 
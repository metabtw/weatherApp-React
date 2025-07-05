# weatherApp-React

<p align="center">
  <a href="https://github.com/metabtw/weatherApp-React/stargazers">
    <img src="https://img.shields.io/github/stars/metabtw/weatherApp-React?style=for-the-badge" alt="GitHub Stars"/>
  </a>
  <a href="https://github.com/metabtw/weatherApp-React/network/members">
    <img src="https://img.shields.io/github/forks/metabtw/weatherApp-React?style=for-the-badge" alt="GitHub Forks"/>
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18"/>
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  </a>
</p>

# Hava Durumu Uygulaması 🌤️

Bu proje, React ve TypeScript kullanılarak geliştirilmiş modern bir hava durumu uygulamasıdır. OpenWeatherMap API'sini kullanarak gerçek zamanlı hava durumu verilerini gösterir.

## Özellikler ✨

- 🔍 Şehir bazlı hava durumu arama
- 🌡️ Anlık sıcaklık bilgisi
- 🌤️ Hava durumu açıklaması ve ikonu
- 💨 Rüzgar hızı
- 💧 Nem oranı
- 🌡️ Hissedilen sıcaklık
- 📊 Minimum ve maksimum sıcaklık değerleri
- 🌍 Ülke kodu gösterimi
- 📅 Tarih ve saat bilgisi
- 📱 Responsive tasarım

## Teknolojiler 🛠️

<p align="left">
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  </a>
  <a href="https://axios-http.com/" target="_blank">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
  </a>
  <a href="https://openweathermap.org/" target="_blank">
    <img src="https://img.shields.io/badge/OpenWeatherMap-4AB050?style=for-the-badge&logo=openweathermap&logoColor=white" alt="OpenWeatherMap"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
    <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  </a>
</p>

## Kurulum 🚀

1.  Projeyi klonlayın:
    ```bash
    git clone [https://github.com/metabtw/weatherApp-React.git](https://github.com/metabtw/weatherApp-React.git)
    ```
2.  Proje dizinine gidin:
    ```bash
    cd weatherApp-React
    ```
3.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```
4.  Uygulamayı başlatın:
    ```bash
    npm start
    ```

Uygulama `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## Kullanım 📝

1.  Arama kutusuna bir şehir adı girin (örn: "Istanbul", "Ankara", "London")
2.  "Ara" butonuna tıklayın
3.  Hava durumu bilgileri ekranda görüntülenecektir

## API Anahtarı 🔑

Bu proje OpenWeatherMap API'sini kullanmaktadır. API anahtarı projede tanımlanmıştır, ancak kendi API anahtarınızı kullanmak isterseniz:

1.  [OpenWeatherMap](https://openweathermap.org/api)'e kaydolun
2.  Ücretsiz API anahtarı alın
3.  `src/components/SearchBar.tsx` dosyasındaki `API_KEY` değişkenini kendi API anahtarınızla değiştirin

## İletişim 📧

Sorularınız veya önerileriniz için:
- E-posta: tahtalime@gmail.com

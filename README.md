# weatherApp-React

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

- React 18
- TypeScript
- Axios
- OpenWeatherMap API
- CSS3

## Kurulum 🚀

1. Projeyi klonlayın:
```bash
git clone https://github.com/kullaniciadi/hava-durumu.git
cd hava-durumu
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Uygulamayı başlatın:
```bash
npm start
```

Uygulama http://localhost:3000 adresinde çalışmaya başlayacaktır.

## Kullanım 📝

1. Arama kutusuna bir şehir adı girin (örn: "Istanbul", "Ankara", "London")
2. "Ara" butonuna tıklayın
3. Hava durumu bilgileri ekranda görüntülenecektir

## API Anahtarı 🔑

Bu proje OpenWeatherMap API'sini kullanmaktadır. API anahtarı projede tanımlanmıştır, ancak kendi API anahtarınızı kullanmak isterseniz:

1. [OpenWeatherMap](https://openweathermap.org/api)'e kaydolun
2. Ücretsiz API anahtarı alın
3. `src/components/SearchBar.tsx` dosyasındaki `API_KEY` değişkenini kendi API anahtarınızla değiştirin

## İletişim 📧

Sorularınız veya önerileriniz için:
- E-posta: tahtalime@gmail.com

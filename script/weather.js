var cities = [
    { name: "🇰🇷 광주", lat: 35.1595, lon: 126.8526 },
    { name: "🇰🇷 서울", lat: 37.5665, lon: 126.9780 },
    { name: "🇯🇵 도쿄", lat: 35.6762, lon: 139.6503 },
    { name: "🇺🇸 워싱턴 D.C.", lat: 38.9072, lon: -77.0369 },
    { name: "🇬🇧 런던", lat: 51.5074, lon: -0.1278 },
    { name: "🇫🇷 파리", lat: 48.8566, lon: 2.3522 },
    { name: "🇦🇺 캔버라", lat: -35.2809, lon: 149.1300 }
];

var citySelect = document.getElementById("city-select");
var weatherBox = document.getElementById("weather-box");

function findCity(cityName) {
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].name === cityName) {
            return cities[i];
        }
    }

    return cities[0];
}

function renderCityInfo(city) {
    weatherBox.innerHTML =
        "<strong>" + city.name + "</strong><br>" +
        "📍 위도: " + city.lat + "<br>" +
        "🧭 경도: " + city.lon;
}

citySelect.addEventListener("change", function () {
    var selectedCity = findCity(citySelect.value);
    renderCityInfo(selectedCity);
});

renderCityInfo(findCity(citySelect.value));

export async function fetchCurrentWeather(lat, lon) {
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m,relative_humidity_2m";
    var response = await fetch(url);

    if (!response.ok) {
        throw new Error("날씨 데이터를 불러오지 못했습니다.");
    }

    return await response.json();
}

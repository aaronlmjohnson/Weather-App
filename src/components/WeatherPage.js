import "./WeatherPage.css";

const WeatherPage = (props)=>{
    const { weatherData } = props;    
    return (
        <div id="weather-page">
            {weatherData.main && (Object.keys(weatherData.main)).map((key)=>{
                return <p>{key}: {weatherData.main[key]}</p>
            })}
        </div>
    );
}

export default WeatherPage;


//weatherData obj example
// {
//     "coord": {
//         "lon": -94.1574,
//         "lat": 36.0626
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 82.89,
//         "feels_like": 87.64,
//         "temp_min": 79.97,
//         "temp_max": 85.28,
//         "pressure": 1016,
//         "humidity": 68
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 0,
//         "deg": 0
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1660084633,
//     "sys": {
//         "type": 2,
//         "id": 2010241,
//         "country": "US",
//         "sunrise": 1660044615,
//         "sunset": 1660094045
//     },
//     "timezone": -18000,
//     "id": 4110486,
//     "name": "Fayetteville",
//     "cod": 200
// }
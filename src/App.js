import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';
import Navbar from './components/Navbar';
import WeatherPage from './components/WeatherPage';
import { useState } from 'react';

function App() {
  const { weatherData, currentAndFiveDay } = useLoadWeatherAPI();
  const { locationData, loadLocationData } = useLoadLocationAPI();
  const [hideDropdown , setHideDropdown] = useState(false);
  const [weatherAndLoc, setWeatherAndLoc] = useState({});

  const handleChange = (e)=>{
    setHideDropdown(e.target.value? false : true);

    loadLocationData(e.target.value); 
  }

  const handleLocationClick = (location)=>{
    currentAndFiveDay(location.lat, location.lon);
    setWeatherAndLoc({
      location: location,
      current: weatherData[0],
      fiveday: weatherData[1]
    });
    console.log(weatherAndLoc);
  }

  return (
    <div className="App">
      <Navbar locations={locationData} handleChange={handleChange} handleLocationClick = {handleLocationClick} hideDropdown={hideDropdown}/>
      <WeatherPage weatherData={weatherData} />
    </div>
  );
}

export default App;


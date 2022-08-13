import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';
import Navbar from './components/Navbar';
import WeatherPage from './components/WeatherPage';
import { useState } from 'react';

function App() {
  const { weatherData, loadWeatherData } = useLoadWeatherAPI();
  const { locationData, loadLocationData, setLocationData } = useLoadLocationAPI();
  const [hideDropdown , setHideDropdown] = useState(false)

  const handleChange = (e)=>{
    setHideDropdown(e.target.value? false : true);

    loadLocationData(e.target.value); 
  }

  return (
    <div className="App">
      <Navbar locations={locationData} handleChange={handleChange} loadWeatherData={loadWeatherData} hideDropdown={hideDropdown}/>
      <WeatherPage weatherData={weatherData} />
    </div>
  );
}

export default App;


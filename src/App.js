import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';

function App() {

  const { weatherData, getWeather } = useLoadWeatherAPI();
  const { location, getLocationData } = useLoadLocationAPI();

  return (
    <div className="App">
      Weather App
      <button onClick={()=>getLocationData('Fayetteville', 'US', 'AR')}>click</button>
    </div>
  );
}

export default App;

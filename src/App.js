import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';

function App() {

  const { weatherData, loadWeatherData } = useLoadWeatherAPI();
  const { locationData, loadLocationData } = useLoadLocationAPI();

  return (
    <div className="App">
      Weather App
      <button onClick={()=>loadLocationData('London')}>click</button>
    </div>
  );
}

export default App;

import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';
import Navbar from './components/Navbar';

function App() {
  const { weatherData, loadWeatherData } = useLoadWeatherAPI();
  const { locationData, loadLocationData } = useLoadLocationAPI();

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';
import Navbar from './components/Navbar';

function App() {
  const { weatherData, loadWeatherData } = useLoadWeatherAPI();
  const { locationData, loadLocationData } = useLoadLocationAPI();

  const handleChange = (e)=>{
    loadLocationData(e.target.value); 
  }

  return (
    <div className="App">
      <Navbar locations={locationData} handleChange={handleChange} />
    </div>
  );
}

export default App;


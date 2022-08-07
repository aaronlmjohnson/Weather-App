import './App.css';
import useLoadWeatherAPI from './components/useLoadWeatherAPI';
import useLoadLocationAPI from './components/useLoadLocationAPI';
import Navbar from './components/Navbar';

function App() {

  const { weatherData, loadWeatherData } = useLoadWeatherAPI();
  const { locationData, loadLocationData } = useLoadLocationAPI();

  //1. make components
  //2. pass hard-coded props
  //3. create methods to handle passed props
  //4. add state

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

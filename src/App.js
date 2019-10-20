import React from 'react';
import './App.css';
import WeatherPage from './components/WeatherPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import WeatherForm from './components/WeatherForm';
import { WiCloudy, WiDaySunny, WiSnow, WiFog, WiNightClear, WiSprinkle, WiRain, WiThunderstorm} from "react-icons/wi";


const API_KEY = "926a366e97d589df91a5cc5eac18f947";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",
      temperature: "",
      pressure: "",
      humidity: "",
      windSpeed: "",
      weatherStatus: "",//sunny, cloudy etc.
      error: "",
      showWeather: false,
      timestamp: "" 
    }
}

getWeather = async(e) => {

  e.preventDefault();

  const city = e.target.elements.city.value;

  const country = e.target.elements.country.value;

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

  const data = await api_call.json();

  console.log(data)

  if(city && country){

    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      weatherStatus: data.weather[0].main,
      error: "",
      showWeather: true,
      timestamp: data.dt
    });
   
  }else{
    this.setState({
      city: "",
      country: "",
      temperature: "",
      pressure: "",
      humidity: "",
      windSpeed: "",
      weatherStatus: "",
      error: "Please enter the requested values.",
      showWeather: false,
      timestamp: ""
    })
  }
}

  render(){
    const { city, country, temperature, pressure, humidity, windSpeed, weatherStatus, error } = this.state;

  /*   let timeStamp = this.state.timestamp

    let timeDate = new Date(timeStamp*1000);
    
    let hours = timeDate.getHours(); */
    
    return(
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info text-white">
          <a className="navbar-brand text-white" href="/">SunnyForecast</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/weather-form">Weather</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="wrapper">
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/weather-form">
              <WeatherForm getWeather={this.getWeather} />

              <div className="errorMsg">
                <WeatherPage error={error}/>
              </div>
              
              {
                this.state.showWeather ? 
                <div className="col form-container">
                <WeatherPage  city={city}
                              country={country}
                              temperature={Math.floor(temperature)}
                              pressure={pressure}
                              humidity={humidity}
                              windSpeed={windSpeed}
                              weatherStatus={weatherStatus}
                              error={error}
                />
                {
                  weatherStatus === "Mist" ?
                  <div className="iconStyle"><WiFog/></div> :
                  null ||
                  weatherStatus === "Drizzle" ?
                  <p className="iconStyle"><WiSprinkle/></p> :
                  null ||
                  weatherStatus === "Rain" ?
                  <p className="iconStyle"><WiRain/></p> :
                  null ||
                  weatherStatus === "Clouds" ?
                  <p className="iconStyle"><WiCloudy/></p> :
                  null ||
                  weatherStatus === "Thunderstorm" ?
                  <p className="iconStyle"><WiThunderstorm/></p> :
                  null ||
                  weatherStatus === "Clear" ?
                  <p className="iconStyle"><WiDaySunny/></p> :
                  <p className="iconStyle"><WiNightClear/></p> 
                   ||
                  weatherStatus === "Snow" ?
                  <p className="iconStyle"><WiSnow/></p> :
                  null
                }
              </div>
              :null
              }
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    )
    
  }
}

export default App;

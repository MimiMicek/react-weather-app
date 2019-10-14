import React from 'react';
import './App.css';
import Weather from './components/WeatherPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';
import WeatherForm from './components/WeatherForm';


class App extends React.Component{
  render(){
    return(
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <a className="navbar-brand" href="/">SunnyForecast</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/weather-form">Weather</a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/weather-form" component={WeatherForm} />
          </Switch>
        </div>
      </Router>
    )
    
  }
}

export default App;

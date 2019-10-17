import React from 'react';

export default class WeatherPage extends React.Component{

    render(){
        const { city, country, temperature, pressure, humidity, windSpeed, weatherStatus, error } = this.props;


        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            city && country && <p>Location: {city}, {country}</p>
                        }
                    </div>
                    <div className="col">
                        {
                            city && country && <p>Humidity: {humidity}%</p>
                        }
                    </div>
                    <div className="col">
                        {
                            city && country && <p>Temperature: {temperature}°C</p>
                        }
                    </div>
                </div>
                {
                    error && <p>{error}</p>
                }
                <div className="row">
                
                    <div className="col">
                        {
                            city && country && <p>Pressure: {pressure}mbar</p>
                        }
                    </div>
                    <div className="col">
                        {
                            city && country && <p>Wind speed: {windSpeed}m/s</p>
                        }
                    </div>
                    <div className="col">
                        {
                            city && country && <p>Weather status: {weatherStatus}</p>
                        }
                        
                    </div>
                </div>
              </div>
        )
    }
}
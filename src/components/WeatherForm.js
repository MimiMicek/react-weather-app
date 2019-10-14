import React from 'react';

export default class WeatherForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cityName: "",
            countryName: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = () => {
        const { cityName, countryName } = this.state;

        
        console.log(`city ${cityName}.`);
        console.log(`country ${countryName}.`);


        this.props.onSearchSubmit({cityName, countryName});
    }

    render(){
        const { cityName, countryName } = this.state;
     
        return(
            <div>
                <input  id="cityName" 
                        placeholder="Enter city . . ."
                        onChange={this.handleChange}
                        value={cityName}
                        />
                <br/>
                <br/>
                <input  id="countryName" 
                        placeholder="Enter country . . ."
                        onChange={this.handleChange}
                        value={countryName}
                        />
                <br/>
                <br/>
                <button onClick={this.onSubmit}>Submit</button>

            </div>
        )
    }
}
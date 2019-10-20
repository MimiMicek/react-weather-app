import React from 'react';
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="home">
                    <h1 className="homePage">Welcome to the weather channel</h1>
                    <div className="sunIcon"><WiDaySunny/></div>
                    <div className="rainIcon"><WiRain/></div>
                    <div className="cloudIcon"><WiCloudy/></div>
                </div>            
            </div>
        )
    }
}
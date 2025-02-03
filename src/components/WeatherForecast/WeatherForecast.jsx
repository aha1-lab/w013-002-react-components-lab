import { useState } from "react";
import './WeatherForecast.css'
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

function WeatherForecast({day, img, imgAlt, conditions, time}){

    return(
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt}/>
            <WeatherData conditions={conditions} time={time} />
        </div>
    )
}

export default WeatherForecast;
function WeatherData({day, conditions, time}){


    return(
        <div>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>Time: </span>{time}</p>
        </div>
    )

}

export default WeatherData;
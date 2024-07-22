import React, {useState} from "react";
import SearchBox from './SearchBox';
import InfoBox from './InfoBox'
function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Nagpur",
        feels_like:  26.01,
        humidity: 100,
        temp: 26.01,
        temp_max: 26.01,
        temp_min: 26.01,
        weather: "mist"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign: "center"}}>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}

export default WeatherApp;   
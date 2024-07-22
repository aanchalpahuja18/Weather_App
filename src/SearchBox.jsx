import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "69d09485a3be50f3d1ff09341f4dc5d0"
    let [city,setcity] = useState("");
    let [error,seterror] = useState(false);

    let handleChange = (event) =>{
        setcity(event.target.value)
    }

    

    let getWeatherInfo = async() =>{
        try{

        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
    
        let result ={
            city:city,
            temp:jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description

        }
        return result;
    }catch(err){
        throw err;
    }
    

    }

    let handleSubmit = async(event) =>{
        try{

        event.preventDefault();
        setcity("")
        let newInfo=  await getWeatherInfo();
        updateInfo(newInfo);
        seterror(false);
        }catch(err){

            seterror(true)

        }

    }


    return(
        <div className="SearchBox">
            <h1>Search for the weather</h1>
            <form  onSubmit={handleSubmit}>
            <div>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> &nbsp;
            <Button variant="contained" type="submit">
                Search
            </Button>
            {error && <p style={{color: "red"}}>No such place found in our App :!</p>}  
            </div>
            </form>
        </div>
    )
}
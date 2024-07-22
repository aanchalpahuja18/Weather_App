import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"
function InfoBox({info}){
    const initialUrl = "https://plus.unsplash.com/premium_photo-1697385274849-9c8141331c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"

    const HOT_URL = "https://plus.unsplash.com/premium_photo-1720760950804-729e3043a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bm55JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1697385274849-9c8141331c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"

    return(
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className="card">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp < 25 ? COLD_URL : HOT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.temp_min}&deg;C</p>
          <p>Max Temp = {info.temp_max}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> & feels like {info.feels_like}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}

export default InfoBox
import "./App.css"
import CitySearch from "./CitySearch"
import { useState } from "react"
import axios from "axios"
import CurrentWeather from "./CurrentWeather"
import { Container,Box, CssBaseline,ThemeProvider , createTheme,IconButton} from "@mui/material"
import { Brightness4,Brightness7 } from "@mui/icons-material"
export default function App(){
    const [mode , setMode] =useState("light")
    const theme =createTheme({
        palette:{
            mode:mode
        }
    })
    const toggleTheme =() => {
        setMode((prev)=> prev === "light" ? "dark" : "light" )
    }
    const [weatherDeatails , setWeatherDetails]=useState(null)

    const fetchWeather = (city)=>{
        const apiKey="8f6a4b00c46dc290c2ded43a36c64d37"
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`).then((res)=>{
        const {main , weather , wind , name}=res.data
        const weatherData={
            city:name,
            temp:main.temp,
            description:weather[0].description,
            icon:weather[0].main,
            minTemp:main.temp_min,
            maxTemp:main.temp_max,
            humidity:main.humidity,
            windSpeed:wind.speed,
        }
        
        setWeatherDetails(weatherData)
    }).catch((error)=>{
        setWeatherDetails(null)
    });
}

    const fetchWeatherByLocation = (latitude,longitude)=>{
        const apiKey="8f6a4b00c46dc290c2ded43a36c64d37"
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ar`).then((res)=>{
        const {main , weather , wind , name}=res.data
        const weatherData={
            city:name,
            temp:main.temp,
            description:weather[0].description,
            icon:weather[0].main,
            minTemp:main.temp_min,
            maxTemp:main.temp_max,
            humidity:main.humidity,
            windSpeed:wind.speed,
        }
        
        setWeatherDetails(weatherData)
    }).catch((error)=>{
        setWeatherDetails(null)
    });
}
        return(
        <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{marginTop:5}}>
            <CssBaseline/>
             <CitySearch onSearch={fetchWeather} getlocation={fetchWeatherByLocation}/>
        <Box sx={{display:"flex" ,justifyContent:"flex-end", mb:2}} >
           <IconButton onClick={toggleTheme} color="inherit" style={{position:"absolute",left:"90%",top:"30px"}}>
            {mode === "dark" ? <Brightness7/> : <Brightness4/>}
            </IconButton> 
        </Box>
       {weatherDeatails && <CurrentWeather data={weatherDeatails}/> } 
        </Container>
        </ThemeProvider>
    )
}
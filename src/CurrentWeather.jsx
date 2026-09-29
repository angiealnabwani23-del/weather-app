import { useState,useEffect } from "react"
import { Box , Grid , Typography , Card , CardContent} from "@mui/material"
import {
    Thunderstorm,
    WbSunny,
    AcUnit,
    Cloud
} from "@mui/icons-material"
export default function CurrentWeather({data}){
    const {city, temp, description, icon,minTemp, maxTemp, humidity,windSpeed}=data
    const renderIcon =()=>{
        switch (icon){
            case "Clear" : return <WbSunny />;
            case "Snow"  : return <AcUnit/>;
            case "Clouds" : return <Cloud />;
            case "Thunderstorm" : return <Thunderstorm/>;
        default : return <Cloud />;
            }
    }
    return(
<Card sx={{width:"100%" ,maxWidth:600 , margin:"auto" , position:"absolute" , top:"50%",left:"50%",transform:"translateX(-50%)"}}>
<CardContent>
    <Typography variant="h5" component="div" align="center">{city}</Typography>
    <Box sx={{display:"flex" ,justifyContent:"center" , alignItems:"center" , marginBottom:2}}>
        <Typography variant="h4" component="span">{temp}</Typography>
        <Box sx={{marginLeft :2}}>
            {renderIcon()}
        </Box>
    </Box>

    <Typography variant="body1" align="center">{description}</Typography>
    <Grid container spacing={2} sx={{ marginTop:2 , justifyContent:"center" }}>

<Grid item>
<Typography variant="body2">Min:{minTemp} C</Typography>
</Grid>

<Grid item>
<Typography variant="body2">Max:{maxTemp} C</Typography>
</Grid>

<Grid item>
<Typography variant="body2">Humidity:{humidity} %</Typography>
</Grid>

<Grid item>
<Typography variant="body2">Wind:{windSpeed} m/s</Typography>
</Grid>
    </Grid>
</CardContent>
</Card>
    )
}
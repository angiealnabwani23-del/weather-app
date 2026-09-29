import { TextField, Box , Button,Grid } from "@mui/material"
import { useState } from "react"
export default function CitySearch({onSearch , getlocation}){
    const [city ,setCity]=useState("")
    const handleSearch=()=>{
        if(city){
        onSearch(city)
        }
    }
    const getLocationByIp= async ()=>{
try{
    const response=await fetch("https://ipapi.co/json/")
    const data = await response.json()
    const {latitude , longitude}= data
    getlocation(latitude,longitude)
}catch(error){
    alert("يرجى تحديد الموقع")
}
    }
    return(
    <Box sx={{width:"100%",textAlign:"center" ,marginBottom:3 , position:"absolute" ,left:"50%",top:"30%", transform:"translate(-50% , -50%)"}}>
        <Grid container spacing={2} sx={{display:"flex", justifyContent:"center"}}>
<Grid size={{ xs: 12, sm: 8, md: 6 }}>
        <TextField label="أدخل اسم المدينة"
         variant="outlined" fullWidth sx={{marginBottom:2}} value={city} onChange={(e)=>setCity(e.target.value)} />
        </Grid>
        <Grid  sx={{marginTop:"10px"}}>
<Button  variant="contained" color="primary" onClick={handleSearch} >بحث</Button>
        </Grid>
        <Grid sx={{marginTop:"10px"}}>
<Button variant="contained" color="secondary" onClick={getLocationByIp}>تحديد الموقع</Button>
        </Grid>
        </Grid>
    </Box>
    )
}
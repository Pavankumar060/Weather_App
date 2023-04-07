import axios from "axios"

export const GetCityname =async (input)=>{
    return await axios({
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params:{
            minPopulation: '10000',
            namePrefix: `${input}`
        },
        headers: {
          'X-RapidAPI-Key': 'b007d6c718msh8670157511f557cp1c2d02jsn97ce6401a0c7',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    })
}

export const getWeather = async (lati,long)=>{
    
    return await axios ({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params:{
            lat:`${lati}`,
            lon:`${long}`,
            appid: "fe8d25f9290c4916fa1f879d209213fd",
            units:'metric'
        }


    })
}

export const getForecast = async (lati,long)=>{
    
    return await axios ({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        params:{
            lat:`${lati}`,
            lon:`${long}`,
            appid: "fe8d25f9290c4916fa1f879d209213fd",
            units:'metric'
        }


    })
}
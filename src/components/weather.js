import { useState } from "react";
import { getForecast, getWeather } from "./apis";

const Weather =({lati,long})=>{

    const [getData,setGetData]= useState(null);
    const [forecastData,setForecastData] =useState(null);  

    const getWeatherData =async (lati,long)=>{
        try {
            const response = await getWeather(lati,long);
            setGetData(response.data);
        } catch (error) {
           console.log(error); 
        }}

    const getForecastData =async (lati,long)=>{
        try {
            const response = await getForecast(lati,long);
            setForecastData(response.data.list);
        } catch (error) {
            console.log(error);
        }}

    const handleClick =()=>{
            getWeatherData(lati,long);
            getForecastData(lati,long);
        }
        return(
        <>
        <div className="button" onClick={()=>{handleClick();}}><button>Submit</button></div>
        
            <div className="overall">

             { getData &&
                 <div className="data">
                 <div className="main-data">
                     <div className="temp-1">
                        <div className="temp">
                            <h3 className="name">Today</h3>
                            <h1>{Math.floor(getData.main.temp)}</h1><p><sup>o</sup>C</p>
                        </div>
                     </div>
                     <div className="temp-1">
                        <div className="design">    
                            <p>Feels like</p>
                            <h2>{Math.floor(getData.main.feels_like)}<sup>o</sup>c</h2>
                        </div>
                        <p>Humidity-{Math.floor(getData.main.humidity)}%</p>
                     </div>
                     <div className="description">
                         <h3>{getData.weather[0].description}</h3>
                     </div>
                     <div className="temp-1">
                         <div className="design">
                             <p>Max Temp-</p>
                             <h2>{Math.floor(getData.main.temp_max)}</h2><p><sup>o</sup>c</p>
                         </div>
                         <div className="design">
                            <p>Max Temp-</p>
                            <h2>{Math.floor(getData.main.temp_min)}</h2><p><sup>o</sup>c</p>
                         </div>
                     </div> 
                 </div>
                 </div>
            } 

            { forecastData &&
                forecastData.map((data,i)=>{
                    const [date,time] = data.dt_txt.split(' ');
                    if(time === "12:00:00"){
                    return(
                        <div key={i} className="data">
                            <div className="main-data">
                                <div className="temp-1">
                                    <h3 className="name">{date}</h3>
                                <div className="temp">
                                    <h1>{Math.floor(data.main.temp)}</h1><p><sup>o</sup>C</p>
                                </div>
                                </div>
                                <div className="temp-1">
                                    <div className="design">    
                                        <p>Feels like</p>
                                        <h2>{Math.floor(data.main.feels_like)}<sup>o</sup>c</h2>
                                    </div>
                                    <p>Humidity-{Math.floor(data.main.humidity)}%</p>
                                </div>
                                <div className="description">
                                    <h3>{data.weather[0].description}</h3>
                                </div>
                                <div className="temp-1">
                                    <div className="design">
                                        <p>Max Temp-</p>
                                        <h2>{Math.floor(data.main.temp_max)}</h2><p><sup>o</sup>c</p>
                                    </div>
                                    <div className="design">
                                        <p>Max Temp-</p>
                                        <h2>{Math.floor(data.main.temp_min)}</h2><p><sup>o</sup>c</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                            )}
                    })
            }
            </div>
        </>
    )}
export default Weather;
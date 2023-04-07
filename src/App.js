import { useState } from 'react';
import './App.css'
import GetCity from './components/getcity';
import Weather from './components/weather';

function App() {
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();
  const onSearchChange =(data)=>{
    const [lat,lon] = data.value.split(" ");
    setLatitude(lat);
    setLongitude(lon);
  }
  return (
    <>
     <div className="heading">
                <h1>Weather App</h1>
        </div>
      < GetCity onSearch={onSearchChange} />
        < Weather lati={latitude}  long={longitude}/>
    </>
  );
}

export default App;

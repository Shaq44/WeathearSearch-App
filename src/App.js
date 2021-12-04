
import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './Components/Search';


const App = () => {
  const [header]= useState('Weather App');
  const[weatherInfo,setWeatherData] = useState([]);
  

  useEffect( () =>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=466b5c9748efb6f0d78ce0ea606ef8a1`;
    fetch(weatherUrl)
    .then(response => response.json())
    .then(weatherData =>{ 
      console.log(weatherData);
      setWeatherData(weatherData)
    })
    .catch(err => console.log('err:',err))

   
  
},[])

console.log(weatherInfo.name);
console.log(weatherInfo.weather);
weatherInfo.weather.map((data)=>{
  console.log(data.description);
})
  return (
    <div className="App">
      <header className="App-header row">
     <h1 id="header">{header} </h1>   
      </header>

      <Search />
     <div>
     </div>
     <h1>{weatherInfo.name}</h1>
     {weatherInfo.weather.map((info)=>(
       <h3>{info.description}</h3>
     ))}
     
    </div>
  );
}


export default App;


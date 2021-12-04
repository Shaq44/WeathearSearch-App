
import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './Components/Search';


const App = () => {
  const [header]= useState('Weather App');
  const[weatherInfo,setWeatherData] = useState([]);
  const [cityName,setCityName] = useState('');
  
  

  useEffect( () =>{
    
      function getWeatherData (cityName){
          
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=466b5c9748efb6f0d78ce0ea606ef8a1`;
      fetch(weatherUrl)
      .then(response => response.json())
      .then(weatherData =>{ 
        console.log(weatherData);
        setWeatherData(weatherData)
      })
      .catch(err => console.log('err:',err))
    }
    getWeatherData();
    
    console.log("useEffect ran...");
     

   
  
},[])





console.log(weatherInfo.name);
console.log(weatherInfo.weather);
/*weatherInfo.weather.map((data)=>{
  console.log(data.description);
})*/
  return (
    <div className="App">
      <header className="App-header row">
     <h1 id="header">{header} </h1>   
      </header>

      <Search setCityName={cityName} />
     <div>
     </div>
     <h1>{weatherInfo.name}</h1>
     
    </div>
  );
}


export default App;



import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './Components/Search';


const App = () => {
  const [header]= useState('Weather App');
  const[weatherInfo,setWeatherData] = useState([]);
  const [cityName,setCityName] = useState('');
  

  
  
  

  useEffect( () =>{
    
      //setCityName(city);
         
           
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=466b5c9748efb6f0d78ce0ea606ef8a1`;
      fetch(weatherUrl)
      .then(response => response.json())
      .then(weatherData =>
        //console.log(weatherData);
        setWeatherData(weatherData)
        //console.log(weatherData.name);
        
        
      ) 
    
  
    //getWeatherData(cityName); 
    console.log(weatherInfo);
   // console.log(cityName);
    //console.log(weatherInfo.name);
   // console.log(weatherInfo.weather.map(images)=>({images.icon}));

    
    console.log("useEffect ran...");
     

   
  
},[])







/*console.log(weatherInfo.name);
console.log(weatherInfo.weather);*/
/*weatherInfo.weather.map((data)=>{
  console.log(data.description);
  console.log(data.icon);
})*/
  return (
    <div className="App">
      <header className="App-header row">
     <h1 id="header">{header} </h1>   
      </header>

     <Search setCityName={cityName} />
     
     <div>
      <h1>
        {cityName}
      </h1>
     </div>
     <div>
    
      <h1 >
       {weatherInfo.name}
      </h1>
      
      <div>
        {weatherInfo.weather.map((image)=>{
          <img src={image.icon} alt="pic"/>
        })}
      </div>

     </div>
    
     
    </div> 
  );
}


export default App;


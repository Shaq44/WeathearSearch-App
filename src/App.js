
import './App.css';
import React, { useEffect, useState } from 'react';



const App = () => {
  const [header]= useState('Weather App');
  const[weatherInfo,setWeatherData] = useState([]);
  const [cityName,setCityName] = useState('');
  
  

  useEffect( () =>{
  getWeatherData();
    console.log("useEffect ran...");
    console.log(weatherInfo);
},[]);


function  getWeatherData (){
  
  //Fetch data from api key from open weathermap website based on what is typed in the search bar
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=466b5c9748efb6f0d78ce0ea606ef8a1`;
      fetch(weatherUrl)
      .then(response => response.json())
      .then(weatherData =>
        setWeatherData(weatherData)
      )
      }

const handleSubmit = e =>{
  e.preventDefault();
  getWeatherData();
  //Sends an alert to show the city you entered and the method is at least running 
  alert(`Submitting name: ${cityName}`);
}




/*This piece of code is to test that data is being pulled from the website
it will pop up in the web dev console on the website when testing to see what pops up*/
/*console.log(weatherInfo.name);
console.log(weatherInfo.weather);
weatherInfo.weather.map((data)=>{
  console.log(data.description);
})*/
  return (
    <div className="App">
      <header className="App-header row">
     <h1 id="header">{header} </h1>   
      </header>

     <form onSubmit={handleSubmit}>
      <div className="input-feild">
        <input placeholder='Enter name of city'
        type="text"
        value={cityName}
        onChange={e=>setCityName(e.target.value)}
        />
      </div>
     </form>

     <div>
      <h1>{weatherInfo.name}</h1>
     
     </div>

     <div>
      {weatherInfo.weather.map((data)=>{
        <h1>data.description</h1>
      })}
     </div>
     
    </div>
  );
}


export default App;


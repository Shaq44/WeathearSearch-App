
import './App.css';
import React, { useEffect, useState } from 'react';




const App = () => {
  const [header]= useState('Weather App');
  const[weatherInfo,setWeatherData] = useState([]);
  const [cityLocation,setCityLocation] = useState('');
  
  async function getWeatherData (){
    //Pull data from api key from open weathermap website 
   let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=466b5c9748efb6f0d78ce0ea606ef8a1`;
   fetch(weatherUrl)
   .then(weatherData => weatherData.json())
   .then(weatherData =>
     //set data from url to weatherInfo 
    setWeatherData(weatherData))
    
   }
 

  
 

   //console.log(weatherInfo);


  useEffect( () =>{
   
getWeatherData();

    //This is to check that use effect is being ran and where it renders
    console.log("useEffect ran...");
   
  },[]);


 



const handleSubmit = e =>{
  e.preventDefault();
  getWeatherData();
  //This checks the data being pulled from the website in the console to make sure everything is ok
console.log(weatherInfo);
 //weatherInfo.weather.map((info)=>{console.log(info.description)})
  

}





  return (
    
    <div className="App">
      <header className="App-header row">
     <h1 id="header">{header} </h1>   
      </header>

     <form onSubmit={handleSubmit}>
      <div className="input-feild">
        <input placeholder='Enter name of city'
        type="text"
        value={cityLocation}
        onChange={e=>setCityLocation(e.target.value)}
        
        />
      </div>
     </form>

     

     <div>
      
        <h1>{weatherInfo.name}</h1>
        
       

     </div>
    <div>
      
    </div>
    
    
     
    </div>
  );
}


export default App;


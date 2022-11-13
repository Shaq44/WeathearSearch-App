
import './App.css';
import React from 'react';
import Search from './Components/Search'





class app extends React.Component {



  state={
    header:'Weather App',
    getWeatherData:[],
    loading:false

  }


   
  


  

  

componentDidMount(){
  this.getWeatherData();
}

getWeatherData = async city =>{
  //Pull data from api key from open weathermap website
 
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=466b5c9748efb6f0d78ce0ea606ef8a1`;
console.log(weatherUrl);
 const weatherInfo = await fetch(weatherUrl);
 const searchedInfo = await weatherInfo.json();
 console.log(searchedInfo.weather);
 this.setState({
  getWeatherData:searchedInfo
 })
  


  
}
   






  render (){
    console.log(this.state.getWeatherData)
    const weather = this.state.getWeatherData.weather?.map((info)=>{
     console.log(info.main)
      return(
        <div>
          <div>
          {info.description}   

          </div>

          <div>
          <img src={` http://openweathermap.org/img/wn/${info.icon}.png`} alt="weatherIcon"/>
          </div>       
        </div>

        

       
       
        )
    });

    console.log(this.state.getWeatherData.main);

    
  return(
  <div className="weather-app">
    
    <header className="App-header row">
    <h1 id="header">{this.state.header} </h1>   
    </header>

    <div className="search-bar">
     <Search  getWeatherData={this.getWeatherData}/>
    </div>
    

     <div className="weather-card" >
 
     { this.state.getWeatherData.name}
       
     {weather}
     
      
      
     Temperature: {this.state.getWeatherData.main?.temp}
      
      <br></br>
      Humidity: {this.state.getWeatherData.main?.humidity}
     </div>

    </div>

    )
  }
}


export default app;


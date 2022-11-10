
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
          {info.description}
          <img src={` http://openweathermap.org/img/wn/${info.icon}.png`}/>
          
        </div>

       
       
        )
    });

    console.log(this.state.getWeatherData.main);

   /* const temp = this.state.getWeatherData.main?.map((data)=>{
      return(
        <div>
          {data.temp}
          {data.humidity}
         Lowest Temp: {data.temp_min}
          Maximum Temp: {data.temp_max}
        </div>
      )
    });*/
    return(
      <div>
    <div className="App">
      <header className="App-header row">
     <h1 id="header">{this.state.header} </h1>   
      </header>

    
      
  
    
     <div>
     <Search getWeatherData={this.getWeatherData}/>

      
     </div>

     <div>
     { this.state.getWeatherData.name}
     </div>

     <div>
      {weather}
     </div>
      
      <div>
      Temperature: {this.state.getWeatherData.main?.temp}
      </div>
   </div>
     

     

    </div>

    )
  }
}


export default app;


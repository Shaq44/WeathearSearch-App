import React from 'react';


class Search extends React.Component{
    state={
        city:''
    }

  
    handleChange = e =>{
        this.setState({
            city:e.target.value
        })
    }

 handleSubmit = e =>{
    e.preventDefault();
       this.props.getWeatherData(this.state.city);
       this.setState({
        city:'',
        loading:false
       })
        
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
        
            Search City:
            <input type='text' placeholder="Enter name of city"value={this.state.city} onChange={this.handleChange}/>
            <button>Search</button>
        </form>
        )
    }
     
    

}

export default Search;

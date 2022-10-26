import React,{useState} from 'react';

const Search = () =>{
    const[cityName,setCityName] = useState('');

  

    const handleSubmit = e =>{
        e.preventDefault();
        alert(`Submitting name ${cityName}`)
        //setCityName(e.target.cityName);
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Search City:
                <input type='text' value={cityName} onChange={e => setCityName(e.target.value)}/>
                
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )

}

export default Search;

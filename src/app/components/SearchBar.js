
import React, { useState } from 'react';


//Defines SearchBar componnent and takes a prop called onSearch
//onSearch -> expected to be a passed down function 
export const SearchBar = ({onSearch}) =>  {
    const [query, setQuery] = useState(' '); //Create a state variable query to hold the current search query. setQuery is the function to update this state.
    


    //This function updates the query state whenever the user types into the input field.
    const handleInputChange = (event) => {
        setQuery(event.target.value); //event.target.value contains the current value of the input field.
    };
    
    //calls the onSearch function passed as a prop from the parent component, passing the current query state as an argument. 
    //This is triggered when the user clicks the "Search" button.
    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className='input-wrapper'>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      );

};



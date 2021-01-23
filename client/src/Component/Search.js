import React from "react";


const Search = ({setTerm}) => {

  

    return (
        <div className="search">
            <input type="text" placeholder="Search..." onChange={e => {setTerm(e.target.value)}} />
         
        </div>
    )
}

export default Search;
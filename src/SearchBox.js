import React from "react";
const SearchBox= ({searchChange})=>{
    
    return(
        <div>
            <input type='search' placeholder='Enter the name' className ='br-4 shadow-2 b--washed-green bg-washed-green pa2 w9' 
            onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;
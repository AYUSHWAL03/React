import React from "react";

import './Card.css';


const card = (props)=>
{   
    const{name , email ,id} = props;
    // console.log(id);
    return(
        // THings which we import from the main file in terms of some variable
        <div className="tc bg-light-blue dib br3 pa3 ma3 grow shadow-5">
            <img alt='photo'src={`https://robohash.org/${id}?300X200`}></img>
            <div>
                <h2>
                    {name}
                    
                </h2>
                <p>{email}</p>
                
            </div>
        </div>
    );
    
}
export default card;
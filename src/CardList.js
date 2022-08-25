import React from 'react';
import { robots } from './robots';
import Card from './Card';
import SearchBox from './SearchBox';
import App from './App';

const CardList = () =>{
    const CardArray = robots.map((user,i)=>{
        return  <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
     
    })
    return(
        <div>
            {CardArray};
        </div>
    );
}
export default CardList;
   // This will show error becoz we haven't used the key attributes yet we can give each card element a unique key which is id 
        //map is the function which acts as for each loop
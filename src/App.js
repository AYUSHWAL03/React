import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Header from "./Header";
import SearchBox from "./SearchBox"

// import ReactDOM from 'react-dom/client';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots : robots,
            searchfield : ''
            
        }
    }
    onSearchChange =(event) => {
        
        this.setState({ searchfield : event.target.value });
        
    }
    render(){
        const filteredrobo =this.state.robots.filter(
            robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
        });
        console.log(filteredrobo);

    return(
        <div>
            <div className="bg-light-blue tc pv3">
            <Header />
            <SearchBox  searchChange = {this.onSearchChange}/>            
            </div>
       
            <CardList robots={filteredrobo}/>
        </div>
    );
    }
}
export default App;
    //upto this we will get the error as event is 
            // happened in seachbox it can be sorted by using arrow functions 
            //this.state will carry the fields which can be changed and it will affect the schema of the website
            // It will carry the fields which will be accepted as a props like here we created the state which carry information of 
            // robots and input of the search field as it carrys the both we can add the robots state entered by the user and 
            //constructor method only works in class extends component
            //for changing the value of search field is as it is a state we can use the setstate method
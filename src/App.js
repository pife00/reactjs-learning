import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    person:[
      {name:"Pipe",age:27}
    ]
  }
  changeName = (newName) =>{
    this.setState({
    person:[
      {name:newName,age:27}
    ]
    })
  }

  keyHandler = (value) =>{
    console.log(value)
  }

  render(){
    return( 
      <div className="App" >
        <div className="constrain" >
        <h1>Hello</h1>
        <hr/>
        <button onClick={this.changeName} >Switch name</button>
        <Person
        click={this.changeName.bind(this,'Marle')} 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}
        > Hello bb </Person>
        </div>
      </div>
    )
  }
}

export default App;

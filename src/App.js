import React from "react";
import "./App.css";
import Radium,{StyleRoot} from "radium";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
class App extends React.Component {
  state = {
    person: [
      { id:'1', name: "Pipe", age: 27 },
      { id:'2', name: "Nadia", age: 21 },
      { id:'3', name: "Emperatriz", age: 16 },
    ],
    showPerson: false,
  };
  deletePerson = (personIndex) => {
    const persons = this.state.person.slice();
    persons.splice(personIndex,1);
    this.setState({person:persons});
  };

  nameHandler = (event,id) => {
    const personIndex = this.state.person.findIndex(el=>{
      return el.id === id
    });

    const person = {
      ...this.state.person[personIndex]
    }

    person.name = event.target.value;

    const persons = this.state.person
    persons[personIndex] = person

    this.setState({person: persons})


  };

  keyHandler = (value) => {
    console.log(value);
  };

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow,
    });
  };

  addPerson = () => {};

  render() {
    const style = {
      backgroundColor: "white",
      border: "1x solid blue",
      ':hover':{
        backgroundColor:'lightgreen'
      }

    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          
          {this.state.person.map((person,index) => {
            return (
              
                <Person
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  change={(event) => this.nameHandler(event,person.id)}
                  click={ ()=> this.deletePerson(index)}
                />
              
            );

          })}
        </div>
      );
      style.backgroundColor = 'green'
      style.color = 'white'

    }

    let classes = [];
    if(this.state.showPerson){
      classes.push('blue')
    }else{
      classes.push('bold')
    }

    return (
      <StyleRoot>
      <div className="App">
        <div className="constrain">
          <h1 className={classes} >Hello</h1>
          <hr />
          <button style={style} key='01' onClick={this.togglePerson}>
            Switch name
          </button>

          <button style={style} onClick={this.addPerson}>
            Add Person
          </button>
          {this.state.showPerson ? (
            <div>
              {persons}
            </div>
          ) : null}
        </div>
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

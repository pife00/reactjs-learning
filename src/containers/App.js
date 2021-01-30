import React from "react";
import "./App.css";
import Cockpit from '../components/Cockpit/Cockpit'
import Radium,{StyleRoot} from "radium";
import Persons from "../components/Persons/Persons";
class App extends React.Component {

  constructor(props){
    super(props)
    console.log('hello from React')
  }

  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps here',props);
    return state;
  }

  componentDidMount(){
    console.log('componentDidMounth here');
  }

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
    
    let hello = null;
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
        <Persons
        delete={this.deletePerson}
        change={this.nameHandler}
        persons={this.state.person} />
        </div>
      );
    }
    hello = (
      <Cockpit
      title={this.props.appTitle}
      togglePerson={this.togglePerson}
      addPerson={this.addPerson}
      ></Cockpit>
    )
    

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
         {hello}
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

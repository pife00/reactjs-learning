import React,{Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{
  
  render(h) {
   return(

     this.props.persons.map((person,index) => {
        return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.props.change(event,person.id)}
              click={ ()=> this.props.delete(index)}
            />
        );
  
      })
   )
  
    
  }
 
}

export default Persons

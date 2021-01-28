import React from 'react'
import Person from './Person/Person'

const persons = (props) =>{
  return(
    props.persons.map((person,index) => {
      return (
          <Person
            name={person.name}
            age={person.age}
            key={person.id}
            change={(event) => props.change(event,person.id)}
            click={ ()=> props.delete(index)}
          />

      );

    })

  )
}

export default persons

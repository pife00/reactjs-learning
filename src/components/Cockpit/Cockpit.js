import React from 'react'

const cockpit = (props) =>{

  const style = {
    backgroundColor: "white",
    border: "1x solid blue",
  };
  
  return(
    <div>
    <h1>{props.title}</h1>
    <hr />
    <button style={style} key='01' onClick={props.togglePerson}>
      Switch name
    </button>

    <button style={style} onClick={props.addPerson}>
      Add Person
    </button>
    </div>
  )
}

export default cockpit;

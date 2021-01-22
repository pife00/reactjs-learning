import React from "react";

const person = (props) => {

  const pressKey = (event) =>{
    console.log(event.target.value)
  }

  return (
    <div>
      <p onClick={props.click} >Hello Today I am {props.name} I am {props.age}  </p>
      <h1> {props.children} </h1>
      <input onKeyPress={pressKey} type="text" />
    </div>
  );
};

export default person;

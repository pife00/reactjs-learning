import React from "react";
import Radium from "radium";

const person = (props) => {


  const style = {
    '@media(min-width:500px)':{
      width:'450px'
    }
  }

  return (
    <div key='01' style={style}>
      <p onClick={props.click} >Hello Today I am {props.name} I am {props.age}  </p>
      <h1> {props.children} </h1>
      <input onChange={props.change} value={props.name} type="text" />
    </div>
  );
};

export default Radium(person);

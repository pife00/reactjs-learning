import React,{Component} from "react";
import Radium from "radium";

class Person extends Component {

  render(h) {
    const style = {
      '@media(min-width:500px)':{
        width:'450px'
      }
    }
    return (
      <div key='01' style={style}>
        <p onClick={this.props.click} >Hello Today I am {this.props.name} I am {this.props.age}  </p>
        <h1> {this.props.children} </h1>
        <input onChange={this.props.change} value={this.props.name} type="text" />
      </div>
    );
  }

  

  
};

export default Radium(Person);

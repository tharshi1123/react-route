import React, {Component} from "react";

class welcome extends Component{
  constructor(props){
    super(props);
    this.state={
      name :"tharshi bala"
    }
  }

  render (){
    return (
      <div><h1>hi {this.state.name}</h1></div>
    )
  }
}

export default welcome;

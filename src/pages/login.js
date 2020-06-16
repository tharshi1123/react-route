import React, {Component} from "react";
import image from "../assets/logos/Complete your account.png";
import "../pages/login.css";
import dropdown from "../assets/logos/Icons/chevron-down.svg";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";


class login extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render (){
    return (
      <div>
      <img src={image}></img>
      <p className="p1" >Make decisions using multiple visualizations</p>
      <p className="p2" >Our platform is capable of communicating data in various graphical forms for better understanding and rational decision making. <br></br>for easy and effective filtering of the necessary information.</p>
      <img className="dropdown" src={dropdown}></img>
  <div>
  <form>
    <p className="p3">EN</p>
<p className="p4">Create your account</p>
    
<Grid>
      <label className="label1">
    First Name
    <br></br>
    <input className="input1" type="text" placeholder="Gobinthiran" name="name" />
  </label>

  <br></br>
  <label className="label2">
  Last Name
  <br></br>
<input type="text"  placeholder="Kulendran" className="input2" name="name" />
  </label>
  <br></br>
  <Button variant="contained"  className="button" color="primary"	>Go to dashboard</Button>

</Grid>
  </form>
</div>
      </div>

    )
  }
}

export default login;

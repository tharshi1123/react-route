import React, {Component} from "react";
import image from "../assets/logos/Iphone Xs-Artwork-Project_Managers.png";
import "../pages/signup.css";
import dropdown from "../assets/logos/Icons/chevron-down.svg";
import titleimg from "../assets/logos/1280px-Namecheap_Logo.svg.png";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class signup extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render (){
    return (
      <div>
      <img src={image}></img>
      <p className="p1" >Standard Catalogued Data</p>
      <p className="p2" >Large volumes of diverse data systematically categorized based on distinct criteria <br></br>for easy and effective filtering of the necessary information.</p>
      <img className="dropdown" src={dropdown}></img>
  <div>
  <form>
    <p className="p3">EN</p>
    <img className="titleimg" src={titleimg}></img>

    <Grid>
      <label className="label1">
    Username
    <br></br>
    <input className="input1" type="text" placeholder="Place holder                        Additional text / icon" name="name" />
  </label>

  <br></br>
  <label className="label2">
  Password
  <br></br>

    <input type="text"  placeholder="Typed text " className="input2" name="name" />
  </label>
  <br></br>
  <text className="text">Forgot password? RESET</text>
  <Button variant="contained"  className="button"color="primary"	>signup</Button>
  <text className="text1">Don’t you have an account? SIGNUP</text>


</Grid>
  </form>
</div>
      </div>

    )
  }
}

export default signup;

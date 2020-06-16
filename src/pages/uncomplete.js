import React, {Component} from "react";
import image from "../assets/logos/Set profile picture.png";
import dropdown from "../assets/logos/Icons/chevron-down.svg";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import close from "../assets/logos/Icons/close.svg";
import "../pages/uncomplete.css";



class uncomplete extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render (){
    return (
      <div>
      <img src={image}></img>
      <p className="p1" >Integrous data collections</p>
      <p className="p2" >Streaming highly reliable and accurate qualitative data from trusted sources for <br></br>lucid analysis and effective decision making.</p>
      <img className="dropdown" src={dropdown}></img>
  <div>
  <form>
    <p className="p3">EN</p>
      <img className="close" src={close}></img>
<text className="text">Your account creation is failed!</text>
<text className="text1">Please check your information and try again.</text>
<Button variant="contained"  className="button" color="primary"	>GO BACK</Button>

  </form>
</div>
      </div>

    )
  }
}

export default uncomplete;

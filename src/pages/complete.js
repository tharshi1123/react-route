import React, {Component} from "react";
import image from "../assets/logos/Set profile picture.png";
import "../pages/complete.css";
import dropdown from "../assets/logos/Icons/chevron-down.svg";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import tick from "../assets/logos/Icons/Tick.svg";


class complete extends Component{
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
      <img className="tick" src={tick}></img>
<text className="text">Your account completed!</text>
<text className="text1">You can now access your dashboard using your credentials.</text>
<Button variant="contained"  className="button" color="primary"	>Go to dashboard</Button>

  </form>
</div>
      </div>

    )
  }
}

export default complete;

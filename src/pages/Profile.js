import React, { Component } from "react";
import PublicLayout from "../components/layouts/publicLayout";
import CompleteImage from "../assets/images/Complete.png";
import  ProfileForm from "../components/messages/ProfileForm";
import {withStyles} from "@material-ui/styles";


const styles = (theme) => ({
  logo: {
    width: "159px",
    height: "38px",
    border: "0",
    marginBottom: "50px",
  },
  cart: {
    maxWidth: "430px",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={CompleteImage}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
         <ProfileForm/>
        </div>
      </PublicLayout>
    )
  }
}

export default withStyles(styles)(Profile);
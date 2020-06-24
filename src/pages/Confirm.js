import React, { Component } from "react";
import PublicLayout from "../components/layouts/publicLayout";
import ConfirmImage from "../assets/images/Confirm.png";
import  ConfirmForm from "../components/forms/ConfirmForm";
import {withStyles} from "@material-ui/styles";
import tick from "../assets/icons/Success.svg";


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

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={ConfirmImage}
        title="We help you to archive your goals"
        text="We are dedicated to delivering data that defines your purpose. Our vault holds significant data to cater your requirements."
      >
        <div className={classes.cart}>
        <img src={tick} alt="tick" className={classes.tick} />
         <ConfirmForm/>
        </div>
      </PublicLayout>
    )
  }
}

export default withStyles(styles)(Confirm);
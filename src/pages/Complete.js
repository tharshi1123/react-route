import React, { Component } from "react";
import PublicLayout from "../components/layouts/publicLayout";
import Complete from "../assets/images/Complete.png";
import tick from "../assets/icons/Success.svg";
import CompleteForm from "../components/messages/CompleteForm";
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

class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <PublicLayout
        image={Complete}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
          <img src={tick} alt="tick" className={classes.tick} />
          <CompleteForm/>
        </div>
      </PublicLayout>
    )
  }
}

export default withStyles(styles)(Completed);
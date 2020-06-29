import React, { Component } from "react";
import PublicLayout from "../components/layouts/publicLayout";
import ForgetpassImage from "../assets/images/Forgotpassword.png";
import ForgetpassForm from "../components/forms/ForgetpasswordForm";
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

class Forgetpass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
      password: '',
      },
    }
  }

  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;

    return (
      <PublicLayout
        image={ForgetpassImage}
        title="Instant Datasets at your fingertips"
        text="Work faster and smarter with our readily updated datasets at your disposal. We deliver regulated data for better performance."
      >
        <div className={classes.cart}>

          <ForgetpassForm initialValues={initialValues} />
        </div>
      </PublicLayout>
    )
  }
}

export default withStyles(styles)(Forgetpass);
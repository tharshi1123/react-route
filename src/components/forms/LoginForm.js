import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputField from "../core/Input";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) =>
  createStyles({
    forgotText: {
      fontSize: "14px",
      letterSpacing: "0",
      fontWeight: 400,
      color: "#4E598348",
      paddingBottom: "16px",
    },
    apiError: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ff1744",
      fontSize: "14px",
    },
    formCart: {
      maxWidth: '430px',
      width: '100%',
    },
    Field: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gridSpace: {
padding: "10px",
    }
  })
);

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = (props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched,setFieldTouched }) => (
        <Form className={classes.formCart}>
          <Grid className={classes.gridSpace}item xs={12} sm={12} md={12} lg={12}>
            <InputField
            type={"email"} 
            label={"Email address"}
            placeholder={"enter email"}
            error={"error"}
            errorMessage={"required"}           
            ></InputField>
          </Grid>
          
          <Grid className={classes.gridSpace} item xs={12} sm={12} md={12} lg={12}>
          <InputField
            type={"password"} 
            label={"Password"}
            placeholder={"enter Password"}
            error={"error"}
            errorMessage={"required"}           
            ></InputField>
          </Grid>
          
          <Button fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
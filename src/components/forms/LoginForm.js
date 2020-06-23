import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "../pages/style.css"
 
const useStyles = makeStyles((theme) =>
 createStyles({
   forgotText: {
     fontSize: '14px',
     letterSpacing: '0',
     fontWeight: 400,
     color: '#4E598348',
     paddingBottom: '16px',
   },
   apiError: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     color: '#ff1744',
     fontSize: '14px',
   },
   formCart: {
     maxWidth: '430px',
     width: '100%',
   },
 })
);
 
 
const LoginForm = (props) => {
 const classes = useStyles();
 
 <Formik
 initialValues={{email:"",password:""}}
 onSubmit={(values,{setSubmitting}) => {
   setTimeout(() => {
     console.log("logging in",values)
   }, 500
   );
 }}
 
 validationSchema={Yup.object().shape({
   email:Yup.string()
   .email()
   .required("required"),
 
   password:Yup.string()
   .password()
   .required("required")
   .min(8,"password short")
  .matches(/(?=.*[0-9])/,"password should contain 8 characters")
 })}
  />
 
   { props => {
     const {
       values,
       touched,
       errors,
       isSubmitting,
       handleChange,
       handleBlur,
       handleSubmit
     } = props;
    
 
return (
   <form autoComplete="off" onSubmit={handleSubmit} className={classes.formCart}>
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      <Typography varient="h5" component="h5">user Name</Typography>
     <TextField
         required
         id="outlined"
         label=""
         placeholder="Enter name"
         variant="outlined"
         fullWidth
         values={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.email && touched.email && "error"}
       />
       {errors.email && touched.email && (
         <div className="input-feedback">{errors.email}</div>
       )}
     </Grid>
     <br></br>
     <Grid container item xs={12} sm={12} md={12} lg={12}>
     <Typography varient="h5" component="h5">Password</Typography>
 
     <TextField
         required
         id="outlined"
         label=""
         defaultValue="Typed Text"
         variant="outlined"
         fullWidth
         values={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.password && touched.password && "error"}
 
       />
        {errors.password && touched.password&& (
         <div className="input-feedback">{errors.password}</div>
       )}
     </Grid>
  
     <Grid container item xs={12} sm={12} md={12} lg={12}>
       <Box className={classes.forgotText}>
         Forgot password? <Link to={'/forgot-password'}>RESET</Link>
       </Box>
     </Grid>
     <Button disabled={isSubmitting} fullWidth type={'submit'} variant="contained" color="primary">
       Sign In
     </Button>
   </form>
  
 
 );
};
 
export default LoginForm;

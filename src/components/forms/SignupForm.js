import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputField from '../core/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Buttons from '../core/Button';
import Typography from '@material-ui/core/Typography';

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

const SignupForm = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      first_name:props.initialValues.first_name,
      last_name:props.initialValues.last_name,
      organization:props.initialValues.organization,
      email: props.initialValues.email,
      phone_number:props.initialValues.phone_number,
      password: props.initialValues.password,
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      last_name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      organization: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      phone_number: Yup.number()
      .min(10)
      .required('required'),
      email: Yup.string().email('Invalid email address')
      .required('Required'),
      password: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
    <Typography variant="h5" className={classes.title} >Create your account</Typography>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'first_name'}
          name={'first_name'}
          type={'text'}
          label={'First name'}
          placeholder={'Enter your First name'}
          error={Boolean(formik.errors.first_name) && formik.touched.first_name}
          errorMessage={formik.errors.first_name}
          value={formik.values.first_name}
          getValue={(vaule) => formik.setFieldValue('first_name', vaule)}
          onBlur={() => formik.setFieldTouched('first_name')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'last_name'}
          name={'last_name'}
          type={'text'}
          label={'Last name'}
          placeholder={'Enter your Last name'}
          error={Boolean(formik.errors.last_name) && formik.touched.last_name}
          errorMessage={formik.errors.last_name}
          value={formik.values.last_name}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('last_name', vaule)}
          onBlur={() => formik.setFieldTouched('last_name')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'organization'}
          name={'organization'}
          type={'text'}
          label={'Organization '}
          placeholder={'Enter your Organization'}
          error={Boolean(formik.errors.organization) && formik.touched.organization}
          errorMessage={formik.errors.organization}
          value={formik.values.organization}
          getValue={(vaule) => formik.setFieldValue('organization', vaule)}
          onBlur={() => formik.setFieldTouched('organization')}
        />
     
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'email'}
          name={'email'}
          type={'email'}
          label={'Email address'}
          placeholder={'Enter email address'}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('email', vaule)}
          onBlur={() => formik.setFieldTouched('email')}
        />
      </Grid>
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'phone_number'}
          name={'phone_number'}
          type={'number'}
          label={'Phone number'}
          placeholder={'Enter Phone number'}
          error={Boolean(formik.errors.phone_number) && formik.touched.phone_number}
          errorMessage={formik.errors.phone_number}
          value={formik.values.phone_number}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('phone_number', vaule)}
          onBlur={() => formik.setFieldTouched('phone_number')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'password'}
          name={'password'}
          type={'password'}
          label={'Password'}
          placeholder={'Enter password'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Buttons color='primary'>
       Next
      </Buttons>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.forgotText}>
        Already have an account?  <Link to={'/login'}> SIGN IN</Link>
        </Box>
      </Grid>
      
    </form>
  );
};

export default SignupForm;

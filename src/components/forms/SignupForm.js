import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputField from '../core/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
      
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('Invalid email address')
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
      <h3>Create Your Account</h3>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'First Name'}
          name={'First Name'}
          type={'First Name'}
          label={'First Name'}
          placeholder={'Gobinthiran'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Last Name'}
          name={'Last Name'}
          type={'Last Name'}
          label={'Last Name'}
          placeholder={'Kulendran'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Organization'}
          name={'Organization'}
          type={'Organization'}
          label={'Organization'}
          placeholder={'Aatral'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Email'}
          name={'Email'}
          type={'Email'}
          label={'Email'}
          placeholder={'gobinthiran@huex.studio'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Phone number'}
          name={'Phone number'}
          type={'Phone number'}
          label={'Phone number'}
          placeholder={'Enter your phone number'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'Password'}
          name={'Password'}
          type={'Password'}
          label={'Password'}
          placeholder={'Enter a password'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.forgotText}>
          Forgot password? <Link to={'/forgot-password'}>RESET</Link>
        </Box>
      </Grid>
      <Button fullWidth type={'submit'} variant="contained" color="primary">
       Submit
      </Button>
    </form>
  );
};

export default SignupForm;
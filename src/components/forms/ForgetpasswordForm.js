import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useFormik } from 'formik';
import InputField from '../core/Input';
import * as Yup from 'yup';
import Buttons from '../core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25vh',
      },
    },
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

const ForgetpassForm = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      password: props.initialValues.password,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <form className={classes.formCart}>
          <h1>Forgot Password</h1>
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
      Reset password
      </Buttons>
     </form>
  );
};

export default ForgetpassForm;
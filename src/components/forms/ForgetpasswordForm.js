import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
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

  return (
    <form className={classes.formCart}>
          <h1>Forgot Password</h1>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined"
          label="Email"
          defaultValue="Enter your email"
          variant="outlined"
          fullWidth
        />
 
      </Grid>
      <br></br>

      <Button fullWidth type={'submit'} variant="contained" color="primary">
      RESET PASSWORD
      </Button>
      <br></br>
      </form>
  );
};

export default ForgetpassForm;
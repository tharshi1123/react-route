import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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

const SignupForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.formCart}>
          <h1>Create your account</h1>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined"
          label="First Name"
          defaultValue="Gobinthiran"
          variant="outlined"
          fullWidth
        />
 
      </Grid>
      <br></br>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined"
          label="Last Name"
          defaultValue="Kulendren"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <br></br>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined"
          label="Organization"
          defaultValue="Aatral Organization"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <br></br>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined"
          label="Email"
          defaultValue="gobinthiran@huex.studio"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <br></br>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined-required"
          label="Phone number"
          defaultValue="Enter your phone number"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <br></br>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <TextField
          required
          id="outlined"
          label="Password"
          defaultValue="Enter a password"
          variant="outlined"
          fullWidth
        />
        
      </Grid>
      <br></br>

      <Button fullWidth type={'submit'} variant="contained" color="primary">
        Next
      </Button>
      <br></br>

      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <Box className={classes.forgotText}>
      Already have an account?  <Link to={'/forgot-password'}>SIGN IN</Link>
      </Box>
      </Grid>
    </form>
  );
};

export default SignupForm;
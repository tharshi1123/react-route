import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Buttons from '../core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    forgotText: {
      fontSize: '14px',
      letterSpacing: '0',
      fontWeight: 400,
      color: '#4E598348',
      paddingBottom: '16px',
    },
    heading:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

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

const UncompleteForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.formCart}>
     <Grid container item xs={12} sm={12} md={12} lg={12}>
        <h3  className={classes.heading}>Your account creation is failed!</h3>        
        <Box className={classes.forgotText}>
        Please check your information and try again.
        </Box>
      </Grid>
      <Buttons color='primary'>
      Go back
      </Buttons>
    </form>
  );
};

export default UncompleteForm;
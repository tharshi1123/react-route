import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
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
    gridSpace: {
      padding: "10px",
          }
  })
);

const ConfirmForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.formCart}>
        <h3>Confirmation email has been sent!</h3>
         <Box className={classes.forgotText}>
         You can now access your dashboard using your credentials.
        </Box>
        <Buttons color='primary'>
      Back to signin page
      </Buttons>
      
      </form>
  );
};

export default ConfirmForm;
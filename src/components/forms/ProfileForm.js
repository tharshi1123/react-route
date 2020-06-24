import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

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
      height:'100%',

    },
    heading:{
        marginTop:'-50%',
        marginBottom:'40%',
    },
    gridSpace: {
      padding: "10px",
          }
  })
);

const ProfileForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.formCart}>
          <h3 className={classes.heading}>Set profile picture</h3>
          
     <Button className={classes.gridSpace} fullWidth type={'submit'} variant="contained" color="primary">
     BACK TO SIGN In page
      </Button>
      
      </form>
  );
};

export default ProfileForm;
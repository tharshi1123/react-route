import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
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
      height:'100%',

    },
    heading:{
        marginTop:'-50%',
        marginBottom:'40%',
    },
    gridSpace: {
      padding: "10px",
    },
    title: {
      marginTop:"20px",
      marginBottom:'250px',
      marginLeft:'100px',
    }
  })
);

const ProfileForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.formCart}>
              <Typography variant="h5" className={classes.title} >Set profile picture</Typography>
              <Button  disabled className='' fullWidth>Upload</Button>
              <Buttons color='primary'>
      complete
      </Buttons>
      <Button  className='' fullWidth>Skip</Button>
       </form>
  );
};

export default ProfileForm;
import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import {Button} from '@material-ui/core';
import logo from '../Assets/Set_profile_picture.png'
import { Grid } from '@material-ui/core';
import '../css/style.css'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/layouts/form';
import tick from '../Assets/Icons/Tick.svg'


class Forgetpass extends Component {

    render() {
        return ( <div style={{width:'100%'}} >
            <PublicLayout paragraph='Work faster and smarter with our readily updated datasets at your disposal. We deliver regulated data for better performance.'
                          logo={logo}
                          header='Instant Datasets at your fingertips'>
                <br/>

                <Grid container xs={12}  >

                        <Grid xs={3} item/>

                        <Grid xs={6} item>

                        <p  className='paragraph1' style={{textAlign:'center'}} >Forgot password</p>
<CustomizedInputs/>
                  <Button fullWidth variant="contained" color="primary">RESET PASSWORD</Button>
                            </Grid>
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
           </div>
         );
    }
}

export default Forgetpass;

export  function CustomizedInputs() {

  return (

      <FormControl fullWidth >
        <label shrink htmlFor="bootstrap-input" className='label'>
          Email
        </label>
        <BootstrapInput  id="username"  placeholder='Enter your email'/>


      </FormControl>


  );
}

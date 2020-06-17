import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import {Button} from '@material-ui/core';
import logo from '../Assets/Set_profile_picture.png'
import { Grid } from '@material-ui/core';
import '../css/style.css'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/layouts/form';
import tick from '../Assets/Icons/Tick.svg'


class Completed extends Component {

    render() {
        return ( <div style={{width:'100%'}} >
            <PublicLayout paragraph='Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making.'
                          logo={logo}
                          header='Integrous data collections'>
                <br/>

                <Grid container xs={12}  >

                        <Grid xs={3} item/>

                        <Grid xs={6} item>
                        <img src={tick}/>
                        <p  className='paragraph1' style={{textAlign:'center'}} >Your account completed!</p>
                        <p className='paragrape' style={{textAlign:'center'}}  >You can now access your dashboard using your credentials.</p>

                  <Button fullWidth variant="contained" color="primary">Go to dashboard</Button>
                            </Grid>
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
           </div>
         );
    }
}

export default Completed;


import React, { Component } from 'react';
import moment from 'moment';
import MomentTest from '../components/forms/MomentTest';
import Moment from '../pages/Moment';
import { Typography } from '@material-ui/core';

class momentDate extends Component {
   constructor(props) {
       super(props);
       this.state = {
        }
   }
   render(props) {
       return (
           <div>
             <Typography>Today date is</Typography>  
           <Moment></Moment>
      <MomentTest
                   />

           </div>
        );
   }
}

export default momentDate;


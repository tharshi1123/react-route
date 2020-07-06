
import React, { Component } from 'react';
import moment from 'moment';
import MomentTest from '../components/forms/MomentTest';
import MaterialUIPickers from '../components/forms/MomentTest';
import MaterialUIPickers1 from '../components/forms/MomentTest1';
import Buttons from "../components/core/Button";

import Moment from '../pages/Moment';
import { Typography } from '@material-ui/core';
  
class momentDate extends Component {
   constructor(props) {
       super(props);
       this.state = {
        }
   }
   countRemain(){
   const dateB = moment('2019-11-11');
const dateC = moment('2019-10-11');

console.log(`Difference is ${dateB.diff(dateC)} milliseconds`);
console.log(`Difference is ${dateB.diff(dateC, 'days')} day(s)`);
console.log(`Difference is ${dateB.diff(dateC, 'weeks')} week(s)`);
console.log(`Difference is ${dateB.diff(dateC, 'months')} month(s)`);
   };
   render(props) {
    const { classes } = this.props;

       return (
           <div>
             <Typography>Today date is</Typography>  <Moment></Moment>
     <MaterialUIPickers/>
     <MaterialUIPickers1 />
     <Buttons color="primary">Calculate interval</Buttons>
           </div>
        );
   }
}

export default momentDate;

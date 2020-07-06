import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker } from "@material-ui/pickers";
import Buttons from '../core/Button';
import moment from 'moment';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { date } from 'yup';

export default function MaterialUIPickers() {
 
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const calculate =() => {
    console.log(`Difference is ${moment(selectedDate2).diff(moment(selectedDate), 'days')}`
    );
  };
  
return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          format="yyyy/MM/dd HH:mm"
         />
         <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate2}
          onChange={handleDateChange2}
          format="yyyy/MM/dd HH:mm"
         /> 
       <Buttons color="primary" onClick={calculate}>Calculate interval</Buttons>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
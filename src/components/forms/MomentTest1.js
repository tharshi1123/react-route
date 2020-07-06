import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker } from "@material-ui/pickers";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers1() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
         />
        </Grid>
    </MuiPickersUtilsProvider>
  );
}
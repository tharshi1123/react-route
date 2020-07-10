import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button as Buttons } from '@material-ui/core';

const styles = () => ({
  button:{
      widht:'100px',
      height:'30px',
         },
         text: {
          color: '#FFFFFF',
        },
});

const Button = ({
  classes,
  ...rest
})  => {

return (
      <Buttons
      classes={{
        label: classes.text,
      }}
      variant="contained"
      fullWidth
      {...rest}
/>
  );
};

export default withStyles(styles)(Buttons);

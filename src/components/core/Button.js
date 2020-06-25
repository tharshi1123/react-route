import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = () => ({
  button:{
      widht:"100px",
}

});

const Buttons = ({
  classes,
  id,
  name,
  label,
  ...rest
})  => {
  const [value, setValue] = useState(rest.value);
  const handleChange = (event) => {
    const { getValue } = rest;
    if (getValue) {
      getValue(event.target.value);
    }
    setValue(event.target.value);
  };

return (
    <div className={classes.button}>
      <Button
        id={id}
        name={name}
        type={Button}
        label={label}
        fullWidth
     {...rest}
      />
    </div>
  );
};

export default withStyles(styles)(Buttons);
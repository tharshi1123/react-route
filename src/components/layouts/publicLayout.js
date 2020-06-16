import React from "react";
import Grid from "@material-ui/core/Grid";




function publicLayout(props) {

    return (
        <Grid item xs={12} >
        <Grid item xs={6}>public layout-(props.children)</Grid>
        <Grid item xs={6}>public layout-(props.children)</Grid>
        </Grid>
    );
  }
  
  export default publicLayout;
  
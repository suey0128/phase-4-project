import HomeICItemCard from "./HomeICItemCard";

import React, { useState, useEffect } from "react";
// react-router-dom Imports
import { Link } from 'react-router-dom';

//import css from material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


function HomeICGlue({glueOnDisplay}) {

  //material ui thing
  const classes = useStyles();




    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            {glueOnDisplay.map((glueItem)=><HomeICItemCard key={glueItem.id} item={glueItem}/>)}
        </Grid>
      </div>

    )
  }
  
  export default HomeICGlue;
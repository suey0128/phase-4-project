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


function HomeICHandCareContainer({handCareOnDisplay, onAddToCartClick}) {

    //material ui thing
    const classes = useStyles();


        

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {handCareOnDisplay.map((handCareItem)=><HomeICItemCard key={handCareItem.id} 
                                                                        onAddToCartClick={onAddToCartClick}
                                                                        item={handCareItem}/>)}
            </Grid>
        </div>
    )
  }
  
  export default HomeICHandCareContainer;
import React, { useState, useEffect } from "react";

import HomeICPressOnFilter from "./HomeICPressOnFilter";
import HomeICItemCard from "./HomeICItemCard";


//import css from material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));



function HomeICPressOnContainer({pressOnOnDisplay, setPressOnOnDisplay, pressOnArr, onAddToCartClick}) {
  const [filteredArr, setFilteredArr] = useState([])
  const [filteredArrWithRepetition, setFilteredArrWithRepetition] = useState([])
  //state to track how many checkboxes are check
  const [checkedBox, setCheckBox] = useState(0)


  useEffect(()=>{
    // console.log("filteredArrWithRepetition:",filteredArrWithRepetition,"filteredArr:",filteredArr)
    if (filteredArr.length > 0) {
    setPressOnOnDisplay(filteredArr)
    } else {
      setPressOnOnDisplay(pressOnArr)
    }
  },[filteredArr])

console.log(pressOnOnDisplay)
  //handle all types of check boxes call back
  let obj = {}
  const handleAllCheckBox = (e, type) => {
    // when the checkbox is checked
    if (e.target.checked) {
      // keep track of the item array with 2d array, store them into filteredArrWithRepetition
      let k = e.target.value //str
      
      if (type==="color") {
        obj[k] = pressOnArr.filter(item => item.color === e.target.value)
      } else if (type==="shape") {
        obj[k] = pressOnArr.filter(item => item.shape === e.target.value)
      } else {
        if (e.target.value === "jewels") {
          obj[k] = pressOnArr.filter(item => item.add_on === e.target.value)
        } else {
          obj[k] = pressOnArr.filter(item => item.add_on !== "jewels")
        }
      }
      setFilteredArrWithRepetition([...filteredArrWithRepetition, obj])
      // set the items on display by getting rid of duplicates
      setFilteredArr([...new Set([...filteredArr, obj[k]].flat())])
      //keep track of how many checkboxs are checked
      setCheckBox(checkedBox+1)

      // when the checkbox is uncheck,but there are still other checkboxes are checked
    } else if (!e.target.checked && checkedBox !==1){
      //cross out the arr in filteredArrWithRepetition
      let x = filteredArrWithRepetition.filter(a => Object.keys(a)[0] !== e.target.value)
      setFilteredArrWithRepetition(x)
      // get all the values from filteredArrWithRepetition after geting rid of that unselected one, 
      //flat it and get rid of duplicates and display
      setFilteredArr([...new Set(x.map(o=>Object.values(o)).flat().flat())])
    } else {
      setFilteredArr([])
      setCheckBox(0)
    }
  }

  const onHandleColorCheckBoxChange = (e) => {
    handleAllCheckBox(e, "color")
  }


  const onHandleShapeCheckBoxChange = (e) =>{
    handleAllCheckBox(e, "shape")
  }

  const onHandleAddOnCheckBoxChange = (e) =>{
    handleAllCheckBox(e, "add_on")
  }

  

    //material ui thing
    const classes = useStyles();

    return (
        <div>
           <h1 className="homeContainerTitle">Press Ons</h1>
            <HomeICPressOnFilter onHandleColorCheckBoxChange={onHandleColorCheckBoxChange}
                                 onHandleShapeCheckBoxChange={onHandleShapeCheckBoxChange}
                                 onHandleAddOnCheckBoxChange={onHandleAddOnCheckBoxChange}
                                />
            
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {pressOnOnDisplay.map((pressOnItem)=><HomeICItemCard key={pressOnItem.id} 
                                                                          item={pressOnItem}
                                                                          onAddToCartClick={onAddToCartClick}
                                                                          />)}
                </Grid>
             </div>
        </div>
    )
  }
  
  export default HomeICPressOnContainer;
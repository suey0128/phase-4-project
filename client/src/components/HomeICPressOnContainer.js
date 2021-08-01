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



function HomeICPressOnContainer({pressOnOnDisplay, setPressOnOnDisplay, pressOnArr}) {
  const [filteredArr, setFilteredArr] = useState([])
  const [filteredArrWithRepetition, setFilteredArrWithRepetition] = useState([])
  //state to track how many checkboxes are check
  const [checkedBox, setCheckBox] = useState(0)


  useEffect(()=>{
    console.log(filteredArrWithRepetition,filteredArr)
    if (filteredArr.length > 0) {
    setPressOnOnDisplay(filteredArr)
    } else {
      setPressOnOnDisplay(pressOnArr)
    }
  },[filteredArr])


  const onHandleColorCheckBoxChange = (e) => {
    console.log(e.target.checked, e.target.value)
    //if the box is check, show the related items
    if (e.target.checked) {
      // //store the checked items in an array
      let x = [...filteredArrWithRepetition, pressOnArr.filter(item => item.color === e.target.value)].flat()
      setFilteredArrWithRepetition(x)
      // get rid of repitition in array
      setFilteredArr([...new Set(x)])
      setCheckBox(checkedBox+1)

    } else if (!e.target.checked && checkedBox !==1){
      // setFilteredArr(filteredArr.filter(item => item.color !== e.target.value))
      // setCheckBox(checkedBox-1)

      let x= filteredArrWithRepetition.filter(item => item.color !== e.target.value)
      setFilteredArrWithRepetition(x)
      setFilteredArr([...new Set(x)])
      setCheckBox(checkedBox-1)

    } else {
      setFilteredArr([])
      setCheckBox(0)
    }
  }

  const onHandleShapeCheckBoxChange = (e) =>{
    console.log(e.target.checked, e.target.value)
    if (e.target.checked) {
      // //store the checked items in an array
      let x = [...filteredArrWithRepetition, pressOnArr.filter(item => item.shape === e.target.value)].flat()
      setFilteredArrWithRepetition(x)
      // get rid of repitition in array
      setFilteredArr([...new Set(x)])
      setCheckBox(checkedBox+1)

    } else if (!e.target.checked && checkedBox !==1){
      // setFilteredArr(filteredArr.filter(item => item.color !== e.target.value))
      // setCheckBox(checkedBox-1)

      let x= filteredArrWithRepetition.filter(item => item.shape !== e.target.value)
      setFilteredArrWithRepetition(x)
      setFilteredArr([...new Set(x)])
      setCheckBox(checkedBox-1)

    } else {
      setFilteredArr(pressOnArr)
      setCheckBox(0)
    }
  }

  const onHandleAddOnCheckBoxChange = (e) =>{
    console.log(e.target.checked, e.target.value)
    // if (e.target.checked && e.target.value !== "others") {
    //   setFilteredArr([...filteredArr, pressOnArr.filter(item => item.add_on === e.target.value)].flat())
    // } else if (e.target.checked && e.target.value !== "others"){

    // } else {
    //   setFilteredArr(filteredArr.filter(item => item.add_on !== e.target.value))
    // }
  }

    //material ui thing
    const classes = useStyles();

    return (
        <div>
            <HomeICPressOnFilter onHandleColorCheckBoxChange={onHandleColorCheckBoxChange}
                                 onHandleShapeCheckBoxChange={onHandleShapeCheckBoxChange}
                                 onHandleAddOnCheckBoxChange={onHandleAddOnCheckBoxChange}
                                />
            
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {pressOnOnDisplay.map((pressOnItem)=><HomeICItemCard key={pressOnItem.id} item={pressOnItem}/>)}
                </Grid>
             </div>
        </div>
    )
  }
  
  export default HomeICPressOnContainer;
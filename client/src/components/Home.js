import HomeSearchAndSort from "./HomeSearchAndSort";
import HomeItemContainer from "./HomeItemContainer";

import React, { useState, useEffect } from "react";

function Home ({showItemPage, setShowItemPage, onAddToCartClick}) {

    //state for the 3 types of items from the database
    const [pressOnArr, setPressOnArr] = useState([])
    const [glueArr, setGlueArr] = useState([])
    const [handCareArr, setHandCareArr] = useState([])
    //state for filtered items
    const [pressOnOnDisplay, setPressOnOnDisplay] = useState(pressOnArr)
    const [glueOnDisplay,setGlueOnDisplay] = useState(glueArr)
    const [handCareOnDisplay, setHandCareOnDisplay] = useState([])

    //fetch Press On items
    useEffect(() => {
        async function fetchPressOns(){
            const res = await fetch(`/press_ons`)
            if (res.ok) {
            const pressOnItem = await res.json()
            setPressOnArr(pressOnItem)
            setPressOnOnDisplay(pressOnItem)
            }
        }
        fetchPressOns()
    }, []);

    //fetch Glue items
    useEffect(() => {
        async function fetchGlues(){
        const res = await fetch(`/glues`)
        if (res.ok) {
            const glueItem = await res.json()
            setGlueArr(glueItem)
            setGlueOnDisplay(glueItem)
        }
        }
        fetchGlues()
    }, []);

    //fetch Hand Care items
    useEffect(() => {
        async function fetchHandCares(){
            const res = await fetch(`/hand_cares`)
            if(res.ok){
            const handCareItem = await res.json()
            setHandCareArr(handCareItem)
            setHandCareOnDisplay(handCareItem)
            }
        }
        fetchHandCares()
    },[])

    //handle search bar
    const onSearchChange = (input) => {
        // console.log(input)
        setPressOnOnDisplay(pressOnArr.filter(e=> 
            e.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || 
            e.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) 
        ))

        setGlueOnDisplay(glueArr.filter(e=> 
            e.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || 
            e.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || 
            e.strength.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        ))

        setHandCareOnDisplay(handCareArr.filter(e=> 
            e.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || 
            e.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) 
        ))

    }

    //sorting pricing for all 3 type of products
    const sortingPriceHighToLow = (arr, fn, price) => {
        if (price === "HighToLow") {
            let origialPOArr = [...arr]
            const sortedPOArr = origialPOArr.sort((currentItem, nextItem) => {
                let currentItemPrice = currentItem.price
                let nextItemPrice = nextItem.price

                if (currentItemPrice < nextItemPrice) return 1;
                if (currentItemPrice > nextItemPrice) return -1;
                return 0;
            })
            fn(sortedPOArr)
        } else {
            let origialPOArr = [...arr]
            const sortedPOArr = origialPOArr.sort((currentItem, nextItem) => {
                let currentItemPrice = currentItem.price
                let nextItemPrice = nextItem.price

                if (currentItemPrice < nextItemPrice) return -1;
                if (currentItemPrice > nextItemPrice) return 1;
                return 0;
            })
            fn(sortedPOArr)
        }
    }

    //handle sorting
    const onSortBarChange = (input) => {
        // console.log(input)
        if (input === "priceHightoLow") {
            sortingPriceHighToLow(pressOnOnDisplay, setPressOnOnDisplay,"HighToLow")
            sortingPriceHighToLow(glueOnDisplay, setGlueOnDisplay, "HighToLow")
            sortingPriceHighToLow(handCareOnDisplay, setHandCareOnDisplay, "HighToLow")
        } else if (input === "priceLowtoHigh"){
            sortingPriceHighToLow(pressOnOnDisplay, setPressOnOnDisplay,"LowToHigh")
            sortingPriceHighToLow(glueOnDisplay, setGlueOnDisplay, "LowToHigh")
            sortingPriceHighToLow(handCareOnDisplay, setHandCareOnDisplay, "LowToHigh")
        }
    }
       
    return (
        <div>
            <HomeSearchAndSort onSearchChange={onSearchChange}
                               onSortBarChange={onSortBarChange}
                               setShowItemPage={setShowItemPage}
            />
            <HomeItemContainer 
                                showItemPage={showItemPage}
                                setPressOnOnDisplay={setPressOnOnDisplay}                                
                                pressOnOnDisplay={pressOnOnDisplay}
                                glueOnDisplay={glueOnDisplay}
                                handCareOnDisplay={handCareOnDisplay}
                                pressOnArr={pressOnArr}
                                onAddToCartClick={onAddToCartClick}

                                />
        </div>
    )
  }
  
  export default Home;
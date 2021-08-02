import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import shape from "@material-ui/core/styles/shape";

function ItemDetailPage ({showItemPage}) {
    const [itemInfo, setItemInfo] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const params = useParams();
    // console.log (params)  => {type: "press_ons", id: "2"}
    console.log(`${params.type}/${params.id}`)

    // fetch items 
    useEffect(() => {
        async function fetchItem(){
            const res = await fetch(`/${params.type}/${params.id}`)
            if (res.ok) {
                const itemData =  await res.json()
                setItemInfo(itemData)
                setIsLoaded(true);

            }
        }
        fetchItem(itemInfo)
    },[])

    if (!isLoaded) return <h2>Loading...</h2>;

    console.log(itemInfo)

    return (

        <div>
            <h2>this is ItemDetailPage</h2>
            <img src={itemInfo.image}/>
            <h3>{itemInfo.name}</h3>
            <p>$ {itemInfo.price}</p>
            <p>{itemInfo.quantity}</p> 
            {
            //  if (showItemPage === "pressOn") {
            //  <p>color: <span>shape: </span> <span>add on: </span></p>
            //  } else if (showItemPage ==="glue") {
            //     <p>strength: </p>
            //  } else {
            // <p>description: </p>
            //  }
            showItemPage === "pressOn" ? 
            ( <p>color: <span>shape: </span> <span>add on: </span></p>
            ) : null
            }

        </div>
        
    )
  }
  
  export default ItemDetailPage;
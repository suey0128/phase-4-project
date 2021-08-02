import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

function ItemDetailPage () {
    const [itemInfo, setItemInfo] = useState(null)

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
            }
        }
        fetchItem(itemInfo)
    },[])
    console.log(itemInfo)

    return (

        <div>
            <h2>this is ItemDetailPage</h2>
            {/* <img src={itemInfo.image}/>
            <h3>{itemInfo.name}</h3>
            <p>{itemInfo.price}</p>
            <p>{itemInfo.quantity}</p>  */}
        </div>
        
    )
  }
  
  export default ItemDetailPage;
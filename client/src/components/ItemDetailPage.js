import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

function ItemDetailPage ({showItemPage, onAddToCartClick}) {
    const [itemInfo, setItemInfo] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [addTocartQuantity, setAddTocartQuantity] = useState(1)

    const params = useParams();
    // console.log (params)  => {type: "press_ons", id: "2"}
    // console.log(`${params.type}/${params.id}`)

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
        fetchItem()
    },[])

    if (!isLoaded) return <h2>Loading...</h2>;

    let showItemDetail; 
    if (showItemPage === "pressOn") {
        showItemDetail = <p>color: {itemInfo.color}<span>shape: {itemInfo.shape}</span> <span>add on: {itemInfo.add_on}</span></p>
    } else if (showItemPage ==="glue") {
        showItemDetail = <p>strength: {itemInfo.strength}</p>
    } 


    return (

        <div className="detailPage">
            <h2>Details</h2>
            <img src={itemInfo.image} className="detailImage"/>
            <h3>{itemInfo.name}</h3>
            <p>$ {itemInfo.price}</p>
            <p>{itemInfo.quantity}</p> 
            {showItemDetail}
            <p>description: {itemInfo.description}</p>
            <p>quantity: </p>
            <form onSubmit={(e)=>{onAddToCartClick(e,addTocartQuantity, itemInfo)}}>
                <select onChange={(e)=>{setAddTocartQuantity(Number(e.target.value))}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="ADD TO CART" />
            </form>

        </div>
        
    )
  }
  
  export default ItemDetailPage;
import React, { useState } from "react";


function ShoppingCartItemCard ({itemInfo, setNeedFetch, needFetch}) {
    console.log(itemInfo)
    const [quantityInput, setQuantityInput] = useState(itemInfo.quantity)
    const [isEditingQuantity, setisEditingQuantity] = useState(false)

    const handleQuantityChange = (e) => {
        e.preventDefault();
        // console.log(typeof(quantityInput))
        //patch
        // if quantity === 0, destroy the cart_item instance, fetch again  for display 
        if (parseInt(quantityInput) === 0 ){
            console.log('its 0')
           async function deleteItemInCart() {
               const res = await fetch(`cart_items/${itemInfo.cart_item_id}`,{
                   method: 'DELETE'
               })
               if (res.ok) {
                // if item is destroy in the database, this state var will trigger the fetch to display what's in the cart in the datatbase
                setNeedFetch(!needFetch);
              }
           }
           deleteItemInCart() 

        }
        else if (parseInt(quantityInput) > 0 && parseInt(quantityInput) <= itemInfo.item.quantity){ 
        // if the quantity > 0 and <= instock quantity patch the cart_item instance, fetch again for display 
            async function updateCartItem() {
                const res = await fetch(`/cart_items/${itemInfo.cart_item_id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({in_cart_quantity: quantityInput })
                });
                if (res.ok) {
                    setNeedFetch(!needFetch);
                    setisEditingQuantity(false)
                } else {
                const error = await res.json()
                alert(error.message)
                }
            }
            updateCartItem();

        } else if (parseInt(quantityInput) > itemInfo.item.quantity) {
            alert(`Sorry, we only have ${itemInfo.item.quantity} of ${itemInfo.item.name} in stock. Please adjust your amount.`)
        }
        else {
            alert("Invalid input! Input must be an integer equal or greater than 0")
        }
    }

    return (
        <div>
            <img className="img-in-cart" src={itemInfo.item.image} alt={itemInfo.item.name}/>
            <h3>name: {itemInfo.item.name}</h3>
            <p>price: ${itemInfo.item.price}</p>
            { isEditingQuantity ? 
            (<form onSubmit={handleQuantityChange}>
                <label>Quantity: </label>
                <input name="quantityInCart" type="text" value={quantityInput} onChange={(e)=> {setQuantityInput(e.target.value)}}/>
                <input name="Edit Quantity" type="submit" />
            </form>)
            :
            (<div>
                <p>Quantity: {quantityInput}</p>
                <button onClick={()=>{setisEditingQuantity(true)}}>Edit quantity</button>
            </div>)
            }


        </div>
    )
  }
  
  export default ShoppingCartItemCard;
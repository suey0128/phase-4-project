import ShoppingCartItemCard from "./ShoppingCartItemCard";

import React, { useState, useEffect } from "react";


function ShoppingCart({currentUser, setCurrentUser}) {
  const [shoppingCartItemList, setShoppingCartItemList] = useState([])
  const [isShopingCartLoaded, setIsShopingCartLoaded] = useState(false)

  //fetch the shopping cart items  
  useEffect(() => {
    async function fetchShoppingCartItems() {
        const res = await fetch(`/users/${currentUser.id}`)
        if (res.ok) {
            const user =  await res.json()
            //update current user state 
            setCurrentUser(user)
            setShoppingCartItemList(user.items)
            setIsShopingCartLoaded(true)
        }
    }
    fetchShoppingCartItems()
  },[])

  if (!isShopingCartLoaded) return <h2>Loading...</h2>;

  console.log (shoppingCartItemList)

  return (
    <div>
        <p>yo</p>
        {shoppingCartItemList.length > 0 ?
        shoppingCartItemList.map(item => <ShoppingCartItemCard key={`${item.item_type}-${item.id}`}
                                                                item={item}
        />) 
        : 
        <h2>Your cart is empty</h2>}
    </div>
  );
}
  
export default ShoppingCart;
import ShoppingCartItemCard from "./ShoppingCartItemCard";

import React, { useState, useEffect } from "react";


function ShoppingCart({currentUser, setCurrentUser}) {
  const [shoppingCartItemList, setShoppingCartItemList] = useState([])
  const [isShopingCartLoaded, setIsShopingCartLoaded] = useState(false)
  const [needFetch, setNeedFetch] = useState(false)

  //fetch the shopping cart items  
  useEffect(() => {
    async function fetchShoppingCartItems() {
        const res = await fetch(`/users/${currentUser.id}`)
        if (res.ok) {
            const user =  await res.json()
            //update current user state 
            setCurrentUser(user)
            setShoppingCartItemList(user.shopping_cart.all_items_in_cart)
            setIsShopingCartLoaded(true)
        }
    }
    fetchShoppingCartItems()
  },[needFetch])

  if (!isShopingCartLoaded) return <h2>Loading...</h2>;

  console.log (currentUser, shoppingCartItemList)

  return (
    <div>
        {shoppingCartItemList.length > 0 ?
        shoppingCartItemList.map(i => <ShoppingCartItemCard key={`${i.item.item_type}-${i.item.id}`}
                                                            itemInfo={i}
                                                            setNeedFetch={setNeedFetch}
                                                            needFetch={needFetch}
        />) 
        : 
        (<h2>Your cart is empty</h2>)}
        <h3>Total: ${currentUser.shopping_cart.total_amount}</h3>
        <button >Check Out</button>
    </div>
  );
}
  
export default ShoppingCart;
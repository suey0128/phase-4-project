import ShoppingCartItemCard from "./ShoppingCartItemCard";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function ShoppingCart({currentUser, needFetch, setNeedFetch}) {


  //fetch the shopping cart items  
  useEffect(() => {
    setNeedFetch(!needFetch)
  },[])

  const shoppingCartItemList = currentUser.shopping_cart.all_items_in_cart
  // console.log (currentUser.shopping_cart.all_items_in_cart)

  return (
    <div>
        {shoppingCartItemList.length > 0 ?
        <div>
        {shoppingCartItemList.map(i => <ShoppingCartItemCard key={`${i.item.item_type}-${i.item.id}`}
                                                            itemInfo={i}
                                                            setNeedFetch={setNeedFetch}
                                                            needFetch={needFetch}
        />)} 
        <h3>Total: ${currentUser.shopping_cart.total_amount}</h3>
        <Link to="/checkout">
          <button >Check Out</button>
        </Link>
        </div>
        : 
        (<h2>Your cart is empty</h2>)}
    </div>
  );
}
  
export default ShoppingCart;
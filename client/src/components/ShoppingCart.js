import ShoppingCartItemCard from "./ShoppingCartItemCard";


function ShoppingCart({itemInCart}) {
  console.log('sc',itemInCart)

  return (
    <div>
        <p>yo</p>
        {/* {itemInCart.length > 0 ?
        itemInCart.map(item => <ShoppingCartItemCard key={`${item.item_type}-${item.id}`}/>) 
        : 
        <h2>Your cart is empty</h2>} */}
    </div>
  );
}
  
export default ShoppingCart;
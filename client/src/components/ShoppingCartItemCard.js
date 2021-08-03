
function ShoppingCartItemCard ({item}) {
    return (
        <div>
            <img src={item.image}/>
            <h3>name {item.name}</h3>
            <p>price{item.price}</p>
            {/* <form> */}
                <label>Quantity: </label>
                <input name="quantityInCart" id="quantityInCart" type="text" />
            {/* </form> */}
        </div>
    )
  }
  
  export default ShoppingCartItemCard;
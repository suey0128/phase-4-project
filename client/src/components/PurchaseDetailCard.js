import { useHistory } from "react-router-dom";


function PurchaseDetailCard ({purchasedItem}) {
    console.log(purchasedItem)

    let history = useHistory();

    const handleItemPhotoClick = () => {
        // console.log(item.color)
        if (purchasedItem.item.color) { //press_on
            history.push(`/items/press_ons/${purchasedItem.item.id}`);
        } else if (purchasedItem.item.strength) { //glue
            history.push(`/items/glues/${purchasedItem.itemid}`);
        } else { //hand_care
            history.push(`/items/hand_cares/${purchasedItem.item.id}`);
        }
    }

    return (
        <div>
           
            <img onClick={handleItemPhotoClick} src={purchasedItem.item.image} alt={purchasedItem.item.name}/> 

            <p>{purchasedItem.item.name}</p>
            <p>purchased quantity: {purchasedItem.quantity}</p>
        </div>
    )
  }
  
  export default PurchaseDetailCard;
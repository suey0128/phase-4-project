import PurchaseDetailCard from "./PurchaseDetailCard"

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

function PurchaseDetail () {
    const [isPurchaseLoaded, setIsPurchaseLoaded] = useState(false)
    const [oderDetails, setOrderDetails] = useState(null)

    const params = useParams();
    // console.log(params) //=>{purchase_id: "2"}

// fetch the purchase
  useEffect(() => {
    async function fetchPurchase(){
        const res = await fetch(`http://localhost:3000/shopping_carts/${params.purchase_id}`)
        if (res.ok) {
            const order =  await res.json()
            setOrderDetails(order)
            setIsPurchaseLoaded(true)
        }
    }
    fetchPurchase()
  },[])

  console.log(oderDetails)

  if (!isPurchaseLoaded) return <h2>Loading...</h2>;

    return (
        <div>
            <h2>Order Details</h2>
            <p>Order #{oderDetails.id}</p>
            <p>Order date#{oderDetails.updated_at}</p>
            <p>Payment:</p>
            <p>Total: {oderDetails.payment.total}</p>
            <p>Subtotal: {oderDetails.payment.subtotal}</p>
            <p>Tax: {oderDetails.payment.tax}</p>
            <p>Shipping: {oderDetails.payment.shipping}</p>
            {
            oderDetails.all_items_in_cart.map(i =>  <PurchaseDetailCard key={i.id} purchasedItem={i}/>)
               
            }
        </div>
    )
  }
  
  export default PurchaseDetail;
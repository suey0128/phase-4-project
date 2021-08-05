import {  Link } from "react-router-dom";


function UserPurchase ({purchase}) {

    console.log(purchase)


    return (
        <div>
            <Link to={`/purchase/${purchase.id}`}>
                <h3 >order: #{purchase.id}</h3>
            </Link>
            <p>order date: {purchase.updated_at}</p>

        </div>
    )
  }
  
  export default UserPurchase;
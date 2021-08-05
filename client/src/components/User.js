import UserInfo from "./UserInfo";
import UserPurchase from "./UserPurchase";

function User ({currentUser}) {

    return (
        <div>
            <UserInfo currentUser={currentUser}/>
            {
                currentUser.purchases.map(purchase=> <UserPurchase key={purchase.id} purchase={purchase}/>)
            }
        </div>
    )
  }
  
  export default User;
import UserInfo from "./UserInfo";
import UserPurchase from "./UserPurchase";

function User ({currentUser, setCurrentUser}) {

    return (
        <div>
            <UserInfo currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            {
                currentUser.purchases.map(purchase=> <UserPurchase key={purchase.id} purchase={purchase}/>)
            }
        </div>
    )
  }
  
  export default User;
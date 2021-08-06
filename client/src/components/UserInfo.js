function UserInfo ({currentUser}) {
    return (
        <div className="userInfoPage">
            <h2 className="userInfoTitle"> {currentUser.username}'s Info</h2>
            <p className="userinfo">Username:</p> <p>{currentUser.username}</p>

            <p className="userinfo">Default Shipping Address: </p>
            <p className="userinfo">Address:</p> <p>{currentUser.address}</p>
            <p className="userinfo"> {currentUser.first_name} {currentUser.last_name}</p>
            <p className="userinfo">City: </p> <p>{currentUser.city}</p>
            <p className="userinfo">State: </p> <p>{currentUser.state}</p>
            <p className="userinfo">Country: </p> <p>{currentUser.country}</p>
            <p className="userinfo">Birthday: </p> <p>{currentUser.birthday}</p>

            <button>Change password</button>
            <button>Edit profile</button>

             <h2>Order History</h2>
        </div>
    )
  }
  
  export default UserInfo;
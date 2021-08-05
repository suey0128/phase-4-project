function UserInfo ({currentUser}) {
    return (
        <div>
            <h2>this is UserInfo</h2>
            <p>username: {currentUser.username}</p>

            <p>Default Shipping Address: </p>
            <p>address: {currentUser.address}</p>
            <p> {currentUser.first_name} {currentUser.last_name}</p>
            <p>city: {currentUser.city}</p>
            <p>state: {currentUser.state}</p>
            <p>country: {currentUser.country}</p>
            <p>birthday: {currentUser.birthday}</p>

            <button>Change password</button>
            <button>Edit profile</button>


        </div>
    )
  }
  
  export default UserInfo;
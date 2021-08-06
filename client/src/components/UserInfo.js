import UserInfoEdit from "./UserInfoEdit";
// import {Input, Form} from "./Styled";

import {useState } from "react"

function UserInfo ({currentUser, setCurrentUser}) {
    const [isEditing, setIsEditing] = useState(false)
    const [changingPassword, setChangingPassword] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")



    const handlePasswordChange = (e) => {
        e.preventDefault()
        async function updateUser() {
            const res = await fetch(`/users/${currentUser.id}`, {
              method: "PATCH",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({username:currentUser.username, password: newPassword, password_confirmation: newPasswordConfirmation})
            });
            if (res.ok) {
              const newProfile = await res.json();
              setCurrentUser(newProfile)
              console.log("dataBackFromPatch",newProfile)
              setChangingPassword(false)
            } else {
              const error = await res.json()
              alert(error.errors)
            }
          }
          updateUser();
    }

    return (

        <>
        {isEditing ?
            <div>
                 <UserInfoEdit currentUser={currentUser} setCurrentUser={setCurrentUser} setIsEditing={setIsEditing}/> 
            </div>
            :
            <div className="userInfoPage">
                <h2 className="userInfoTitle"> UserInfo</h2>
                <p className="userinfo">Username:</p> <p>{currentUser.username}</p>

                <p className="userinfo">Default Shipping Address: </p>
                <p className="userinfo">Address:</p> <p>{currentUser.address}</p>
                <p className="userinfo"> Name: {currentUser.first_name} {currentUser.last_name}</p>
                <p className="userinfo">City: </p> <p>{currentUser.city}</p>
                <p className="userinfo">State: </p> <p>{currentUser.state}</p>
                <p className="userinfo">Country: </p> <p>{currentUser.country}</p>
                <p className="userinfo">Birthday: </p> <p>{currentUser.birthday}</p>

              
                <button onClick={()=>{setIsEditing(true)}}>Edit profile</button>

                {changingPassword ? 
                <div> 
                    <form onSubmit={handlePasswordChange}>

                    <input
                    type= "text"
                    placeholder="password"
                    name="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <input
                    type= "text"
                    placeholder="password_confirmation"
                    name="password_confirmation"
                    value={newPasswordConfirmation}
                    onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                    />

                    <input
                    type= "submit" 
                    value="Save"/>

                    </form>
                    </div>
                : 
                <button onClick={()=>{setChangingPassword(true)}}>Change password</button>
                }

                <h2>Order History</h2>
            </div>
        }
        </>
     
    )
  }
  
  export default UserInfo;
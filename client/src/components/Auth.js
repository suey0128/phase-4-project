import {useHistory} from 'react-router-dom'
import React, {useState} from "react";
import {Input, Form} from "./Styled";

function Auth({setCurrentUser}){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [passwordConfirmation,setPasswordConfirmation]=useState('')
    const [email,setEmail]=useState('')
    // const [birthday,setBirthday]=useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        //create new user instance.
        const user = { 
            username,
            password,
            password_confirmation: passwordConfirmation,
            email,
            birthday: "n/a",
            first_name: "n/a",
            last_name: "n/a",
            address: "n/a",
            city: "n/a", 
            state: "na", 
            zip: "00000", 
            country: "n/a"
        }
        // console.log(user)
        const res = await fetch(`http://localhost:3000/users`,{
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const userData = await res.json();
        if(res.ok){
            console.log(userData)
            setCurrentUser(userData)
            history.push('/')
        } else {
            alert(userData.errors)
        }

    };
    return(
        <>
            <h1 className="signupPage">Sign up</h1>
           <Form onSubmit={handleSubmit}>
                <Input
                type= "text"
                placeholder="User Name"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}/>
                <Input
                type= "text"
                placeholder="Email Address"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}/>
                {/* <Input
                type= "text"
                placeholder="Birthday (optional)"
                value={birthday}
                name="birthday"
                onChange={(e) => setBirthday(e.target.value)}/> */}
                <Input
                type= "text"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}/>
                <Input
                type= "text"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                name="password_confirmation"
                onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <Input submit type ="submit" value="Sign up"/>

                {errors?errors.map(error => <div>{error}</div>):null}
           </Form> 
          
        </> 
    )

}
export default Auth;
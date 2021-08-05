import {useHistory} from 'react-router-dom'
import React, {useState} from "react";
import {Input, Form} from "./Styled";

function Auth(setCurrentUser){
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAddress]=useState('')
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [zip,setZip]=useState('')
    const [country,setCountry]=useState('')
    const [email,setEmail]=useState('')
    const [birthday,setBirthday]=useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const user = { 
            username,
            password,
            email,
            birthday,
            first_name: "n/a",
            last_name: "n/a",
            address: "n/a",
            city: "n/a", 
            state: "na", 
             zip: "00000", 
           country: "n/a"
        }
        const res = await fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(res.ok){
            console.log(userData)
            // setCurrentUser(userData)
            debugger
            history.push('/')
        } else {
            setErrors(userData.message)
        }

    };
    return(
        <>
            <h1>Sign up</h1>
           <Form onSubmit={handleSubmit}>
               <Input
               type= "text"
               placeholder="First Name"
               value={firstname}
               name="firstname"
               onChange={(e) => setFirstname(e.target.value)}
               />
               <Input
               type= "text"
               placeholder="Last Name"
               value={lastname}
               name="lastname"
               onChange={(e) => setLastname(e.target.value)}/>
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
           <Input
             type= "text"
             placeholder="Address"
             value={address}
             name="address"
             onChange={(e) => setAddress(e.target.value)}/>
             <Input
             type= "text"
             placeholder="City"
             value={city}
             name="city"
             onChange={(e) => setCity(e.target.value)}/>
                <Input
             type= "text"
             placeholder="State"
             value={state}
             name="state"
             onChange={(e) => setState(e.target.value)}/>
                <Input
             type= "text"
             placeholder="Zip Code"
             value={zip}
             name="zip"
             onChange={(e) => setZip(e.target.value)}/>
               <Input
             type= "text"
             placeholder="Country"
             value={country}s
             name="country"
             onChange={(e) => setCountry(e.target.value)}/>
             <Input
             type= "text"
             placeholder="Birthday"
             value={birthday}
             name="birthday"
             onChange={(e) => setBirthday(e.target.value)}/>
               <Input
               type= "text"
               placeholder="Password"
               value={password}
               name="password"
               onChange={(e) => setPassword(e.target.value)}/>
               <Input submit type ="submit" value="Sign up"/>
               {errors?errors.map(error => <div>{error}</div>):null}
           </Form> 
          
        </> 
    )

}
export default Auth;
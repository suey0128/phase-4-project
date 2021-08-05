import {useHistory} from 'react-router-dom'
import React, {useState} from "react";
import {Input, Form} from "./Styled";

function SignUp(setCurrentUser){
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [shippingaddress,setShippingAddress]=useState('')
    const [billingaddress,setBillingAddress]=useState('')
    const [birthday,setBirthday]=useState('')
    const [email,setEmail]=useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const user = { 
            username,
            password,
            email,
            birthday,
            first_name:firstname,
            last_name:lastname,
            billing_address:billingaddress,
            shipping_address:shippingaddress
        }
        const res = await fetch(`http://localhost:3001/users`,{
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
           <Form onSubmit={handleSubmit}>
               <h1>Sign up</h1>
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
             placeholder="Shipping Address"
             value={shippingaddress}
             name="shippingaddress"
             onChange={(e) => setShippingAddress(e.target.value)}/>
             <Input
             type= "text"
             placeholder="Billing Address"
             value={billingaddress}
             name="billingaddress"
             onChange={(e) => setBillingAddress(e.target.value)}/>
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
export default SignUp;
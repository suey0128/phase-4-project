// import logo from '../assets/logo.svg';
import '../assets/App.css';
import Header from './Header';
import Home from './Home';
import ItemDetailPage from './ItemDetailPage';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import User from './User';
import PurchaseDetail from './PurchaseDetail'
import SignUp from './SignUp'
import Login from './Login';
import Auth from './Auth';


import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import React, { useState, useEffect } from "react";


function App() {
  //use state for displaying 
  const [showItemPage, setShowItemPage] = useState("pressOn")
  const [itemInCart, setItemInCart] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  // fetch user for testing. delete when login function is setup 
//   useEffect(() => {
//     async function fetchUser(){
//         const res = await fetch(`/users/1`)
//         if (res.ok) {
//             const user =  await res.json()
//             setCurrentUser(user)
//             // setIsLoaded(true);
//         }
//     }
//     fetchUser()
// },[])

//     // if (!isLoaded) return <h2>Loading...</h2>;


  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home showItemPage={showItemPage} setShowItemPage={setShowItemPage}/>
          </Route>

          {/* <Route path="/signup">
            <SignUp />
          </Route> */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/shoppingcart" >
            <ShoppingCart itemInCart={itemInCart} />
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route path="/items/:type/:id">
            <ItemDetailPage showItemPage={showItemPage} 
                            setItemInCart={setItemInCart} 
                            itemInCart={itemInCart}
                            />
          </Route>

          <Route path="/purchasedetail">
            <PurchaseDetail />
          </Route>
           <Route exact path="/signup">
               <Auth />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

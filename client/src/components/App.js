// import logo from '../assets/logo.svg';
import '../assets/App.css';
import Header from './Header';
import Home from './Home';
import ItemDetailPage from './ItemDetailPage';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import User from './User';
import PurchaseDetail from './PurchaseDetail';
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
  const [currentUser, setCurrentUser] = useState(null)
  const [isUserLoaded, setisUserLoaded] = useState(false)
  const [errors, setErrors] = useState([]);

  const [needFetch, setNeedFetch] = useState(false)


  // keep track of the cartItem instances
  const [cartItemInstances, setCartItemInstances] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me", 
    {
      credentials: "include"
    }
    ).then((r) => {  //get '/me/' => 'users#show' in routes.rb
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user)
          setCartItemInstances(user.in_cart_item_instances)
        });
      }
    });
  }, [needFetch]);


  const onAddToCartClick = (e, quantity, item) => {
    e.preventDefault();
    //is the person login ? 
    if (currentUser) {
      // console.log(shoppingCartDisplayItemList, item)
      let itemAlreadyInCart = cartItemInstances.find(i=> i.item_type === item.item_type && i.item_id===item.id) //=>item instance or false value
      //is this item alreay in cart? yes - PATCH, no - POST
      if (itemAlreadyInCart) {
        // PATCH
        let totalQuantity = itemAlreadyInCart.in_cart_quantity + quantity
        async function updateCartItem() {
          const res = await fetch(`/cart_items/${itemAlreadyInCart.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({in_cart_quantity: totalQuantity })
          });
          if (res.ok) {
            const itemInCartUpdated = await res.json();
            console.log("dataBackFromPatch",itemInCartUpdated)
            //update the state
            let deletedOldInstance = cartItemInstances.filter(i=> i !== itemAlreadyInCart)
            setCartItemInstances([...deletedOldInstance, itemInCartUpdated])
            setNeedFetch(!needFetch)
          } else {
            const error = await res.json()
            setErrors(error.message)
          }
        }
        updateCartItem();
      }  else {
        //POST
        //extract the info needed to pass to the backend
        let addedItem = {
          shopping_cart_id: currentUser.shopping_cart.id, 
          item_id: item.id,
          item_type:item.item_type,
          in_cart_quantity: quantity
        }
        //make a POST request
        async function createCartItem() {
          const res = await fetch(`/cart_items`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addedItem),
          })
          if (res.ok) {
            let addedToCartItem = await res.json();
            //update the state
            console.log(addedToCartItem)
            setCartItemInstances([...cartItemInstances, addedToCartItem])
            setNeedFetch(!needFetch)
          } else {
            const error = await res.json()
            setErrors(error.message)
          }
        };
        createCartItem();
      };
    } else {
      alert("Please Sign Up or Login")
    }
  }

  function onLogout() {
    setCurrentUser(null);
  }

  return (
    <>
    {currentUser ?
    <div className="App">
      <Router>
        <Header currentUser={currentUser} onLogout={onLogout} />

        <Switch>
          <Route exact path="/">
            <Home  showItemPage={showItemPage} setShowItemPage={setShowItemPage} onAddToCartClick={onAddToCartClick}/>
          </Route>

          <Route path="/shoppingcart" >
            <ShoppingCart currentUser={currentUser} needFetch={needFetch} setNeedFetch={setNeedFetch}/>
          </Route>

          <Route path="/checkout">
            <Checkout currentUser={currentUser}/>
          </Route>

          <Route path="/me">
            <User currentUser={currentUser} setCurrentUser={setCurrentUser} needFetch={needFetch} setNeedFetch={setNeedFetch}/>
          </Route>

          <Route path="/items/:type/:id">
            <ItemDetailPage showItemPage={showItemPage} 
                            onAddToCartClick={onAddToCartClick}
                            />
          </Route>

          <Route path="/purchase/:purchase_id">
            <PurchaseDetail />
          </Route>

        </Switch>
      </Router>
    </div>
    : 
    <div>
    <Router>
        <Header currentUser={currentUser} onLogout={onLogout} />

        <Switch>
          <Route exact path="/">
            <Home  showItemPage={showItemPage} setShowItemPage={setShowItemPage} onAddToCartClick={onAddToCartClick}/>
          </Route>

          <Route path="/items/:type/:id">
            <ItemDetailPage showItemPage={showItemPage} 
                            onAddToCartClick={onAddToCartClick}
                            />
          </Route>

          <Route path="/login">
            <Login  setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path="/signup">
               <Auth setCurrentUser={setCurrentUser}/>
          </Route>

        </Switch>
    </Router>
    </div>
    }
    </>
  );
}

export default App;

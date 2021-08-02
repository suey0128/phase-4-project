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


  const onAddToCartClick = (e, addTocartQuantity,itemInfo) => {
    e.preventDefault();
    console.log(addTocartQuantity, itemInfo)
    //store in cart info into a state var
    setItemInCart([...itemInCart, itemInfo])
  }



  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home showItemPage={showItemPage} setShowItemPage={setShowItemPage}/>
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/user">
            <User />
          </Route>

          <Route path="/items/:type/:id">
            <ItemDetailPage showItemPage={showItemPage} onAddToCartClick={onAddToCartClick}/>
          </Route>

          <Route path="/purchasedetail">
            <PurchaseDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

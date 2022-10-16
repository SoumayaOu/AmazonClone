import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from'./Payment';
import {

  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51LpYo7LFXKRyVNqjUM6m7wUlYXcUlQyXuMtrTnBxUHdoNF5E5RhMBGXbWA1uTKOQgEsMuPD1cU0spfNmNOi38heK006wPQAClL');

function App() {

  const [{},dispatch] = useStateValue();
  useEffect(() =>{
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ',authUser);
      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  },[])

  return (
    // <Router>
    // <div className="app">
    //  <Switch>
    //    <Route path='/checkout'>
    //      <Header />
    //      <h1>I am a checkout, </h1>
    //      <Home/>
    //    </Route>
    //    <Route path='/'>
    //      <Header />
    //      <Home/>
    //    </Route>
    
     
    //  </Switch>
    // </div>
    // </Router>
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
      <Route path="/login" element={<Login/> } />
        <Route path="/" element={<div>
          <Header/><Home /> 
          </div>} />
        <Route path="/checkout" element={<div>
           <Header/><Checkout /></div>}  />
        <Route path="/payment" element={<div>
           <Header/><Elements stripe={promise}><Payment/></Elements></div>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

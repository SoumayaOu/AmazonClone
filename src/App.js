import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {

  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
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
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

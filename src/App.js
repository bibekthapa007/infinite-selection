import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Browse from "./components/Browse/Browse";
import Landing from "./components/Landing";
import Product from "./components/Product/Product";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import AuthContextProvider from "./components/AuthContextProvier";
import Cart from "./components/Cart/Cart";

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <Router>
          <div>
            <Navbar></Navbar>
            <Route path="/" exact component={Landing} />
            <Route path="/browse" component={Browse} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/cart" component={Cart} />

            <Route path="/product/:id" component={Product} />
          </div>
        </Router>
      </AuthContextProvider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Browse from "./components/Browse/Browse";
import Landing from "./components/Landing";
import ProductsContextProvider from "./components/Browse/ProductsContext";

class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <Router>
          <div>
            <Navbar></Navbar>
            <Route path="/" exact component={Landing} />
            <Route path="/browse" component={Browse} />
          </div>
        </Router>
      </ProductsContextProvider>
    );
  }
}

export default App;

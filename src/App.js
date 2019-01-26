import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contact/Contacts";
import { Provider } from "./Context";
import AddContact from "./components/contact/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

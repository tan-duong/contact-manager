import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Contact name='John Doe' email='john@gmail.com' phone='555-555-555' />
          <Contact name='Karen Smith' email='karen@gmail.com' phone='333-555-555' />
        </div>

      </div>
    );
  }
}

export default App;

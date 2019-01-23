import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact name='John Doe' email='john@gmail.com' phone='555-555-555' />
        <Contact name='Karen Smith' email='karen@gmail.com' phone='333-555-555' />
      </div>
    );
  }
}

export default App;

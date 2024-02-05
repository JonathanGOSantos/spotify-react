import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main.js';

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="layout">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

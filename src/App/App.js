import React, { Component } from 'react';

import { Header } from '../cmps/Header/Header';
import { Footer } from '../cmps/Footer/Footer';
import { ItemsList } from '../cmps/ItemsList/ItemsList';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemsList />
        <Footer />
      </div>
    );
  }
}

export default App;

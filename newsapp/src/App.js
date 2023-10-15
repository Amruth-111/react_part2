
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCompnents from './components/NewsCompnents';

export default class App extends Component {
  name="Amruth Krishna A"
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <NewsCompnents/>
      </div>
    )
  }
}



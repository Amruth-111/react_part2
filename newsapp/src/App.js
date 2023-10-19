
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCompnents from './components/NewsCompnents';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  name="Amruth Krishna A"
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<NewsCompnents key='home' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<NewsCompnents key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<NewsCompnents key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<NewsCompnents key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<NewsCompnents key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<NewsCompnents key='sports' pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<NewsCompnents key='technology' pageSize={12} country='us' category='technology' />}></Route>
            <Route path='/general' element={<NewsCompnents key='general' pageSize={12} country='us' category='general' />}></Route>
          </Routes>
          
        </Router>
       
      </div>
    )
  }
}



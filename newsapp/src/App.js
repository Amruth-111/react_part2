
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
  pageSize=10
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<NewsCompnents key='home' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<NewsCompnents key='business' pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<NewsCompnents key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<NewsCompnents key='health' pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<NewsCompnents key='science' pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<NewsCompnents key='sports' pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<NewsCompnents key='technology' pageSize={this.pageSize} country='in' category='technology' />}></Route>
            <Route path='/general' element={<NewsCompnents key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
          </Routes>
          
        </Router>
       
      </div>
    )
  }
}




import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCompnents from './components/NewsCompnents';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize=12
  api_key=process.env.REACT_APP_NEWS_API_KEY
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
          <Routes>
            <Route path='/' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='home' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='business' pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='health' pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='science' pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='sports' pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='technology' pageSize={this.pageSize} country='in' category='technology' />}></Route>
            <Route path='/general' element={<NewsCompnents setProgress={this.setProgress} api_key={this.api_key} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
          </Routes>
          
        </Router>
       
      </div>
    )
  }
}




import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsCompnents from './components/NewsCompnents';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App= ()=>{
  const pageSize=12
  const api_key=process.env.REACT_APP_NEWS_API_KEY

  const [progress,setProgress]=useState(0)

    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
          <Routes>
            <Route path='/' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='home' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
            <Route path='/general' element={<NewsCompnents setProgress={setProgress} api_key={api_key} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
          </Routes>
          
        </Router>
       
      </div>
    )
  
}
export default App



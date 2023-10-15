import React, { Component } from 'react'
import NewsItemComponents from './NewsItemComponents'

export default class NewsCompnents extends Component {
  render() {
    return (
      <div>
        
        <div className="container my-4">
        <h3>NewsMonkey Top headlines</h3>
          <div className="container my-3">
          <div className="row md-3">
                <div className="col md-4">
                    <NewsItemComponents title="news title" titleDescription="this is title description"/>
                </div>
                <div className="col md-4">
                    <NewsItemComponents title="news title" titleDescription="this is title description"/>
                </div>
                <div className="col md-4">
                    <NewsItemComponents title="news title" titleDescription="this is title description"/>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

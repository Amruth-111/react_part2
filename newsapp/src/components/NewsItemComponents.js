import React, { Component } from "react";

export default class NewsItemComponents extends Component {
  
  render() {
    let { title, titleDescription ,imageURL} = this.props;
    return (
      <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={imageURL}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{titleDescription}</p>
              <a href="/newsDetails" className="btn btn-sm btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
      </div>
    );
  }
}

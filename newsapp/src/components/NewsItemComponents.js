import React, { Component } from "react";

export default class NewsItemComponents extends Component {
  render() {
    let { title, titleDescription } = this.props;
    return (
      <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/79E8/production/_131380213_gettyimages-1705234375.jpg"
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

import React, { Component } from "react";
import NewsItemComponents from "./NewsItemComponents";

export default class NewsCompnents extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let data=await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=93c17c9c19304ea2891fd67cd8af4f24")
    let parsedData=await data.json()
    this.setState({article:parsedData.articles})
  }
  render() {
    return (
      <div>
        <div className="container my-4">
          <h3>NewsMonkey Top headlines</h3>
          <div className="container my-3">
            <div className="row md-3">
              {this.state.article.map((ele) => {
                return (
                  <div className="col md-4" key={ele.url}>
                    <NewsItemComponents
                      title={ele.title?ele.title.slice(0,44):""}
                      titleDescription={ele.description?ele.description.slice(0,88):""}
                      imageURL={ele.urlToImage}
                      newsURL={ele.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

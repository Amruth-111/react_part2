import React, { Component } from "react";
import NewsItemComponents from "./NewsItemComponents";

export default class NewsCompnents extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount(){
    let data=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}&page=1&pageSize=20`)
    let parsedData=await data.json()
    this.setState({article:parsedData.articles,totalResults:parsedData.totalResults})
  }
 
  prevBtnClick= async ()=>{
    console.log("prev click")
   
    let data=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}&page=${this.state.page-1}&pageSize=20`)
    let parsedData=await data.json()
    this.setState({
      article:parsedData.articles,
      page:this.state.page-1
    })

  }
   nextBtnClick=async()=>{
    console.log("nextclick")
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }else{
      let data=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}&page=${this.state.page+1}&pageSize=20`)
      let parsedData=await data.json()
      this.setState({
        article:parsedData.articles,
        page:this.state.page+1
    })
    }
    
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
        <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-primary mx-5 " disabled={this.state.page<=1} onClick={this.prevBtnClick}>&larr; Prev</button>
        <button type="button" className="btn btn-primary mx-5 " onClick={this.nextBtnClick} > Next &rarr;</button>
        </div>
      </div>
    );
  }
}

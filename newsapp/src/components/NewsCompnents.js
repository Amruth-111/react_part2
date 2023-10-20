import React, { Component } from "react";
import NewsItemComponents from "./NewsItemComponents";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class NewsCompnents extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews(){
    this.setState({ loading: true });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey= ${process.env.API_KEY}&page=${
        this.state.page 
      }&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();

    this.setState({
      loading: false,
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
     
    });

  }
// ${process.env.API_KEY}
  async componentDidMount() {
    this.updateNews()
  }

  prevBtnClick = async () => {
    this.setState({page:this.state.page-1})
    this.updateNews()
  };

  nextBtnClick = async () => {
    this.setState({page:this.state.page+1})
    this.updateNews()
  };

  render() {
    return (
      <div>
        <div className="container my-4">
          <h3 className="text-center" style={{margin:"30px 0px"}}>NewsMonkey Top headlines</h3>
          {this.state.loading && <Spinner />}
          <div className="container my-3">
            <div className="row md-3">
              {!this.state.loading &&
                this.state.article.map((ele) => {
                  return (
                    <div className="col md-4" key={ele.url}>
                      <NewsItemComponents
                        title={ele.title ? ele.title.slice(0, 44) : ""}
                        titleDescription={
                          ele.description ? ele.description.slice(0, 88) : ""
                        }
                        imageURL={ele.urlToImage}
                        newsURL={ele.url}
                        author={ele.author}
                        date={ele.publishedAt}
                        source={ele.source.name}
                      />
                    </div>
                  );
                })}

            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary mx-5 "
            disabled={this.state.page <= 1}
            onClick={this.prevBtnClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-primary mx-5 "
            onClick={this.nextBtnClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsItemComponents from "./NewsItemComponents";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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

  capitalFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title=`${this.capitalFirstLetter(this.props.category)}-NewsMonkey`
  }

  async updateNews(){
    this.setState({ loading: true });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.API_KEY}&page=${
        this.state.page 
      }&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();

    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
     
    });

  }
// ${process.env.API_KEY}
  async componentDidMount() {
    this.updateNews()
  }

  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.API_KEY}&page=${
        this.state.page 
      }&pageSize=${this.props.pageSize}`
    );
    let parsedData = await data.json();

    this.setState({

      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading:false
     
    });
  };
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
        {/* <div className="container my-4"> */}
          <h3 className="text-center" style={{margin:"30px 0px"}}>NewsMonkey -Top {this.capitalFirstLetter(this.props.category)} Headlines.</h3>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
            <div className="row md-3">
              {
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
          </InfiniteScroll>
        {/* </div> */}
        {/* <div className="d-flex justify-content-between">
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
        </div> */}
      </div>
    );
  }
}

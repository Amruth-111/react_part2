import React, { useEffect,useState} from "react";
import NewsItemComponents from "./NewsItemComponents";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const  NewsCompnents= (props)=> {
  
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

  const capitalFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

 
    
  
   
  
  // 


  const updateNews= async()=>{
    console.log("ran updatenews")
    
    props.setProgress(10)
    setLoading(true)
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page 
      }&pageSize=${props.pageSize}`
    );
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(50)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    // console.log(article)
    props.setProgress(100)

  }

  useEffect(()=>{
     document.title=`${capitalFirstLetter(props.category)}-NewsMonkey`
    updateNews()
    //eslint-disable-next-line
  },[])


  const fetchMoreData = async() => {
    console.log("ran fetchnews")

    setPage(page+1)
   
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${
        page
      }&pageSize=${props.pageSize}`
    );
   
    let parsedData = await data.json();
   

    setArticles(articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults)
   
  };
  // const prevBtnClick = async () => {
  //   this.setState({page:this.state.page-1})
  //   this.updateNews()
  // };

  // const nextBtnClick = async () => {
  //   this.setState({page:this.state.page+1})
  //   this.updateNews()
  // };


    return (
      <>
      {console.log("inside render")}
      <div>
        <div className="container my-4">
          <h3 className="text-center" style={{margin:"30px 0px", marginTop:'100px'}}>NewsMonkey -Top {capitalFirstLetter(props.category)} Headlines.</h3>
          {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
            <div className="row md-3">
              {
                articles.map((ele) => {
                  return (
                    <div className="col md-4" key={ele.url}>
                      {/* {console.log(ele.url)} */}
                      {/* {console.log(articles.length)} */}
                      {/* {console.log(totalResults)} */}
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
        </div>
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
      </>
    );
  }


NewsCompnents.defaultProps={
  country:"in",
  pageSize:8,
  category:"general"

}
NewsCompnents.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

export default NewsCompnents

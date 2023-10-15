import React, { Component } from "react";
import NewsItemComponents from "./NewsItemComponents";

export default class NewsCompnents extends Component {
  article = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "Pakistan set for 'golden opportunity' against India",
      description:
        "India and Pakistan set for epic encounter at Cricket World Cup on Saturday - hosted at the world's largest cricket stadium.",
      url: "http://www.bbc.co.uk/sport/cricket/67066007",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/79E8/production/_131380213_gettyimages-1705234375.jpg",
      publishedAt: "2023-10-13T23:22:20.6175577Z",
      content:
        "The match begins at 09:30 BST on Saturday\r\n<table><tr><th>ICC Men's Cricket World Cup 2023: India v Pakistan</th></tr>\r\n<tr><td>Venue: Ahmedabad Date: Saturday, 14 October</td></tr><tr><td>Coverage: … [+3285 chars]",
    },
    
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "NZ beat Bangladesh to maintain perfect start",
      description:
        "Watch highlights as New Zealand continue their perfect start to their ICC Cricket World Cup 2023 campaign with an eight-wicket victory over Bangladesh in Chennai.",
      url: "http://www.bbc.co.uk/sport/av/cricket/67099304",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/530D/production/_131416212_p0glf2kn.jpg",
      publishedAt: "2023-10-13T17:22:15.7418163Z",
      content:
        "Watch highlights as New Zealand continue their perfect start to their ICC Cricket World Cup 2023 campaign with an eight-wicket victory over Bangladesh in Chennai.\r\nREPORT: Kane Williamson stars on re… [+70 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
    };
  }
  render() {
    {console.log(this.state.article.map(ele=>console.log(ele)))}
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
                      title={ele.title.slice(0,44)}
                      titleDescription={ele.description.slice(0,88)}
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

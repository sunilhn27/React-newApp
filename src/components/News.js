import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "technology"

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,

  }

  constructor() {
    super();
    console.log("inside constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }



  getNews = async () => {
    console.log("inside Get News");
    let url = `https://newsapi.org/v2/top-headlines?county=${this.props.country}&category=${this.props.category}&apiKey=9fe67480e901404682ef1ee33068eda2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })

  }

  componentDidMount = async () => {
    this.getNews();
  }

  onNextClick = async () => {
    console.log("on Next Click");
    this.setState({ page: this.state.page + 1 })
    this.getNews();

  }

  onPreviousClick = () => {
    console.log("on Previous Click");
    this.setState({ page: this.state.page - 1 })
    this.getNews();
  }


  render() {
    return (
      <div className='container mb-4'>
        <h1 className='container'> This is News Website</h1>
        <div className='row'>
          {this.state.articles?.map((element) => {
            return <div className="col md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} url={element.url} />
            </div>
          })}
        </div>
        <div className='container my-4 d-flex justify-content-between'>
          <button type="button " disabled={this.state.page <= 1} onClick={this.onPreviousClick} className="btn btn-dark">&larr; Previous</button>
          <button type="button" disabled={this.state.page > 2} className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

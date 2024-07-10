
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country : "in",
    pageSize : 8, 
    category : "general"
  }


  static propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number, 
    category : PropTypes.string
  }

  capitalize = (string) =>{
    
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

    constructor(props){
        super(props);
        this.state = {
            page:1,
            article:null,
            loading:false
        }
        document.title = `NewsApp-${this.capitalize(this.props.category)}`
    }

    

    async update(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feddfb88eb274acc9133af91e7cdb4e6&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false
      })
    }

    async componentDidMount(){
      this.update();
    }
    
    handlePrev = async() =>{
      this.setState({page : this.state.page-1}, ()=>{this.update();});
    }

    handleNext = async() =>{this.setState({page : this.state.page+1}, ()=>{this.update();});
    }
   

  render() {
    return (
    <>
      <div className="container my-4">
        
        <h1 className='text-center'>{`NewsMonkey-Top ${this.props.category} News`}</h1>


        {this.state.loading&&<LoadingSpinner/>}
        <div className="row my-3">
          {!this.state.loading&&this.state.article ? 
          this.state.article.map((element) => 

              <div className='col-md-4' key={element.url}>
                <NewsItem className="card-img-top" title={element.title ? element.title.slice(0,44) : ""} description={element.description ? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} alt="..."/>
              </div>
          ):null}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className='btn btn-primary' onClick={this.handlePrev}>&larr;Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalData/this.props.pageSize)} type='button' className='btn btn-primary' onClick={this.handleNext}>Next&rarr;</button>
      </div>
    </>
    );
  }
}

export default News



   
/*

    async componentDidMount(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feddfb88eb274acc9133af91e7cdb4e6&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false
      })
    }

    handlePrev = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d469c27be89d4f81832d2d1599091534&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false,
        page:this.state.page-1
      })
    }

    handleNext = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d469c27be89d4f81832d2d1599091534&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false,
        page:this.state.page+1
      })
    }
   
    

    async componentDidMount(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d469c27be89d4f81832d2d1599091534&page=1&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false
      })
      }

    handlePrev = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d469c27be89d4f81832d2d1599091534&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false,
        page:this.state.page-1
        })
        }
        
        handleNext = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d469c27be89d4f81832d2d1599091534&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article:parseData.articles,
        totalData : parseData.totalResults,
        loading:false,
        page:this.state.page+1
        })
        }
        */
       
       
      {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className='btn btn-primary' onClick={this.handlePrev}>&larr;Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalData/this.props.pageSize)} type='button' className='btn btn-primary' onClick={this.handleNext}>Next&rarr;</button>
          </div> */}
          
          // handlePrev = async() =>{this.setState({page : this.state.page-1}, ()=>{this.update();});}
          // handleNext = async() =>{this.setState({page : this.state.page+1}, ()=>{this.update();});}
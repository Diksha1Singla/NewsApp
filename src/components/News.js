import React, { useEffect ,useState} from 'react'
import NewsItem from './NewsItem'
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=>{

  const capitalize = (string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const [article,Setarticle] = useState([]);
  const [page,Setpage] = useState(1);
  const [loading,Setloading] = useState(false);
  const [totalData,SettotalData] = useState(0);



    const update = async() =>{
      props.progress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
      Setloading(true);

      props.progress(40);
      let data = await fetch(url);
      props.progress(70);
      let parseData = await data.json();  
      
      Setarticle(parseData.articles);
      SettotalData(parseData.totalResults);
      Setloading(false);
      props.progress(100);
    }

    useEffect(()=>{
      document.title = `${capitalize(props.category)} - TopHeadings`;
      update()},[]);
    
    const fetchData = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    Setpage(page+1);
    Setloading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    Setarticle(article.concat(parseData.articles));
    SettotalData(parseData.totalResults);
    Setloading(false);
    
  }

    return (
    <>
        <h1 className='text-center' style={{marginTop:'90px'}}>{`HeadLines-Top ${props.category} News`}</h1>
        {loading&&<LoadingSpinner/>}
        <InfiniteScroll
          dataLength={article?article.length:'0'}
          next={fetchData}
          hasMore={article?article.length<totalData && article.length!==totalData:'0'}    //chk??s
          loader={<LoadingSpinner/>}
        >
          <div className="container my-4">
            <div className="row my-3">
              {article ? 
              article.map((element) => 

                  <div className='col-md-4' key={element.url}>
                    <NewsItem className="card-img-top" title={element.title ? element.title.slice(0,44) : ""} description={element.description ? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} alt="..."/>
                  </div>
              ):null}
            </div>
          </div>
        </InfiniteScroll>

    </>
    );
}


News.defaultProps = {
  country : "in",
  pageSize : 8, 
  category : "general",
  totalData:0
}

News.propTypes={
  country : PropTypes.string,
  pageSize : PropTypes.number, 
  category : PropTypes.string
}


export default News


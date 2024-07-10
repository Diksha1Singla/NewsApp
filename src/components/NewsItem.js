import React, { Component } from 'react'
import PropTypes from 'prop-types'

//rcep  for class based component :- access in it through this

const NewsItem = (props) => {
  return (
    <>
        <div className='my-3'>
          <div className="card" style={{width: "23rem"}}>
              <span className="position-absolute badge text-bg-warning" style={{display:'flex' , justifyContent:'flex-end' , position:'absolute' , right:'0'}}>{props.source}</span>
              <img src={props.imageUrl} style={{height:"15rem"}}/>
              <div className="card-body">
                  <h5 className="card-title">{props.title}...</h5>
                  <p className="card-text">{props.description}...</p>
                  <p className="card-text">By {props.author?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</p>
                  <a href={props.newsUrl} target='_blank' className="btn btn-sm btn-primary" style={{paddingBottom:"0.5px",height:"31.5px"}}>Get More Details</a>
              </div>
          </div>
        </div>
      </>
  )
}
    // let {title,description,imageUrl,newsUrl,date,author,source} = this.props;   :-{title} instead of {props.title}
    
export default NewsItem

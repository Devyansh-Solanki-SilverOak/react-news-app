import React from 'react';

const NewsItem = (props) => {

  let {title, description, imgUrl, newsUrl, date, source} = props;  // syntax to access props in function components - object destructuring

  return (
    <div className="card" style={{width: "20rem"}}>
      <img src={imgUrl?imgUrl:"https://th.bing.com/th/id/OIP.w_oovO3uFnc1-d9lF5pi2wHaEO?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} className="card-img-top" alt="&nbsp; Unable to show" />
      <div className="card-body">
        <span className="badge rounded-pill text-bg-dark">{source}</span>
        <h5 className="card-title">{title?title:"devyansh"}</h5>
        <p className="card-text">{description?description:title}</p>
        <p className='text-dark fw-bold mb-4'>
          Date: &nbsp;
          <small className='fw-normal'>{new Date(date).toGMTString()}</small>
        </p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem;
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = ({progressReachAt, category}) => {

  const totalNews = 36;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // From this function, our app starts and fetches the data first time.
  useEffect(() => {
    document.title = `News Buzz | ${capitalizeString(category)}`;
    fetchFirstData();

    // eslint-disable-next-line
  }, [])

  let fetchFirstData = async () => {
    progressReachAt(20);
    let url = `${category}/${category}_${page}.json`
    let data = await fetch(url);
    progressReachAt(50);
    let parsedData = await data.json();
    progressReachAt(80);

    setArticles(parsedData.articles);
    setPage(page + 1);

    progressReachAt(100);
  }

  const fetchMoreData = () => {
    setLoading(true);  // Show loading when more data getting fetched.
    setTimeout(async () => {
      let url = `${category}/${category}_${page}.json`
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setPage(page + 1);
      setLoading(false);
    }, 3000);
  }
  
  return (
    <>
      <div id='news' className="container my-3">
        <h2 className='my-4 text-center'>
          News Buzz - Top Headlines
          <hr className="underline bg-danger" />
        </h2>

        <InfiniteScroll style={{overflow: "hidden"}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalNews}
          loader={loading && <Loading />}
        >
          <div className="row">
            {articles.map((element)=>{
              return  <div className="col-lg-4 col-md-6 my-5" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name}/>
                      </div>
            })}
          </div>
        </InfiniteScroll>

      </div>
    </>
  )
}

News.defaultProps = { category: "general" }
News.propTypes = { category: PropTypes.string }

export default News;
import React, { useEffect } from 'react'
import Newsitems from './Newsitems'
import Spinner from './spinner'
import { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

  let {mode, progress, category, country } = props;
  const [laoding,setlaoding] = useState(true);
  const [articles,setarticles] = useState([]);
  const [page,setpage] = useState(1);
  const [results,setresults] = useState(0);
  const [totalresults,settotalresults] = useState(0);

  const fetchMoreData = async () => {
    await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=edf044233c70432db4bf835a12be7bad&pageSize=6&page=${page+1}`)
    .then((data)=>{
        return data.json()
    })
    .then((respone)=>{
        setarticles(articles.concat(respone.articles))
        setpage(page+1)
        setlaoding(false)
        settotalresults(respone.totalResults)
    })
    progress(100)

  };

  useEffect(() => {
    window.scrollTo(0,0);
    document.body.style.backgroundColor = localStorage.getItem("M") === "dark"? "#343a40": "white" ;
    update();
    

}, [])
  

  const update = async () => {
    progress(10)
    setlaoding(true)
    await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=edf044233c70432db4bf835a12be7bad&pageSize=6&page=${page}`)
    .then((data)=>{
        return data.json()
    })
    .then((respone)=>{
        progress(70)
        setarticles(respone.articles)
        setpage(1)
        setlaoding(false)
        settotalresults(respone.totalResults)
    })
    progress(100)
}
  return (
    <>
    
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalresults !== articles.length}
          loader={<Spinner/>}
        >
    <div className="container">
      <div className='row'>
      {articles.map(Elements=>{
        return <div className={`my-3 col-md-4`} key={Elements.url}>
                <Newsitems source={Elements.source.name} author={Elements.author} time={Elements.publishedAt} mode={mode} title={Elements.title} despription={Elements.description} imageurl={Elements.urlToImage} newurl={Elements.url}/>
      </div>
      })}
      </div>
    </div>
    </InfiniteScroll>
    
  </>
  )
}

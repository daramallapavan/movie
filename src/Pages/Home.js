import React, { useEffect, useState } from 'react'
import BannerHome from '../Components/BannerHome'
import axios from 'axios'


import { useSelector } from 'react-redux'
import HorizontalSrcoll from '../Components/HorizontalSrcoll'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)

  const{data: nowPlayingData}=useFetch('/movie/now_playing')

  const{data: topRatedMovies}=useFetch('/movie/top_rated')

  const{data: onTheAir}=useFetch('/tv/on_the_air')

  const {data: popularTvShows}=useFetch('/tv/popular')



  
  return (
    <div>
      <BannerHome />
      <HorizontalSrcoll data={trendingData} heading="Trending Movies" trending={true}/>
      <HorizontalSrcoll data={nowPlayingData} heading="Now Playing" mediaType={"movie"}/>
      <HorizontalSrcoll data={topRatedMovies} heading="Top Rated" mediaType={"movie"}/>
      <HorizontalSrcoll data={onTheAir} heading="On The Air" mediaType={"tv"}/>
      <HorizontalSrcoll data={popularTvShows} heading="Popular Tv Shows" mediaType={"tv"}/>
    
    </div>
  )
}

export default Home

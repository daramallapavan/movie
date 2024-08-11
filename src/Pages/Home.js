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

  const{data: popularMovies}=useFetch('/movie/popular')

  const{data: onTheAir}=useFetch('/tv/on_the_air')

  const {data: popularTvShows}=useFetch('/tv/popular')

  
  return (
    <div>
      <BannerHome />
      <HorizontalSrcoll data={trendingData} heading="Trending Movies" trending={true}/>
      <HorizontalSrcoll data={popularMovies} heading="Top Rated"/>
      <HorizontalSrcoll data={nowPlayingData} heading="Now Playing"/>
      <HorizontalSrcoll data={topRatedMovies} heading="Top Rated"/>
      <HorizontalSrcoll data={onTheAir} heading="On The Air"/>
      <HorizontalSrcoll data={popularMovies} heading="Popular Tv Shows"/>
 
  
   
   
    
    </div>
  )
}

export default Home

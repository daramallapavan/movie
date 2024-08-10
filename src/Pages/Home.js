import React from 'react'
import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)
  return (
    <div>
      <BannerHome/>
      <div className='container mx-auto px-3 my-10'>
        <h2 className='text-xl lg:text-2xl font-bold mb-2'>Trending Shows</h2>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6'>
          {
            trendingData.map((data)=>{
              return (
                <Card key={data.id} data={data}/>
              )
              
             
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home

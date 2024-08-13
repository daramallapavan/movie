import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import VideoPlay from './VideoPlay';

const BannerHome = () => {

  const bannerData = useSelector(state => state.movieoData.bannerData)
  const imageUrl = useSelector(state => state.movieoData.imageUrl)




  const [currentImage,setCurrentImage]=useState(0)
  const hadleNext=()=>{
    if(currentImage<bannerData.length-1){
      setCurrentImage(previous=>previous+1)
    }

  }
  const handlePrevious=()=>{
    if(currentImage>0){
      setCurrentImage(previous=>previous-1)
    }

  }

  useEffect(()=>{
    const interval=setInterval(()=>{
      if(currentImage<bannerData.length-1){
        hadleNext()
      }else{
        setCurrentImage(0)
      }
    },5000)
    return ()=>clearInterval(interval)

  },[bannerData,imageUrl,currentImage])

  return (
    <section className='w-full h-full'>
      <div className=' flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map((data, index) => {
            return (
              <div key={data.id+"baneerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform:`translate(-${currentImage*100}%)`}}>
                <div className='w-full h-full '>
                  <img
                    src={imageUrl + data.backdrop_path}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='top-0 w-full h-full absolute hidden items-center justify-between px-4 group-hover:lg:flex'>
                  <button onClick={handlePrevious} className='bg-white text-2xl p-1 rounded-full z-10 text-black'>
                    <FaAngleLeft/>
                  </button>
                  <button onClick={hadleNext} className='bg-white text-2xl p-1 rounded-full z-10 text-black'>
                    <FaAngleRight/>
                  </button>
                </div>  
                <div className='top-0  absolute w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                </div>
                <div className='container mx-auto'>

                  <div className=' absolute bottom-0  max-w-md px-4'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-white drop-shadow-2xl'>{data?.title || data?.name}</h2>
                    <h2 className='text-ellipsis line-clamp-3 my-2'>{data.overview}</h2>
                    <div className='flex items-center gap-2'>
                      <p>Rating : {Number(data.vote_average).toFixed(1)}+</p><span>|</span>
                      <p >View :{Number(data.popularity).toFixed(0)}</p> 
                    </div>
                    <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105' >
                      Play Now
                    </button>
                  </div>
                </div>





              </div>
            )
          })
        }


      </div>
    </section>
  )
}

export default BannerHome
import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({ data, trending, index,mediaType }) => {
  const imageUrl = useSelector(state => state.movieoData.imageUrl)

  
  const mediatype=data.media_type ?? mediaType
  return (
    <Link to={"/"+mediatype+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] block h-80 overflow-hidden rounded relative hover:scale-105 transition-all'>
    {
      data?.poster_path ? (

        <img
        src={imageUrl + data?.poster_path}
      />
      ):
      (
        <div className='w-full h-full justify-center  flex items-center bg-black '>
          No Image Found
        </div>
      )
    }
    
    
      <div className='absolute top-4'>
        {
          trending && (
            <div className='px-4 py-1  backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
              #{index} Trending

            </div>
          )
        }
      </div>

      <div className='absolute bottom-0 h-16 backdrop-blur-3xl bg-black/60 p-2 w-full '>
        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
        <div className='flex justify-between text-neutral-400 items-center'>
        <p  > {moment(data.release_date).format("MMM Do YY")}</p>
        <p className='bg-black rounded-full px-1 text-xs text-white'>Rating : {Number(data.vote_average).toFixed(1)}+</p>

        </div>


      </div>

    </Link>
  )
}

export default Card
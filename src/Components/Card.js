import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({data}) => {
    const imageUrl = useSelector(state => state.movieoData.imageUrl)

  return (
    <div className='w-full max-w-[230px]  h-80 overflow-hidden rounded'>
        <img
        src={imageUrl+data?.poster_path}
        />

    </div>
  )
}

export default Card
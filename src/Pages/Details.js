import React, { useEffect, useState } from 'react'
import useFetchDetails from '../hooks/useFetchDetails'
import { Await, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Divider from '../Components/Divider'
import axios from 'axios'

const Details = () => {

  const params = useParams()

  const imageUrl = useSelector(state => state.movieoData.imageUrl)

  const { data } = useFetchDetails(`/${params.explore}/${params.id}`)

  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)

  const duration = (Number(data.runtime) / 60).toFixed(1).split('.')


  console.log("Cast Data", castData.cast)


  const writer=castData?.crew?.filter(el=>el.job === "Writer").map(el=>el.name).join(", ")

  return (

    <div>

      <div className='w-full h-[300px] relative hidden lg:block '>
        <div className='h-full w-full'>
          <img
            src={imageUrl + data.backdrop_path}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='top-0  absolute w-full h-full bg-gradient-to-t from-neutral-900/90 to-transparent'>
        </div>
      </div>

      <div className='container mx-auto px-3 py-16 lg:py-0 flex lg:flex-row flex-col lg:gap-10 gap-5'>
        <div className='lg:-mt-28 relative   lg:mx-0 mx-auto w-fit min-w-60'>
          <img
            src={imageUrl + data.poster_path
            }
            className='h-80 w-60 object-cover rounded'
          />
         
        </div>

        <div >
          <h2 className='text-2xl lg:text-3xl font-bold text-white '>{data.title || data.name}</h2>
          <p className='text-neutral-400'>{data.tagline}</p>
          <Divider />
          <div className='flex items-center gap-3 my-1'>
            <p>Rating:{Number(data.vote_average).toFixed(1)}+</p><span>|</span>
            <p> View:{data.vote_count}</p><span>|</span>
            <p>Duration:{duration[0]}h{duration[1]}m</p>

          </div>
          <Divider />
          <div>

            <h2 className='text-white text-lg font-bold my-1'>Overview</h2>
            <p>{data.overview}</p>
            <Divider />
            <div className='flex items-center gap-3 my-3 text-center'>
              <p>Status : {data.status}</p><span>|</span>
              <p> Release Date : {moment(data.release_date).format("MMM Do YY")}</p><span>|</span>
              <p>Revenue : {data.revenue}</p>
            </div>
            <Divider />

          </div>

          <div>
            <p><span className='text-white'>Director:</span> </p>
            <Divider />
            <p><span className='text-white'>Writer : </span> </p>
            <Divider />


          </div>

          <h2 className='text-white text-lg lg:text-xl'>Cast : </h2>


          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-2'>
            {
              castData?.cast?.filter(el=>el.profile_path).map((castFullData,index)=>{
                return (
                  <div>
                  
                   <div>
                   <img 
                    src={imageUrl+castFullData?.profile_path}
                    className='h-24 w-24 rounded-full object-cover'
                    />
                  </div>

                  <p className='font-bold text-white'>{castFullData?.name}</p>
                 
                  </div>
                )
              })
            }
          </div>




        </div>



      </div>





    </div>
  )
}

export default Details
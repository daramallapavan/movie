import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({data,close,mediType}) => {

    const {data:videoData}=useFetchDetails(`/${mediType}/${data?.id}/videos`)
    console.log("videoData",videoData)
  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0  bg-opacity-50  z-40 flex justify-center items-center  '>

<div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'>
<button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50'><IoCloseSharp/></button>
<iframe
src={`https://www.youtube.com/embed/`}
className='w-full h-full'
/>
</div>
</section>
  )
}

export default VideoPlay
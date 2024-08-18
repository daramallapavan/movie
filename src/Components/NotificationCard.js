import React, { useEffect } from 'react'

const NotificationCard = ({close,response}) => {

    
  return (
   
    <section className='fixed bg-neutral-700 lg:top-0 lg:right-2 w-80 top-0 right-0 bottom-o left-0  bg-opacity-50  z-40 flex justify-center items-center mx-2 mt-16 '>
        
<div className='bg-white w-full max-h-[10vh] max-w-screen-lg aspect-video rounded  relative  '>
<button onClick={close} className=' absolute right-0 top-0   text-black '>Close</button>
<h1 className='flex items-center justify-center text-black font-bold my-4 text-lg'>{response}</h1>
</div>
<div>
 
</div>
    </section>
  )
}

export default NotificationCard
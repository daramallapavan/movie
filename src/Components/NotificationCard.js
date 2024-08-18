import React from 'react'

const NotificationCard = ({close,response}) => {
  return (
   
    <section className='fixed bg-neutral-700 top-0 right-2 w-80  bg-opacity-50  z-40 flex justify-center items-center mx-2 mt-16 '>
        
<div className='bg-green-400 w-full max-h-[10vh] max-w-screen-lg aspect-video rounded  relative  '>
<button onClick={close} className='absolute right-0 top-0 lg:text-lg  text-red-900 '>Close</button>
<h1 className='flex items-center justify-center text-black font-bold my-4 text-lg'>{response}</h1>
</div>
<div>
 
</div>
    </section>
  )
}

export default NotificationCard
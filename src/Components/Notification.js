import React from 'react'

const Notification = ({close}) => {
  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0  bg-opacity-50  z-40 flex justify-center items-center  '>

    <div className='bg-black w-full max-h-[20vh] max-w-screen-lg aspect-video rounded  relative'>
    <button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50'><Close/></button>
   
    </div>
    </section>
  )
}

export default Notification
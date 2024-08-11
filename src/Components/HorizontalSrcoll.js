import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const HorizontalSrcoll = ({ data = [], heading ,trending}) => {

    const contaimerRef = useRef()

    const handleNext=()=>{
        contaimerRef.current.scrollLeft+=300
    }

    const handlePrevious=()=>{
        contaimerRef.current.scrollLeft-=300
    }


    return (
        <div className='container mx-auto px-3 my-10'>
            <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white'>{heading}</h2>
            <div className='relative'>
                <div ref={contaimerRef} className='grid grid-cols-[repeat(auto-fit,230px)]  grid-flow-col gap-6 overflow-x-scroll relative overflow-hidden z-10 scroll-smooth transition-all scrolbar-none'> 
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} />
                            )
                        })
                    }
                   
                </div>
                <div className='absolute hidden  top-0 lg:flex items-center justify-between w-full h-full'>
                    <button onClick={handlePrevious}  className='bg-white text-black rounded-full p-1 z-10 -ml-2'>
                        <FaAngleLeft/>
                    </button>
                    <button onClick={handleNext}  className='bg-white text-black rounded-full p-1 z-10 -mr-2'>
                        <FaAngleRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalSrcoll
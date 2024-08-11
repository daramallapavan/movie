import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Card from '../Components/Card';



const ExplorePage = () => {

  const params = useParams()

  const [pageNo, setPageNo] = useState(1)


  const [totalPageNumber, setTotalPageNumber] = useState(1)

  const [data, setData] = useState([])



  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      })



      setData((previous) => {
        return [
          ...previous,
          ...response.data.results
        ]

      })

      setTotalPageNumber(response.data.total_pages)


    } catch (error) {
      console.log("error", error)
    }
  }

  const handleScrol = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(previous => previous + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrol)
  }, [])


  useEffect(() => {
    fetchData()
  }, [pageNo])

  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  },[params.explore])

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='text-lg lg:text-xl px-5 py-6 lg:px-0  font-semibold capitalize '>Popular {params.explore} Shows </h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-8 justify-center lg:justify-start '>
          {
           data.map((exploreData,index)=>{
            return (
              <Card data={exploreData} key={exploreData.id+"exploreData"+index} mediaType={params.explore}/>
            )
           })
          }

        </div>
      </div>
    </div>
  )
}

export default ExplorePage
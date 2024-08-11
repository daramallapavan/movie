import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../Components/Card'

const SearchPage = () => { 

  const location=useLocation()

  const [data,setData]= useState([])

  const[searchCount,setSearchCount]=useState(0)

const navigate=useNavigate()

  const [page, setPage] = useState(1)

  const query=location?.search?.slice(3)

const fetchData=async()=>{
  try {
    const response=await axios.get('/search/collection',{
      params:{
        query: query,
        page: page
 
      }
    })

    setSearchCount(response.data.total_results)

    setData(response.data.results)

  } catch (error) {
    console.log("error",error)
  }
}

const handleScrol = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    setPage(previous => previous + 1)
  }
}


useEffect(()=>{
  setPage(1)
  setData([])
  fetchData()
},[location?.search])




useEffect(() => {
  fetchData()
},[page])

useEffect(() => {
  window.addEventListener('scroll', handleScrol)
}, [])



  return (
   <div className='my-16'>
    <div className='lg:hidden mx-1 my-2 sticky top-[70px] z-40'>
      <input 
      type='text'
      placeholder='search movies'
      onChange={(e)=>{
        navigate(`/search?q=${e.target.value}}`)
      }}
      className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
      
      />
    </div>
    <div className='container mx-auto'> 
    <h3 className='text-lg lg:text-xl px-5 py-6 lg:px-0  font-semibold capitalize text-white'>Search Results : {searchCount}</h3>
    <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-8 justify-center lg:justify-start'>
      {
        data.map((searchData,index)=>{
          return(
         
              <Card data={searchData} key={searchData.id+"searchData"} mediaType={searchData.media_type} />
            
            
          )
        })
      }
    </div>

    </div>

   </div>
  )
}

export default SearchPage
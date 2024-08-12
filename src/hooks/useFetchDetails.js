import axios from "axios"
import { useEffect, useState } from "react"



const useFetchDetails=(endpoint)=>{


    const[data,setData]=useState([])

    
    const [loading,setLoading]= useState(false)

    const getData=async()=>{
        try {
            setLoading(true)
            const response=await axios.get(endpoint)
            setLoading(false)
            setData(response.data)


        
        } catch (error) {
            
        }
    }


   useEffect(()=>{

    getData()
   },[endpoint])

   return {data,loading}

}

export default useFetchDetails


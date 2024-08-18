import React, { useState } from 'react'
import {  Link} from 'react-router-dom'
import NotificationCard from '../Components/NotificationCard'
import axios from 'axios'

const LoginPage = () => {
  const userLoginPostUrl='http://localhost:8000/user/login'

  const [notificationdata, setNotificationdata] = useState(false)

  const [notificationResponse,setNotificationresponse]=useState("")

  const [data, setData] = useState(
    {
    email : "",
    password : ""
  }
)

function handleSubmit(event) {
  event.preventDefault();
  axios.post(userLoginPostUrl, {
    email: data.email,
    password: data.password
  }).then(response =>{
     setNotificationresponse( response.data)
  }
   
  ).catch(error=> {
    setNotificationresponse(error.response.data)
  }
    
    )
}



const notificationButton = () => {
    setNotificationdata(true)
   }


  const handleOnChange = (event) =>{

   const { name , value }=event.target
   setData((preve)=>{
    return {
      ...preve,
      [name] : value
   }
   })
  }




  return (
    <section id='login' className='mt-16 '>
      <div className='container mx-auto px-4 flex items-center justify-center '>
        
  
        <div className='mt-5'>
          <form onSubmit={handleSubmit} >
            <div>
              <label>Email :</label>
              <div className='py-2'>
                <input type='email'
                 placeholder='enter email here'
                 name='email'
                 required
                 value={data.email}
                 onChange={handleOnChange}
                  className='px-2 py-1 text-black bg-slate-600 w-80 rounded'/>
              </div>
            </div>
            <div>
              <label>Password :</label>
              <div className='py-2'>
                <input type='password' 
                placeholder='enter password here' 
                name='password'
                value={data.password}
                required
                onChange={handleOnChange}
                className='px-2 py-1 text-black bg-slate-600 w-80 rounded'/>
              </div>
            </div>
            <div className='mx-auto'> 
            <p className='cursor-pointer hover:underline hover:text-red-600'>Forgot Password?</p>
            </div>
           
          
              <button onClick={notificationButton} className='mt-4 rounded-full p-2 bg-slate-500 text-white w-full cursor-pointer hover:scale-105 hover:transition-all' >Login</button>
           
          
          </form>
          <p className='pt-5'>Don't Have An Account ? <Link to={"/signup"}
className='cursor-pointer hover:underline hover:text-red-500'>Click to Sign Up</Link></p>
        </div>
      </div>
      {
       notificationdata && (
        <NotificationCard  response={notificationResponse} close={()=>setNotificationdata(false)}/>
      )
      }
    </section>
  )
}

export default LoginPage
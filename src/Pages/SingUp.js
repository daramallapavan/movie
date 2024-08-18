import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NotificationCard from '../Components/NotificationCard'

const SingUp = () => {


  const userPostUrl='http://localhost:8000/user/register'

  const [notificationdata, setNotificationdata] = useState(false)

  const [notificationResponse,setNotificationresponse]=useState("")
    
  const [data, setData] = useState(
    {
    name: "",
    email : "",
    password : ""
  }
)

function handleSubmit(event) {
  event.preventDefault();
  axios.post(userPostUrl, {
    name: data.name,
    email: data.email,
    password: data.password
  }).then(response =>{
  console.log ("UserRegisterResponse", response.data)
     setNotificationresponse( response.data)
  }
   
  ).catch(error=> {
    console.log("Signup error",error.response.data)
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

  console.log("data",data)
  return (
    
    <section id='singup' className='mt-16 '>
    <div className='container mx-auto px-4 flex items-center justify-center '>
      
 
      <div className='mt-5'>
        <form  onSubmit={handleSubmit}>
        <div>
            <label>Name :</label>
            <div className='py-2'>
              <input type='name'
               placeholder='enter name here'
               name='name'
               value={data.name}
               onChange={handleOnChange}
                className='px-2 py-1 text-white bg-slate-600 w-80 rounded'/>
            </div>
          </div>
          
          <div>
            <label>Email :</label>
            <div className='py-2'>
              <input type='email'
               placeholder='enter email here'
               name='email'
               value={data.email}
               onChange={handleOnChange}
                className='px-2 py-1 text-white bg-slate-600 w-80 rounded'/>
            </div>
          </div>
          <div>
            <label>Password :</label>
            <div className='py-2'>
              <input type='password' 
              placeholder='enter password here' 
              name='password'
              value={data.password}
              onChange={handleOnChange}
              className='px-2 py-1 text-white bg-slate-600 w-80 rounded'/>
            </div>
          </div>
        
         
        
            <button onClick={notificationButton} className='mt-4 rounded-full p-2 w-full bg-slate-500 text-white  cursor-pointer hover:scale-105 hover:transition-all'>Register</button>
         
        
        </form>
        <p className='pt-5'>Already Have An Account ? <Link to={"/login"} className='cursor-pointer hover:underline hover:text-red-500'>Click to Login </Link></p>
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

export default SingUp
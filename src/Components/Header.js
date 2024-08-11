import React, { useEffect, useState } from 'react'
import {  Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../constants/navigation';





const Header = () => {
  const location=useLocation()
  const query=location.search.slice(3).split('%20').join(" ")
  const [searchInput,setSearchInput]=useState(query)

  const navigate=useNavigate()


  useEffect(()=>{
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
   
  },[searchInput])

  const handleSubmit= (e)=>{
    e.preventDefault()
  }

  return (

    <header  className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40 ' >
      <div className='container mx-auto px-4 flex items-center h-full'>
        <div className=' rounded overflow-hidden'>
        <Link to={"/"}>
        <img
       src='https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c'
       className='w-20 h-10'
       />

        </Link>
       
        </div>

        <nav className='hidden  lg:flex items-center gap-1 ml-5'>
          {
            navigation.map((nav,index)=>{
              return(
                <div>
                  <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100" }`}>
                    {nav.label}
                  </NavLink>
                </div>
              )
            })
          }
        </nav>

        <div className='ml-auto flex items-center gap-5 '>
          <form className='lg:flex items-center gap-2 hidden' onSubmit={handleSubmit}>
            <input
             type='text'
              placeholder='Search here....' 
              className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
              onChange={(e)=>setSearchInput(e.target.value)}
              value={searchInput}
              />
            <button className='text-2xl text-white'>
            <IoSearchOutline/>
            </button>
          </form>
      
          <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all '>
            <img
            src='https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0'
            className='w-full h-full'
            />

          </div>
        </div>

      </div>
   

      </header>
  )
}

export default Header
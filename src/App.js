
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MobileNavigation from './Components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData , setImageUrl} from './store/movieoSlice';




function App() {


const dispatch=useDispatch()

const fetchTrendingData= async()=>{
  try{

    const response=await axios.get('/trending/all/week')

    dispatch(setBannerData(response.data.results))
  
  }catch(error){
    console.log("error",error)
  }
}

const fectchConfiguration=async()=>{
  try {
    const response=await axios.get('/configuration')

    dispatch(setImageUrl(response.data.images.secure_base_url+"original"))
    
  } catch (error) {
    console.log("error",error)
  }
}

useEffect(()=>{
fetchTrendingData()
fectchConfiguration()
},[])

  return (
 <main className='pb-14 lg:pb-0'>
  <Header/>
  <div className='pt-18'>
  <Outlet/>
  </div>
  <MobileNavigation/>
 </main>

  );
}

export default App;

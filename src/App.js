
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MobileNavigation from './Components/MobileNavigation';

function App() {
  return (
 <main className='pb-14 lg:pb-0'>
  <Header/>
  <div className='pt-16'>
  <Outlet/>
  </div>

  <Footer/>
  <MobileNavigation/>
 </main>

  );
}

export default App;

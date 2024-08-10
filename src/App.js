
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
 <main>
  <Header/>
  <div className='pt-16'>
  <Outlet/>
  </div>

  <Footer/>
 </main>

  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/store';






axios.defaults.baseURL="https://api.themoviedb.org/3"

axios.defaults.headers.common['Authorization']=`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjM2YWNjYTQ2NzQ5OWFjNmFkZTU5N2I2MTlhMTg5MiIsIm5iZiI6MTcyMzMxMzA5My44ODMyMDksInN1YiI6IjY2YjdhOWM3MTljMTNhMjE1MjllZGU0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SkhW51RUMAe-itBXVAPmg2DIwwNTEcMJOSNkAInZVw0`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<Provider store={store}>

<RouterProvider router={router}/>
</Provider>


  
  
  //<React.StrictMode>
  

  
   

  
   //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

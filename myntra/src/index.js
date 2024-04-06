import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  RouterProvider ,createBrowserRouter } from 'react-router-dom';
import CategoryPage from './Components/CategoryPage';
import Main from './Components/Main';
import ItemInfo from './Components/ItemInfo';
import Bag from './Components/Bag';
import Wishlist from './Components/Wishlist';


const router = createBrowserRouter([
  {path:"/",
  element:<App/> ,
  children:[
    {path:"/",element:<Main/> },
    {path:"/category",element:<CategoryPage/> },
    {path:"/iteminfo",element:<ItemInfo/> },
    {path:"/bag",element:<Bag/> },
    {path:"/wishlist",element:<Wishlist/> }
  ],
},
 
]) ;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

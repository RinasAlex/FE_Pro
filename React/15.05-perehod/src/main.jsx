import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Shop from './Components/pages/Shop/Shop';
import Category from './Components/pages/Shop/Category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/About',
    element: <About />,
  },
  {
    path:'/Shop',
    element: <Shop />,
    children:[
      {
        path: '/Shop/:shopId',
        element:<Category />
      }
    ]
  },
  {
    path:'/Contact',
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)

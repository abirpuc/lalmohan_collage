import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Component/Routes/Routes.jsx'
import MainLayout from './Component/Layout/MainLayout/MainLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
      <MainLayout/>
   </RouterProvider>
  </React.StrictMode>,
)

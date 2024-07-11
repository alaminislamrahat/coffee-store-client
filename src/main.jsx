import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCofee from './components/UpdateCofee.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-rho-lovat.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCofee></UpdateCofee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-rho-lovat.vercel.app/coffee/${params.id}`)
  },
  {
    path : "/login",
    element : <Login></Login>
  },
   {
    path : "/register",
    element : <Register></Register>
   },
   {
    path : "/user",
    element : <Users/>,
    loader : ()=> fetch('https://coffee-store-server-rho-lovat.vercel.app/user')
   }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

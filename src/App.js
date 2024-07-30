import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './Component/Main'
import "./App.css"
import Series from './Component/Element/Series'
import Matches from './Component/Element/Matches'
import Players from './Component/Element/Players'
import Points from './Component/Element/Points'
import Player from './Component/Element/Player'
import Login from './Component/Element/Login'
import Home from './Component/Element/Home'
import Subscription from './Component/Element/Subscription'
import CreateAccount from './Component/Element/CreateAccount'




function App() {

  const router = createBrowserRouter([
    {
      path:"/series",
      element:<><Main/><Series/></>
    },
    {
      path:"/",
      element:<><Main/><Home/></>
    },
    {
      path:"/matches",
      element:<><Main/><Matches/></>
    },
    {
      path:"/subscription",
      element:<><Main/><Subscription/></>
    },
    {
      path:"/login",
      element:<><Main/><Login/></>
    },
    {
      path:"/players",
      element:<><Main/><Players/></>
    },
    {
      path:"/createAccount",
      element:<><Main/><CreateAccount/></>
    },
    {
      path:"/Player/:id",
      element:<><Main/><Player/></>
    },
    {
      path:"/point",
      element:<><Main/><Points/></>
    },
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App

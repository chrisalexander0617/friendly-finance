import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home} from './pages/Home'
import {Mortgage} from './pages/Mortgage'
import { Analytics } from './pages/Analytics'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
// Name the route and add 
// your component, that easy
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/',
    element: <Mortgage />,
  },
  {
    path: '/analytics',
    element: <Analytics />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()

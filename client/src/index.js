import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {Mortgage} from './pages/Mortgage'
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
    element: <App/>,
  },
  // {
  //   path: '/add-user',
  //   element: <AddUser />,
  // },
  // {
  //   path: '/user/:id',
  //   element: <UserProfile />,
  // },
  {
    path: '/mortgage',
    element: <Mortgage />,
  },
  /* {
  //   path: '/your-route',
  //   element: <YourComponent />,
  },*/
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()

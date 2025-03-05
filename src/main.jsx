import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorComponent from './components/ErrorComponent/ErrorComponent.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

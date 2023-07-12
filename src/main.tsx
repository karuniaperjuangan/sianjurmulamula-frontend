import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <NotFound/>
  }
]);

import './index.css'
import NotFound from './pages/404.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

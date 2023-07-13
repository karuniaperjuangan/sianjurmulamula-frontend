import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NotFound from './pages/404.tsx';
import Root from './pages/Root.tsx';
import Peta from './pages/Peta.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/peta",
        element: <Peta />,
      },
      {
        path: "/*",
        element: <NotFound/>
      }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

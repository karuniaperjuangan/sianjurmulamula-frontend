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
import Artikel from './pages/Artikel.tsx';
import KatalogArtikel from './pages/KatalogArtikel.tsx';
import ProfilBoho from './pages/ProfilBoho.tsx';
import ProfilSipitudai from './pages/ProfilSipitudai.tsx';
import KatalogKKN from './pages/KatalogKKN.tsx';

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
        path: "/profil-boho",
        element: <ProfilBoho/>
      },
      {
        path: "/profil-aek-sipitudai",
        element: <ProfilSipitudai/>
      },
      {
        path: "/*",
        element: <NotFound/>
      },
      {
        path: "/artikel",
        element: <KatalogArtikel/>
      },
      {
        path: "/artikel-kkn",
        element: <KatalogKKN/>
      },
      {
        path: "/artikel/:id",
        element: <Artikel/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

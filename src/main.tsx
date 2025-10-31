// main.tsx (or main.jsx)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Project from './components/pages/Project.tsx';
// 👈 Assuming you have a Home component
import Home from './components/pages/Home.tsx'; 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      }
    ],
  },
  {
      path: "*",
      element: <div>404 Page Not Found</div>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
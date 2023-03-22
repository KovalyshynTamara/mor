import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Character from './Character';
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  
  },
  {
    path: "character",
    element: <Character/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
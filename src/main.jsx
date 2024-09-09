import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from '../Component/Error';
import Destination from "../Pages/Destination";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import TravelPackages from "../Pages/Travel";
import Home from "../Pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      {
        path: "/destination",
        element: <Destination/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/travel",
        element: <TravelPackages/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  }
]);
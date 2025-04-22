import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from '../Component/Error';
import Destination from "../Pages/Destination/Destination";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import TravelPackages from "../Pages/TravelPackages/TravelPackages";
import Contact from "../Pages/Contact/Contact";

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
        path: "/travel Packages",
        element: <TravelPackages/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  }
]);
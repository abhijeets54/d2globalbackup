import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import About from './components/About.jsx';
import Layout from './components/Layout.jsx';
import AboutUs from './pages/AboutUs.jsx';
import StudyUK from './pages/StudyUK.jsx';
import StudyAus from './pages/StudyAus.jsx';
import StudyCan from './pages/StudyCan.jsx';
import StudyNz from './pages/StudyNz.jsx';
import StudyUSA from './pages/StudyUSA.jsx';
import StudyEurope from './pages/StudyEurope.jsx';
import StudyDubai from './pages/StudyDubai.jsx';
import StudyAbroad from './pages/StudyAbroad.jsx';
import Training from './pages/Training.jsx';
import TouristVisa from './pages/TouristVisa.jsx';
import WorkVisa from './pages/WorkVisa.jsx';
import VisitorVisa from './pages/VisitorVisa.jsx';
import Contactpage from './pages/Contactpage.jsx';
import PR from './pages/PR.jsx';
import IELTSCoaching from './pages/IELTSCoaching.jsx';
import PTECoaching from './pages/PTECoaching.jsx';
import SuccessStories from './pages/SuccessStories.jsx';
import Partners from './pages/Partners.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          { 
            path: '/', 
            element: (
              <>
                <ScrollRestoration /> 
                <Home /> 
              </>
            ) 
          },
          { 
            path: '/About', 
            element: (
              <>
                <ScrollRestoration /> 
                <About />
              </>
            )
          },
          { 
            path: '/AboutUs', 
            element: (
              <>
                <ScrollRestoration /> 
                <AboutUs />
              </>
            )
          },
          { 
            path: '/StudyUK', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyUK /> 
              </>
            ) 
          },
          { 
            path: '/StudyAus', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyAus /> 
              </>
            ) 
          },
          { 
            path: '/StudyAbroad', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyAbroad /> 
              </>
            ) 
          },
          { 
            path: '/Training', 
            element: (
              <>
                <ScrollRestoration /> 
                <Training /> 
              </>
            ) 
          },
          { 
            path: '/SuccessStories', 
            element: (
              <>
                <ScrollRestoration /> 
                <SuccessStories /> 
              </>
            ) 
          },
          { 
            path: '/StudyUSA', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyUSA /> 
              </>
            ) 
          },
          { 
            path: '/Contactpage', 
            element: (
              <>
                <ScrollRestoration /> 
                <Contactpage /> 
              </>
            ) 
          },
          { 
            path: '/IELTSCoaching', 
            element: (
              <>
                <ScrollRestoration /> 
                <IELTSCoaching /> 
              </>
            ) 
          },
          { 
            path: '/PTECoaching', 
            element: (
              <>
                <ScrollRestoration /> 
                <PTECoaching /> 
              </>
            ) 
          },
          { 
            path: '/PR', 
            element: (
              <>
                <ScrollRestoration /> 
                <PR /> 
              </>
            ) 
          },
          { 
            path: '/WorkVisa', 
            element: (
              <>
                <ScrollRestoration /> 
                <WorkVisa /> 
              </>
            ) 
          },
          { 
            path: '/StudyEurope', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyEurope /> 
              </>
            ) 
          },
          { 
            path: '/Partners', 
            element: (
              <>
                <ScrollRestoration /> 
                <Partners /> 
              </>
            ) 
          },
          { 
            path: '/StudyDubai', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyDubai /> 
              </>
            ) 
          },
          { 
            path: '/TouristVisa', 
            element: (
              <>
                <ScrollRestoration /> 
                <TouristVisa /> 
              </>
            ) 
          },
          { 
            path: '/VisitorVisa', 
            element: (
              <>
                <ScrollRestoration /> 
                <VisitorVisa /> 
              </>
            ) 
          },
          { 
            path: '/StudyCan', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyCan /> 
              </>
            ) 
          },
          { 
            path: '/StudyNz', 
            element: (
              <>
                <ScrollRestoration /> 
                <StudyNz /> 
              </>
            ) 
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
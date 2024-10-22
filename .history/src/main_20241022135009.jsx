import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/About', element: <About />},
          { path: '/AboutUs', element: <AboutUs />},
          { path: '/StudyUK', element: <StudyUK /> },
          { path: '/StudyAus', element: <StudyAus /> },
          { path: '/StudyAbroad', element: <StudyAbroad /> },
          { path: '/Training', element: <Training /> },
          { path: '/SuccessStories', element: <SuccessStories /> },
          { path: '/StudyUSA', element: <StudyUSA /> },
          { path: '/Contactpage', element: <Contactpage /> },
          { path: '/IELTSCoaching', element: <IELTSCoaching /> },
          { path: '/PTECoaching', element: <PTECoaching /> },
          { path: '/PR', element: <PR /> },
          { path: '/WorkVisa', element: <WorkVisa /> },
          { path: '/StudyEurope', element: <StudyEurope /> },
          { path: '/StudyDubai', element: <StudyDubai /> },
          { path: '/TouristVisa', element: <TouristVisa /> },
          { path: '/VisitorVisa', element: <VisitorVisa /> },
          { path: '/StudyCan', element: <StudyCan /> },
          { path: '/StudyNz', element: <StudyNz /> },
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

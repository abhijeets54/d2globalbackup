import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import About from './components/About.jsx';
import Team from './pages/Team.jsx';
import Projects from './pages/Projects.jsx';
import DonateComponent from './pages/Donate.jsx';
import RestOfWorld from '../src/components/Donate/RestoftheWorld.jsx';
import WithinIndia from './components/Donate/WithInIndia.jsx';
import NewsletterComponent from './Newsletter/NewsletterComponent.jsx';
import June2024Newsletter from './Newsletter/June2024Newsletter.jsx';
import July2024Newsletter from './Newsletter/July2024Newsletter.jsx';
import August2024Newsletter from './Newsletter/August2024Newsletter.jsx';
import Branches from './components/Team/Branches.jsx';
import Ludhiana from './components/Team/Ludhiana.jsx';
import Delhi1 from './components/Team/Delhi1.jsx';
import Canada from './components/Team/Canada.jsx';
import Layout from './components/Layout.jsx';
import JoinUs from './components/JoinUs.jsx';
import ThreePillars from './components/ThreePillars.jsx';
import Education from './components/Projects/Education.jsx';
import Awareness from './components/Projects/Awareness.jsx';
import HumanitarianAid from './components/Projects/HumanitarianAid.jsx';
import ProjectDetailEducation from './ProjectDetails/ProjectDetailEducation.jsx';
import ProjectDetailAwareness from './ProjectDetails/ProjectDetailAwareness.jsx';
import ProjectDetailHumanitarianAid from './ProjectDetails/ProjectDetailHumanitarianAid.jsx';
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
          { path: '/Team', element: <Team /> },
          { path: '/StudyUK', element: <StudyUK /> },
          { path: '/StudyAus', element: <StudyAus /> },
          { path: '/StudyAbroad', element: <StudyAbroad /> },
          { path: '/Training', element: <Training /> },
          { path: '/StudyUSA', element: <StudyUSA /> },
          { path: '/Contactpage', element: <Contactpage /> },
          { path: '/PR', element: <PR /> },
          { path: '/WorkVisa', element: <WorkVisa /> },
          { path: '/StudyEurope', element: <StudyEurope /> },
          { path: '/StudyDubai', element: <StudyDubai /> },
          { path: '/TouristVisa', element: <TouristVisa /> },
          { path: '/VisitorVisa', element: <VisitorVisa /> },
          { path: '/StudyCan', element: <StudyCan /> },
          { path: '/StudyNz', element: <StudyNz /> },
          { path: '/Projects', element: <Projects /> },
          { path: '/Donate', element: <DonateComponent /> },
          { path: '/RestOfWorld', element: <RestOfWorld /> },
          { path: '/WithinIndia', element: <WithinIndia /> },
          { path: 'newsletter', element: <NewsletterComponent /> },
          { path: 'newsletter/june-2024', element: <June2024Newsletter /> },
          { path: 'newsletter/july-2024', element: <July2024Newsletter /> },
          { path: 'newsletter/august-2024', element: <August2024Newsletter /> },
          { path: '/Branches', element: <Branches /> },
          { path: '/Ludhiana', element: <Ludhiana /> },
          { path: '/Delhi', element: <Delhi1 /> },
          { path: '/Canada', element: <Canada /> },
          { path: '/JoinUs', element: <JoinUs /> },
          { path: '/ThreePillars', element: <ThreePillars /> },
          { path: '/Education', element: <Education /> },
          { path: '/Awareness', element: <Awareness /> },
          { path: '/HumanitarianAid', element: <HumanitarianAid /> },
          { path: '/project/:projectName', element: <ProjectDetailEducation /> },
          { path: '/awareness/project/:projectName', element: <ProjectDetailAwareness /> },
          { path: '/humanitarian/project/:projectName', element: <ProjectDetailHumanitarianAid /> },
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

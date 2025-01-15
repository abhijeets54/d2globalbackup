import React, { useState, useEffect } from 'react'
import './App.css'
import { Footer, Header } from './components'
import { Outlet, useLocation } from 'react-router-dom'

// Analytics utility function
const sendGAEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

function App() {
  const [loading, setLoading] = useState(false)
  const location = useLocation();

  useEffect(() => {
    // Track page views
    sendGAEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title
    });
  }, [location]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
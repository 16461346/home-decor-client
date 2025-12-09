import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import AOS from "aos";
import "aos/dist/aos.css";


function MainApp() {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: false,     
    });
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right' reverseOrder={false} />
    </AuthProvider>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
)

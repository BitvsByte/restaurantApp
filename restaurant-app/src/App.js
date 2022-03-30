import './App.scss';
import NotFoundPage from './pages/7-NotFoundPage';

// import Headerapp from './components/headerapp';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/1-landing';
import ThemingProvider from './components/themimg-selector/theming.provider';
import Footer from './components/footer';


import Bookings from './pages/4-bookingPage';
import Commands from './pages/5-command';
import Validate from './pages/2-validate';
import Payment from './pages/6-pago';
import ProtectedRoute from './components/rutas/rutaprivada.perfil';
import Perfil from './pages/3-userProfile';
import PoliticaPrivacidad from './pages/politicas';
import letra from './assets/fonts/Cunia.ttf'
import PoliticaCookies from './pages/cookies';
import PoliticaTerms from './pages/terms';






function App() {



  return (
    <React.Fragment>
      <ThemingProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/validate" element={<Validate></Validate>}></Route>
          
         
          <Route path="/reservas" element={<ProtectedRoute><Bookings /></ProtectedRoute>}></Route>
          <Route path="/perfil" element={<ProtectedRoute><Perfil></Perfil></ProtectedRoute>}></Route>
        
          
          <Route path="/pedido" element={<ProtectedRoute><Commands /></ProtectedRoute>}></Route>
          <Route path="/pago" element={<ProtectedRoute><Payment /></ProtectedRoute>}></Route>
          <Route path="/privacity" element={<PoliticaPrivacidad />}></Route>
          <Route path="/cookies" element={<PoliticaCookies />}></Route>
          <Route path="/terms" element={<PoliticaTerms />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      
      </BrowserRouter>
    {/* <Footer />   */}


      </ThemingProvider>

    </React.Fragment>
  );
}

export default App;

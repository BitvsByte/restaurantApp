import './App.css';
import NotFoundPage from './pages/7-NotFoundPage';

// import Headerapp from './components/headerapp';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/1-landing';
import ThemingProvider from './components/themimg-selector/theming.provider';
import Login from './pages/2-log';
import Register from './pages/3-reg';
import Bookings from './pages/4-reservas';
import Commands from './pages/5-pedido';






function App() {
  return (
    <React.Fragment>
      <ThemingProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
          <Route path="/reservas" element={<Bookings />}></Route>
          <Route path="/pedido" element={<Commands />}></Route>
          <Route path="/pago" element={<Login />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>


      </ThemingProvider>

    </React.Fragment>
  );
}

export default App;

import './App.css';
import NotFoundPage from './pages/7-NotFoundPage';

// import Headerapp from './components/headerapp';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/1-landing';





function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LandingPage />}></Route>

          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>


      

    </React.Fragment>
  );
}

export default App;

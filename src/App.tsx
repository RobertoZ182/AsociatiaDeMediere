import React from 'react';
import HomePage from './pages/Homepage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SprachenButton from "./components/Buttonlang";
import InfoUtil from './pages/InfoUtil';
import InscrieTe from './pages/InscrieTe';
import ProgrameSuport from './pages/ProgrameSuport';
import Transparenta from './pages/Transparenta';
import FiiDonator from './pages/FiiDonator';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <SprachenButton variant="floating" />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/infoUtil" element={<InfoUtil />} />
          <Route path="/inscrieTe" element={<InscrieTe />} />
          <Route path="/programeSuport" element={<ProgrameSuport />} />
          <Route path="/transparenta" element={<Transparenta />} />
          <Route path="/fiiDonator" element={<FiiDonator />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    
    </>
  );
}

export default App;
import React from 'react';
import HomePage from './pages/Homepage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SprachenButton from "./components/Buttonlang";
import EuropeMapPage from './pages/RomaMap';


function App() {
  return (
    <>
    <SprachenButton variant="floating" />
     <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages with header/footer */}
        
          {/* Home / Landing */}
          <Route path="/" element={<HomePage />} />
          <Route path="/roma-map" element={<EuropeMapPage />} />

          {/* 404 → redirect to home (you can replace with a NotFound component) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
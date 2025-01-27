import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MenuPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
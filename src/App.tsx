import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/invalid" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
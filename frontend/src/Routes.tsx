//react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home';
import Vite from './pages/vite';

const RoutesSite = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vite" element={<Vite />} />
      </Routes>
    </Router>
  );
}

export default RoutesSite;

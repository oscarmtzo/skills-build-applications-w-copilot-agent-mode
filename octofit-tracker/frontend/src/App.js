import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import './App.css';
import ActivitiesPage from './pages/ActivitiesPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light border-bottom">
        <div className="container">
          <span className="navbar-brand mb-0 h1">OctoFit</span>
          <div className="navbar-nav gap-2">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/auth">
              Auth
            </NavLink>
            <NavLink className="nav-link" to="/activities">
              Actividades
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

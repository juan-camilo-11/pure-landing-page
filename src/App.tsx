import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate }from 'react-router-dom';

import Layout from "./modules/pages/layout/layout";
import Introduction from './modules/pages/introduccion/introduction';
import Componentes from './modules/pages/components/components';
import Versions from './modules/pages/versions/versions';

function App() {
  return (
    <div className="App">
      <Router basename='/pure-landing-page'>
      <Layout>
        <Routes>
          <Route path="/introduccion" element={<Introduction />} />
          <Route path="/componentes/*" element={<Componentes />} />
          <Route path="/versiones" element={<Versions />} />
          {/**<Route path="/nosotros" element={<Nosotros />} />*/}
          <Route path="/" element={<Navigate to="/introduccion" />} />
          <Route path="*" element={<Navigate to="/introduccion" />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}

export default App;

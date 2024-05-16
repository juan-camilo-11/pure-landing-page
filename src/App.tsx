import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate }from 'react-router-dom';

import Layout from "./modules/pages/layout/layout";
import Introduction from './modules/pages/introduccion/introduction';
import Componentes from './modules/pages/components/components';

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Routes>
          <Route path="/introduccion" element={<Introduction />} />
           <Route path="/componentes/*" element={<Componentes />} />
          {/**<Route path="/versiones" element={<Versiones />} />
          <Route path="/nosotros" element={<Nosotros />} />*/}
          <Route path="/" element={<Navigate to="/introduccion" />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  );
}

export default App;

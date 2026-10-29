import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience';
import Passions from './pages/Passions';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* Fallback for 404 - Optional */}
          <Route 
            path="*" 
            element={
              <div className="flex flex-col items-center justify-center h-[60vh] text-white">
                <h1 className="text-5xl font-extrabold tracking-tight">404</h1>
                <p className="text-slate-400 mt-3">Resource not found in current directory.</p>
                <a href="/" className="mt-6 text-brand-accent hover:text-white font-semibold transition-colors duration-150">Back to home</a>
              </div>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Resume = lazy(() => import('./pages/Resume').then(m => ({ default: m.Resume })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center text-[var(--text-muted)]">
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Suspense fallback={<LoadingFallback />}><About /></Suspense>} />
          <Route path="projects" element={<Suspense fallback={<LoadingFallback />}><Projects /></Suspense>} />
          <Route path="projects/:slug" element={<Suspense fallback={<LoadingFallback />}><ProjectDetail /></Suspense>} />
          <Route path="resume" element={<Suspense fallback={<LoadingFallback />}><Resume /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

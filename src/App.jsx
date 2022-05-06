import './styles/App.scss';

import { useState } from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Error404 = lazy(() => import('./pages/Error404'));
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense 
        fallback={
          <div>
            Loading screen
          </div>
        }
      >
        <Routes>
            <Route path='*' element={<Error404/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

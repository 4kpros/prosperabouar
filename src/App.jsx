import './styles/App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBarProgress from "react-topbar-progress-indicator";

import lazyLoading from './components/LazyLoading';

TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff"
  },
  shadowBlur: 5
});
const Error404 = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Error404")), 100);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Home = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Home")), 100);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Portfolio = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Portfolio")), 100);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Blog = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Blog")), 100);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const About = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/About")), 100);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<Error404/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

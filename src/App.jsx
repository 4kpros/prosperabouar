import './styles/App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBarProgress from "react-topbar-progress-indicator";

import lazyLoading from './components/LazyLoading';

import { ToastContainer } from 'react-toastify';

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
      setTimeout(() => resolve(import("./pages/Error404")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Home = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Home")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Portfolio = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Portfolio")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Blog = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Blog")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const About = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/About")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const Congratulations = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/Congratulations")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const ProjectAdd = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/ProjectAdd")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);
const ProjectDetails = lazyLoading(
  () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./pages/ProjectDetails")), 0);
    });
  },
  {
    fallback: <TopBarProgress />
  }
);

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose="2000"
        hideProgressBar="false"
        closeOnClick= "true"
        pauseOnHover= "true"
        draggable="false"
        progress="undefined"
        />
        <Routes>
            <Route path='*' element={<Error404/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/portfolio/projects/:id' element={<ProjectDetails/>} />
            {/* <Route path='/blog' element={<Blog/>} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/congratulations' element={<Congratulations/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

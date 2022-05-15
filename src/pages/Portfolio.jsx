import { useEffect, useState } from 'react';
import { db } from '../firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import ProjectItem from '../components/Portfolio/ProjectItem'

const Portfolio = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const getProjects = async () => {
      const q = query(projectsCollectionRef, where("platform", "==", "Web"));
      const data = await getDocs(q)
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setIsLoading(false)
    }

    getProjects()
  }, []);
  

  const getProjects = async (platform) => {
    setIsLoading(true)
    setProjects([])
    const q = query(projectsCollectionRef, where("platform", "==", platform));
    const data = await getDocs(q)
    setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    setIsLoading(false)
  }
  let loadingItems = [];
  for (var i = 0; i < 12; i++) {
    loadingItems.push(
      <div className="w-full relative animate-pulse">
        <div className="w-full h-96 bg-[#ffffff03]">
        </div>
        <div className="absolute bottom-0 z-10 w-full p-4 bg-[#ffffff03]">
            <div className="w-full h-24">
            </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full text-white">
        <section className="w-full">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <Navbar selectedNavItem='Portfolio'/>
          </div>
        </section>
        <section className="w-full pt-20 min-h-screen">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold underline underline-offset-8">
              Projets recents
            </h2>
            <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mt-12">
              <label className="text-lg mr-2" htmlFor="select-filter-projects">
                Filter les projets
              </label>
              <select onChange={(e) => {getProjects(e.target.value)}} className="max-w-full appearance-none mx-2 form-select bg-black bg-clip-padding bg-no-repeat border border-solid border-neutral-700 text-white transition ease-in-out py-2 px-4" id="select-filter-projects" aria-label="Select projet platform">
                <option defaultValue value="Web" className="">
                  Web
                </option>
                <option value="Mobile" className="">
                  Mobile
                </option>
                <option value="UI-UX design" className="">
                  UI-UX design
                </option>
              </select>
            </div>
            <div className="w-full mt-12">
              {
                isLoading ?
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40">
                      {loadingItems}
                  </div>
                :
                  projects && projects.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40">
                      {
                        projects.map((project) => {
                          return(
                            <ProjectItem project={project}/>
                          )
                        })
                      }
                    </div>
                  :
                    <p className="text-xl text-my-gray-color">
                      Aucun projet pour cette plateforme !
                    </p>
              }
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Portfolio;
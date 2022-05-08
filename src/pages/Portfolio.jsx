import React, { Component } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import project1 from '../images/project-1.png'
import project2 from '../images/project-2.png'
import project3 from '../images/project-3.png'
import project4 from '../images/project-4.png'

export default class CV extends Component {
  render() {
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
              <h2 className="text-center text-4xl font-bold">
                Projets recents
              </h2>
              <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mt-12">
                <label className="text-lg text-my-gray-color mx-2" htmlFor="select-filter-projects">
                  Filter les projets
                </label>
                <select className="max-w-full mx-2 form-select bg-black border border-solid border-my-gray-color text-white transition ease-in-out bg-clip-padding bg-no-repeat py-2 px-4" id="select-filter-projects">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <div className="w-full transition-all ease-in-out hover:scale-105 hover:shadow-[rgba(255,255,255,0.25)_0px_0px_16px]">
                  <img className="w-full h-auto object-cover" src={project1} alt="project-1"/>
                </div>
                <div className="w-full transition-all ease-in-out hover:scale-105 hover:shadow-[rgba(255,255,255,0.25)_0px_0px_16px]">
                  <img className="w-full h-auto object-cover" src={project2} alt="project-2"/>
                </div>
                <div className="w-ful transition-all ease-in-out hover:scale-105 hover:shadow-[rgba(255,255,255,0.25)_0px_0px_16px]">
                  <img className="w-full h-auto object-cover" src={project3} alt="project-3"/>
                </div>
                <div className="w-full transition-all ease-in-out hover:scale-105 hover:shadow-[rgba(255,255,255,0.25)_0px_0px_16px]">
                  <img className="w-full h-auto object-cover" src={project4} alt="project-4"/>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </>
    )
  }
}

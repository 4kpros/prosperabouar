import React, { Component } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import ProjectItem from '../components/Portfolio/ProjectItem'

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
              <h2 className="text-center text-4xl font-bold underline underline-offset-8">
                Projets recents
              </h2>
              <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mt-12">
                <label className="text-lg text-my-gray-color mx-2" htmlFor="select-filter-projects">
                  Filter les projets
                </label>
                <select className="max-w-full appearance-none mx-2 form-select bg-black bg-clip-padding bg-no-repeat border border-solid border-neutral-700 text-white transition ease-in-out py-2 px-4" id="select-filter-projects" aria-label="Select projet platform">
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
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </>
    )
  }
}

import React, { Component } from 'react';

import sitelogo from '../images/site-logo.png'

class Nabar extends Component {
    render() {
        return (
            <nav className="w-full md:space-x-8 flex flex-wrap md:flex-nowrap justify-between items-center">
                <img className="h-20 md:h-28 object-contain object-left-top" src={sitelogo} alt="site logo"/>
                <div className="w-full hidden md:flex md:flex-wrap justify-end space-x-12">
                    <a href="/" className="text-2xl">Accueil</a>
                    <a href="/portfolio" className="text-2xl">Portfolio</a>
                    <a href="/blog" className="text-2xl">Blog</a>
                    <a href="/about" className="text-2xl">A propos</a>
                </div>
                <div className="md:hidden">
                    <svg className="fill-white h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                </div>
            </nav>
        );
    }
}

export default Nabar;
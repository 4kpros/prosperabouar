import React, { Component } from 'react';

import sitelogo from '../images/site-logo.png'

class Nabar extends Component {
    render() {
        return (
            <nav className="w-full space-x-8 flex justify-between items-center">
                <img className="h-[100px] object-contain object-left-top" src={sitelogo} alt="site logo"/>
                <div className="w-full flex flex-wrap justify-end md:space-x-12">
                    <a href="/" className="text-xl">Accueil</a>
                    <a href="/portfolio" className="text-xl">Portfolio</a>
                    <a href="/blog" className="text-xl">Blog</a>
                    <a href="/about" className="text-xl">A propos</a>
                </div>
            </nav>
        );
    }
}

export default Nabar;
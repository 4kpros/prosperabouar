import React, { Component } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

class About extends Component {
    render() {
        return (
            <>
                <div className="w-full text-white">
                    <section className="w-full">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                        <Navbar selectedNavItem='About'/>
                        </div>
                    </section>
                    <section className="w-full pt-20 min-h-screen">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            ABOUT
                        </div>
                    </section>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default About;
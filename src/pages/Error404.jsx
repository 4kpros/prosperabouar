import React, { Component } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

class Error404 extends Component {
    render() {
        return (
            <>
                <div className="w-full text-white">
                    <section className="w-full">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                        <Navbar/>
                        </div>
                    </section>
                    <section className="w-full pt-20 min-h-screen">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            ERROR 404
                        </div>
                    </section>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default Error404;
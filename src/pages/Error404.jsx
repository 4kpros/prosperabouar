import { useEffect } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import React from 'react';

const Error404 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
};

export default Error404;
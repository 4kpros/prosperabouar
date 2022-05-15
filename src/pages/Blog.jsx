import { useEffect } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'
import BlogItem from '../components/Blog/BlogItem'
import BlogItemInline from '../components/Blog/BlogItemInline'

import React from 'react';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <>
            <div className="w-full text-white">
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                    <Navbar selectedNavItem='Blog'/>
                    </div>
                </section>
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 lg:mt-12">
                            <BlogItemInline/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                            <BlogItem/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
};

export default Blog;
import React, { Component } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'
import BlogItem from '../components/Blog/BlogItem'
import BlogItemInline from '../components/Blog/BlogItemInline'

class Blog extends Component {
    render() {
        return (
            <>
                <div className="w-full bg-black text-white">
                    <section className="w-full">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                        <Navbar/>
                        </div>
                    </section>
                    <section className="w-full">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <div className="w-full flex justify-center items-center">
                                <h1 class="font-bold text-7xl lg:text-9xl my-10 lg:my-20">LE BLOG</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 lg:mt-20">
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
    }
}

export default Blog;
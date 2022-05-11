import React from 'react';

import blogBackground from '../../images/backgrounds/blog-background_small.jpg'

const BlogItem = (props) => {

    const {blogPost} = props;

    return (
        <div className="w-full flex flex-col">
            <img className="w-full h-72 object-cover" src={blogPost && blogPost.img ? blogPost.img : blogBackground} alt={blogPost && blogPost.title ? blogPost.title : 'Blog post default image'} />
            <div className="w-full flex flex-col my-2">
                <p className="lg:mt-2 line-clamp-1 lg:text-2xl text-my-gray-color">
                    {
                        blogPost  && blogPost.date ? blogPost.date : 'Date indefinie'
                    }
                </p>
                <h3 className="lg:mt-2 line-clamp-3 font-bold text-4xl lg:text-5xl xl:text-6xl">
                    {
                        blogPost  && blogPost.title ? blogPost.title : 'Publication sans titre'
                    }
                </h3>
                <p className="lg:mt-2 line-clamp-4 text-xl lg:text-2xl">
                    {
                        blogPost  && blogPost.subtitle ? blogPost.subtitle : 'Publication sans sous-titre'
                    }
                </p>
            </div>
        </div>
    );
};

export default BlogItem;
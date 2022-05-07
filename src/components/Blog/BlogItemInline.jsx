import React from 'react';

import blogBackground from '../../images/blog-background.jpg'

const BlogItem = (props) => {

    const {blogPost} = props;

    return (
        <div className="w-full grid grid-cols-2 col-span-3">
            <img className="w-full h-96 object-cover" src={blogPost && blogPost.img ? blogPost.img : blogBackground} alt={blogPost && blogPost.title ? blogPost.title : 'Blog post default image'} />
            <div className="w-full flex flex-col ml-4">
                <p className="mt-2 line-clamp-1 text-2xl text-my-gray-color">
                    {
                        blogPost  && blogPost.date ? blogPost.date : 'Date indefinie'
                    }
                </p>
                <h3 className="mt-2 line-clamp-3 font-bold text-6xl">
                    {
                        blogPost  && blogPost.title ? blogPost.title : 'Publication sans titre'
                    }
                </h3>
                <p className="mt-2 line-clamp-4 text-2xl">
                    {
                        blogPost  && blogPost.subtitle ? blogPost.subtitle : 'Publication sans sous-titre'
                    }
                </p>
            </div>
        </div>
    );
};

export default BlogItem;
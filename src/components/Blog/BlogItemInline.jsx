import React from 'react';

import defaultBackground from '../../images/backgrounds/default-background_small.webp'

const BlogItem = (props) => {

    const {blogPost} = props;

    return (
        <div className="w-full grid grid-cols-2 col-span-1 md:col-span-2 lg:col-span-3">
            <img className="w-full h-40 my-auto md:h-96 object-cover" src={blogPost && blogPost.img ? blogPost.img : defaultBackground} alt={blogPost && blogPost.title ? blogPost.title : 'Blog post default image'} />
            <div className="w-full flex flex-col ml-4">
                <p className="line-clamp-1 md:text-2xl text-my-gray-color">
                    {
                        blogPost  && blogPost.date ? blogPost.date : 'Date indefinie'
                    }
                </p>
                <h3 className="mt-2 line-clamp-3 font-bold text-2xl md:text-6xl">
                    {
                        blogPost  && blogPost.title ? blogPost.title : 'Publication sans titre'
                    }
                </h3>
                <p className="mt-2 line-clamp-4 text-lg md:text-2xl">
                    {
                        blogPost  && blogPost.subtitle ? blogPost.subtitle : 'Publication sans sous-titre'
                    }
                </p>
            </div>
        </div>
    );
};

export default BlogItem;
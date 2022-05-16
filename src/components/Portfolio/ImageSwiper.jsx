import React from 'react';

import defaultBackground from '../../images/backgrounds/default-background_small.webp'

const galleryID = 'gallery-id'

const ImageSwiper = (props) => {

    const {images} = props

    return (
        <div className="w-full grid grid-cols-2 gap-4">
            {
                images ?
                    images.map((image, index) => {
                        return(
                            <a
                                href={image ? image : defaultBackground}
                                key={galleryID + `-` + index}
                                target="_blank"
                                rel="noreferrer"
                                >
                                <img className="w-full object-cover" src={image ? image : defaultBackground} alt={galleryID + ` ` +index} />
                            </a>
                        )
                        // return(
                        //     <div className="w-full">
                        //         <img src={image && !isEmpty(image) ? image : defaultBackground} className="w-full object-cover" alt={name + ` ` +i}/>
                        //     </div>
                        // )
                    })
                :
                    null
            }
        </div>
    );
};

export default ImageSwiper;
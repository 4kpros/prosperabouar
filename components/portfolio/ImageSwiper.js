import Image from 'next/image'

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
                                href={image ? image : '/images/backgrounds/default-background_small.webp'}
                                key={galleryID + `-` + index}
                                target="_blank"
                                rel="noreferrer"
                                >
                                <Image width={200} height={200} layout="responsive" placeholder="blur" blurDataURL={image ? image : '/images/backgrounds/default-background_small.webp'} src={image ? image : '/images/backgrounds/default-background_small.webp'} alt={galleryID + ` ` +index} />
                            </a>
                        )
                    })
                :
                    null
            }
        </div>
    );
};

export default ImageSwiper;
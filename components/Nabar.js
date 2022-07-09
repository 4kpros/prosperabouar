import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'

import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
        name: 'Accueil',
        href: '/',
    },
    // {
    //     name: 'Portfolio',
    //     href: '/portfolio',
    // },
    {
        name: 'A propos',
        href: '/about',
    },
]


const Nabar = () => {

    const router = useRouter()
    
    return (
        <>
            <div className="w-full max-w-screen-xl mx-auto px-4 text-white">
                <nav className="w-full md:space-x-8 flex flex-wrap md:flex-nowrap justify-between items-center">
                    <Link href={`/`}>
                        <div className="cursor-pointer">
                            <Image width={188} height={96} objectFit="contain" placeholder="blur" blurDataURL="/images/svg/site-logo-small.webp" src="/images/svg/site-logo.webp" srcset="/images/svg/site-logo-small.webp 480w, /images/svg/site-logo.webp 1080w" alt="site logo"/>
                        </div>
                    </Link>
                    <div className="w-full hidden md:flex md:flex-wrap justify-end space-x-12 text-xl">
                        {
                            links.map((link, index) => {
                                return(
                                    <Link key={index} href={link.href} passHref scroll={false}>
                                        <a className={`flex flex-col relative ${link.href === router.pathname ? ` text-my-orage-color` : ` `}`}>
                                            {link.name}
                                            {
                                                link.href === router.pathname && (
                                                    <motion.div
                                                        layoutId="navigation-underline"
                                                        className="w-full border border-my-orage-color"
                                                    />
                                                )
                                            }
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="md:hidden">
                        <svg className="fill-white h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                        </svg>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Nabar;
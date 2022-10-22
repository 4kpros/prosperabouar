import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'

import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
        name: 'Accueil',
        href: '/',
    },
    {
        name: 'Projets',
        href: '/projects',
    }
]


const Nabar = () => {

    const router = useRouter()
    
    return (
        <div className="">
            <div className="w-full max-w-screen-xl mx-auto">
                <nav className="w-full flex flex-wrap items-center justify-center space-x-12 font-bold text-white py-8">
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
                </nav>
            </div>
        </div>
    );
};

export default Nabar;

import { Link } from 'react-router-dom'
import sitelogo from '../images/site-logo.webp'

const Nabar = (props) => {
    const {selectedNavItem} = props
    return (
        <nav className="w-full md:space-x-8 flex flex-wrap md:flex-nowrap justify-between items-center">
            <Link to={`/`}>
                <img className="w-auto h-24 object-contain object-left-top" src={sitelogo} alt="site logo"/>
            </Link>
            <div className="w-full hidden md:flex md:flex-wrap justify-end space-x-12">
                <Link to={`/`} className={selectedNavItem && selectedNavItem === 'Home' ? 'text-xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-xl hover:border-b-2 pb-1 border-white'} >Accueil</Link>
                <Link to={`/portfolio`} className={selectedNavItem && selectedNavItem === 'Portfolio' ? 'text-xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-xl hover:border-b-2 pb-1 border-white'} >Portfolio</Link>
                {/* <Link to={`/blog`} className={selectedNavItem && selectedNavItem === 'Blog' ? 'text-xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-xl hover:border-b-2 pb-1 border-white'} >Blog</Link> */}
                <Link to={`/about`} className={selectedNavItem && selectedNavItem === 'About' ? 'text-xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-xl hover:border-b-2 pb-1 border-white'} >A propos</Link>
            </div>
            <div className="md:hidden">
                <svg className="fill-white h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
            </div>
        </nav>
    );
};

export default Nabar;
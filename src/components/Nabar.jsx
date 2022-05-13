
import sitelogo from '../images/site-logo.png'

const Nabar = (props) => {
    const {selectedNavItem} = props
    // text-2xl transition-all ease-in-out 
    return (
        <nav className="w-full md:space-x-8 flex flex-wrap md:flex-nowrap justify-between items-center">
            <img className="h-20 md:h-28 object-contain object-left-top" src={sitelogo} alt="site logo"/>
            <div className="w-full hidden md:flex md:flex-wrap justify-end space-x-12">
                <a href="/" className={selectedNavItem && selectedNavItem === 'Home' ? 'text-2xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-2xl hover:border-b-2 pb-1 border-white'} >Accueil</a>
                <a href="/portfolio" className={selectedNavItem && selectedNavItem === 'Portfolio' ? 'text-2xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-2xl hover:border-b-2 pb-1 border-white'} >Portfolio</a>
                {/* <a href="/blog" className={selectedNavItem && selectedNavItem === 'Blog' ? 'text-2xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-2xl hover:border-b-2 pb-1 border-white'} >Blog</a> */}
                <a href="/about" className={selectedNavItem && selectedNavItem === 'About' ? 'text-2xl border-b-2 pb-1 border-my-orage-color text-my-orage-color' : 'text-2xl hover:border-b-2 pb-1 border-white'} >A propos</a>
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
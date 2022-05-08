import linkedInLogo from '../images/bxl-linkedin-square.svg'
import twitterLogo from '../images/bxl-twitter.svg'

const Footer = () => {
    return (
        <footer className="w-full mt-20 bg-my-footer-color py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="w-full flex justify-center space-x-8">
                    <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="" target="_blank" rel="noreferrer">
                    <img className="object-contain w-10" src={linkedInLogo} alt="LinkedIn"/>
                    </a>
                    <a href="https://twitter.com/4kprosZ" className="" target="_blank" rel="noreferrer" >
                    <img className="object-contain w-10" src={twitterLogo} alt="Twitter"/>
                    </a>
                </div>
                <div className="w-full flex justify-center mt-8">
                <h3 className="font-bold text-center">
                    Copyright &copy; 2022, Abouar Prosper
                </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
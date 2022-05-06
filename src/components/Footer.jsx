import linkedInLogo from '../images/bxl-linkedin-square.svg'
import twitterLogo from '../images/bxl-twitter.svg'

const Footer = () => {
    return (
        <footer className="w-full mt-20 bg-my-footer-color py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="w-full flex justify-center space-x-8">
                <img className="w-auto h-10 object-contain" src={linkedInLogo} alt="LinkedIn"/>
                <img className="w-auto h-10 object-contain" src={twitterLogo} alt="Twitter"/>
                </div>
                <div className="w-full flex justify-center mt-8">
                <h3 className="font-bold">
                    Copyright &copy; 2022, Abouar Prosper
                </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
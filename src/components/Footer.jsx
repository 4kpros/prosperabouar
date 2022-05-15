import linkedInLogo from '../images/svg/bxl-linkedin-square.svg'
import twitterLogo from '../images/svg/bxl-twitter.svg'
import githubLogo from '../images/svg/bxl-github.svg'

const Footer = () => {
    return (
        <footer className="w-full mt-20 bg-my-footer-color py-8">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="w-full flex justify-center space-x-8">
                    <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="" target="_blank" rel="noreferrer">
                        <img className="object-contain w-10" src={linkedInLogo} alt="LinkedIn"/>
                    </a>
                    <a href="https://twitter.com/4kprosZ" className="" target="_blank" rel="noreferrer" >
                        <img className="object-contain w-10" src={twitterLogo} alt="Twitter"/>
                    </a>
                    <a href="https://github.com/4kpros" className="" target="_blank" rel="noreferrer" >
                        <img className="object-contain w-10" src={githubLogo} alt="Twitter"/>
                    </a>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <p className="text-my-orage-color break-all text-center lg:text-left">
                      <a href="mailto: prosper.abouar@gmail.com" className="">
                          prosper.abouar@gmail.com
                      </a>
                    </p>
                </div>
                <div className="w-full flex justify-center mt-4">
                <h3 className="text-center">
                    Copyright &copy; 2022, Abouar Prosper
                </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
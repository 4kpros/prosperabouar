
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full py-8 text-white">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="w-full flex justify-center items-center space-x-8">
                    <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="" target="_blank" rel="noreferrer">
                        <Image src="/images/svg/others/linkedin.svg" width={35} height={35} objectFit="responsive" alt="linkedin"/>
                    </a>
                    <a href="https://github.com/4kpros" className="" target="_blank" rel="noreferrer" >
                    <Image src="/images/svg/others/github.svg" width={35} height={35} objectFit="responsive" alt="github"/>
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
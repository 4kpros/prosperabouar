
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full pb-8 text-my-text-color">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="w-full flex justify-center items-center space-x-8 mt-4">
                    <Link href={'https://www.linkedin.com/in/prosper-abouar-408089134/'} className="" target="_blank" rel="noreferrer">
                        <Image src="/images/svg/others/linkedin.svg" width={24} height={24} objectFit="responsive" alt="linkedin"/>
                    </Link>
                    <Link href={'https://github.com/4kpros'} className="hidden" target="_blank" rel="noreferrer" >
                        <Image src="/images/svg/others/github.svg" width={24} height={24} objectFit="responsive" alt="github"/>
                    </Link>
                </div>
                <div className="w-full hidden justify-center mt-4">
                    <p className="text-my-main-color break-all text-center lg:text-left">
                      <Link href={'mailto: prosper.abouar@gmail.com'} className="">
                          prosper.abouar@gmail.com
                      </Link>
                    </p>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <p className="text-center text-sm">
                        Copyright &copy;2022, Abouar Prosper
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
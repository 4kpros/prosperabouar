import Image from 'next/image'
import Layout from '../components/Layout'
import useTranslation from 'next-translate/useTranslation'

import { motion } from 'framer-motion'

export default function Home() {
    const { t } = useTranslation('home')
  
    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const salutation = t('salutation')
    const profile = t('profile')

    const heroTitle = t('heroTitle')

    const city = t('city')
    const country = t('country')
    
    const experience = t('experience')

    const expCompany1 = t('expCompany1')
    const expDescription1 = t('expDescription1')

    const programmingLanguages = t('programmingLanguages')

    const technos = t('technos')

    return (
        <Layout title={pageTile} description={pageDescription}>
            <div className="w-full max-w-screen-xl mx-auto md:p-8 text-my-text-color">
                <div className="w-full flex flex-col px-8 py-4">
                    <div className='w-full flex flex-col lg:flex-row lg:space-x-8'>
                        <section className="w-full lg:w-auto py-4">
                            <div className="flex flex-col">
                                <div className="w-full">
                                    <div className="border border-my-main-color">
                                        <img className="w-full h-full object-contain bg-top object-top" width={550} height={800} objectFit="cover" decoding="async" quality="100" priority placeholder="blur" blurDataURL="/images/profile/blur/prosperabouar.webp" src="/images/profile/prosperabouar.webp" alt="Prosper Abouar"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='w-full flex flex-col'>
                            <section className="w-full py-4">
                                <div className="w-full">
                                    <div className="w-full flex flex-col mt-10 lg:mt-0">
                                        <div className="w-full text-xl font-bold">
                                            <h1 className="w-auto text-3xl">
                                                {salutation} <span className="font-extrabold text-my-main-color ml-1">ABOUAR PROSPER</span>
                                            </h1>
                                            <h3 className='w-auto  mt-4'>
                                                {profile}
                                            </h3>
                                        </div>
                                        <p className="mt-2 text-justify">
                                            {heroTitle}
                                        </p>
                                        <div className="w-full flex flex-col lg:flex-row text-sm mt-4">
                                            <div className="w-auto flex items-center lg:mr-4">
                                                <div className="w-auto flex">
                                                    <Image src="/images/svg/others/location.svg" width={16} height={16} objectFit="responsive" alt=""/>
                                                </div>
                                                <p className="w-auto">
                                                    {city}, {country}
                                                </p>
                                            </div>
                                            <a href="mailto: prosper.abouar@gmail.com" className="w-auto flex">
                                                <div className="w-auto flex items-center">
                                                    <Image src="/images/svg/others/gmail.svg" width={16} height={16} objectFit="responsive" alt=""/>
                                                </div>
                                                <p className="w-auto ml-1">
                                                    prosper.abouar@gmail.com
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="w-full">
                                <div className="w-full">
                                    <div className="w-full h-auto">
                                        <h3 className="opacity-50">
                                            {experience}
                                        </h3>
                                        <hr className="w-auto my-2 opacity-10 border-my-text-color"/>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex flex-col">
                                                <div className="w-auto flex">
                                                    <div className="">
                                                        <Image src="/images/svg/companies/IREX-Brand.svg" width={50} height={50} objectFit="responsive" alt=""/>
                                                    </div>
                                                    <div className="w-auto flex flex-col ml-2">
                                                        <h3 className="w-auto font-bold">
                                                            {expCompany1}
                                                        </h3>
                                                        <p className="w-auto">
                                                            {expDescription1}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="w-full my-4">
                                <div className="w-full">
                                    <h3 className="opacity-50">
                                        {programmingLanguages}
                                    </h3>
                                    <hr className="w-auto my-2 opacity-10 border-my-text-color"/>
                                    <div className="w-full flex flex-wrap">
                                        <div className="rw-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/csharp.svg" width={50} height={40} objectFit="responsive" alt="csharp"/>
                                        </div>
                                        <div className="w-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/cpp.svg" width={50} height={40} objectFit="responsive" alt="cpp"/>
                                        </div>
                                        <div className="w-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/python.svg" width={50} height={40} objectFit="responsive" alt="python"/>
                                        </div>
                                        <div className="w-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/java.svg" width={50} height={40} objectFit="responsive" alt="java"/>
                                        </div>
                                        <div className="w-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/javascript.svg" width={50} height={40} objectFit="responsive" alt="javascript"/>
                                        </div>
                                        <div className="w-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/html.svg" width={50} height={40} objectFit="responsive" alt="html"/>
                                        </div>
                                        <div className="w-auto block mr-2">
                                            <Image src="/images/svg/proglanguages/css.svg" width={50} height={40} objectFit="responsive" alt="css"/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="w-full">
                                <div className="w-full">
                                    <div className="w-full h-auto">
                                        <h3 className="opacity-50">
                                            {technos}
                                        </h3>
                                        <hr className="w-auto my-2 opacity-10 border-my-text-color"/>
                                        <div className="w-full flex flex-wrap">
                                            <div className="rw-auto block mr-2">
                                                <Image src="/images/svg/tech/dotnet.svg" width={50} height={40} objectFit="responsive" alt="dotnet"/>
                                            </div>
                                            <div className="w-auto block mr-2">
                                                <Image src="/images/svg/tech/django.svg" width={50} height={40} objectfit="responsive" alt="django"/>
                                            </div>
                                            <div className="w-auto block mr-2">
                                                <Image src="/images/svg/tech/reactjs.svg" width={50} height={40} objectfit="responsive" alt="reactjs"/>
                                            </div>
                                            <div className="w-auto block mr-2">
                                                <Image src="/images/svg/tech/android.svg" width={50} height={40} objectfit="responsive" alt="android"/>
                                            </div>
                                            <div className="w-auto block mr-2 hidden">
                                                <Image src="/images/svg/tech/nodejs.svg" width={50} height={40} objectfit="responsive" alt="nodejs"/>
                                            </div>
                                            <div className="w-auto block mr-2">
                                                <Image src="/images/svg/tech/firebase.svg" width={50} height={40} objectfit="responsive" alt="firebase"/>
                                            </div>
                                            <div className="w-auto block mr-2">
                                                <Image src="/images/svg/tech/azure.svg" width={50} height={40} objectfit="responsive" alt="azure"/>
                                            </div>
                                            <div className="w-auto block mr-2 hidden">
                                                <Image src="/images/svg/tech/sqlserver.svg" width={50} height={40} objectfit="responsive" alt="sqlserver"/>
                                            </div>
                                            <div className="w-auto block mr-2 hidden">
                                                <Image src="/images/svg/tech/mongodb.svg" width={50} height={40} objectfit="responsive" alt="mongodb"/>
                                            </div>
                                            <div className="w-auto block mr-2">
                                                <Image src="/images/svg/tech/mysql.svg" width={50} height={40} objectfit="responsive" alt="mysql"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

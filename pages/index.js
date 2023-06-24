import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog, Transition } from '@headlessui/react'

import Layout from '../components/Layout'
import ProjectItem from '../components/cards/ProjectItem'
import Footer from '../components/Footer'

export default function Home() {
    const { t } = useTranslation('home')
  
    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const profile = t('profile')
    const userName = 'Abouar Prosper'

    const heroTitle = t('heroTitle')

    const city = t('city')
    const country = t('country')
    
    const experiences = t('experiences')

    const expCompany1 = t('expCompany1')
    const expDescription1 = t('expDescription1')

    const programmingLanguages = t('programmingLanguages')
  
    const noneProject = t('noneProject')

    const technos = t('technos')

    const projectsTitle = t('projectsTitle')
    
    const projectsCount = 3

    //For text animation
    const sentenseAnim = {
        hidden: { 
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    }
    const letterAnim = {
        hidden: { 
            opacity: 0, 
        },
        visible: {
            opacity: 1,
        },
    }

    let [isOpen, setIsOpen] = useState(false)
    let [currentProject, setCurrentProject] = useState(0)

    function closeModal() {
      setIsOpen(false)
    }
    function openModal(index) {
        setCurrentProject(index)
      setIsOpen(true)
    }

    const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, []);
    return (
        <Layout title={pageTile} description={pageDescription}>
            <>
                <div ref={inputReference} className='w-full overflow-y-auto overflow-x-hidden my-perspective'>
                    <div className='w-full h-screen relative z-10 transition-transform duration-500 my-transform-perspective'>
                        <AnimatePresence
                            initial={true}
                        >
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, duration: 0.1, }}
                                exit={{ opacity: 0 }}
                                className='w-full h-screen absolute top-0 right-0 bottom-0 left-0 -z-20 bg-bodybackground bg-no-repeat bg-cover bg-center my-translate-z-300'
                            >
                                <div className='w-full h-full bg-gradient-to-b from-white/0 to-white'></div>
                            </motion.div>
                        </AnimatePresence>

                        <div className='w-full h-screen absolute top-0 right-0 bottom-0 left-0 -z-10 my-translate-z-0'>
                            <div className="w-full max-w-screen-xl mx-auto px-8 py-10 xl:px-0 text-my-text-color">
                                <h2 className="w-auto text-center mx-auto font-semibold pb-6 text-black/30 underline underline-offset-4">
                                    {pageTile}
                                </h2>
                                <div className='w-full grid grid-cols-1 md:grid-cols-6 gap-6 mt-4'>
                                    <AnimatePresence
                                        initial={true}
                                    >
                                        <motion.div
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut",
                                            }}
                                            initial={{ 
                                                opacity: 0,
                                                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.1)",
                                            }}
                                            animate={{ opacity: 1, }}
                                            whileHover={{ 
                                                scale: 1.025,
                                            }}
                                            whileTap={{ 
                                                scale: 1.01,
                                            }}
                                            className='w-full h-[500px] xs:h-[720px] md:h-full bg-black/5 border border-my-main-color bg-prosperabouar bg-no-repeat bg-cover bg-center col-span-6 md:col-span-3 lg:col-span-2'
                                            >
                                        </motion.div>
                                    </AnimatePresence>
                                    <div className='w-full flex flex-col col-span-6 md:col-span-3 lg:col-span-4'>
                                        <div className="w-full">
                                            <div className="w-full flex flex-col mt-10 lg:mt-0">
                                                <div className="w-full text-xl font-bold">
                                                    <motion.h1
                                                        variants={sentenseAnim}
                                                        initial='hidden'
                                                        animate='visible'
                                                        className="w-auto text-3xl"
                                                        >
                                                        {
                                                            userName.split("").map((char, index) => {
                                                                return (
                                                                    <motion.span
                                                                        key={char+ '-' + index}
                                                                        variants={letterAnim}
                                                                        className='font-extrabold text-black/30 uppercase'
                                                                        >
                                                                        {char}
                                                                    </motion.span>
                                                                )
                                                            })
                                                        }
                                                    </motion.h1>
                                                    <motion.h3
                                                        variants={sentenseAnim}
                                                        initial='hidden'
                                                        animate='visible'
                                                        className="w-auto text-3xl mt-2"
                                                        >
                                                        {
                                                            profile.split("").map((char, index) => {
                                                                return (
                                                                    <motion.span
                                                                        key={char+ '-' + index}
                                                                        variants={letterAnim}
                                                                        >
                                                                        {char}
                                                                    </motion.span>
                                                                )
                                                            })
                                                        }
                                                    </motion.h3>
                                                </div>
                                                <p className="mt-2 text-justify">
                                                    {heroTitle}
                                                </p>
                                                <div className="w-full flex flex-col lg:flex-row text-sm mt-4">
                                                    <div className="w-auto flex items-center lg:mr-4">
                                                        <div className="w-auto flex mr-0.5">
                                                            <Image 
                                                                src="/images/svg/others/location.svg" 
                                                                width={16} 
                                                                height={16} 
                                                                alt="location"
                                                                className='w-4 h-4 object-contain'
                                                            />
                                                        </div>
                                                        <p className="w-auto">
                                                            {city}, {country}
                                                        </p>
                                                    </div>
                                                    <Link 
                                                        href={'mailto: prosper.abouar@gmail.com'} 
                                                        className="w-auto flex"
                                                        >
                                                        <div className="w-auto flex items-center mr-0.5">
                                                            <Image 
                                                                src="/images/svg/others/gmail.svg" 
                                                                width={16} 
                                                                height={16} 
                                                                alt="gmail"
                                                                className='w-4 h-4 object-contain'
                                                            />
                                                        </div>
                                                        <p className="w-auto ml-1">
                                                            prosper.abouar@gmail.com
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full pt-4">
                                            <div className="w-full h-auto">
                                                <h3 className="opacity-50">
                                                    {experiences}
                                                </h3>
                                                <hr className="w-auto my-2 opacity-10 border-my-text-color"/>
                                                <div className="w-full flex flex-col">
                                                    <div className="w-full flex flex-col">
                                                        <div className="w-auto flex items-center">
                                                            <div className="">
                                                                <Image 
                                                                    src="/images/svg/companies/IREX-Brand.svg" 
                                                                    alt="IREX-Brand"
                                                                    width={50} 
                                                                    height={40} 
                                                                    style={{height: '40px'}}
                                                                    />
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
                                        <div className="w-full pt-4">
                                            <h3 className="opacity-50">
                                                {programmingLanguages}
                                            </h3>
                                            <hr className="w-auto my-2 opacity-10 border-my-text-color"/>
                                            <div className="w-full flex flex-wrap items-center">
                                                <motion.div
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeInOut",
                                                    }}
                                                    initial={{ scale: 1}}
                                                    whileHover={{ scale: 1.2}}
                                                    whileTap={{ scale: 0.1 }}
                                                    className='block mr-2'
                                                    >
                                                    <Image 
                                                        src="/images/svg/proglanguages/csharp.svg" 
                                                        alt="csharp"
                                                        width={50} 
                                                        height={40} 
                                                        style={{height: '40px'}}
                                                        className='object-contain'
                                                        />
                                                </motion.div>
                                                <motion.div
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeInOut",
                                                    }}
                                                    initial={{ scale: 1}}
                                                    whileHover={{ scale: 1.2}}
                                                    whileTap={{ scale: 0.1 }}
                                                    className='block mr-2'
                                                    >
                                                    <Image 
                                                        src="/images/svg/proglanguages/python.svg" 
                                                        alt="python"
                                                        width={50} 
                                                        height={40} 
                                                        style={{height: '40px'}}
                                                        className='object-contain'
                                                        />
                                                </motion.div>
                                                <motion.div
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeInOut",
                                                    }}
                                                    initial={{ scale: 1}}
                                                    whileHover={{ scale: 1.2}}
                                                    whileTap={{ scale: 0.1 }}
                                                    className='block mr-2'
                                                    >
                                                    <Image 
                                                        src="/images/svg/proglanguages/java.svg" 
                                                        alt="java"
                                                        width={50} 
                                                        height={40} 
                                                        style={{height: '40px'}}
                                                        className='object-contain'
                                                        />
                                                </motion.div>
                                                <motion.div
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeInOut"
                                                    }}
                                                    initial={{ scale: 1}}
                                                    whileHover={{ scale: 1.2}}
                                                    whileTap={{ scale: 0.1 }}
                                                    className='block mr-2'
                                                    >
                                                    <Image 
                                                        src="/images/svg/proglanguages/javascript.svg" 
                                                        alt="javascript"
                                                        width={50} 
                                                        height={40} 
                                                        style={{height: '40px'}}
                                                        className='object-contain'
                                                        />
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="w-full pt-4">
                                            <div className="w-full h-auto">
                                                <h3 className="opacity-50">
                                                    {technos}
                                                </h3>
                                                <hr className="w-auto my-2 opacity-10 border-my-text-color"/>
                                                <div className="w-full flex flex-wrap items-center">
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/dotnet.svg" 
                                                            alt="dotnet"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/django.svg" 
                                                            alt="django"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/android.svg" 
                                                            alt="android"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/reactjs.svg" 
                                                            alt="reactjs"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/jenkins.svg" 
                                                            alt="jenkins"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/azure.svg" 
                                                            alt="azure"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                        initial={{ scale: 1}}
                                                        whileHover={{ scale: 1.2}}
                                                        whileTap={{ scale: 0.1 }}
                                                        className='block mr-2'
                                                        >
                                                        <Image 
                                                            src="/images/svg/tech/postgresql.svg" 
                                                            alt="postgresql"
                                                            width={50} 
                                                            height={40} 
                                                            style={{height: '40px'}}
                                                            className='object-contain'
                                                            />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-full mt-16">
                                    <h2 className="w-auto text-center mx-auto font-semibold pb-6 text-black/30 underline underline-offset-4">
                                        {projectsTitle}
                                    </h2>
                                    {
                                        projectsCount > 0 ?
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40 mt-4">
                                                {
                                                    [...Array(projectsCount)].map(
                                                        (x, index) => 
                                                            <ProjectItem key={index} index={index} openModal={openModal}/>
                                                    )
                                                }
                                            </div>
                                        :
                                            <p className="text-my-gray-color mt-4">
                                                {noneProject}
                                            </p>
                                    }
                                </div>
                                <div className="w-full relative my-translate-z-0">
                                    <div className='w-full absolute -z-10 -bottom-36 lg:-bottom-72'>
                                        <Footer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95 top-100"
                            enterTo="opacity-100 scale-100 top-0"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg text-center font-bold leading-6 text-gray-900"
                                >
                                    {t('common:projectsList.' + currentProject + '.name')}
                                </Dialog.Title>
                                <div className='w-auto'>
                                    <AnimatePresence
                                        initial={true}
                                    >
                                        <motion.div
                                            transition={{
                                                duration: 0.2,
                                                // ease: "easeInOut",
                                                // ease: [0.5, 0.71, 1, 1.5],
                                                ease: [0.17, 0.67, 0.83, 0.67],
                                            }}
                                            initial={{ scale: .75, y: -25, opacity: 0, }}
                                            animate={{ scale: 1, y: 0, opacity: 1, }}
                                            exit={{ scale: .75, y: 25, opacity: 0, }}
                                        >
                                            <Image 
                                                width={800} 
                                                height={435}
                                                quality={100}
                                                placeholder="blur" 
                                                blurDataURL={t('common:projectsList.' + currentProject + '.cover_art')} 
                                                src={t('common:projectsList.' + currentProject + '.cover_art')} 
                                                alt={t('common:projectsList.' + currentProject + '.name')}
                                                className="w-full h-fill object-cover object-top shadow-md mt-4" 
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                    <div className="w-full mt-4">
                                        <p className="w-auto opacity-70">
                                            {
                                                t('common:projectsList.' + currentProject + '.tools')
                                            }
                                        </p>
                                    </div>
                                    <div className='w-full mt-4 opacity-50'>
                                        {
                                            t('common:projectsList.' + currentProject + '.content')
                                        }
                                    </div>
                                    <div className="w-full flex flex-wrap justify-between mt-2">
                                        <Link href={t('common:projectsList.' + currentProject + '.link') ? t('common:projectsList.' + currentProject + '.link') : '#'} target="_blank" rel="noreferrer" className="w-auto truncate ... underline hover:text-my-main-color mr-4">
                                            {
                                                t('common:projectsList.' + currentProject + '.link') ?
                                                    t('common:visitProject')
                                                :
                                                    ``
                                            }
                                        </Link>
                                        <button 
                                            type='button' 
                                            onClick={() => closeModal()}
                                            className='truncate ... underline hover:text-my-main-color'
                                            >
                                            {t('common:close')}
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>
            </>
        </Layout>
    )
}

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import emailjs from '@emailjs/browser';
import { isEmail, isEmpty } from 'validator'
import { toast } from 'react-toastify';
import { LazyMotion, domAnimation, m } from 'framer-motion'

import Layout from '../components/Layout'
import LoadingSpinner from '../components/others/LoadingSpinner'

import 'react-toastify/dist/ReactToastify.css';

const title = 'Accueil'
const subtitle = "Bienvenue sur mon site web personnel. Vous découvrirez ici qui je suis, mes compétences et les projets sur lesquels j'ai travaillé récemment. Si vous êtes intéressés par mes services, n'hésitez pas à me contacter. Merci pour votre temps de lecture et prenez soins de vous."

export default function Home({ router }) {
  const nextRouter = useRouter()
  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const [nameError, setNameError] = useState()
  const [emailError, setEmailError] = useState()
  const [messageError, setMessageError] = useState()

  const [loadingContact, setLoadingContact] = useState(false)

  const notifySuccess = () => {
    toast.success('Message envoyé.')
  }
  
  const notifyError = () => {
    toast.error('Erreur d\'envoie !')
  }
  const form = useRef()

  const checkInputs = () => {
    var result = false
    if(name && !isEmpty(name) && name.length > 3){
      setNameError()
      result = true
    }else{
      setNameError("Veillez saisir un nom de 3 caractères minimum !")
      result = false
    }
    if(email && !isEmpty(email) && isEmail(email)){
      setEmailError()
      result = true
    }else{
      setEmailError("Veillez saisir un email correct !")
      result = false
    }
    if(message && message.length > 20){
      setMessageError()
      result = true
    }else{
      setMessageError("Veillez saisir un message de 20 caractères minimum !")
      result = false
    }
    return result
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if(checkInputs()){
      setLoadingContact(true)
      emailjs.sendForm(
          process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID, // Service ID
          process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID, // Template ID
          form.current, 
          process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY // Public Key
        )
        .then((result) => {
            notifySuccess()
            nextRouter.push('/congratulations')
        }, (error) => {
            notifyError()
            setLoadingContact(false)
        });
    }
  };

  return (
    <Layout title={title} description={subtitle}>
      <div className="w-full text-white">
        <section className="w-full flex flex-row">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center lg:flex-row lg:space-x-8 pt-12">
              <div className="bg-transparent w-3/4 h-3/4">
                <LazyMotion features={domAnimation}>
                  <m.div
                    className="border border-my-orage-color"
                    whileHover={{scale:1.025}}
                  >
                    <Image className="w-full h-full object-contain m-0 p-0" width={1818} height={2518} objectFit="cover" layout="responsive" priority placeholder="blur" blurDataURL="/images/profile/prosperabouar.webp" src="/images/profile/prosperabouar.webp" alt="Prosper Abouar"/>
                  </m.div>
                </LazyMotion>
              </div>
              <div className="w-full flex items-center mt-10 lg:mt-0">
                <div className="">
                  <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                    Salut, Je suis <span className="font-extrabold text-my-orage-color text-3xl md:text-5xl ml-2">ABOUAR PROSPER</span>
                    <br/>Développeur web
                  </h1>
                  <p className="text-xl mt-8 text-center lg:text-justify">
                    Adepte de l’amélioration de l’expérience utilisateur et des performances dans le domaine du développement d&apos;applications, ma passion pour ce secteur me pousse chaque jour à me surpasser.
                  </p>
                  <p className="text-xl mt-2 text-center lg:text-justify">
                    Je suis principalement développeur front-end ayant de grosses connaissances en développement backend et mobile.
                  </p>
                  <p className="text-xl mt-2 text-center lg:text-justify">
                    Contactez moi pour une collaboration.
                  </p>
                  <p className="text-my-orage-color break-all text-xl mt-8 text-center lg:text-left">
                    <a href="mailto: prosper.abouar@gmail.com" className="">
                        prosper.abouar@gmail.com
                    </a>
                  </p>
                  <div className="flex justify-center lg:justify-start mt-8 space-x-8">
                    <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="" target="_blank" rel="noreferrer">
                      <Image className="object-contain w-10" width={40} height={40} objectFit="contain" placeholder="blur" blurDataURL="/images/svg/socialmedia/bxl-linkedin-square.svg" src="/images/svg/socialmedia/bxl-linkedin-square.svg" alt="LinkedIn"/>
                    </a>
                    <a href="https://twitter.com/4kprosZ" className="" target="_blank" rel="noreferrer" >
                      <Image className="object-contain w-10" width={40} height={40} objectFit="contain" placeholder="blur" blurDataURL="/images/svg/socialmedia/bxl-twitter.svg" src="/images/svg/socialmedia/bxl-twitter.svg" alt="Twitter"/>
                    </a>
                    <a href="https://github.com/4kpros" className="" target="_blank" rel="noreferrer" >
                      <Image className="object-contain w-10" width={40} height={40} objectFit="contain" placeholder="blur" blurDataURL="/images/svg/socialmedia/bxl-github.svg" src="/images/svg/socialmedia/bxl-github.svg" alt="GitHub"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pt-20">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold underline underline-offset-8">
              Liens utiles
            </h2>
            <p className="text-center text-xl mt-12">
              Pour en savoir plus sur moi, veillez cliquer sur <Link href={`/about`} className="text-my-orage-color underline">ce lien.</Link>
            </p>
            <p className="text-center text-xl mt-4">
              Une page qui contient mes projets récents est disponible à <Link href={`/portfolio`} className="text-my-orage-color underline">cette adresse.</Link>
            </p>
            <p className="text-center hidden text-xl mt-4">
              J ai également un mini blog qui contient mes publications concernant le développement d’applications et l entreprenariat. Pour voir mes publications, 
                Veillez cliquer sur <Link href={`/blog`} className="text-my-orage-color underline">ce lien.</Link>
            </p>
          </div>
        </section>
        <section className="w-full pt-20">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold underline underline-offset-8">
              Contact
            </h2>
            <form ref={form} onSubmit={sendEmail} className="w-full mt-12 flex flex-col items-center">
              
              <div className="w-full lg:w-1/2  flex flex-col items-center mt-4">
                <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                  Email
                </label>
                <input onChange={(e) => setEmail(e.target.value)} name="user_email" className="w-full mt-2 h-12 px-5 text-black text-xl" type="email" id="input-email" placeholder="Votre adresse mail"/>
                <div className="w-full mt-2 text-red-400">
                  {
                    emailError
                  }
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col mt-4">
                <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                  Nom complet
                </label>
                <input onChange={(e) => setName(e.target.value)} name="user_name" className="w-full mt-2 h-12 px-5 text-black text-xl" type="name" id="input-name" placeholder="Votre nom"/>
                <div className="w-full mt-2 text-red-400">
                  {
                    nameError
                  }
                </div>
              </div>
              <div className="w-full lg:w-1/2  flex flex-col items-center mt-4">
                <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                  Message
                </label>
                <textarea onChange={(e) => setMessage(e.target.value)} name="message" className="w-full mt-2 h-32 px-5 py-2 text-black text-xl" id="input-message" placeholder="Votre message"/>
                <div className="w-full mt-2 text-red-400">
                  {
                    messageError
                  }
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-12">
                {
                  loadingContact ?
                    <div>
                      <LoadingSpinner/>
                    </div>
                  :
                    <button type="submit" value="Send" className="text-lg text-black font-bold bg-my-orage-color px-6 py-2 text-center focus:outline-none">
                      Envoyer
                    </button>
                }
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}

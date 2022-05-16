import { useState, useEffect, useRef, createRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { isEmail, isEmpty } from 'validator'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Footer from '../components/Footer';
import Navbar from '../components/Nabar';
import LoadingSpinner from '../components/others/LoadingSpinner'

import abouarprosper from '../images/profile/prosperabouar.webp';
import linkedInLogo from '../images/svg/bxl-linkedin-square.svg';
import twitterLogo from '../images/svg/bxl-twitter.svg';
import githubLogo from '../images/svg/bxl-github.svg';


const Home = () => {

  document.title = 'Abouar Prosper, développeur web & mobile';

  let navigate = useNavigate();

  const recaptchaRef = createRef();
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();
  const [recaptchaError, setRecaptchaError] = useState();

  const [loadingContact, setLoadingContact] = useState(false);

  const notifySuccess = () => {
    toast.success('Message envoyé.');
  };
  
  const notifyError = () => {
    toast.error('Erreur d\'envoie !');
  };
  const form = useRef();

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
      if(recaptchaRef.current.getValue()){
        setRecaptchaError()
        setLoadingContact(true)
        emailjs.sendForm(
            process.env.REACT_APP_MAILJS_SERVICE_ID, // Service ID
            process.env.REACT_APP_MAILJS_TEMPLATE_ID, // Template ID
            form.current, 
            process.env.REACT_APP_MAILJS_PUBLIC_KEY // Public Key
          )
          .then((result) => {
              // console.log(result.text)
              notifySuccess()
              setLoadingContact(false)
              if(recaptchaRef && recaptchaRef.current)
                recaptchaRef.current.reset()
              navigate('/congratulations')
          }, (error) => {
              // console.log(error.text)
              notifyError()
              setLoadingContact(false)
              if(recaptchaRef && recaptchaRef.current)
                recaptchaRef.current.reset()
                navigate('/#')
          });
      }else{
        setRecaptchaError("Veillez valider le recaptcha !")
        setLoadingContact(false)
      }
    }
  };

  function onChange(value) {
    if(value !== null){
      setRecaptchaError()
    }else{
      setRecaptchaError("Veillez valider le recaptcha !")
    }
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <>
        <div className="w-full text-white">
          <section className="w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <Navbar selectedNavItem='Home'/>
              <div className="flex flex-col items-center lg:flex-row lg:space-x-8 pt-12">
                <div className="bg-transparent w-3/4 h-3/4">
                  <img className="w-full h-full object-contain m-0 p-0" src={abouarprosper} alt="Prosper Abouar"/>
                </div>
                <div className="w-full flex items-center mt-10 lg:mt-0">
                  <div className="">
                    <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                      Salut, Je suis <span className="font-extrabold text-my-orage-color text-3xl md:text-5xl ml-2">ABOUAR PROSPER</span>
                      <br/>Développeur web
                    </h1>
                    <p className="text-xl mt-8 text-center lg:text-justify">
                      Adepte de l’amélioration de l’expérience utilisateur et des performances dans le domaine du développement d'applications, ma passion pour ce secteur me pousse chaque jour à me surpasser.
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
                        <img className="object-contain w-10" src={linkedInLogo} alt="LinkedIn"/>
                      </a>
                      <a href="https://twitter.com/4kprosZ" className="" target="_blank" rel="noreferrer" >
                        <img className="object-contain w-10" src={twitterLogo} alt="Twitter"/>
                      </a>
                      <a href="https://github.com/4kpros" className="" target="_blank" rel="noreferrer" >
                        <img className="object-contain w-10" src={githubLogo} alt="Twitter"/>
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
                Pour en savoir plus sur moi, veillez cliquer sur <Link to={`/about`} className="text-my-orage-color underline">ce lien.</Link>
              </p>
              <p className="text-center text-xl mt-4">
                Une page qui contient mes projets récents est disponible à <Link to={`/portfolio`} className="text-my-orage-color underline">cette adresse.</Link>
              </p>
              <p className="text-center hidden text-xl mt-4">
                J'ai également un mini blog qui contient mes publications concernant le développement d’applications et l'entreprenariat. Pour voir mes publications, 
                 Veillez cliquer sur <Link to={`/blog`} className="text-my-orage-color underline">ce lien.</Link>
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
                  <input onChange={(e) => setEmail(e.target.value)} name="user_email" className="w-full mt-2 h-12 px-5 text-black text-xl" type="email" id="input-name" placeholder="Votre adresse mail"/>
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
                  <textarea onChange={(e) => setMessage(e.target.value)} name="message" className="w-full mt-2 h-32 px-5 py-2 text-black text-xl" id="input-name" placeholder="Votre message"/>
                  <div className="w-full mt-2 text-red-400">
                    {
                      messageError
                    }
                  </div>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="w-full flex flex-col items-center my-8">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
                      onChange={onChange}
                    />
                    <div className="w-full mt-2 text-center text-red-400">
                      {
                        recaptchaError
                      }
                    </div>
                  </div>
                  {
                    loadingContact ?
                      <LoadingSpinner/>
                    :
                      <button type="submit" value="Send" className="text-lg text-black font-bold bg-my-orage-color px-6 py-2 text-center focus:outline-none">
                        Envoyer
                      </button>
                  }
                </div>
              </form>
            </div>
          </section>
          <Footer/>
        </div>
      </>
  );
};

export default Home;
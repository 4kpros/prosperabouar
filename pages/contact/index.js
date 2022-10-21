import { useState, useRef } from 'react';
import { useRouter } from 'next/router'

import emailjs from '@emailjs/browser';
import { isEmail, isEmpty } from 'validator'
import { toast } from 'react-toastify';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/others/LoadingSpinner';

import 'react-toastify/dist/ReactToastify.css';

const title = 'Contact'
const subtitle = "Formulaire de contact"

export default function Contact({ router }) {
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
        <section className="w-full pt-20">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold underline underline-offset-8">
              Formulaire de contact
            </h2>
            <form ref={form} onSubmit={sendEmail} className="w-full mt-12 flex flex-col items-center">
              
              <div className="w-full lg:w-1/2  flex flex-col items-center mt-4">
                <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                  Email
                </label>
                <input onChange={(e) => setEmail(e.target.value)} name="user_email" className="w-full mt-2 h-12 px-5 text-black text-xl" type="email" id="input-email"/>
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
                <input onChange={(e) => setName(e.target.value)} name="user_name" className="w-full mt-2 h-12 px-5 text-black text-xl" type="name" id="input-name"/>
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
                <textarea onChange={(e) => setMessage(e.target.value)} name="message" className="w-full mt-2 h-32 px-5 py-2 text-black text-xl" id="input-message"/>
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

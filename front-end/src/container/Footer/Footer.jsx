import React, {useState} from 'react'

import { AppWrap, MotionWrap } from '../../Wrapper'
import { client } from '../../sanity_client'
import {images} from '../../constants'

import './Footer.scss'


const Footer = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData
  const handleOnChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
      <h2 className='head-text'>
        Take a coffe & chat with me  
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:sokcheanith@ros.com' className='p-text'>
              sokcheanith@ros.com
          </a>  
        </div>  
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel:+855 93256184' className='p-text'>
              +855 93256184
          </a>  
        </div>  
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input 
              className='p-text' 
              type='text' 
              placeholder='your name' 
              value={name}
              onChange={handleOnChangeInput}
              name='name'
            />  
          </div>
          <div className='app__flex'>
            <input 
              className='p-text' 
              type='text' 
              placeholder='your email' 
              value={email}
              onChange={handleOnChangeInput}
              name='email'
            />  
          </div>
          <div>
            <textarea 
              className='p-text'
              placeholder='your message'
              name='message'
              value={message}
              onChange={handleOnChangeInput}
            >
            </textarea>
          </div>
          <button 
            type='button' 
            className='p-text' 
            onClick={handleSubmit}
          >
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ): (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'contact', 
  'app__whitebg'
)
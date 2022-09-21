import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FcAbout } from 'react-icons/fc';
import { IoWarning } from 'react-icons/io5';
import './ContactMe.css';
import { Alert } from '@mui/material';

const ContactMe = () => {
    const [error, setError] = useState('');
    const [emailSent, setEmailSent] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target.name.value === '' || e.target.email.value === '' || e.target.mobile.value === '' || e.target.message.value === '') {
            setError('All fields are required!');
            setTimeout(() => {
                setError('')
            }, 2000);
        }
        else {
            emailjs.sendForm('service_k6k230x', 'template_0jenayi', e.target, 'Ih31jn0u_Hz75l1Jy')
                .then((result) => {
                    if(result?.text === 'OK'){
                        setEmailSent('Email successfully sent.')
                        setTimeout(() => {
                            setEmailSent('')
                        }, 2000);
                    }
                    setError('');
                    e.target.name.value = '';
                    e.target.email.value = '';
                    e.target.mobile.value = '';
                    e.target.message.value = '';
                }, (error) => {
                    setError(error.text);
                });
        }
    }
    return (
        <div id='contact'>
            <div className="d-flex justify-content-center align-items-center pb-3">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="text-center"><h2 className='feedback'>Contact Us <FcAbout className="text-danger mb-2" /></h2></div>
                    {
                        emailSent && <Alert severity='success'>{emailSent}</Alert>
                    }
                    {
                        error && <p className='error-msg'><IoWarning className='mb-1'/> {error}</p>
                    }
                    <input className="form-input" type="text" placeholder="Full name" name="name" /> <br />
                    <input className="form-input" type="email" placeholder="Email" name="email" /> <br />
                    <input className="form-input" type="text" placeholder="Mobile no." name="mobile" /> <br />
                    <textarea className="form-textarea" placeholder="Type message" name="message" /> <br />
                    
                    
                    <input className="send-form" type="submit" value='Send' />
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
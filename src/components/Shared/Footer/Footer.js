import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Tooltip, Zoom } from '@mui/material';

const Footer = () => {
    const fullYear = new Date().getFullYear();
    return (
        <div className='bg-dark py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-12 d-flex flex-column my-2'>
                                <Link className='footer-links' to='/'>Terms & Conditions</Link>
                                <Link className='footer-links' to='/'>Privacy Policy</Link>
                                <Link className='footer-links' to='/'>Contact Us</Link>
                                <Link className='footer-links' to='/'>FAQ</Link>
                                <Link className='footer-links' to='/'>Cookies Policy</Link>
                                <Link className='footer-links' to='/'>About</Link>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 d-flex flex-column my-2'>
                                <h5 className='text-white'>Our Address</h5>
                                <p className='footer-address'>113/C, Hospital road <br /> Savar, Asulia <br /> Dhaka-1341</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center my-2'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Tooltip title="Facebook" placement="top-start" TransitionComponent={Zoom} arrow>
                                <a href="https://www.facebook.com/joy.nath.311493" target='-blank'><BsFacebook className='footer-icon' /></a>
                            </Tooltip>
                            <Tooltip title="Messenger" placement="top-start" TransitionComponent={Zoom} arrow>
                                <a href="https://www.messenger.com/t/100015719253584/" target='-blank'><BsMessenger className='footer-icon' /></a>
                            </Tooltip>
                            <Tooltip title="Whatsapp" placement="top-start" TransitionComponent={Zoom} arrow>
                                <Link to='/'><BsWhatsapp className='footer-icon' /></Link>
                            </Tooltip>
                            <Tooltip title="Telegram" placement="top-start" TransitionComponent={Zoom} arrow>
                                <a href="https://t.me/hyipmonitorX" target='-blank'><BsTelegram className='footer-icon' /></a>
                            </Tooltip>
                            <Tooltip title="LinkedIn" placement="top-start" TransitionComponent={Zoom} arrow>
                                <a href="https://www.linkedin.com/in/joy-debnath-1b85b1230/" target='-blank'><BsLinkedin className='footer-icon' /></a>
                            </Tooltip>
                            <Tooltip title="Instagram" placement="top-start" TransitionComponent={Zoom} arrow>
                                <a href="https://www.instagram.com/joydebnath_jp/" target='-blank'><BsInstagram className='footer-icon' /></a>
                            </Tooltip>
                        </div>
                        <div className='text-white mt-4'>Copyright © {fullYear}. All right reserved by the owner.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
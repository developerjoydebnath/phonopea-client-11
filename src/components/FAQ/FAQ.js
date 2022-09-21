import React from 'react';
import './FAQ.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';

const FAQ = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className='text-center about-us font-effect-shadow-multiple'>FAQ</h2>
            <h5 className='text-center mb-3'>(Frequently Asked Questions)</h5>
            <div className='faq-container'>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>1. How do I open an account?</Accordion.Header>
                        <Accordion.Body>
                            You can create an account from signup page. Just go to <Link to={'/signup'}>Sign Up</Link> page and give name, email address, password  ( note: password must contain small letter, capital letter, number and special character ) and accept the terms & condition and submit then.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>2. How do I add a new phone?</Accordion.Header>
                        <Accordion.Body>
                            Just go to <Link to={'/addPhone'}>Add Phone</Link> section and you can add from their. Give phone name, brand name, price, quantity, supplier name, photoUrl and description of the phone in add phone page. your phone will be added immediately.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. How do I find a phone?</Accordion.Header>
                        <Accordion.Body>
                            To find a phone it is very simple. just go the searchbar of the navbar and enter the phone name you want to see and search it. All matching result will be displayed in a modal. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. Didn't get your answer, Still you have question?</Accordion.Header>
                        <Accordion.Body>
                            If you didn't got your suitable answer till now you can contact with us with contact us form. Just give email, name and phone number and type your question and sent it. Out team will contact with you.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
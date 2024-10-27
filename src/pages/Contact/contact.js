import { useRef } from "react";
import './contact.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const refForm = useRef();
    const serviceId = "service_ec5kbb4";
    const templateId = "template_r06jj0a";
    const publicKey = "uoZz6rRYRGGSOUYhf";
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(refForm.current);
        console.log(e);
        emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
            .then(
                () => {
                    alert('Message sent successfully');
                    navigate('/');
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            )
    }
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form ref={refForm} className="form" onSubmit={sendEmail}>

                <input id="if" type='text' name='name' placeholder='name' required />

                <input type='email' id="if" name='email' placeholder='Email' required />

                <input id="if" type='text' name='subject' placeholder='Subject' required />

                <textarea id="if" placeholder='message' name='message' required></textarea>

                <input id="submit" type='submit' className='flat-button' value="SEND" />

            </form>

        </div>
    )
};
export default Contact;
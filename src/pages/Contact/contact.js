import { useRef } from "react";
import './contact.css';
const Contact = () => {
    const refForm = useRef();
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form ref={refForm} className="form">

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
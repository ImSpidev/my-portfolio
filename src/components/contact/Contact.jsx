import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

import './Contact.css';


export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h1 className="small-title cyberpunk-text">CONTACT</h1>
            <p className="contact-description">
                Either you have an inquiry about a potential project, 
                <br/>
                a question about programming or whatever pops into your mind, drop me a message and 
                I will get back to you as soon as possible. 
            </p>
            <p className="contact-references">
                spidev.cto@gmail.com || spidev.net
            </p>
            <div className="social-media-icons">
                <a href="https://www.linkedin.com/in/charlyarreola/" target='_blank' className="link">
                    <FaLinkedin className="linkedin"/>
                </a>
                <a href="https://www.instagram.com/im_spidev/" target='_blank' className="link">
                    <FaInstagram className="instagram"/>
                </a>
                <a href="https://twitter.com/Im_Spidev" target='_blank' className="link">
                    <FaTwitter className="twitter"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=523313071987" target='_blank' className="link">
                    <FaWhatsapp className="whatsapp"/>
                </a>
            </div>
        </section>
    );
}
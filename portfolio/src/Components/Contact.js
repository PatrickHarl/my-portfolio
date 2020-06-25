import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Contact() {

    return(
        <div className="container-contact">
            <div className="contact-home"><Link to="/">Home</Link></div>
            <div className="contact">
                <p className="contact-title">CONTACT PATRICK HARL</p>
                <p>Email: patrickharl86@gmail.com</p>
                <p>Phone: (916) 349-6120</p>
            </div>
        </div>

    );

} export default Contact;
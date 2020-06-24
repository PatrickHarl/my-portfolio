import React from 'react';
import { Link } from 'react-router-dom';

function About() {

    return(
        <div className="about-main">
            <div className="about-container">
                <div className="about-home"><Link to="/">Home</Link></div>
                <div className="about-inside">
                    <span className="about-title">ABOUT</span>
                    <img className="about-img" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"></img>
                    <p className="about-text">I was born in Carmichael, CA and currently reside in Sacramento, CA, where I have spent most of my life. I've always had an interest in application development, programming and gaming since before high school. I have built many small projects on my own utilizing a variety of languages and tools over the years. More recently, after spending several years working in photography, I have attended Lambda School to learn Full Stack Web Development and I am looking forward to turning programming and web development into a full-time career.</p>
                </div>
            </div>
        </div>
    );

} export default About;
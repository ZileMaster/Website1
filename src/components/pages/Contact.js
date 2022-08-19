import React from "react";
import '../../App.css';
import Footer from '../Footer';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import video from "../../video/video-2.mp4"

function Contact(){
    return (
        <>
            <div className="contact">
                <div className="text-container">
                    <h1 className="contact-head">Contact</h1>
                    <div className="paragraf" >
                        <p>Hello!</p>
                        <p>My name is Aleksa, and I am a student on the School of Computing in Belgrade!</p>
                        <p>At the momment of making the site, I'm the second year of study, but soon to be third!</p>
                        <p>This site presents a little portfolio of mine and represents a couple of my hobbies, like photography and traveling! Also all of the photos on the site are made by me and are my work.</p>
                        <p>I am not sure for what i'll be doing with it in the future, I plan on making a subpage called Projects where I can put some projects from github and more, for now I will be doing on finishing the base site!</p>
                        <p>I am 20 years old and live in Zemun! We who are from Zemun like to call it a small town next to Belgrade, the people from Belgrade love to call us a Belgrade municipality, but the tourists say we are the most beautiful part of Belgrade!</p>
                        <p>That should be a little about me and a little to fill the page, down bellow are my contacts, hope you are enjoying the site!</p> 
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <video src={video} width="1000" height="150"></video>
                <div class='social-media-wrap'>
                <div class='footer-logo'>
                </div>
                <small class='website-rights'>TRVL © 2020</small>
                <div class='social-icons'>
                    <a
                    class='social-icon-link facebook'
                    href='https://www.facebook.com/profile.php?id=100000759800609'
                    >
                    <i class='fab fa-facebook-f' />
                    </a>
                    <a
                    class='social-icon-link instagram'
                    href='https://www.instagram.com/zile_photos/'
                    >
                    <i class='fab fa-instagram' />
                    </a>
                    <a
                    class='social-icon-link youtube'
                    href='https://github.com/ZileMaster'
                    >
                    <i class="fa-brands fa-square-github"/>
                    </a>
                    
                    <a
                    class='social-icon-link twitter'
                    href="https://www.linkedin.com/in/aleksa-zivkovic-3b5b10229/"
                    >
                    <i class='fab fa-linkedin' />
                    </a>
                </div>
                </div>
             </section>
            <Footer/>
        </>
    );
}

export default Contact
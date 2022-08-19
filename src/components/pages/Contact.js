import React from "react";
import '../../App.css';
import Footer from '../Footer';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './subpages/signup.css';

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
                        </div>
                </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
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
             </div>
            <Footer/>
        </>
    );
}

export default Contact
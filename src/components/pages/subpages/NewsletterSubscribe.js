import React from 'react';
import '../../Footer.css';
import Button from "../../Button";
import { useEffect } from "react";

function NewsletterSubscribe(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                    <p className="footer-subscription-heading"> 
                        Join the newsletter to receive new posts!
                    </p>   
                    <p className="footer-subscription-text">
                        You can unsubscribe at any time.
                    </p>
                    <div className="input-areas">
                        <form>
                            <Button buttonStyle='btn--outline' to="/sign-up" onClick={useEffect(() => {
                            window.scrollTo(0, 0)
                            }, [])}>Subscripe</Button>
                        </form>
                    </div>
                </section>
            </div>
    );
}

export default NewsletterSubscribe;
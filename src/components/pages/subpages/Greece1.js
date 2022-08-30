import React from "react";
import Footer from '../../Footer.js';
import './Subpages.css';
import "../../../App.css";
import ImageSlider from '../../ImageSlider';

function Greece1(){
    return(
        <>
            <div className="greece">
                <section className="midpage">
                    <div className="image-slider"> 
                        <ImageSlider src='/images/ImagesGrece/' />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Greece1
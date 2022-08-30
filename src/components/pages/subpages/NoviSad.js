import React from "react";
import Footer from '../../Footer.js';
import "../../../App.css";
import './Subpages.css';
import ImageSlider from '../../ImageSlider';


function NoviSad(){
    return(
        <>
            <div className="novi-sad">
                <section className="midpage">
                    <div className="image-slider"> 
                        <ImageSlider src='/images/ImagesNovisad1/' />
                    </div>
                </section>
            </div>
        </>
    );
}

export default NoviSad
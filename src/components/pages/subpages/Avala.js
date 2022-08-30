import React from "react";
import Footer from '../../Footer.js';
import "../../../App.css";
import './Subpages.css';
import ImageSlider from "../../ImageSlider.js";

function Avala(){
    return(
        <>
            <div className="avala">
                <section className="midpage">
                    <div className="image-slider"> 
                        <ImageSlider src='/images/ImagesAvala/' />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Avala
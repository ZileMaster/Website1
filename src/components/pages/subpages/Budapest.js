import React from "react";
import Footer from '../../Footer.js';
import "../../../App.css";
import './Subpages.css';
import ImageSlider from '../../ImageSlider';

function Budapest(){
    return(
        <>
            <div className="budapest">
                <section className="midpage">
                    <div className="image-slider"> 
                        <ImageSlider src='/images/ImagesBudapest/' />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Budapest
import React from "react";
import Footer from '../../Footer.js';
import "../../../App.css";
import './Subpages.css';
import ImageSlider from '../../ImageSlider';

function Kusadasi(){
    return(
        <>
        <div className="kusadasi">
             <section className="midpage">
                <div className="image-slider"> 
                        <ImageSlider src='/images/ImagesKusadasi/' />
                    </div>
                </section>
            </div>
        </>
    );
}

export default Kusadasi
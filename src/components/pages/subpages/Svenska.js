import React from "react";
import Footer from '../../Footer.js';
import "../../../App.css";
import './Subpages.css';
import ImageSlider from "../../ImageSlider.js";

function Svenska(){

    const containerStyles = {
        
    };

    return(
        <>
            <div className="sweden">
                <section className="midpage">
                    {/*<h1 className="header-text">Sweden</h1><br />
                    <p className="midpage-text">Coming soon...</p><br />
                    <p className="midpage-text">Construction works for now!</p><br />
    <i class="fa-solid fa-gear midpage-gear"></i>*/}
                    <div className="image-slider"> 
                        <ImageSlider src='/images/ImagesSweden/' />
                    </div>
                  
                </section>
            </div>
        </>
    );
}

export default Svenska
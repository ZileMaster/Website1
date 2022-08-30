
import React from "react";
import { useState } from "react";


const slides = [
    {url: 'image1.jpg'},
    {url: 'image2.jpg'},
    {url: 'image3.jpg'},
    {url: 'image4.jpg'},
    {url: 'image5.jpg'},
    {url: 'image6.jpg'},
    {url: 'image7.jpg'},
    {url: 'image8.jpg'},
    {url: 'image9.jpg'},
    {url: 'image10.jpg'},
    {url: 'image11.jpg'},
    {url: 'image12.jpg'},
    {url: 'image13.jpg'},
    {url: 'image14.jpg'},
    {url: 'image15.jpg'},
]

function ImageSlider( props ){

    const[currentInd, setCurrentInd] = useState(0);

    const slideStyles = {
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
    };

    const leftArrow = {
        left : '45%',
    };

    const rightArrow = {
        right : '45%',
    };

    const goToPrev = () => {
        const isFirst = currentInd === 0
        const newIndex = isFirst ? slides.length - 1 : currentInd - 1;
        setCurrentInd(newIndex);
    };

    const goToNext = () => {
        const isLast = currentInd === slides.length - 1;
        const newIndex = isLast ? 0 : currentInd + 1;
        setCurrentInd(newIndex);
    }

    return (

        <div >
            <div >
                <i class="fa-solid fa-caret-left arrows" style={leftArrow} onClick={goToPrev}></i>
                <i class="fa-solid fa-caret-right arrows" style={rightArrow} onClick={goToNext}></i>
                <img src={props.src+slides[currentInd].url} style={slideStyles}></img>
            </div>
        </div>

    );

};

export default ImageSlider;
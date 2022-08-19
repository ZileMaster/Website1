import React from "react";
import CardItem from "../CardItem";
import '../Cards.css'

function CardsForHome(){
    return(
        <div className='cards'>
            <h1>My most recent travels!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/ImagesSweden/_DSC9670.jpg'
                    text='Summer vacation in Gothenburg!'
                    label='NEW!'
                    path='/articles/svenska'
                    />
                    <CardItem
                    src='images/ImagesNoviSad1/DSC_1382.jpg'
                    text='Travel through the catacombs of Novi Sad!'
                    label='NEW!'
                    path='/articles/novi-sad'
                    />
                    <CardItem
                    src='images/ImagesBudapest/_DSC9121.jpg'
                    text='Explore Budapest in a day!'
                    label='NEW!'
                    path='articles/budapest'
                    />
                </ul>
            </div>
           </div>
        </div>
    );
}

export default CardsForHome
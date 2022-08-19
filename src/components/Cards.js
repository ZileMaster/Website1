import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>All of my travels!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Sverige1.jpg'
              text='Summer vacation in Gothenburg!'
              label='NEW!'
              path='/articles/svenska'
            />
            <CardItem
              src='images/NoviSad1.jpg'
              text='Travel through the catacombs of Novi Sad!'
              label='NEW!'
              path='/articles/novi-sad'
            />
             <CardItem
                    src='images/ImagesBudapest/_DSC9026.jpg'
                    text='Explore Budapest in a day!'
                    label='NEW!'
                    path='articles/budapest'
                    />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Greece1.jpg'
              text='The beauties of Greece!'
              label='Vacation'
              path='/articles/greece21'
            />
            <CardItem
              src='images/Mausoleum1.jpg'
              text='Explore the Great Mausoleum!'
              label='Adventure'
              path='/articles/avala'
            />
            <CardItem
              src='images/Turkey1.jpg'
              text='Wonders of Turkey!'
              label='Misterious'
              path='/articles/kusadasi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
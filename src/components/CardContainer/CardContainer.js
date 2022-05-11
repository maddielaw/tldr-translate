import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = () => {
  return (
    <section className='card-container'>
      <h1>Your tl;drs</h1>
      <Card />

    </section>
  );
}
 
export default CardContainer;
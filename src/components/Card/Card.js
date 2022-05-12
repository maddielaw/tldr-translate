import React from 'react';
import './Card.css'

const Card = ({ title, tldr }) => {
  return (
    <section className='card'>
      <h1>{title}</h1>
      <p>{tldr}</p>
    </section>
  );
}
 
export default Card;
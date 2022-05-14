import React from 'react';
import './Card.css'

const Card = ({ title, originalText, tldr }) => {
  if (title && tldr) {
    return (
      <section className='card'>
        <h1>{title}</h1>
        <section className='card-text-container'>
          <div className='original-prompt'>
            <p className='original-prompt-header'>Original Text :</p>
            <p>{originalText}</p>
          </div>
          <div className='tldr-response'>
            <p className='tldr-response-header'>tl;dr :</p>
            <p>{tldr}</p>
          </div>
        </section>
      </section>
    );
  }
}
 
export default Card
import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({ tldrList }) => {

  const createTldrCards = () => {
    return tldrList.map(tldr => {
      return <Card id={tldr.id} key={tldr.id} title={tldr.title} tldr={tldr.tldr}/>
    })
  }

  return (
    <section className='card-section'>
      <div>
        <h1>Your Translations</h1>
      </div>
      <section className='card-container'>
        {tldrList && createTldrCards()}
      </section>
    </section>
  );
}
 
export default CardContainer;
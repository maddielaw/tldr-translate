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
    <section className='card-container'>
      <h1>Your tl;drs</h1>
      {tldrList && createTldrCards()}
    </section>
  );
}
 
export default CardContainer;
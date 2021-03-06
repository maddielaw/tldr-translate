import React from 'react';
import './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ({ tldrList, isLoading, error, deleteTldr}) => {

  const createTldrCards = () => {
    return tldrList.map(tldr => {
      return <Card id={tldr.id} key={tldr.id} title={tldr.title} originalText={tldr.text} tldr={tldr.tldr} deleteTldr={deleteTldr}/>
    })
  }

  return (
    <section className='card-section'>
      <div className='card-container-header'>
        <h1>Your Translations</h1>
      </div>
      <section className='card-container'>
        {isLoading && <p className='loading'>Translations loading...</p>}
        {error && <p className='error'>Whoops! Something went wrong: {error}</p>}
        {!tldrList.length && !isLoading && <p className='no-tldrs-yet'>No tl;dr translations yet! Submit the form to the left to get started.</p>}
        {tldrList && createTldrCards()}
      </section>
    </section>
  );
}
 
export default CardContainer;
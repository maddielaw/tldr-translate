import React from 'react';
import './Sidebar.css'
import Form from '../Form/Form'

const Sidebar = ({ submitTldr, setIsLoading, setError }) => {
  return (
    <section className='sidebar'>
      <h1>tl;dr Translate</h1>
      <Form submitTldr={submitTldr} setIsLoading={setIsLoading} setError={setError}/>
    </section>
  );
}
 
export default Sidebar;
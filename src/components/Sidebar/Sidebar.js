import React from 'react';
import './Sidebar.css'
import Form from '../Form/Form'

const Sidebar = ({ submitTldr }) => {
  return (
    <section className='sidebar'>
      <h1>tl;dr Translate</h1>
      <Form submitTldr={submitTldr}/>
    </section>
  );
}
 
export default Sidebar;
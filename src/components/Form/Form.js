import React, { useState } from 'react';
import './Form.css'

const Form = () => {

  const [formFields, setFormFields] = useState({
    title: '',
    text: ''
  })


  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='form-container'>
      <input 
        type='text'
        placeholder='enter text title'
        name='title'
        value={formFields.title}
        onChange={(e) => handleChange(e)}
        required
      />
      <input 
        type='text'
        placeholder='enter tl;dr text here'
        name='text'
        value={formFields.text}
        onChange={(e) => handleChange(e)}
        required
      />
      <button>submit!</button>

    </form>
  );
}
 
export default Form;
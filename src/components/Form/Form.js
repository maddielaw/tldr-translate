import React, { useEffect, useState } from 'react';
import './Form.css'
import fetchTldr from '../../apiCalls';
import { v4 as uuidv4 } from 'uuid';


const Form = ({ submitTldr }) => {

  const [formFields, setFormFields] = useState({
    title: '',
    text: '',
    tldr: ''
  })

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    })
  }

  // refactor to hook up AI API
  const triggerFetch = () => {
    fetchTldr()
    .then(data => {
      setFormFields({
        ...formFields,
        tldr: data[0].description
      })
    })
  }

  const clearInputs = () => {
    setFormFields({
      title: '',
      text: ''
    })
  }

  useEffect(() => {
    const newTldr = {
      id: uuidv4(),
      title: formFields.title,
      tldr: formFields.tldr
    }
    submitTldr(newTldr)
    clearInputs()
  }, [formFields.tldr])


  const handleSubmit = (e) => {
    e.preventDefault()
    triggerFetch()
  }

  return (
    <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
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
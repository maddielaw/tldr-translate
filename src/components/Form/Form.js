import React, { useEffect, useState } from 'react';
import './Form.css'
import fetchTldr from '../../apiCalls';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ submitTldr, setIsLoading, setError }) => {

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

  const getAIResponse = () => {
    setIsLoading(true);
    fetchTldr(formFields.text)
      .then(data => {
        let cleanedText = data.choices[0].text.slice(2)
        setFormFields({
          ...formFields,
          tldr: cleanedText
      })
    })
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
  }

  const clearInputs = () => {
    setFormFields({
      title: '',
      text: '',
      tldr: ''
    })
  }

  useEffect(() => {
    if (formFields.title && formFields.tldr) {
      const newTldr = {
        id: uuidv4(),
        title: formFields.title,
        text: formFields.text,
        tldr: formFields.tldr
      }
      submitTldr(newTldr)
    }
    clearInputs()
  }, [formFields.tldr])


  const handleSubmit = (e) => {
    e.preventDefault()
    getAIResponse()
  }

  return (
    <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
      <input 
        type='text'
        placeholder='enter tl;dr title'
        name='title'
        value={formFields.title}
        onChange={(e) => handleChange(e)}
        required
        />
      <textarea
        type='text'
        placeholder='enter text to translate'
        name='text'
        cols='50'
        rows='8'
        value={formFields.text}
        onChange={(e) => handleChange(e)}
        required
        />
      <button className='submit'>submit!</button>
    </form>
  );
}
 
export default Form;
const apiKey = process.env.REACT_APP_OPENAI_KEY
// console.log(apiKey)


const fetchTldr = () => {
  return fetch('http://localhost:3001/sightings')
    .then(response => response.json())
}

export default fetchTldr;
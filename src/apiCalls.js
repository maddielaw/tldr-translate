
const fetchTldr = (prompt) => {
  const completion = {
    "prompt": `${prompt}\n\nTl;dr`,
    "temperature": 0.7,
    "max_tokens": 60,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  }

  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
    },
    body: JSON.stringify(completion)
  }).then(response => response.json())

}


export default fetchTldr
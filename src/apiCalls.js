const apiKey = process.env.REACT_APP_OPENAI_KEY
// console.log(apiKey)


const packageAIData = (prompt) => {
  const aiData = {
    "prompt": prompt,
    "temperature": 0.7,
    "max_tokens": 60,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  }
  return aiData;
}


const postTldr = (data) => {
  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data)
  })
}


export { packageAIData, postTldr }
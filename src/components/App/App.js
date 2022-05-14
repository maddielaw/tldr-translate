import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import { postTldr } from '../../apiCalls';

const App = () => {

  const [tldrList, setTldrList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const submitTldr = (newTldr) => {
    setTldrList([newTldr, ...tldrList])
  }

  const deleteTldr = (id) => {
    const filteredTldrs = tldrList.filter(tldr => tldr.id !== id)
    setTldrList([...filteredTldrs])
  }


  return (
    <div className="App">
      <Sidebar submitTldr={submitTldr} setIsLoading={setIsLoading} setError={setError}/>
      <CardContainer tldrList={tldrList} isLoading={isLoading} error={error} deleteTldr={deleteTldr}/>
      
    </div>
  );
}
 
export default App;

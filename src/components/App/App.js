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


  return (
    <div className="App">
      <Sidebar submitTldr={submitTldr} setIsLoading={setIsLoading} setError={setError}/>
      <CardContainer tldrList={tldrList} isLoading={isLoading} error={error}/>
      
    </div>
  );
}
 
export default App;

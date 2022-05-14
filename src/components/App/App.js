import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';
import { postTldr } from '../../apiCalls';

const App = () => {

  const [tldrList, setTldrList] = useState([])

  const submitTldr = (newTldr) => {
    setTldrList([newTldr, ...tldrList])
  }


  return (
    <div className="App">
      <Sidebar submitTldr={submitTldr}/>
      <CardContainer tldrList={tldrList}/>
      
    </div>
  );
}
 
export default App;

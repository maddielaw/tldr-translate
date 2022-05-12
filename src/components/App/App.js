import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

const App = () => {

  const [tldrList, setTldrList] = useState([])

  const submitTldr = (newTldr) => {
    setTldrList([...tldrList, newTldr])
  }


  return (
    <div className="App">
      <Sidebar submitTldr={submitTldr}/>
      <CardContainer />
      
    </div>
  );
}
 
export default App;

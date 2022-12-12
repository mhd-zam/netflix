import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Section from './components/section/section';
import { Toprated, action } from './constant/constant'


function App() {
 
  return (
    
    <div className="App">
      <NavBar/>
      <Section url={Toprated} title='Top Rated' />
      <Section url={action} isSmall title='Action' />
    </div>
  );
}

export default App;

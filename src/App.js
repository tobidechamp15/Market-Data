import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
// import Signup from './Components/Signup';

function App() {
  const [removeClass, setRemoveClass] = useState(false);
  const [addClass, setAddClass] = useState(false);

  return (
    <div>
      <Navbar setRemoveClass={setRemoveClass} setAddClass={setAddClass} />
      <SideBar removeClass={removeClass} />
      <Home addClass={addClass} />
    </div>
  );
}

export default App;

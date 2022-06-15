import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const initialBgC = '#f4f4f4'
  const [bgC, setBgC] = useState(initialBgC)



  const changeBg = (color) => {
    setBgC(color)
    
  }

  const resetBg = () => {
    setBgC(initialBgC)
  }


  
  return (
    <div className="container vh-100" style={{backgroundColor: bgC}}>
      <div className="d-flex justify-content-between">
        <div 
        onMouseEnter={() => changeBg('purple')}
        onMouseLeave={resetBg}
        >first div</div>
        <div
        onMouseEnter={() => changeBg('green')}
        onMouseLeave={resetBg}
        >second div</div>
      </div>
    </div>
  );
}

export default App;

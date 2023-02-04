import React, { useState } from 'react';
import './App.css';

function App() {
  const [Hori, setHori] = useState(10);
  const [Vari, setVari] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState('black');
  const [CheckOn, setCheckOn] = useState(false);
  return (
    <>
      <div className="container my-3">
        <h1>Setting Out Box-Shadow</h1>
      </div>
      <div className="App">
        <div className="controls">
          <div className="my-4">
            <label>Horizontal Length</label>
            <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />
          </div>
          <div className="my-4">
            <label>Vertical Length</label>
            <input type="range" value={Vari} min="-200" max="200" onChange={(e) => setVari(e.target.value)} />
          </div>
          <div className="my-4">
            <label>Blur Radius</label>
            <input type="range" value={Blur} min="0" max="200" onChange={(e) => setBlur(e.target.value)} />
          </div>
          <div className="form-check form-switch">
            <label>Outline</label>
            <input className="form-check-input" role="switch" type="checkbox" checked={CheckOn} onChange={() => setCheckOn(!CheckOn)} />
          </div>
          <div className="my-4">
            <label>Color</label>
            <input type="color" value={Color} onChange={(e) => setColor(e.target.value)} />
          </div>
        </div>
        <div className="output">
          <div className="box" style={{ boxShadow: `${CheckOn ? 'inset' : ''} ${Hori}px ${Vari}px ${Blur}px ${Color}` }}>
            <p>box-shadow: {CheckOn ? 'inset' : ''} {Hori}px {Vari}px {Blur}px {Color} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

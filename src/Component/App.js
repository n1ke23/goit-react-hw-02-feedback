import React, { useState } from 'react';
import Buttons from './Buttons/Buttons'
const state = {
  good: 0,
  neutral: 0,
  bad: 0
};

function App() {
 
  const [states, setState] = useState(state);
  // console.log(states);
  // const addCount () => {}


  return (
    <>
      <h1>Please leave feedback</h1>
      <div>
        {Object.entries(states).map((el)=> <Buttons />)}
      </div>
      <h2>Statistick</h2>
      <p>good: {state.good}</p>
      <p>neutral: {state.neutral}</p>
      <p>bad: {state.bad}</p>
    </>
  );
}

export default App;

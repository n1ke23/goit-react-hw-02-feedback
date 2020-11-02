import React, { useState } from 'react';
import Buttons from './Buttons/Buttons'
const state = {
  good: 0,
  neutral: 0,
  bad: 0
};

function App() {

  const [states, setStates] = useState(state);
  // console.log(states);
  const addStep = (id) => {
    console.log(id);
    return setStates((el) => ({ ...el, [id]: el.[id] + 1 }))
  }
  return (
    <>
      <h1>Please leave feedback</h1>
      <div>
        {Object.keys(states).map((el) => <Buttons key={el} id={el} addStep={addStep} />)}
      </div>
      <h2>Statistick</h2>
      <p>good: {state.good}</p>
      <p>neutral: {state.neutral}</p>
      <p>bad: {state.bad}</p>
    </>
  );
}

export default App;

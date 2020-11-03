import React, { useState } from 'react';
import Buttons from './Buttons/Buttons'
import Statistick from './Statistick/Statistick'
import Section from './Section/Section'
import Notification from './Notification/Notification'

const state = {
  good: 0,
  neutral: 0,
  bad: 0
};

function App() {

  const [states, setStates] = useState(state);
  // console.log(states);
  const addStep = (id) => {
    // console.log(id);
    return setStates((el) => ({ ...el, [id]: el[id] + 1 }))
  }

  const countTotalFeedback = () => Object.values(states).reduce((acc, el) => acc + el, 0)

  const countPositiveFeedbackPercentage = () => ((states.good / countTotalFeedback()) * 100).toFixed()
  
  return (
    <>
       <Section title={"Please leave feedback"}>
          {Object.keys(states).map((el) => <Buttons key={el} id={el} addStep={addStep} />)}
      </Section>
      { countTotalFeedback() > 0 
        ? (<Section titel={"Statistick"}>{Object.entries(states).map((el)=> <Statistick key={el[0]} name={el[0]} value={el[1]}/> )}<p>total: {countTotalFeedback()}</p><p>Positive feedback: {countPositiveFeedbackPercentage()}%</p></Section>) 
        : (<Notification message="No feedback given" />)
      }

      
    </>
  );
}

export default App;

import React from 'react';

const Buttons = ({ id, addStep }) => {
  return (
    <button className='button' id={id} onClick={() => addStep(id)}>{id}</button>
  );
};

export default Buttons;
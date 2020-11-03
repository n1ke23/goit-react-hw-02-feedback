import React from 'react';
import PropTypes from "prop-types";

const Buttons = ({ id, addStep }) => {
  return (
    <button className='button' id={id} onClick={() => addStep(id)}>{id}</button>
  );
};

export default Buttons;

// Buttons.PropTypes = {
//   id: PropTypes.string.isRequired,
//   addStep: PropTypes.func.isRequired,
// }
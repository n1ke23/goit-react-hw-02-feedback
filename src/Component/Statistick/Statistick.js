import React from 'react';
import PropTypes from "prop-types";

const Statistick = ({name, value}) => {
  return (
    <>
      <p>{name}: {value}</p>
    </>
  );
};

export default Statistick;
Statistick.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
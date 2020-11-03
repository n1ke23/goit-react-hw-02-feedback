import React from 'react';
import PropTypes from "prop-types";
const Section = ({ title, children }) => {
  return (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
  );
};

export default Section;
// Section.PropTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.object.isRequired
// }
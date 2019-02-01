import React from "react";
import PropTypes from 'prop-types'

const TextInputGroup = ({name, placeholder, value, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        className="form-control form-control-lg"
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propsType = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TextInputGroup;

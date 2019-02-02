import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({ name, placeholder, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${
          error !== "" ? "is-invalid" : null
        } form-control form-control-lg`}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propsType = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

export default TextInputGroup;

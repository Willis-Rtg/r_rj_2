import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  height: 30px;
  padding: 0px 13px;
  font-size: 12px;
  margin-bottom: 3px;
`;

const Input = ({
  name,
  className,
  placeholder,
  type,
  value,
  onChange,
  required = true,
}) => (
  <Container
    name={name}
    className={className}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Input;

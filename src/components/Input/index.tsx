import React from "react";
import styled from "styled-components";

const Container = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  color: #383e71;
  padding: 10px;
  margin: 10px;

  input {
    margin-top: 5px;
    height: 48px;
    width: 100%;
    left: 877px;
    top: 353px;
    border-radius: 8px;
    font-size: 10px;
    color: #989fdb;
    background: #ffffff;
    border: 1px solid #989FDB;
    padding: 5px;
  }
`;

interface OptionsProps {
  label: any;
  placeholder: any;
  value: any;
  onChange: any;
  type: any;
  error: boolean;
}

const Form: React.FC<OptionsProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  error,
}) => {
  return (
    <Container>
      {label}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        style={error ? { border: "1px solid red" } : undefined}
      />
    </Container>
  );
};

export default Form;

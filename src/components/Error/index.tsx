import React from "react";
import styled from "styled-components";

export const ErrorInput = styled.div`
  width: 100%;
  height: auto;
  text-align: center;

  span {
    font-size: 10px;
    color: red;
  }
`;

interface OptionsProps {
  title: any;
}

const Error: React.FC<OptionsProps> = ({ title }) => {
  return (
    <ErrorInput>
      <span>{title}</span>
    </ErrorInput>
  );
};

export default Error;

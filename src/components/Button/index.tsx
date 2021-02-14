import React from "react";
import styled from "styled-components";

const Container = styled.button`
  height: 48px;
  width: 100%;
  left: 877px;
  top: 511px;
  border-radius: 8px;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border: none;
  box-shadow: 0px 10px 20px 0px #000000;

  label {
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
`;

interface OptionsProps {
  label: any;
  onClick: any;
}

const Button: React.FC<OptionsProps> = ({ label, onClick }) => {
  return (
    <Container onClick={onClick}>
      <label>{label}</label>
    </Container>
  );
};

export default Button;

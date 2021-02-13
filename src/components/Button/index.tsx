import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	display: block;
  height: 48px;
  width: 168px;
  left: 100px;
  top: 77%;
  border-radius: 8px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);

  label {
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    font-weight: 600;
	position: relative;
	display: block;
	top: 30%;
  }

  @media (min-width: 800px){

  }
`;

interface OptionsProps {
  title: any,
  onClick: any,
}

const Button: React.FC<OptionsProps> = ({
  title,
  onClick
}) => {
  return (
    <Container onClick={onClick}>
		<label>{title}</label>
	</Container>
  );
}

export default Button;

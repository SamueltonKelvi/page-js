import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);

  div{
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 10px;
      text-align: center;

      h4{
          font-size: 14px;
          font-weight: 500;
      }
      button{
          width: 50%;
          padding: 5px;
          border: none;
          color: #FFFFFF;
          margin: 30px 0px 10px 0px;
          background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
      }
  }
`;

interface OptionsProps {
  title: any;
  close: any;
}

const Modal: React.FC<OptionsProps> = ({ title, close }) => {
  return (
    <Container>
      <div>
        <h4>{title}</h4>
        <button onClick={close}>OK</button>
      </div>
    </Container>
  );
};

export default Modal;

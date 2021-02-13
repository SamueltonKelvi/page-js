import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 800px){

  width: 80%auto;
  height: 90%auto;
  padding: 10px;
  padding-bottom: 25px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 50% 10%;

  h2 {
    font-size: 24px;
    text-align: center;
    margin: 5% 20%;
    color: #383e71;
  }
  span {
    font-size: 12px;
    text-align: center;
    margin: 20px 0px;
    color: #989fdb;
    font-weight: 600;
  }
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 10px;
    text-align: left;
    margin: 8% 6%;
    color: #383E71;

    input {
      align-self: center;
      margin-top: 5px;
      width: 256px;
      height: 48px;
      border-radius: 8px;
      background-color: #ffffff;
      border: 1px solid #989fdb;
      padding: 10px;
      font-size: 10px;
      color: #989FDB;
    }
  }


  }
`;

interface OptionsProps {
  title: any,
  description: any,
  valueEmail: any,
  onChangeEmail: any,
  valuePassword: any,
  onChangePassword: any
}

const Form: React.FC<OptionsProps> = ({ 
  title,
  description,
  valueEmail,
  onChangeEmail,
  valuePassword,
  onChangePassword
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{description}</span>
      <label>
        E-MAIL
        <input
          type="address"
          id="email"
          placeholder="user.name@mail.com"
          value={valueEmail}
          onChange={onChangeEmail}
        />
      </label>
      <label>
        SENHA
        <input
          type="password"
          id="password"
          placeholder="******"
          value={valuePassword}
          onChange={onChangePassword}
        />
      </label>
    </Container>
  );
}

export default Form;

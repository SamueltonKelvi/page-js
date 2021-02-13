import React from "react";
import { AppGlobal } from "../styles/AppGlobal";
import { Container } from "./styles";
import { FormLogin, ButtonLogin } from '../components';

import ImageMobile from "../assets/background_mobile.jpg";

export default function App() {
  const [email, setEmail] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  const validationLogin = () => { };

  return (
    <>
      <AppGlobal />
      <Container>
        <img className="img-mobile" src={ImageMobile} alt="Background" />
        <div className="page-mobile">
          <FormLogin
            title="Olá, seja bem-vindo!"
            description="Para acessar a plataforma, faça seu login."
            valueEmail={email}
            onChangeEmail={(e: any) => setEmail(e.target.value)}
            onChangePassword={(e: any) => setPassword(e.target.value)}
            valuePassword={password}
          />
          <ButtonLogin title="ENTRAR" onClick={validationLogin}/>
        </div>
      </Container>
    </>
  );
}

import React from "react";
import { AppGlobal } from "../styles/AppGlobal";
import { Container } from "./styles";
import { InputLogin, ButtonLogin, ErroLogin } from "../components";

import ImageMobile from "../assets/background.jpg";

export default function App() {
  const [email, setEmail] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [error, setError] = React.useState<boolean>(false);

  const validationLogin = () => {
    if (!email) {
      setError(true);
    }else {
        //...
    }
  };

  return (
    <>
      <AppGlobal />
      <Container>
        <img className="img-background" src={ImageMobile} alt="Background" />
        <div className="page-gradient">
          <div className="page-form">
            <div className="page-form-title">
              <h2>Olá, seja bem-vindo!</h2>
              <span>Para acessar a plataforma, faça seu login.</span>
            </div>
            <div className="page-inputs">
              <InputLogin
                label="E-MAIL"
                placeholder="user.name@mail.com"
                type="address"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                error={error}
              />
              <InputLogin
                label="SENHA"
                placeholder="******"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                error={error}
              />
              {error && <ErroLogin title="E-mail ou senha inválidos" />}
              <div className="page-button">
                <ButtonLogin label="ENTRAR" onClick={validationLogin} />
                <div className="page-reset">
                  <span>
                    Esqueceu seu login ou senha? Clique <a>aqui</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

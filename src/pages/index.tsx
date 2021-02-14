import React from "react";
import { AppGlobal } from "../styles/AppGlobal";
import { Container } from "./styles";
import { InputLogin, ButtonLogin, ErroLogin, ModalLogin } from "../components";

import ImageMobile from "../assets/background.jpg";

import Axios from "../service/axios";
import ModelLogin from "../service/model/login";
import { actions, store } from "../service/redux";

export default function App() {
  const [data, setData] = React.useState<any>([]);
  const [email, setEmail] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [error, setError] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<boolean>(false);

  const validationLogin = () => {
    if (!email || !password) {
      setError(true);
    } else {
      setModal(true);
      setEmail("");
      setPassword("");

      let model = new ModelLogin(email, password);
      let data = JSON.stringify(model);

      store.dispatch(actions.log(model));

      Axios.post("/users", data)
        .then((response) => {
          console.log(`Dados salvos com sucesso`);
        })
        .catch((error) => {
          console.log(`Erro ao salvar dados ${error}`);
        });
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  React.useEffect(() => {
    store.subscribe(() => {
      let newBig = store.getState().toReducers;
      setData(newBig);
    });
  }, []);


  console.log(store);

  return (
    <>
      <AppGlobal />
      <Container>
        <img className="img-background" src={ImageMobile} alt="Background" />
        <div className="page-gradient">
          {modal && (
            <ModalLogin
              title="Usuário logado com sucesso! :)"
              close={closeModal}
            />
          )}
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

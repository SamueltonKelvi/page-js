import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  .img-mobile {
    height: auto;
    top: 0;
    z-index: 0;
    position: fixed;
  }
  .page-gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      #130525 30%,
      rgba(105, 57, 153, 0.5) 100%
    );
  }
  .page-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: right;
    width: 50%;
    height: 100%;
    background: #ffffff;

    .page-form-title {
      margin: 0 30%;

      h2 {
        font-size: 40px;
        color: #383e71;
        line-height: 48px;
        margin: 20px 0px;
      }

      span {
        font-size: 16px;
        line-height: 20px;
        color: #989fdb;
      }
    }
    .page-inputs {
      width: 40%;
      margin: 0 28%;
    }
    .page-button {
      width: 85%;
      padding-top: 10px;
      margin: 0 8%;
    }
    .page-reset {
      margin: 20px auto;
      text-align: center;

      span {
        font-size: 14px;
        line-height: 20px;
        color: #989fdb;
      }
      a {
        color: #9626ac;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 400px) {
  }
`;

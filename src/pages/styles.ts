import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  .img-background {
    width: 100%;
    height: auto;
    top: 0;
    z-index: 0;
    position: fixed;
    resize: both;
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
      10deg,
      #130525 10%,
      rgba(105, 57, 153, 0.2) 100%
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
  }

  @media screen and (max-width: 1160px) {
    .img-background {
      width: 100%;
      height: 100%;
      resize: vertical;
      background-origin: content-box;
    }
    .page-gradient {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        10deg,
        #130525 10%,
        rgba(105, 57, 153, 0.2) 100%
      );
    }
    .page-form .page-form-title {
      margin: 0% 15%;
    }
    .page-form .page-inputs {
      width: 80%;
      margin: 0 10%;
    }
  }

  @media screen and (max-width: 480px) {
    .img-background {
      width: 800px;
      height: auto;
      resize: vertical;
      background-origin: content-box;
    }
    .page-gradient {
      width: 100%;
      height: 100%;
    }
    .page-form {
      display: block;
      position: relative;
      margin: 50% auto;
      float: none;
      height: 357px;
      width: 310px;
      border-radius: 8px;

      .page-form-title {
        margin: 0 5%;
        text-align: center;

        h2 {
          font-size: 24px;
          line-height: 32px;
          padding-top: 20px;
          margin: 10px 40px;
        }
        span {
          line-height: 20px;
          font-size: 12px;
        }
      }
      .page-inputs {
        width: 90%;
        margin: 0 5%;
      }
      .page-button {
        width: 85%;
        margin: 8%;

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
    }
  }

  @media screen and (max-width: 320px) {
    .page-form {
      margin: 30% 6%;
      width: 280px;

      .page-inputs {
        width: 100%;
        margin: 0 0%;
      }
      .page-button {
        width: 80%;
        margin: 5% 10%;
      }
    }
  }
`;

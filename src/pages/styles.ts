import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    .img-mobile {
      width: 100%;
      height: auto;
      top: 0;
      z-index: 0;
      position: fixed;
    }
    .page-mobile {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        #130525 50%,
        rgba(105, 57, 153, 0) 100%
      );
    }
  }
`;

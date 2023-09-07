import Image from "next/image";
import styled, { css } from "styled-components";

export const MainContainer = styled.nav`
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  @media all and (max-width: 480px) {
    height: 20vh;
  }
`;
export const RegImage = styled(Image)`
  width: 100vw;
  height: 40vh;
  position: relative;
  @media all and (max-width: 480px) {
    height: 20vh;
  }
`;
export const RegImage1 = styled(Image)`
  height: 40vh;
  width: 35vw;
  position: absolute;
  right: 0;
  @media all and (max-width: 480px) {
    height: 0vh;
    width: 0vw;
  }
`;

export const TitleContainer = styled.div`
  height: 30vh;
  width: 50vw;
  margin-top: 5vh;
  position: absolute;
  @media all and (max-width: 480px) {
    height: 20vh;
    width: 100vw;
    margin-top: 5vh;
    padding-top: 20px;
  }
`;

export const TitleContainerText = styled.p`
  padding-left: 50px;
  color: #fff;
  font-style: normal;
  font-size: 40px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: center;
  ${(props) =>
    props.smalltext
      ? css`
          font-family: Urbanist;
          font-weight: 600;
          @media all and (max-width: 480px) {
            padding-left: 10px;
            font-size: 12px;
          }
        `
      : css`
          text-align: center;
          font-family: Oswald;
          font-weight: 700;
          text-transform: uppercase;
          @media all and (max-width: 480px) {
            padding: 10px;
            font-size: 20px;
          }
        `}
`;

export const TabContainer = styled.nav`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

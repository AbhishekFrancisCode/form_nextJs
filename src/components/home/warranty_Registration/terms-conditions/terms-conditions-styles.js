import styled, { css } from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding-top: 3vh;
  }
`;

export const HeadingTextContaner = styled.p`
  margin-bottom: -10px;
  color: #333;
  text-align: center;
  font-family: Urbanist;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.color020B36};
  @media screen and (min-width: 360px) and (max-width: 460px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const HeadingSubTextContaner = styled.p`
color: #333;
text-align: center;
font-family: Oswald;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2px;
text-transform: uppercase;ercase;
@media screen and (min-width: 360px) and (max-width: 460px) {
  font-size: 20px;
}`;

export const ContentHeading = styled.p`
  color: #333;
  font-family: Red Hat Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-top: 40px;
  margin-left: 5vw;
  margin-right: 5vw;
  @media screen and (min-width: 260px) and (max-width: 460px) {
    font-size: 16px;
    padding-top: 15px;
  }
`;

export const Content = styled.p`
  color: #333;
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  margin-left: 5vw;
  margin-right: 5vw;
  @media screen and (min-width: 260px) and (max-width: 460px) {
    font-size: 12px;
    line-height: normal;
  }
`;

//table content styling
export const TableContainer = styled.div`
  height: 50vh;
  width: 100vw;
  @media (max-width: 480px) {
    height: 40vh;
  }
`;
export const RowContainer = styled.div`
  display: grid;
  height: 16vh;
  width: 100vw;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  background-color: ${({ theme }) => theme.colors.white};
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.16rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 480px) {
    height: ${(props) => (props.mobile ? css`6vh` : css`16vh`)};
  }
  color: white;
`;
export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 100vw;
  @media (max-width: 480px) {
    border-top-style: solid;
    border-top-color: ${({ theme }) => theme.colors.white};
    height: ${(props) => (props.mobile ? css`6vh` : css`16vh`)};
  }
`;
export const Content1 = styled.div`
  background-color: ${({ theme }) => theme.colors.color333333};
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.smalltext ? css`20px` : css`50px`)};
  text-align: left;
  color: #fff;
  font-style: normal;
  ${(props) =>
    props.smalltext
      ? css`
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
          letter-spacing: 1px;
          text-transform: ${(props) =>
            props.smalltext && props.lowercase
              ? css`lowercase`
              : css`uppercase`};
          @media (max-width: 480px) {
            font-size: 10px;
            line-height: normal;
          }
        `
      : css`
          font-family: Red Hat Display;
          font-size: 24px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
          @media (max-width: 480px) {
            font-size: 14px;
            height: 6vh;
          }
        `}
  @media (max-width: 480px) {
    padding: ${(props) => (props.smalltext ? css`10px` : css`20px`)};
    width: 90%;
  }
`;
export const Content2 = styled(Content1)``;
export const Content3 = styled(Content1)``;

//row content styling
export const RowContent = styled.div`
  display: grid;
  width: 90vw;
  height: auto;
  padding-left: 10vw;
  padding-right: 10vw;
  transition: all 0.25s ease-in-out;
  @media (max-width: 480px) {
    width: 100vw;
    padding-left: 2vw;
    padding-right: 1vw;
  }
`;
export const RowContentBox = styled.div`
  display: flex;
  height: min-content;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const RowContentImage = styled(Image)`
  height: 18px;
  width: 18px;
  @media (max-width: 480px) {
    height: 12px;
    width: 12px;
  }
`;
export const RowContentText = styled.p`
  margin-left: 60px;
  color: #333;
  font-family: Urbanist;
  font-style: normal;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 1px;
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.5px;
    margin-left: 6vw;
    padding-right: 1vw;
  }
`;
export const SubContent = styled.ul`
  padding-left: 6vw;
  margin-left: 9vw;
  margin-right: 9vw;
  color: #333;
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.5px;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-left: 40px;
  }
`;
export const SubDetailContent = styled.ol`
  list-style-type: decimal;
  padding: 10px;
  color: #333;
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: 1px;
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`;

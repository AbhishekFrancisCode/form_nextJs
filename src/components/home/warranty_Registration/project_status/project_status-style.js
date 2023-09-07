import Image from "next/image";
import ReactSelect from "react-select";
import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding-top: 3vh;
    height: 60vh;
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

export const FormHeadingTextContaner = styled.p`
  color: #333;
  font-family: Red Hat Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  align-content: left;
  padding-top: 8vh;
  padding-left: 50vh;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding: 0;
    font-size: 0;
  }
`;
export const ExclamationIcon = styled(Image)`
  height: 25px;
  width: 25px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    height: 15px;
    width: 15px;
  }
`;

export const ErrorText = styled.i`
  color: #ce1e1e;
  font-family: Urbanist;
  font-style: italic;
  font-weight: 500;
  line-height: 28px; /* 233.333% */
  letter-spacing: 1px;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    font-size: 12px;
    line-height: i8px;
  }
`;

export const FormContainerArea = styled.section`
  width: 100vw;
  height: 45vh;
  position: absolute;
  padding-left: 50vh;
  top: 35%;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding: 10px;
    top: 15%;
  }
`;

export const ThankYouText = styled.p`
  font-family: "Oswald";
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    letter-spacing: 0.5px;
  }
`;
export const ThankYouPara = styled.p`
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 1.75rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
`;

export const LineContainer = styled.div`
  height: 10vh;
  width: 100vw;
  padding-top: 35px;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    height: 5vh;
    padding-top: 20px;
  }
`;

export const Line = styled.hr`
  background-color: black;
  width: 170px;
  height: 3px;
  border: none;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    width: 120px;
    height: 2px;
  }
`;

export const LineText = styled.p`
  color: #ce1e1e;
  font-family: Urbanist;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: 1px;
`;

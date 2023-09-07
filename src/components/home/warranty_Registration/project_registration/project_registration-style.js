import Image from "next/image";
import ReactSelect from "react-select";
import styled from "styled-components";

export const MainContainer = styled.div`
  height: 140vh;
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding-top: 3vh;
    height: 105vh;
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

export const FormContainerArea = styled.section`
  width: 100vw;
  height: 45vh;
  position: absolute;
  padding-left: 50vh;
  top: 24%;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding: 10px;
    top: 5%;
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

export const HeadingContainer = styled.div`
  padding-right: 250px;
  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    padding-right: 150px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
  }
`;
export const TogetherWork = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 600px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
export const LastNameInput = styled.div`
  width: 50%;
  padding-left: 20px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0px;
  }
`;
export const FirstInput = styled(LastNameInput)`
  padding-left: 0px;
`;
export const TogetherHeading = styled.p`
  font-family: "Oswald";
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.colorFAED25};
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 1.25rem;
    letter-spacing: 1px;
    margin-right: 10px;
  }
`;
export const TogetherText = styled.p`
  padding-right: 60px;
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 600px) {
    font-size: 0.875rem;
    letter-spacing: 0.25px;
    padding: 0 20px;
  }
`;
export const TogetherQuesText = styled(TogetherText)`
  font-weight: 700;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    letter-spacing: 0.25px;
    padding: 0 20px;
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
export const SelectOption = styled(ReactSelect)`
  height: 70px;
  margin-top: 9px;
  font-family: "Urbanist";
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.color333333};
  ::placeholder {
    color: ${({ theme }) => theme.colors.color999999};
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 600px) {
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    ::placeholder {
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.5px;
    }
  }
`;
export const LabelOption = styled.label`
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 1px;
  @media only screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
`;
export const customStyles = {
  control: (base) => ({
    ...base,
    paddingTop: 2,
    border: 0,
    boxShadow: "none",
  }),
};

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

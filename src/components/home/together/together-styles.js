import Image from "next/image";
import ReactSelect from "react-select";
import styled from "styled-components";

export const TogetherContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 100px 50px;
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;
export const PassionImage = styled(Image)`
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    padding: 0 10px;
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

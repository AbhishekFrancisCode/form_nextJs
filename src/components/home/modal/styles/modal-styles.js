import Image from "next/image";
import styled from "styled-components";

export const ModalTitle = styled.p`
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 1.75rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.color333333};
  @media only screen and (max-width: 600px) {
    font-size: 1.24rem;
  }
`;
export const ModalLabel = styled(ModalTitle)`
  margin-top: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.25rem;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const ModalWhiteLabel = styled(ModalLabel)`
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
`;
export const ModalInput = styled.input`
  margin-top: -10px;
  height: 40px;
  width: 412px;
  border: 1.5px solid #333333;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0px 15px;
  @media only screen and (max-width: 600px) {
    width: 300px;
    font-size: 0.75rem;
  }
`;
export const ModalCheckbox = styled.input`
  height: 22px;
  width: 22px;
  @media only screen and (max-width: 600px) {
    height: 17px;
    width: 17px;
  }
`;
export const ModalSpan = styled.span`
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #999999;
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;
export const ModalSelect = styled.select`
  margin-top: -10px;
  height: 40px;
  width: 100%;
  border: 1.5px solid #333333;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0px 15px;
  @media only screen and (max-width: 600px) {
    width: 300px;
    font-size: 0.75rem;
  }
`;
export const ModalSelectNew = styled(ModalSelect)`
  /* width: 100%; */
  margin-right: 25px;
  @media only screen and (max-width: 600px) {
    width: 138px;
  }
`;
export const ModalSelectForm = styled.select`
  -webkit-appearance: none;
  appearance: none;
  background: url("/assets/vector.svg") white no-repeat 98.5% !important; /* !important used for overriding all other customisations */
  background: url("/assets/vector.svg") white no-repeat calc(100% - 10px) !important; /* Better placement regardless of input width */
  outline: 0;
  width: 100%;
  height: 70px;
  margin-top: -5px;
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 1px;
  padding: 0 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.color999999};
  ::placeholder {
    color: ${({ theme }) => theme.colors.color999999};
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 600px) {
    height: 44px;
    margin-top: 10px;
    border-radius: 2px;
    ::placeholder {
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.5px;
    }
  }
`;
export const ModalImage = styled(Image)`
  height: 300px;
  width: auto;
  position: absolute;
  top: 200px;
  left: -10px;
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: auto;
    left: 55px;
  }
`;
export const DesignImage = styled(ModalImage)`
  border: 1px solid ${({ theme }) => theme.colors.color333333};
  border-radius: 8px;
  top: 700px;
  left: 500px;
  @media only screen and (min-width: 1200px) and (max-width: 1340px) {
    left: 400px;
  }
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: auto;
    left: 55px;
  }
`;

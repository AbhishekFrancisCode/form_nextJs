import Image from "next/image";
import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  padding: 50px;
  background: ${({ theme }) => theme.colors.color020B36};
  @media only screen and (max-width: 600px) {
    padding: 20px;
    padding-top: 0;
  }
`;
export const ContactHeading = styled.p`
  font-family: "Oswald";
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.colorFAED25};
  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    margin-top: 20px;
  }
`;
export const ContactOrFind = styled.p`
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.white};
`;
export const HrTagRed = styled.hr`
  border: 2px solid ${({ theme }) => theme.colors.white};
  margin-top: 25px;
  background: ${({ theme }) => theme.colors.white};
`;
export const ContactAddressContainer = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.colorFAED25};
  border-radius: 8px;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    border-radius: 4px;
    padding: 8px 5px;
  }
`;
export const NumContainer = styled.div`
  margin-top: 25px;
`;
export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    text-align: center;
  }
`;
export const AddressContainer = styled.div`
  /* padding: 50px 50px 50px 200px; */
`;
export const AddressHeading = styled.p`
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.color020B36};
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
`;
export const AddressNum = styled.p`
  margin-top: -10px;
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.color020B36};
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
`;
export const ButtonTags = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.color020B36};
  border-radius: 8px;
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.color020B36};
  padding: 13px 0;
  width: 100%;
  margin-top: 20px;
  :hover {
    background: ${({ theme }) => theme.colors.color2B35A3};
    color: ${({ theme }) => theme.colors.white};
  }
  :active {
    background: ${({ theme }) => theme.colors.colorFAED25};
    color: ${({ theme }) => theme.colors.color020B36};
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 600px) {
    border-radius: 2px;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    width: 90%;
    margin-top: 10px;
    padding: 5px 0;
  }
`;
export const IconImages = styled(Image)`
  margin: 0 10px;
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    height: 35px;
    width: auto;
  }
  @media only screen and (max-width: 600px) {
    height: 22px;
    width: auto;
  }
`;
export const FbIcon = styled(IconImages)`
  margin-left: -20px;
  @media only screen and (max-width: 600px) {
    margin-left: -5px;
  }
`;
export const IgIcon = styled(IconImages)`
  margin-left: -15px;
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;
export const LiIcon = styled(IconImages)`
  margin-left: -35px;
  @media only screen and (max-width: 600px) {
    margin-left: -10px;
  }
`;
export const AddressMainContainer = styled.div`
  margin-top: 70px;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;
export const OrTextRow = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContactBarContainer = styled.div`
  width: 100%;
  height: 22vh;
  align-items: center;
  justify-content: center;
  background-color: #333;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    height: 15vh;
  }
`;

export const Container = styled.div`
  display: grid;
  width: 100vw;
  text-align: center;
  position: absolute;
  transition: all 0.25s ease-in-out;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    background-color: #333;
  }
`;

export const Main = styled.main`
  background: #333;
  color: white;
  width: 100vw;
  position: relative;
  padding-top: 25px;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding-top: 10px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  background: #333;
  height: 15vh;
  position: relative;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    height: 10vh;
  }
`;
export const Content1 = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    width: 80%;
    height: 80%;
  }
`;
export const Content2 = styled(Content1)`
  width: 8px;
  height: 70%;
  background-color: #ce1e1e;
  @media all and (max-width: 460px) {
    height: 50%;
  }
`;
export const Content3 = styled(Content1)``;

export const ContactBarText = styled.p`
  color: #fff;
  font-family: Red Hat Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  ${(props) =>
    props.smalltext
      ? css`
          text-transform: lowercase;
          @media screen and (min-width: 360px) and (max-width: 460px) {
            font-size: 12px;
            letter-spacing: 0.5px;
          }
        `
      : css`
          text-transform: lowercase;
          @media screen and (min-width: 360px) and (max-width: 460px) {
            font-size: 12px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }
        `}
`;
export const ContactBarText2 = styled.p`
  color: #fff;
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: 2px;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    font-size: 10px;
    line-height: 15px;
  }
`;

export const ContactImage = styled(Image)`
  width:40px;
  height:40px
  position: relative;
  @media all and (max-width: 460px) {
    width:16px;
    height:16px
  }
`;

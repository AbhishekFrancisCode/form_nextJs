import Image from "next/image";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px rgba(43, 53, 163, 0.1);
  border-radius: 0px 0px 8px 8px;
  position: relative;
  @media screen and (max-width: 460px) {
    padding: 15px;
    position: relative;
    margin-bottom: -60px;
  }
`;
export const NavImage = styled(Image)`
  margin-left: 60px;
  @media screen and (max-width: 600px) {
    margin-top: 8px;
    margin-left: 10px;
    height: 30px;
    width: auto;
  }
`;
export const ContactText = styled.p`
  font-family: "Urbanist";
  font-weight: 900;
  font-size: 1.125rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.color2B35A3};
  :hover {
    color: ${({ theme }) => theme.colors.colorCE1E1E};
  }
  :active {
    color: ${({ theme }) => theme.colors.color333333};
  }
  @media screen and (max-width: 460px) {
    font-size: 0.75rem;
  }
`;
export const ContactTextContainer = styled.div`
  margin-right: 70px;
  @media screen and (max-width: 460px) {
    margin-right: 0px;
  }
`;
export const ButtonContainer = styled.div`
  margin-right: 30px;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    margin-right: 0;
  }
`;
export const ModalHeading = styled.p`
  margin-bottom: -10px;
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.color020B36};
  @media screen and (min-width: 360px) and (max-width: 460px) {
    font-size: 1.125rem;
  }
`;
export const ButtonDiv = styled.div`
  justify-content: end;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    justify-content: space-evenly;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px -2px 8px rgba(43, 53, 163, 0.1);
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    padding: 15px 0;
    border-radius: 4px 4px 0 0;
  }
`;

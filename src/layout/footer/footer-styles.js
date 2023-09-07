import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.color333333};
  padding: 20px;
  @media only screen and (max-width: 600px) {
    /* padding: 0px; */
  }
`;
export const FooterText = styled.p`
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 2px;
  padding-top: 15px;
  color: ${({ theme }) => theme.colors.white};
  :hover {
    color: ${({ theme }) => theme.colors.colorFAED25};
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 0.875rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-align: center;
    padding-top: 0px;
    text-align: center;
  }
`;
export const FooterDiv = styled.div`
  @media only screen and (max-width: 600px) {
    padding-bottom: 50px;
  }
`;
export const FooterPrivacy = styled(FooterText)`
  text-align: end;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;
export const FooterTextFine = styled(FooterText)`
  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    padding-top: 5px;
  }
`;

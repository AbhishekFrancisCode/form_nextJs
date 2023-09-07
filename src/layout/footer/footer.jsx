import Link from "next/link";
import React from "react";
import {
  FooterContainer,
  FooterDiv,
  FooterPrivacy,
  FooterText,
  FooterTextFine,
} from "./footer-styles";

const Footer = () => {
  return (
    <>
      <FooterContainer className="row">
        <div className="col-sm-7">
          <FooterTextFine className="">&copy; FINEMAKE 2023</FooterTextFine>
        </div>
        <div className="col-sm-5">
          <FooterDiv className="row">
            {/* <div className="col-sm-6">
              <Link
                href="/terms-conditions"
                className="text-decoration-none text-white"
              >
                <FooterPrivacy>PRIVACY POLICY</FooterPrivacy>
              </Link>
            </div> */}
            <div className="col-sm-6">
              {/* <Link
                href="/terms-conditions"
                className="text-decoration-none text-white"
              >
                <FooterText className="text-center">
                  TERMS AND CONDITIONS
                </FooterText>
              </Link> */}
            </div>
          </FooterDiv>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;

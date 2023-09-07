import Link from "next/link";
import React from "react";
import Contact from "../src/components/home/contact-us/contact";
import DesignerForm from "../src/components/home/designer/designer-form";
import {
  ButtonDiv,
  NavbarContainer,
  NavImage,
} from "../src/components/home/navbar/navbar-styles";
import Footer from "../src/layout/footer/footer";
import Layout from "../src/layout/layout";
import Logo from "../public/assets/logo.svg";
import FinemakeButton from "../src/finemake-ui/button/finemake-button";
import { ContactTextContainer } from "../src/components/home/navbar/navbar-styles";
import { useRouter } from "next/router";
import styled from "styled-components";
const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.color2B35A3};
`;
const ColDiv = styled.div`
  width: 55%;
  margin-left: 65px;
  @media only screen and (max-width: 600px) {
    margin-left: 15px;
    width: 90%;
  }
`;
const BookDesigner = () => {
  const router = useRouter();
  const goToWorkTogether = () => {
    router.push("/?p=work-together");
  };
  return (
    <div>
      <Layout headText={"book-a-designer"}>
        <NavbarContainer className="fixed-top" id="navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <Link href="/">
                  <NavImage
                    src={Logo}
                    alt="logo"
                    className="img-fluid"
                    priority={true}
                  />
                </Link>
              </div>
              <ButtonDiv className="col-6 d-flex align-items-center">
                <ContactTextContainer className="">
                  <FinemakeButton
                    clickHandler={goToWorkTogether}
                    cls={"book-btn"}
                    btnTxt={"Become a Business Partner"}
                  />
                </ContactTextContainer>
              </ButtonDiv>
            </div>
          </div>
        </NavbarContainer>
        <FormContainer className="row">
          <ColDiv className="">
            <DesignerForm />
          </ColDiv>
        </FormContainer>
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
};

export default BookDesigner;

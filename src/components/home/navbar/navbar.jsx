import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../../public/assets/logo.svg";
import Modal from "react-bootstrap/Modal";
import FinemakeButton from "../../../finemake-ui/button/finemake-button";
import {
  ButtonContainer,
  ButtonDiv,
  ContactTextContainer,
  ModalHeading,
  NavbarContainer,
  NavImage,
} from "./navbar-styles";
import ModalComponent from "../modal/modal";
const BlogDiv = styled.div`
  margin: 10px 0;
`;
const BlogLink = styled(Link)`
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.color2B35A3};
  :hover {
    color: ${({ theme }) => theme.colors.color020B36};
  }
  :active {
    color: ${({ theme }) => theme.colors.colorFAED25};
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    padding-left: 50px;
    position: relative;
    right: -130px;
  }
`;
import { useEffect } from "react";
import styled from "styled-components";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [work, setWork] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    // const element = document.getElementById("form");
    // setWork(element);
  }, []);
  const goToContact = () => {
    if (work) {
      work.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <NavbarContainer className="fixed-top" id="navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Link href="/">
                <NavImage src={Logo} alt="logo" className="" priority={true} />
              </Link>
            </div>
            <ButtonDiv className="col-5 d-flex align-items-center">
              {/* <ButtonContainer className="">
                <FinemakeButton
                  cls={"book-link"}
                  btnTxt={"Book a Designer"}
                  type="button"
                  clickHandler={handleShow}
                />
              </ButtonContainer>
              <ContactTextContainer onClick={goToContact} className="">
                <FinemakeButton
                  cls={"book-btn"}
                  btnTxt={"Become a Business Partner"}
                />
              </ContactTextContainer> */}
            </ButtonDiv>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="p-4 mt-3" closeButton>
                <Modal.Title>
                  <ModalHeading>Book a Designer</ModalHeading>
                </Modal.Title>
              </Modal.Header>
              <ModalComponent handleClose={handleClose} />
            </Modal>
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

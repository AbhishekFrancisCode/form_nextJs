import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AddressContainer,
  AddressHeading,
  AddressMainContainer,
  AddressNum,
  ButtonContainer,
  ButtonTags,
  ContactAddressContainer,
  ContactContainer,
  ContactHeading,
  ContactOrFind,
  FbIcon,
  HrTagRed,
  IconImages,
  IgIcon,
  LiIcon,
  NumContainer,
  OrTextRow,
} from "./contact-styles";
import Google from "../../../../public/assets/g-icon.svg";
import Facebook from "../../../../public/assets/f-icon.svg";
import Instagram from "../../../../public/assets/i-icon.svg";
import Linkedin from "../../../../public/assets/l-icon.svg";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <div className="row flex-wrap-reverse">
          <div className="col-md-5">
            <ContactHeading className="text-center">FIND US AT</ContactHeading>
            <ButtonContainer className="d-flex flex-column justify-content-between">
              <div>
                <Link href="https://goo.gl/maps/j6n3MkoMUdUHqPvQ6">
                  <ButtonTags>
                    <IconImages src={Google} alt="icon" /> Google map
                  </ButtonTags>
                </Link>
              </div>
              <div>
                <Link href="https://www.facebook.com/finemake.in/">
                  <ButtonTags>
                    <FbIcon src={Facebook} alt="icon" /> Facebook
                  </ButtonTags>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/finemake_in/">
                  <ButtonTags>
                    <IgIcon src={Instagram} alt="icon" /> Instagram
                  </ButtonTags>
                </Link>
              </div>
              <div>
                <Link href="https://www.linkedin.com/company/finemake/">
                  <ButtonTags>
                    <LiIcon src={Linkedin} alt="icon" /> Linkedin
                  </ButtonTags>
                </Link>
              </div>
            </ButtonContainer>
          </div>
          <div className="col-md-2">
            <OrTextRow className="row">
              <div className="col-4">
                <HrTagRed />
              </div>
              <div className="col-4">
                <ContactOrFind>OR</ContactOrFind>
              </div>
              <div className="col-4">
                <HrTagRed />
              </div>
            </OrTextRow>
          </div>
          <div className="col-md-5">
            <ContactHeading className="text-center">CONTACT US</ContactHeading>
            <AddressMainContainer className="row">
              <div className="col-6">
                <Link
                  href="tel:+ 91-7093212345"
                  className="text-decoration-none"
                >
                  <ContactAddressContainer>
                    <AddressHeading>Tel:</AddressHeading>
                    <AddressNum>+ 91-7093212345</AddressNum>
                  </ContactAddressContainer>
                </Link>
              </div>
              <div className="col-6">
                <Link
                  href="mailto:hello@finemake.in"
                  className="text-decoration-none"
                >
                  <ContactAddressContainer>
                    <AddressHeading>Email:</AddressHeading>
                    <AddressNum>hello@finemake.in</AddressNum>
                  </ContactAddressContainer>
                </Link>
              </div>
            </AddressMainContainer>
            <div className="row">
              <Link
                href="https://goo.gl/maps/j6n3MkoMUdUHqPvQ6"
                className="text-decoration-none"
              >
                <ContactAddressContainer className="mt-3">
                  <AddressHeading>Address:</AddressHeading>
                  <NumContainer>
                    <AddressNum>Finemake Private Limited </AddressNum>
                    <AddressNum>
                      Cyptrus square Building, Dommasandra circle,
                    </AddressNum>
                    <AddressNum> Sarjapur - Marathahalli Rd.</AddressNum>
                    <AddressNum>Bengaluru, Karnataka-562125</AddressNum>
                  </NumContainer>
                </ContactAddressContainer>
              </Link>
            </div>
          </div>
        </div>
      </ContactContainer>
    </>
  );
};

export default Contact;

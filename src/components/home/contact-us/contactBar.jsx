import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
  ContactBarContainer,
  Container,
  Main,
  ContentBox,
  Content1,
  Content2,
  Content3,
  ContactBarText,
  ContactBarText2,
  ContactImage,
} from "./contact-styles";
import phone from "../../../../public/assets/phone.svg";
import email from "../../../../public/assets/email.svg";
import Contact from "./contact"

const ContactBar = () => {
  return (
    <ContactBarContainer>
      <Container>
        <Main>
          <ContactBarText>
            Contact us:
          </ContactBarText>
        </Main>
        <ContentBox className="">
          <Content1>
            {/* <ContactImage
              src={phone}
              alt="phone"
              className=""
              priority={true}
            /> */}
            <Link href="/" style={{textDecoration: 'none'}}>
              <ContactBarText smalltext>https://www.finemake.in/</ContactBarText>
            </Link>
            <ContactBarText>+ 91-7093212345</ContactBarText>
            <ContactBarText>BANGALORE FINEMAKE</ContactBarText>
            <ContactBarText> 3rd Floor, Cvptrus Square,<br/>Dommasandra Circle, Sarjapur Rd.<br/>Bangalore - 562125</ContactBarText>
          </Content1>
          <Content1>
            <Link href="/" style={{textDecoration: 'none'}}>
              <ContactBarText smalltext>hello@finemake.in/</ContactBarText>
            </Link>
            <ContactBarText>+ 91-7569975172</ContactBarText>
            <ContactBarText>HYDEBADRA FINEMAKE</ContactBarText>
            <ContactBarText> 3rd Floor, Rohini Layout, Opp-<br/>Shilparamam, Madhapur<br/>Hyderabad - 500081</ContactBarText>
          </Content1>
          <Content1>
            <Contact/>
          </Content1>
        </ContentBox>
      </Container>
    </ContactBarContainer>
  );
};

export default ContactBar;

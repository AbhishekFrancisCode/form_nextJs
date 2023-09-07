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

const ContactBar = () => {
  return (
    <ContactBarContainer>
      <Container>
        <Main>
          <ContactBarText>
            You can also register your finemake products through :
          </ContactBarText>
        </Main>
        <ContentBox>
          <Content1>
            <ContactImage
              src={phone}
              alt="phone"
              className=""
              priority={true}
            />
            <ContactBarText smalltext>Call to register :</ContactBarText>
            <ContactBarText2>+ 91-7093212345</ContactBarText2>
          </Content1>
          <Content2 />
          <Content3>
            <ContactImage
              src={email}
              alt="email"
              className=""
              priority={true}
            />
            <ContactBarText smalltext>or Email us at :</ContactBarText>
            <ContactBarText2>hello@finemake.in</ContactBarText2>
          </Content3>
        </ContentBox>
      </Container>
    </ContactBarContainer>
  );
};

export default ContactBar;

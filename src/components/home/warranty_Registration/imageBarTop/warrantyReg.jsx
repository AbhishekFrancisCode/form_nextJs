import React from "react";
import {
  MainContainer,
  RegImage,
  RegImage1,
  TitleContainer,
  TitleContainerText,
} from "./warrantyReg-style";
import warrantyImage from "../../../../../public/assets/warrantyImage.png";
import warrantyImage1 from "../../../../../public/assets/warrantyImage1.png";

const WarrantyRegistration = () => {
  return (
    <MainContainer>
      <RegImage
        src={warrantyImage}
        alt="imageReg"
        className=""
        priority={true}
      />
      <TitleContainer>
        <TitleContainerText>Welcome to finemake support</TitleContainerText>
        <TitleContainerText smalltext>
          Meet your precision makers
        </TitleContainerText>
      </TitleContainer>
      <RegImage1
        src={warrantyImage1}
        alt="imageReg"
        className=""
        priority={true}
      />
    </MainContainer>
  );
};

export default WarrantyRegistration;

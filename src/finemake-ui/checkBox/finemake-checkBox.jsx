import React from "react";
import styled from "styled-components";
import checkIcon from "../../../public/assets/check.svg";

const CheckboxText = styled.div`
  padding-left: 50px;
  color: ${({ theme }) => theme.colors.color333333};
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  position: relative;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
  }
`;

const MyInput = styled.input`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.color333333};
  position: absolute;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    height: 16px;
    width: 16px;
    margin-right: 0;
  }
`;

const MyLabel = styled.label`
  padding: 20px;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    padding: 8px;
  }
`;

const FinemakeCheckbox = (props) => {
  const { name, value, register, required, text } = props;
  return (
    <MyLabel>
      <MyInput
        id={"check1"}
        name={name}
        value={value}
        {...register(name, {
          required: required,
        })}
        type="checkbox"
      />
      <CheckboxText>{text}</CheckboxText>
    </MyLabel>
  );
};
export default FinemakeCheckbox;

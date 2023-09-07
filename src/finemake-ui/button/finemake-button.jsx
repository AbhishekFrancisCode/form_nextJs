import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.colorCE1E1E};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  outline: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.colorCE1E1E};
  padding: 15px;
  font-family: Red Hat Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  @media only screen and (max-width: 600px) {
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    border-radius: 2px;
  }

  :disabled {
    opacity: 0.4;
  }
  &.book-btn {
    padding: 12px;
    background: ${({ theme }) => theme.colors.color2B35A3};
    border: 1px solid ${({ theme }) => theme.colors.color2B35A3};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
    :hover {
      background: ${({ theme }) => theme.colors.color020B36};
    }
    :active {
      background: ${({ theme }) => theme.colors.colorFAED25};
    }
    @media only screen and (min-width: 360px) and (max-width: 420px) {
      // font-size: 0.75rem;
      // padding: 5px;
      display: none;
    }
  }
  &.book-link {
    padding: 12px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.color2B35A3};
    color: ${({ theme }) => theme.colors.color2B35A3};
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
    :hover {
      border: 1px solid ${({ theme }) => theme.colors.color020B36};
      color: ${({ theme }) => theme.colors.color020B36};
    }
    :active {
      border: 1px solid ${({ theme }) => theme.colors.colorFAED25};
      color: ${({ theme }) => theme.colors.colorFAED25};
    }
    @media only screen and (min-width: 360px) and (max-width: 420px) {
      // font-size: 0.75rem;
      // padding: 5px;
      display: none;
    }
  }
  &.form-btn {
    margin-top: 50px;
    :hover {
      background: ${({ theme }) => theme.colors.color333333};
    }
    :active {
      background: ${({ theme }) => theme.colors.color2B35A3};
      color: ${({ theme }) => theme.colors.white};
    }
    @media only screen and (max-width: 600px) {
      margin-top: 30px;
    }
  }
  &.btn-outline-primary {
    color: inherit;
    background-color: #fff;
    border: 0.2px solid #7d8b96;
  }

  &.btn-primary {
    background: linear-gradient(95.46deg, #0d59cc 1.77%, #0969ce 98.61%);

    &.btn-login {
      font-size: 1.1rem;
    }
  }
`;

const FinemakeButton = (props) => {
  const { clickHandler, btnTxt, btnType, cls, disabled, icon, id } = props;
  return (
    <Button
      id={id}
      onClick={clickHandler}
      type={btnType || "submit"}
      className={`${cls || ""}`}
      disabled={disabled || false}
    >
      {icon != null ? <span className="mr-1">{icon}</span> : ""} {btnTxt || ""}
    </Button>
  );
};

export default FinemakeButton;

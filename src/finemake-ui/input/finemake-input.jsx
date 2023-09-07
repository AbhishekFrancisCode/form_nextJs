import React from "react";
import styled from "styled-components";

const MyInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: 0;
  height: 70px;
  margin-top: 7px;
  font-family: "Urbanist";
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.color333333};
  padding: 0 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.color333333};
  ::placeholder {
    color: ${({ theme }) => theme.colors.color999999};
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: 1px;
  }
  &.modal-input {
    margin-top: -35px;
    height: 40px;
    width: 100%;
    border: 1.5px solid ${({ theme }) => theme.colors.color333333};
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    padding: 0px 15px;
    @media only screen and (max-width: 600px) {
      width: 300px;
      font-size: 0.75rem;
    }
    ::placeholder {
      font-family: "Red Hat Display";
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.colors.color999999};
    }
  }
  &.last-name {
    margin-top: 40px;
    @media only screen and (max-width: 600px) {
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 44px;
    margin-top: 10px;
    border-radius: 2px;
    ::placeholder {
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.5px;
    }
  }
`;

const MyLabel = styled.label`
  color: ${({ theme }) => theme.colors.color333333};
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 1px;
  @media only screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
`;

const FinemakeInput = (props) => {
  const {
    type,
    id,
    cls,
    name,
    value,
    onBlur,
    labelTxt,
    placeholder,
    clickHandler,
    register,
    required,
    number,
    min,
    focus,
  } = props;
  return (
    <div className="position-relative">
      <div className="d-flex flex-column pt-4">
        <div>
          {labelTxt ? (
            <MyLabel htmlFor={id} className="input-hover-label">
              {labelTxt}
            </MyLabel>
          ) : null}
        </div>
        <MyInput
          id={id}
          name={name}
          value={value}
          className={cls}
          onBlur={onBlur}
          {...register(name, {
            required: required,
            valueAsNumber: number,
            minLength: min,
          })}
          onChange={clickHandler}
          placeholder={placeholder}
          type={type ? type : "text"}
          autoFocus={focus}
        />
      </div>
    </div>
  );
};
export default FinemakeInput;

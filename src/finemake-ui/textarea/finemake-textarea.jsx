import React from "react";
import styled from "styled-components";

const MyInput = styled.textarea`
  outline: 0;
  height: 196px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.colorE1E1E1};
  padding: 20px 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.color333333};
  ::placeholder {
    color: ${({ theme }) => theme.colors.color999999};
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: 1px;
  }

  &.last-name {
    margin-top: 57px;
  }
  @media only screen and (max-width: 600px) {
    height: 132px;
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
  color: ${({ theme }) => theme.colors.white};
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 2px;
  @media only screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
  }
`;

const FinemakeTextarea = (props) => {
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
          {...register(name, { required: required })}
          onChange={clickHandler}
          placeholder={placeholder}
          type={type ? type : "text"}
        />
      </div>
    </div>
  );
};
export default FinemakeTextarea;

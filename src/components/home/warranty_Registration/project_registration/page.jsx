import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  MainContainer,
  HeadingTextContaner,
  HeadingSubTextContaner,
  FormHeadingTextContaner,
  FormContainerArea,
  ExclamationIcon,
  ThankYouPara,
  ThankYouText,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  ErrorText,
} from "./project_registration-style";
import FinemakeInput from "../../../../finemake-ui/input/finemake-input";
import FinemakeButton from "../../../../finemake-ui/button/finemake-button";
import FinemakeCheckbox from "../../../../finemake-ui/checkBox/finemake-checkBox";
import exclamationIcon from "../../../../../public/assets/triangle-exclamation.svg";

const ProjectRegisteration = () => {
  const [show, setShow] = useState(false);
  const [optionData, setOptionData] = useState({});
  const handleChangeOption = (val) => {
    setOptionData(val);
  };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const state = { checked: false };
  const handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });
  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      email: "",
      mobile_code: 91,
      mobile: "",
    },
  });

  const myfun = (data) => {
    // console.log(data);
    axios
      .post(`${url}store-front`, {
        query_type: "LEAD_FORM_B2B",
        id: data.warranty_numbe,
        name: data.first_name + " " + data.last_name,
        mobile_code: 91,
        mobile: data.number,
        email: data.email,
      })
      .then((res) => {
        // console.log(res, "axios");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => {
        // console.log(err);
        alert("Enter Valid Input");
      });
    reset();
  };

  return (
    <MainContainer>
      <HeadingTextContaner>finemake technologies pvt. ltd.</HeadingTextContaner>
      <HeadingSubTextContaner>Warranty Registration</HeadingSubTextContaner>
      <FormHeadingTextContaner>
        {" "}
        Enter your details below:
      </FormHeadingTextContaner>
      <FormContainerArea>
        <form className="p-3" onSubmit={handleSubmit(myfun)}>
          <div className="row">
            <div className="col-md-4">
              <FinemakeInput
                labelTxt="Enter your project number*"
                placeholder="Warranty Number"
                name="warranty_number"
                register={register}
                required={true}
                cls={
                  errors.warranty_number ? "border border-danger border-2" : ""
                }
              />
              {errors.warranty_number &&
                errors.warranty_number.type == "required" && (
                  <div className="d-flex flex-wrap pt-1 col-md-10">
                    <ExclamationIcon
                      src={exclamationIcon}
                      alt="exclamationIcon"
                      priority={true}
                    />
                    <ErrorText className="text-danger px-2">
                      Enter valid Project Number
                    </ErrorText>
                  </div>
                )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <FinemakeInput
                labelTxt="What's your first name?*"
                placeholder="First Name"
                name="first_name"
                register={register}
                required={true}
                cls={errors.first_name ? "border border-danger border-2" : ""}
              />
              {errors.first_name && errors.first_name.type == "required" && (
                <div className="d-flex flex-wrap pt-1 col-md-10">
                  <ExclamationIcon
                    src={exclamationIcon}
                    alt="exclamationIcon"
                    priority={true}
                  />
                  <ErrorText className="text-danger px-2">
                    Please provide a full name
                  </ErrorText>
                </div>
              )}
            </div>
            <div className="col-md-4">
              <FinemakeInput
                labelTxt="and your last name?"
                cls={errors.last_name ? "border border-danger border-2" : ""}
                placeholder="Last Name"
                name="last_name"
                register={register}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <FinemakeInput
                labelTxt="Your mobile number*"
                placeholder="eg.9854xxxxxx"
                name="number"
                type="number"
                register={register}
                required={true}
                number={true}
                cls={errors.number ? "border border-danger border-2" : ""}
              />
              {errors.number && errors.number.type == "required" && (
                <div className="d-flex flex-wrap pt-1 col-md-10">
                  <ExclamationIcon
                    src={exclamationIcon}
                    alt="exclamationIcon"
                    priority={true}
                  />
                  <ErrorText className="text-danger px-2">
                    Please enter valid mobile number
                  </ErrorText>
                </div>
              )}
            </div>
            <div className="col-md-4">
              <FinemakeInput
                labelTxt="An email address*"
                placeholder="you@address.com"
                name="email"
                type="email"
                register={register}
                required={true}
                cls={errors.email ? "border border-danger border-2" : ""}
              />
              {errors.email && errors.email.type == "required" && (
                <div className="d-flex flex-wrap pt-1 col-md-10">
                  <ExclamationIcon
                    src={exclamationIcon}
                    alt="exclamationIcon"
                    priority={true}
                  />
                  <ErrorText className="text-danger px-2">
                    Enter valid e-mail address
                  </ErrorText>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-8 mt-5">
            <FinemakeCheckbox
              name="checkbox"
              value={true}
              register={register}
              required={true}
              text="I confirm to receive the acknowledgement of finemake registration and to receive updates/information on finemake products and services through Whatsapp/SMS"
            />
            {errors.checkbox && errors.checkbox.type == "required" && (
              <div className="d-flex flex-wrap pt-1 col-md-10">
                <ExclamationIcon
                  src={exclamationIcon}
                  alt="exclamationIcon"
                  priority={true}
                />
                <ErrorText className="text-danger px-2">
                  Please tick this box if you want to proceed.
                </ErrorText>
              </div>
            )}
          </div>

          <div className="col-md-8">
            {show ? (
              <div className="text-center mt-4">
                <ThankYouText>Thanks! We'll be in touch.</ThankYouText>
                <ThankYouPara>
                  Our team will reach out to you soon.
                </ThankYouPara>
              </div>
            ) : (
              <FinemakeButton btnTxt="Register" cls="form-btn" />
            )}
          </div>
        </form>
      </FormContainerArea>
    </MainContainer>
  );
};

export default ProjectRegisteration;

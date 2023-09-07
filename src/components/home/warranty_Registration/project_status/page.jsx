import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  MainContainer,
  HeadingTextContaner,
  HeadingSubTextContaner,
  FormHeadingTextContaner,
  FormContainerArea,
  Line,
  LineText,
  ErrorText,
  ThankYouPara,
  ThankYouText,
  ExclamationIcon,
  LineContainer,
} from "./project_status-style";
import FinemakeInput from "../../../../finemake-ui/input/finemake-input";
import FinemakeButton from "../../../../finemake-ui/button/finemake-button";
import exclamationIcon from "../../../../../public/assets/triangle-exclamation.svg";

const ProjectStatus = () => {
  const [show, setShow] = useState(false);
  const [optionData, setOptionData] = useState({});
  const handleChangeOption = (val) => {
    setOptionData(val);
  };
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      id: "",
      mobile_code: 91,
      mobile: "",
    },
  });
  const myfun = (data) => {
    console.log(data);
    axios
      .post(`${url}store-front`, {
        query_type: "LEAD_FORM_B2B",
        mobile_code: 91,
        mobile: data.number,
      })
      .then((res) => {
        console.log(res);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        alert("Enter Valid Input");
      });
    reset();
  };

  return (
    <MainContainer>
      <HeadingTextContaner>finemake technologies pvt. ltd.</HeadingTextContaner>
      <HeadingSubTextContaner>Warranty Status</HeadingSubTextContaner>
      <FormHeadingTextContaner>
        Enter your details below:
      </FormHeadingTextContaner>
      <FormContainerArea>
        <form onSubmit={handleSubmit(myfun)}>
          <div className="row">
            <div className="col-md-6">
              <FinemakeInput
                labelTxt="Enter the Project number/Warranty number*"
                placeholder="Warranty Number"
                name="warranty_number"
                register={register}
                required={true}
                cls={errors.first_name ? "border border-danger border-2" : ""}
              />
            </div>
            {errors.warranty_number &&
              errors.warranty_number.type == "required" && (
                <div className="d-flex flex-wrap pt-1 col-md-10">
                  <ExclamationIcon
                    src={exclamationIcon}
                    alt="exclamationIcon"
                    priority={true}
                  />
                  <i className="text-danger px-2">Enter valid Project Number</i>
                </div>
              )}
          </div>

          <LineContainer className="d-flex flex-wrap">
            <Line />
            <LineText className="px-5">or</LineText>
            <Line />
          </LineContainer>

          <div className="row">
            <div className="col-md-6">
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
                  <i className="text-danger px-2">
                    Please enter valid mobile number
                  </i>
                </div>
              )}
            </div>
          </div>

          {errors.email && errors.email.type == "required" && (
            <i className="text-warning">Please enter your email</i>
          )}
          <div className=" col-md-8 mt-5">
            {show ? (
              <div className="text-center mt-4">
                <ThankYouText>Thanks! We'll be in touch.</ThankYouText>
                <ThankYouPara>
                  Our team will reach out to you soon.
                </ThankYouPara>
              </div>
            ) : (
              <FinemakeButton btnTxt="Submit" cls="form-btn" />
            )}
          </div>
        </form>
      </FormContainerArea>
    </MainContainer>
  );
};

export default ProjectStatus;

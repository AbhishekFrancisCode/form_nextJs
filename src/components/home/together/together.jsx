import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  customStyles,
  FirstInput,
  HeadingContainer,
  LabelOption,
  LastNameInput,
  PassionImage,
  SelectOption,
  ThankYouPara,
  ThankYouText,
  TogetherContainer,
  TogetherHeading,
  TogetherQuesText,
  TogetherText,
  TogetherWork,
} from "./together-styles";
import Passion from "../../../../public/assets/passion.png";
import FinemakeInput from "../../../finemake-ui/input/finemake-input";
import FinemakeTextarea from "../../../finemake-ui/textarea/finemake-textarea";
import FinemakeButton from "../../../finemake-ui/button/finemake-button";
import { useEffect } from "react";
import data from "./json/data.json";
import ReactSelect from "react-select";

const Together = () => {
  const [show, setShow] = useState(false);
  const [optionData, setOptionData] = useState({});
  const handleChangeOption = (val) => {
    setOptionData(val);
  };
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const options = data.map((item) => ({
    label: item.city,
    value: item.city,
  }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile_code: 91,
      mobile: "",
      city: "Bengaluru",
      discuss_about: "",
    },
  });
  const myfun = (data) => {
    // console.log(data);
    axios
      .post(`${url}store-front`, {
        query_type: "LEAD_FORM_B2B",
        name: data.first_name + " " + data.last_name,
        mobile_code: 91,
        mobile: data.number,
        city: optionData.value,
        email: data.email,
        discuss_about: data.discuss_about,
      })
      .then((res) => {
        // console.log(res);
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
    <TogetherContainer>
      <div className="row">
        {/* <TogetherWork className="col-md-5">
          <HeadingContainer>
            <TogetherHeading>LET'S WORK TOGETHER</TogetherHeading>
          </HeadingContainer>
          <PassionImage src={Passion} alt="pass" className="img-fluid" />
          <TogetherQuesText className="mt-4">
            Ready to dominate your home interiors business?
          </TogetherQuesText>
          <TogetherText className="mt-4">
            We provide you the finest modular kitchen & wardrobe for your
            clients.
          </TogetherText>
          <TogetherText className="mt-4">
            We have over 8 years of experience & are fully equipped to handle
            any project requirement you can throw at us.We'd love to speak with
            you about your dream project.
          </TogetherText>
          <TogetherText className="mt-4">
            Fill out our contact form & one of our experts will be in touch.
          </TogetherText>
        </TogetherWork> */}
        <div className="col-md-7" id="form">
          <form className="p-3" onSubmit={handleSubmit(myfun)}>
            <div className="d-flex flex-wrap">
              <FirstInput className="">
                <FinemakeInput
                  labelTxt="What's your name?"
                  placeholder="First Name"
                  name="first_name"
                  register={register}
                  required={true}
                  cls={errors.first_name ? "border border-danger border-2" : ""}
                />
              </FirstInput>

              <LastNameInput className="">
                <FinemakeInput
                  cls="last-name"
                  placeholder="Last Name"
                  name="last_name"
                  register={register}
                />
              </LastNameInput>
            </div>
            {errors.first_name && errors.first_name.type == "required" && (
              <i className="text-warning">Please enter your first name</i>
            )}
            <div className="row">
              <div className="col-md-6">
                <FinemakeInput
                  labelTxt="Your mobile number*."
                  placeholder="eg.9854xxxxxx"
                  name="number"
                  type="number"
                  register={register}
                  required={true}
                  number={true}
                  cls={errors.number ? "border border-danger border-2" : ""}
                />
                {errors.number && errors.number.type == "required" && (
                  <i className="text-warning">Please enter your number </i>
                )}
              </div>

              <div className="col-md-6">
                <LabelOption>Which city are you from?*</LabelOption>
                <SelectOption
                  options={options}
                  placeholder="eg. Banglore"
                  styles={customStyles}
                  onChange={handleChangeOption}
                  value={optionData}
                />
                {/* {errors?.city && errors?.city.type == "required" && (
                  <p className="text-danger">Please enter your city</p>
                )} */}
              </div>
            </div>
            <div className="row">
              <FinemakeInput
                labelTxt="An email address."
                placeholder="you@address.com"
                name="email"
                type="email"
                register={register}
                required={true}
                cls={errors.email ? "border border-danger border-2" : ""}
              />
            </div>
            {errors.email && errors.email.type == "required" && (
              <i className="text-warning">Please enter your email</i>
            )}
            <div className="row">
              <FinemakeTextarea
                labelTxt="How can we help you out?"
                placeholder="Enter your message here"
                name="discuss_about"
                register={register}
                required={true}
                cls={
                  errors.discuss_about ? "border border-danger border-2" : ""
                }
              />
            </div>
            {errors.discuss_about &&
              errors.discuss_about.type == "required" && (
                <i className="text-warning">Please enter your message here</i>
              )}
            <div>
              {show ? (
                <div className="text-center mt-4">
                  <ThankYouText>Thanks! We'll be in touch.</ThankYouText>
                  <ThankYouPara>
                    Our team will reach out to you soon.
                  </ThankYouPara>
                </div>
              ) : (
                <FinemakeButton btnTxt="Send" cls="form-btn" />
              )}
            </div>
          </form>
        </div>
      </div>
    </TogetherContainer>
  );
};

export default Together;

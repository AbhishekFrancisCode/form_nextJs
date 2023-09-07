import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import FinemakeInput from "../../../finemake-ui/input/finemake-input";
import {
  ModalImage,
  ModalLabel,
  ModalSelect,
  ModalSelectNew,
} from "./styles/modal-styles";
import { useState } from "react";
import { useEffect } from "react";
import FinemakeButton from "../../../finemake-ui/button/finemake-button";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import Thankyou from "../../../../public/assets/thankyou.svg";
import styled from "styled-components";
const Form = styled.form`
  max-height: 77vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const ModalComponent = ({ handleClose }) => {
  const [showimage, setShowimage] = useState(false);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const myfun = (data) => {
    const dataArr = state.map((stateCode) => {
      if (data.state == stateCode.sid) {
        return stateCode.name;
      }
    });
    data.state = dataArr.join("");
    axios
      .post(`${url}store-front`, {
        query_type: "BOOK_A_DESIGNER_B2B",
        name: data.name,
        email: data.email,
        mobile_code: 91,
        mobile: data.mobile,
        budget: data.budget,
        property_type: data.property_type,
        property_location: data.location,
        state: data.state,
        city: data.city,
        when: data.when,
      })
      .then((res) => {
        // console.log(res);
        setShowimage(true);
        setTimeout(() => {
          setShowimage(false);
          handleClose();
        }, 2000);
      })
      .catch((err) => {
        alert("Enter Valid Input");
      });
    reset();
  };
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://prodapi.finemake.in/api/v1/misc/get-states")
      .then((res) => setState(res.data.data));
  }, []);

  const [stateid, setStateid] = useState(0);
  const handleState = (event) => {
    const getStateId = event.target.value;
    setStateid(Number(getStateId));
  };

  const [city, setCity] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://prodapi.finemake.in/api/v1/misc/get-all-cities-by-state/${stateid}`
      )
      .then((res) => setCity(res.data.data));
  }, [stateid]);
  return (
    <div>
      <Form onSubmit={handleSubmit(myfun)}>
        <Modal.Body className="p-4 pt-0">
          <div>
            <ModalLabel>Name*</ModalLabel>
            <FinemakeInput
              cls={"modal-input"}
              name="name"
              placeholder="eg. John Doe"
              required={true}
              min={3}
              register={register}
              focus={true}
            />
            {errors.name && errors.name.type == "required" && (
              <p className="text-danger">Please enter your name</p>
            )}
            {errors.name && errors.name.type == "minLength" && (
              <p className="text-warning">Please enter minimum 3 letters</p>
            )}
          </div>
          <div>
            <ModalLabel>Email*</ModalLabel>
            <FinemakeInput
              cls={"modal-input"}
              name="email"
              type="email"
              placeholder="me@address.com"
              required={true}
              min={10}
              register={register}
            />
            {errors.email && errors.email.type == "required" && (
              <p className="text-danger">Please enter your email</p>
            )}
            {errors.email && errors.email.type == "minLength" && (
              <p className="text-warning">Please enter minimum 10 letters</p>
            )}
          </div>
          <div>
            <ModalLabel>Mobile Number*</ModalLabel>
            <FinemakeInput
              cls={"modal-input"}
              name="mobile"
              type="number"
              placeholder="8948XXXXXX"
              required={true}
              min={10}
              register={register}
              number={true}
            />
            {errors.mobile && errors.mobile.type == "required" && (
              <p className="text-danger">Please enter your mobile number</p>
            )}
            {errors.mobile && errors.mobile.type == "minLength" && (
              <p className="text-warning">
                Please enter your minimum 10 digits
              </p>
            )}
          </div>
          <div className="row">
            <div className="col-6">
              <ModalLabel>Property Type</ModalLabel>

              <ModalSelectNew
                name="property_type"
                className=""
                {...register("property_type", { required: false })}
              >
                <option value="">choose option</option>
                <option value="independent house">Independent house</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="duplex">Duplex</option>
                <option value="penthouse">Penthouse</option>
              </ModalSelectNew>
              {errors.property_type && errors.property_type.type == "required"}
            </div>
            <div className="col-6">
              <ModalLabel>Budget</ModalLabel>
              <ModalSelectNew
                name="budget"
                className=""
                {...register("budget", { required: false })}
              >
                <option value="">choose option</option>
                <option value="2-4 lakh">2-4 lakh</option>
                <option value="4-8 lakh">4-8 lakh</option>
                <option value="8-12 lakh">8-12 lakh</option>
                <option value="0-2 lakh">0-2 lakh</option>
                <option value="12-16 lakh">12-16 lakh</option>
                <option value="16-20 lakh">16-20 lakh</option>
                <option value="20+ lakh">20+ lakh</option>
              </ModalSelectNew>
              {errors.budget && errors.budget.type == "required"}
            </div>
          </div>
          <div>
            <ModalLabel>Property Location or Property Name*</ModalLabel>
            <FinemakeInput
              cls={"modal-input"}
              name="location"
              placeholder="eg. Bengaluru"
              required={true}
              register={register}
            />
            {errors.location && errors.location.type == "required" && (
              <p className="text-danger">Please enter your location</p>
            )}
          </div>
          <div className="row">
            <div className="col-6">
              <ModalLabel>State*</ModalLabel>
              <ModalSelectNew
                name="state"
                className="me-4"
                {...register("state", { required: true })}
                onChange={(e) => handleState(e)}
              >
                <option value="">choose option</option>
                {state.map((stateName) => {
                  const { sid, name } = stateName;
                  return (
                    <option key={sid} value={sid}>
                      {name}
                    </option>
                  );
                })}
              </ModalSelectNew>
              {errors.state && errors.state.type == "required" && (
                <p className="text-danger">Please choose your state</p>
              )}
            </div>
            <div className="col-6">
              <ModalLabel>City*</ModalLabel>
              <ModalSelectNew
                name="city"
                className=""
                {...register("city", { required: true })}
              >
                <option value="">choose option</option>
                {city.map((cityName) => {
                  const { cid, name } = cityName;
                  return (
                    <option key={cid} value={name}>
                      {name}
                    </option>
                  );
                })}
              </ModalSelectNew>
              {errors.city && errors.city.type == "required" && (
                <p className="text-danger">Please choose your city</p>
              )}
            </div>
          </div>
          <div>
            <ModalLabel>
              When do you plan to start your interior work
            </ModalLabel>
            <ModalSelect
              name="when"
              className=""
              {...register("when", { required: false })}
            >
              <option value="">choose option</option>
              <option value="Immediately">Immediately</option>
              <option value="1-2 months">1-2 months</option>
              <option value="2-4 months">2-4 months</option>
              <option value="4-6 months">4-6 months</option>
              <option value="6 +months">6 +months</option>
            </ModalSelect>
            {errors.when && errors.when.type == "required"}
          </div>
        </Modal.Body>
        <Modal.Footer className="p-4 pt-1 mx-5 border-0">
          <FinemakeButton cls={"book-btn"} btnTxt={"Send Details"} />
        </Modal.Footer>
      </Form>
      {isSubmitSuccessful && showimage && (
        <ModalImage src={Thankyou} alt="thankyou" />
      )}
    </div>
  );
};

export default ModalComponent;

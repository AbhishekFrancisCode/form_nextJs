import React, { useState } from "react";
import styled from "styled-components";

import HeadTag from "./head-tag";

const Header = (props) => {
  return (
    <>
      <HeadTag title={props.title} />
    </>
  );
};

export default Header;

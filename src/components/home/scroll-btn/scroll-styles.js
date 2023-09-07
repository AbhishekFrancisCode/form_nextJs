import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    width: 4rem;
    height: 4rem;
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 450px) {
      width: 3.5rem;
      height: 3.5rem;
      bottom: 5rem;
      right: 1rem;
    }
  }
`;
export const ScrollImage = styled(Image)``;

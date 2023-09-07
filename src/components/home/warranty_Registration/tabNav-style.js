import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 360px) and (max-width: 460px) {
    font-size: 1.125rem;
  }
`;

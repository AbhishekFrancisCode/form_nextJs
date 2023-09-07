/**************************************************************
 *
 **************   NOTE: define only gloabl css   **************
 *
 **************************************************************/

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-size: .875rem;
    font-family: "Red Hat Display", sans-serif;
    letter-spacing: 0.04rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.color212121};
    overflow-x: hidden;
  }
`;

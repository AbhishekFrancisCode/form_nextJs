// import '../styles/globals.css';
import { ThemeProvider } from "styled-components";
import { ColorPalette } from "../src/finemake-ui/theme/finemake-theme";
import { GlobalStyles } from "../src/finemake-ui/theme/global-styles";

//global bootstrap theme.
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const theme = {
  colors: ColorPalette,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

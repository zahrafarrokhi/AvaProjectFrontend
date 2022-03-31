import "../styles/globals.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";
// https://mui.com/customization/theming/
let theme = createTheme({
  palette: {
    primary: {
      main: "#3170ea",
    },
    secondary: {
      main: "#eaa338",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "0px 4px 20px rgba(31, 86, 192, 0.3)",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  // https://nextjs.org/docs/basic-features/layouts
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;

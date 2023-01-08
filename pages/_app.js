import React, { useEffect, useState, useContext } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
import createEmotionCache from "../utility/createEmotionCache";
import Theme from "../styles/ui/Theme";
import "../styles/globals.css";
import "../styles/ui/styles.css";
// import "../styles/components/projectmade/ProjectCard.css.map";
import MainM from "../styles/MainM";
import "../styles/components/projectmade/ProjectCard.css";
import "../styles/components/projectmade/ProjectCard.scss";

import { MaximizeRounded } from "@mui/icons-material";
import DarkThemeContext, {
  DarkThemeProvider,
} from "../styles/context/DarkThemeContext";
import { createTheme, responsiveFontSizes } from "@mui/material";
import Colors from "../styles/colors/Colors";
import Header from "../styles/ui/Header";
import ScrollToTop from "../styles/ui/ScrollToTop";
import ScrollTop from "../styles/ui/ScrollTop";
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // const location = useLocation();
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [darkTheme, setDarkTheme] = useState(getDefaultTheme);

  const arcBlue = "#FFFFFF";
  const arcOrange = "#FFBA60";
  const arcGrey = "#868686";

  let theme = createTheme({
    palette: {
      common: {
        blue: Colors.blue,
        orange: arcOrange,
      },
      primary: {
        main: darkTheme ? Colors.BDark : Colors.BWhite,
      },
      secondary: {
        main: darkTheme ? Colors.white : Colors.Black,
      },
    },
    typography: {
      tab: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
        color: "white",
      },
      estimate: {
        fontFamily: "Pacifico",
        fontSize: "1rem",
        textTransform: "none",
        color: "white",
      },
      h2: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "2.5rem",
        color: darkTheme ? Colors.white : Colors.Black,
        lineHeight: 1.5,
      },
      h3: {
        fontFamily: "sans-serif",
        fontSize: "2.5rem",
        color: darkTheme ? Colors.white : Colors.Black,
        fontWeight: 700,
      },
      h4: {
        fontFamily: "sans-serif",
        fontSize: "1.75rem",
        color: darkTheme ? Colors.white : Colors.Black,
        fontWeight: 700,
      },
      h5: {
        fontFamily: "Raleway",
        fontSize: "1.55rem",
        color: darkTheme ? Colors.white : Colors.Black,
        fontWeight: 550,
      },
      h6: {
        fontWeight: 500,
        fontFamily: "Raleway",
        color: darkTheme ? Colors.white : Colors.Black,
        lineHeight: 1,
      },
      subtitle1: {
        fontSize: "1.25rem",
        fontWeight: 300,
        color: arcGrey,
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem",
      },
      body1: {
        fontSize: "1.25rem",
        color: darkTheme ? Colors.SubWhite : Colors.SubBlack,
        fontWeight: 300,
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: arcGrey,
      },
      learnButton: {
        borderColor: arcBlue,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlue,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold",
      },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: Colors.blue,
            fontSize: "1rem",
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: Colors.blue,
            fontWeight: 300,
          },
          underline: {
            "&:before": {
              borderBottom: `2px solid ${Colors.blue}`,
            },
            "&:hover:not($disabled):not($focused):not($error):before": {
              borderBottom: `2px solid ${Colors.blue}`,
            },
          },
        },
      },
    },
  });
  const themeM = responsiveFontSizes(theme);
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1200);
  // }, []);

  // const { dt, t } = useContext(DarkThemeContext);
  // const [darkTheme] = dt;
  // const [themeM] = t;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaultTheme() {
    if (typeof window !== 'undefined') {
     const selectedTheme = JSON.parse(localStorage.getItem("darkTheme"));
     return selectedTheme || false;
    }
    return false;
    // return selectedTheme || false
  }
  return (
    <DarkThemeContext.Provider
      value={{ dt: [darkTheme, setDarkTheme], t: [themeM] }}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themeM}>
          {loading ? (
            <div
              className="loder"
              style={{ backgroundColor: darkTheme ? "#171C28" : "#FFFFFF" }}
            >
              {/* <XlviLoader
          className="loaderbolt"
          boltColor={"#FBFF00"}
          backgroundBlurColor={"#E0E7FF"}
        /> */}
              ff
              {/* <BallTriangle
            //  className="loder"
            height="150"
            width="150"
            color={Colors.blue}
            // backgroundBlurColor={"#E0E7FF"}
            ariaLabel="loading"
          /> */}
            </div>
          ) : (
            <div
              style={{
                backgroundColor: darkTheme ? "#171C28" : "#FFFFFF",
                height: "100%",
                width: "100%",
              }}
            >
              {/* <Suspense fallback={<Loading />} > */}
              <ScrollTop showBelow={120} />

              <Header
                {...props}
                value={value}
                setValue={setValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <ScrollToTop />
              <CssBaseline />
              <Component {...pageProps} />
              {/* <MainM /> */}
            </div>
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </DarkThemeContext.Provider>
  );
};

export default MyApp;

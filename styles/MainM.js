
import React, { useContext, useEffect, useState } from 'react'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'

import { DarkThemeContext } from './context/DarkThemeContext';
import ScrollTop from './ui/ScrollTop';
import Header from './ui/Header';
import Footer from './ui/Footer';
import ScrollToTop from './ui/ScrollToTop';
export default function main() {

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const { dt, t } = useContext(DarkThemeContext);
  const [darkTheme] = dt;
  const [themeM] = t;
  return (
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
          {/* </Suspense> */}

       
          {/* <Suspense fallback={<Loading />} > */}
          <Footer />
          {/* </Suspense> */}
        </div>
      )}
    </ThemeProvider>
  </StyledEngineProvider>
  )
}

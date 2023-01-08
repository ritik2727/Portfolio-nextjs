import { Grid } from "@mui/material";
import React from "react";
import { Typography, Button, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import programmer from "../styles/animation/programmer.json";
import Typewriter from "typewriter-effect";
import SocialMediaIcon from '../styles/ui/SocialMediaIcon';
import Skills from "../styles/components/skills/Skills";
import Proficiency from "../styles/components/skills/Proficiency";
import Colors from "../styles/colors/Colors";
import Link from "next/link";
import DisplayLottie from "../styles/components/displayLottie/DisplayLottie";

import { AnimatedDiv } from "../styles/components/animated";

const useStyles = makeStyles((theme, darkTheme) => ({
  // chabge
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  //   animation: {
  //     maxWidth: "50em",
  //     minWidth: "21em",
  //     marginTop: "2em",
  // // /    marginLeft: "10%",
  //     [theme.breakpoints.down("sm")]: {
  //       maxWidth: "30em"
  //     }
  //   },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: Colors.blue,
    color: "#FFFFFF",
    borderRadius: 50,
    fontFamily: "Roboto",
    height: 45,
    width: 145,
    // marginRight: 40,
    "&:hover": {
      backgroundColor: Colors.blue,
    },
    [theme.breakpoints.down("sm")]: {
      // marginRight: 20,
      width: 110,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    backgroundColor: "#1976D2",
    color: "#FFFFFF",
    height: 45,
    width: 145,
    "&:hover": {
      backgroundColor: Colors.blue,
    },
    [theme.breakpoints.down("sm")]: {
      // marginRight: 20,
      width: 110,
    },
  },
  // learnButton: {
  //   ...theme.typography.learnButton,
  //   fontSize: "0.7rem",
  //   height: 35,
  //   padding: 5,
  //   [theme.breakpoints.down("sm")]: {
  //     marginBottom: "2em",
  //   }
  // },
  // mainContainer: {
  //   marginTop: "5em",
  //   [theme.breakpoints.down("md")]: {
  //     marginTop: "3em"
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: "2em"
  //   }
  // },
  // heroTextContainer: {
  //   minWidth: "20em",
  //   marginLeft: "1em",
  //   [theme.breakpoints.down("xs")]: {
  //     marginLeft: 0
  //   }
  // },
  specialText: {
    fontFamily: "sans-serif",
    color: "#1976D2",
  },
  // subtitle: {
  //   marginBottom: "1em"
  // },
  // icon: {
  //   marginLeft: "2em",
  //   [theme.breakpoints.down("xs")]: {
  //     marginLeft: 0
  //   }
  // },
  // serviceContainer: {
  //   marginTop: "12em",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: 25
  //   }
  // },
}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AnimatedDiv
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <Grid container direction="column">
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          className={classes.rowContainer}
          style={{ marginTop: "5em", marginBottom: "5em" }}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems={matchesMD ? "center" : undefined}
            md={7}
            style={{ maxWidth: "32em" }}
          >
            <Grid item>
              <Typography variant="h3" align={matchesMD ? "center" : undefined}>
                Hi There !{" "}
                <span
                  className="wave"
                  style={{ fontWeight: "normal" }}
                  role="img"
                  aria-labelledby="wave"
                >
                  👋🏻
                </span>
              </Typography>
              <Typography variant="h3">
                I'M <span className={classes.specialText}>Ritik Jain</span>
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
              <Typography
                variant={matchesSM ? "h4" : "h3"}
                style={{ color: Colors.blue }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Developer",
                      "Full Stack Developer",
                      "React/React Native",
                      "MERN Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </Typography>
            </Grid>
            <Grid item>
              <SocialMediaIcon />
            </Grid>
            <Grid
              item
              container
              justifyContent={matchesMD ? "center" : undefined}
              className={classes.buttonContainer}
              spacing={3}
            >
              <Grid item>
                <AnimatedDiv
                  style={{ borderRadius: 50 }}
                  whileHover={{
                    scale: 1.2,
                    // textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: `0px 0px 8px ${Colors.blue}`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    className={classes.learnButtonHero}
                    variant="contained"
                    component={Link}
                    href="/contact"
                    onClick={() => props.setValue(5)}
                  >
                    ContactMe
                  </Button>
                </AnimatedDiv>
              </Grid>
              <Grid item>
                <AnimatedDiv
                  style={{ borderRadius: 50 }}
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: `0px 0px 8px ${Colors.blue}`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    className={classes.learnButtonHero}
                    variant="contained"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1p0Fh1gma--udH1-8Ch2AxqzqZMWutKto/view",
                        "_blank"
                      )
                    }
                  >
                    Resume
                  </Button>
                </AnimatedDiv>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesMD ? "center" : "flex-end"}
            md={5}
          >
            <DisplayLottie
              animationData={programmer}
              style={{ maxWidth: "40em", margin: 0 }}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Skills />
        </Grid>
        <Proficiency />
      </Grid>
    </AnimatedDiv>
  );
}

export default LandingPage;

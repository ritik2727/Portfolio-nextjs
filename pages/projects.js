import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import ecommerse from "../../assets/jpgtry.jpg";
// import bankingrj from "../../assets/bankingrj.jpg";
// import ngowf from "../../assets/ngowf.jpg";
// import keepnotes from "../../assets/keepnotes.jpg";

// import Done from "../../assets/donewithitapp.png";
// import lukjury from "../../assets/lukury.png";
// import spacez from "../../assets/spacx.png";
// import carschar from "../../assets/carschar.png";
// import bewwoofMobile from "../../assets/Bewakoofclone.png";

import ProjectCard from "../styles/components/projectmade/ProjectCard";

import { AnimatedDiv } from "../styles/components/animated";


const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingTop: "2em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      paddingTop: "0.5em",
    },
  },
}));
const data = [
  {
    type: "Website",
    name: "Char Pahiya",
    desc: "Online Cars Selling Website with MERN stack",
    gitLink: "https://github.com/ritik2727/note-app",
    appLink: "https://team-speed.herokuapp.com/",
    image: '/assets/carschar.png',
  },
  {
    type: "Website",
    name: "Travel Companion",
    desc: "Travel Companion is a web based application which help users to travel around India with minimal efforts. It is built on React JS Framework & NodeJS for Back-End.",
    gitLink: "https://github.com/ritik2727/Travel-Companion-frontend",
    appLink: "https://travel-companion-tau.vercel.app/",
    image: '/assets/lukury.png',
  },
  {
    type: "Mobile App",
    name: "Ecommerce App",
    desc: "This is a Ecommmerce Mobile App build with react native,firebase,ExpressJs,Stripe",
    gitLink: "https://github.com/ritik2727/E-Commerce_Mobile_App",
    appLink:
      "https://drive.google.com/drive/folders/1cYXlYOt6daAkdB3fAfHLx1fguGPz1R_w",
    image: '/assets/Bewakoofclone.png',
  },
  {
    type: "Website",
    name: "E-commmerce website",
    desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe",
    gitLink: "https://github.com/ritik2727/ecommerce",
    appLink: "https://ecommerse-ritik2727.vercel.app/",
    image: '/assets/jpgtry.jpg',
  },
  {
    type: "Website",
    name: "NGO Website",
    desc: "Website Payment integration using stripe in Donation website .Tech stack — ReactJS | Stripe | Material-UI .",
    gitLink: "https://github.com/ritik2727/Payment_integration",
    appLink: "https://donation-two.vercel.app/",
    image: '/assets/ngowf.jpg',
  },
  {
    type: "Website",
    name: "Basic Banking Website",
    desc: "This is a Basic Banking  website build with react,firebase",
    gitLink: "https://github.com/ritik2727/BankingSystem",
    appLink: "https://banking-ritik2727.vercel.app/",
    image: '/assets/bankingrj.jpg',
  },
  {
    type: "Mobile App",
    name: "DoneWithIt App",
    desc: "This is a Mobile App build with React Native and NodeJs .",
    gitLink: "https://github.com/ritik2727/DoneWithIt",
    appLink: "https://github.com/ritik2727/DoneWithIt",
    image:'/assets/donewithitapp.png',
  },
  {
    type: "Mobile App",
    name: "SpaceX Launch Stats",
    desc: "SpaceX launch history - React, GraphQL, Apollo.",
    gitLink: "https://github.com/ritik2727/spaceX_launch-stats",
    appLink: "https://github.com/ritik2727/spaceX_launch-stats",
    image:'/assets/spacx.png',
  },
  //   {
  //     type: "Website",
  //     name: "Quiz Game Website",
  //     desc: "This is a Quiz Game Website build with ReactJs",
  //     gitLink: "https://github.com/ritik2727/quiz-app",
  //     appLink: "https://quiz-app-op.herokuapp.com/",
  //     image: quizapp,
  //   },
  // {
  //   type: "Website",
  //   name: "Keep Notes Website",
  //   desc: "Notes Website with React, React Router and Redux",
  //   gitLink: "https://github.com/ritik2727/note-app",
  //   appLink: "https://client-ritik2727.vercel.app/",
  //   image: keepnotes,
  // },
];

function Project(props) {
  const theme = useTheme();
  const classes = useStyles();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AnimatedDiv
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Grid item style={{ marginBottom: "4em", marginTop: "4em" }}>
          <Typography variant="h2" align="center">
            Projects
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          {data &&
            data.map((item, id) => (
              <Grid
                item
                key={id}
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <ProjectCard
                  key={item.name}
                  image={item.image}
                  type={item.type}
                  name={item.name}
                  desc={item.desc}
                  gitLink={item.gitLink}
                  appLink={item.appLink}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </AnimatedDiv>
  );
}

export default Project;

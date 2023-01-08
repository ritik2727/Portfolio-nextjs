import { Grid,Typography,useMediaQuery , Hidden} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import technologyAnimation from "../../animation/landingPageCoder.json";
import DisplayLottie from '../displayLottie/DisplayLottie';



const useStyles = makeStyles(theme => ({
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "1em",
        paddingRight: "1em"
      }
    },
    iconContainer: {
      "&:hover $icon": {
          color: '#1976D2',
      }
  },
    icon:{
      color:'#868E96',
        "&:hover":{
           color:'#1976D2'
       }
    }
  }));
  
 
  function Skills(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
   
  


    const Containerfirst = () =>{
      return(
      <Grid item sm>
         <DisplayLottie animationData={technologyAnimation} style={{ maxWidth: "40em", margin: 0 }} />
      </Grid>
      )
    }
    const ContainerSecond = () =>{
      return (
        <Grid item container direction="column" sm style={{ maxWidth: "40em" }}>
        <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h3"
              style={{fontFamily: "Pacifico"}}
              gutterBottom
            >
            What I do
            </Typography>
        </Grid>
         <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </Typography>
          </Grid>
          {/* <Grid item style={{marginBottom:'1em'}}>
            <SkillsIcon />
          </Grid> */}
          <Grid>   
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications
            </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph

            >
              ⚡ Designing User Interfaces for various applications and giving out best User Experience
            </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              ⚡ Integration of third party services such as Firebase/ MongoDB/ Stripe 
            </Typography>
          </Grid>
      </Grid>
      )
    }

    return (
      <Grid container direction="column"  id='skills'>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "2em" }}
      >
        <Hidden mdDown>
        <Containerfirst/>
        </Hidden>
     
        <ContainerSecond />
        <Hidden mdUp>
        <Containerfirst/>
        </Hidden>
      </Grid>
     </Grid>
    );
}

export default Skills;



import React from "react";

import Form from '../styles/components/Contact/Form';
import { useTheme ,Grid ,useMediaQuery,Hidden} from "@mui/material";

import mailAnimation from "../styles/animation/email.json";
import DisplayLottie from "../styles/components/displayLottie/DisplayLottie";

import { AnimatedDiv } from "../styles/components/animated";

export default function ContactMe(props) {

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <AnimatedDiv 
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.2,type: 'spring' }}
  >
    <Grid container direction='row' style={{paddingBottom:'3em',marginTop:'3em'}}>
      <Form style={{marginTop:'5em'}} />
      <Hidden lgDown>
            <Grid 
                item 
                container 
                direction={matchesMD ? 'column' : 'row'}
              
                alignItems='center'
                justifyContent={matchesMD ? 'center' : undefined}
                lg={7}
                xl={8}
            >
       
                 <Grid item>
                 <DisplayLottie animationData={mailAnimation} />
                </Grid> 
            </Grid>
        </Hidden>
    </Grid>
    </AnimatedDiv>
  );
}





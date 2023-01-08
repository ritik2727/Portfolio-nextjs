import React, { useState ,useEffect,useContext} from 'react';
import { AppBar,Button,IconButton,List,ListItem,Tab,Tabs,SwipeableDrawer } from '@mui/material';
import { Toolbar,useScrollTrigger ,ListItemText} from '@mui/material';
import makeStyles  from '@mui/styles/makeStyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
// import logo from '../../assets/rj455.svg'
// import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';

import styled from 'styled-components';
import {ImCross} from 'react-icons/im';
import Link from 'next/link';


// import { DarkThemeContext } from '../context/DarkThemeContext';
import Colors from '../colors/Colors';
import Image from 'next/image';
import DarkThemeContext from '../context/DarkThemeContext';


  
  function ElevationScroll(props) {
    const { children } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }



  
  const useStyles = makeStyles((theme) => ({

  
    toolbarMargin: {
      ...theme.mixins.toolbar,
      // marginBottom: "3em",
      // [theme.breakpoints.down("md")]: {
      //   marginBottom: "2em"
      // },
      // [theme.breakpoints.down("xs")]: {
      //   marginBottom: "1.25em"
      // }
    },
    logo: {
      height: "8em",
      [theme.breakpoints.down("md")]: {
        height: "7em"
      },
      [theme.breakpoints.down("xs")]: {
        height: "5.5em"
      }
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    tabContainer: {
      marginLeft: "auto"
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
      color:'black',
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light
      }
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0px"
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {
        opacity: 1
      }
    },
    drawerIcon: {
      height: "50px",
      width: "50px",
      color:Colors.blue
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    drawer: {
      marginTop:'2em',
      backgroundColor:Colors.BDark
    },
    drawerItem: {
      ...theme.typography.tab,
     
      opacity: 0.7
    },
    drawerItemEstimate: {
      backgroundColor: Colors.blue,
      "&:hover": {
        backgroundColor:Colors.blue
      }
    },
    drawerItemSelected: {
      "& .MuiListItemText-root": {
        opacity: 1
      }
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1
    },
  }));
  
  export default function Header(props) {
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme,setDarkTheme] = dt;
    const classes = useStyles();
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const handleChange = (e, newValue) => {
      props.setValue(newValue);
    };
  

  
   
    const routes = [
      { name: "Home",  activeIndex: 0,link:'/' },
      { name: "About",activeIndex: 1,link:'/about'},
      { name: "Projects", activeIndex: 2,link:'/projects' },
      { name: "Contact", activeIndex: 3 ,link:'/contact'}
    ];
  
    useEffect(() => {
      [ ...routes].forEach(route => {
        switch (window.location.pathname) {
          case `${route.link}`:
            if (props.value !== route.activeIndex) {
              props.setValue(route.activeIndex);
              if (
                route.selectedIndex &&
                route.selectedIndex !== props.selectedIndex
              ) {
                props.setSelectedIndex(route.selectedIndex);
              }
            }
            break;

          default:
            break;
        }
      });
    });
  
    const tabs = (
      <React.Fragment>
        <Tabs
          value={props.value}
          onChange={handleChange}
          className={classes.tabContainer}
          TabIndicatorProps={{  
            style: {
                display: "none",
            },
          }}
        >
          {routes.map((route, index) => (
            <Tab
              key={`${route}${index}`}
              className={classes.tab}
              component={Link} 
              href={route.link}
              style={{color:darkTheme?Colors.white :Colors.Black}}
              label={route.name}
            /> 
          ))}
        </Tabs>
        {/* <Switch style={{color:'blue', }} 
        
       
        /> */}
        <Button
          disableRipple
          // className={classes.button}
          value={darkTheme}
          onClick={() =>setDarkTheme(!darkTheme)} 
         
        >{darkTheme ?
          <img
          src='/assets/moon.svg'
           style={{width:25,height:25}} 
           alt='moon'

           />
           :
           <img
           src='/assets/sun.svg'
            style={{width:25,height:25}} 
            alt='sun'
 
            />
        }
        </Button>
      </React.Fragment>
    );
    const StyledPaper = styled.div`
    margin-top:2em;
    background:${darkTheme?Colors.BDark : Colors.BWhite};
 `;
  
    const drawer = (
      <React.Fragment>
        <SwipeableDrawer
          anchor='top'
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          // classes={{ paper: classes.drawer }}
          PaperProps={{ component : StyledPaper }}
        >
          <div className={classes.toolbarMargin} />
          <List disablePadding>
            {routes.map(route => (
              <ListItem
                // divider
                key={`${route}${route.activeIndex}`}
                button
                component={Link}
                href={route.link}
                selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography 
                style={{textAlign: 'center',color:darkTheme?Colors.white :Colors.Black}} >
                  {route.name}
                </ListItemText>
              </ListItem>
            ))}
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                setDarkTheme(!darkTheme);
              }}
      
              // divider
              button
              // component={Link}
              classes={{
                root: classes.drawerItemEstimate,
                selected: classes.drawerItemSelected
              }}
              // to="/estimate"
              
            >
              <ListItemText className={classes.drawerItem} disableTypography style={{textAlign: 'center'}}>
              {darkTheme ?
                <img
                src='/assets/moon.svg'
                style={{width:25,height:25}} 
                alt='moon'

                />
                :
                <img
                src='/assets/sun.svg'
                  style={{width:25,height:25}} 
                  alt='sun'
      
                  />
                }
              </ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
        <IconButton
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
         {openDrawer ? 
          <ImCross style={{color:Colors.blue,paddingRight:'1em'}}/> : 
          <MenuIcon className={classes.drawerIcon} /> 
          }
        </IconButton>
      </React.Fragment>
    );
    
  

    return (
      <React.Fragment>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar disableGutters id="back-to-top-anchor">
              <Button
                component={Link}
                href="/"
                disableRipple
                onClick={() => props.setValue(0)}
                className={classes.logoContainer}
                style={{color:'white'}}
              >
              <img src='/assets/rj455.svg' alt='logo'
               style={{height:70,width:70,padding:'0.5em',marginLeft:matchesSM ? 0 :'2em'}}
              />
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
  
      </React.Fragment>
    );
  }

  
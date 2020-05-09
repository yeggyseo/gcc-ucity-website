import React from "react";
import { 
  Grid, 
  makeStyles, 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  ListItem, 
  Divider, 
  IconButton 
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import gcclogo from "../../static/images/logo/gcclogo.png";
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktop: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

// See more styling in Navbar.css
const collapse__links = {
  color: "black", textDecoration: "none"
}

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>

          {/* Not Collapsed; Desktop */}
          <Grid container alignItems="center" style={{marginTop: '30px',paddingLeft:'20px',paddingRight:'20px'}}>
            {/* Logo */}
            <Grid item md={4} lg={5} container alignItems="center">
              <Link to="/">
                <img src={gcclogo} alt={gcclogo} className="home__img" style={{ width: "205.516px", height: "85px" }}/>
              </Link>
            </Grid>

            {/* Links */}
            <Grid item md={8} lg={7} className={classes.desktop}>
              <ul className='menu'>
                <li className='menu__about'>
                  <Link to='/'>About</Link>
                  <ul className='dropdown'>
                      <Link to='/'><li className='dropdownLinks'>Welcome</li></Link>
                      <Link to='/'><li className='dropdownLinks'>Beliefs</li></Link>
                      <Link to='/'><li className='dropdownLinks'>Staff</li></Link>
                      <Link to='/'><li className='dropdownLinks'>Mainline</li></Link>
                      <Link to='/'><li className='dropdownLinks'>AMI</li></Link>
                  </ul>
                </li>
                <li className='menu__other'><Link to='/'>Family Groups</Link></li>
                <li className='menu__other'><Link to='/'>Ministries</Link></li>
                <li className='menu__other'><Link to='/'>Giving</Link></li>
                <li className='menu__other'><Link to='/'>Multimedia</Link></li>
                <li className='menu__other'><Link to='/'>Events</Link></li>
              </ul> 
            </Grid>
          </Grid>

          {/* Collapsed; Mobile */}
          <IconButton color="inherit" onClick={handleDrawerOpen} className={classes.mobile}>
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={open}>
        
        <div>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>

        <List>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Welcome
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Beliefs
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Staff
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Mainline Site
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              AMI
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Family Groups
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Ministries
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Giving
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Multimedia
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={collapse__links}>
              Events
            </Link>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}

export default Navbar;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import gcclogo from "../../static/images/logo/gcclogo.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     background: "transparent",
//     boxShadow: "none",
//     color: "white",
//     position: "fixed",
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.root}>
//       <Toolbar>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="menu"
//         >
//           <MenuIcon />
//         </IconButton>
//         <img
//           src={gcclogo}
//           alt={gcclogo}
//           className="home__img"
//           style={{ width: "205.516px", height: "85px" }}
//         />
//         <Button color="inherit">About</Button>
//         <Button color="inherit">Family Groups</Button>
//         <Button color="inherit">Ministries</Button>
//         <Button color="inherit">Giving</Button>
//         <Button color="inherit">Multimedia</Button>
//         <Button color="inherit">Events</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

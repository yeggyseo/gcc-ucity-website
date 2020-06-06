import React from "react";
import {
  Grid,
  makeStyles,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import gcclogo from "../../static/images/logo/gcclogo.png";
import logoBlack from "../../static/images/logo/gcclogo-black.png";
import "./Navbar.css";

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
  collapse__links: {
    color: "black",
    textDecoration: "none",
    fontWeight: '600',
    '&:hover': {
      textDecoration: 'none',
      color: 'rgb(79, 167, 255)',
    }
  }
}));

// See more styling in Navbar.css
const collapse__listItem = {
  display:'flex', 
  justifyContent:'center',
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

      {/* Not Collapsed; Desktop */}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Grid
            container
            alignItems="center"
            style={{
              marginTop: "30px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >

            {/* Logo */}
            <Grid item md={4} lg={5} container alignItems="center">
              <Link to="/">
                <img
                  src={gcclogo}
                  alt={gcclogo}
                  style={{ width: "205.516px", height: "85px" }}
                />
              </Link>
            </Grid>

            {/* Links */}
            <Grid item md={8} lg={7} className={classes.desktop}>
              <ul className="menu">
                <li className="menu__about">
                  <Link to="/">About</Link>
                  <ul className="dropdown">
                    <Link to="/"><li className="dropdownLinks">Welcome</li></Link>
                    <Link to="/"><li className="dropdownLinks">Beliefs</li></Link>
                    <Link to="/"><li className="dropdownLinks">Staff</li></Link>
                    <Link to="/"><li className="dropdownLinks">Mainline</li></Link>
                    <Link to="/"><li className="dropdownLinks">AMI</li></Link>
                  </ul>
                </li>
                <li className="menu__other"><Link to="/">Family Groups</Link></li>
                <li className="menu__other"><Link to="/">Ministries</Link></li>
                <li className="menu__other"><Link to="/">Giving</Link></li>
                <li className="menu__other"><Link to="/">Multimedia</Link></li>
                <li className="menu__other"><Link to="/">Events</Link></li>
              </ul>
            </Grid>
          </Grid>

          {/* Icon to collapse */}
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            className={classes.mobile}
            style={{outline:'none'}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Collapsed; Mobile */}
      <Drawer anchor="top" open={open}>
        <Grid
          container
          style={{
            paddingTop: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >

          {/* Logo */}
          <Grid item container xs={6}>
            <Link to="/">
              <img
                src={logoBlack}
                alt={logoBlack}
                style={{ width: "205.516px", height: "85px" }}
              />
            </Link>
          </Grid>

          {/* Icon to open */}
          <Grid item container xs={6} justify="flex-end" style={{height:'80%'}}>
            <IconButton 
              onClick={handleDrawerClose}
              style={{outline:'none'}}
            >
              <MenuIcon />
            </IconButton>
          </Grid>

          {/* Links */}
          <Grid item style={{width:'100%',paddingBottom:'20px'}}>
            <List>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Welcome</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Beliefs{" "}</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Staff</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Mainline Site</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>AMI</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Family Groups</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Ministries</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Giving</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Multimedia</Link></ListItem>
              <ListItem style={collapse__listItem}><Link to="/" className={classes.collapse__links}>Events</Link></ListItem>
            </List>
          </Grid>

        </Grid>
      </Drawer>
    </div>
  );
}

export default Navbar;
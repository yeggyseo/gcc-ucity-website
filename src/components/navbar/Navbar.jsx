import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import gcclogo from '../../static/images/logo/gcclogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "transparent",
    boxShadow: "none",
    color: "white",
    position: "fixed",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
        <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" className={classes.title}>
          News
        </Typography> */}
        <img 
            src={gcclogo} 
            alt={gcclogo} 
            className='home__img'
            style={{width:'205.516px', height:'85px'}}
        />
        <Button color="inherit">About</Button>
        <Button color="inherit">Family Groups</Button>
        <Button color="inherit">Ministries</Button>
        <Button color="inherit">Giving</Button>
        <Button color="inherit">Multimedia</Button>
        <Button color="inherit">Events</Button>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import gcclogo from "../../static/images/logo/gcclogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appbar: {
    flexGrow: 1,
    color: "black",
    background: "transparent",
    position: "fixed",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Grid container alignItems="center">
            <Grid item sm={3} style={{ border: "2px solid red" }}>
              <Link to="/">
                <img
                  src={gcclogo}
                  alt={gcclogo}
                  className="home__img"
                  style={{ width: "205.516px", height: "85px" }}
                />
              </Link>
            </Grid>
            <Grid
              item
              sm={9}
              style={{ border: "2px solid red" }}
              className={classes.title}
            >
              <Link
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingLeft: "40px",
                }}
              >
                About
              </Link>
              <Link
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingLeft: "40px",
                }}
              >
                Family Groups
              </Link>
              <Link
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingLeft: "40px",
                }}
              >
                Ministries
              </Link>
              <Link
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingLeft: "40px",
                }}
              >
                Giving
              </Link>
              <Link
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingLeft: "40px",
                }}
              >
                Multimedia
              </Link>
              <Link
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingLeft: "40px",
                }}
              >
                Events
              </Link>
            </Grid>

            {/* <Grid item container xs={3} sm={4} style={{textAlign:'right'}}>
                <h5 className={classes.title}><Link to='/finery/clothes' style={{color:'black',textDecoration:'none'}}>clothes</Link></h5>
                <h5 className={classes.title}><Link to='/finery/shoes' style={{color:'black',textDecoration:'none'}}>shoes</Link></h5>
                <h5 className={classes.title}><Link to='/finery/accessories' style={{color:'black',textDecoration:'none'}}>accessories</Link></h5>
              </Grid>
              <Grid item xs={4} sm={4} style={{textAlign:'center'}}>
                <h3><Link to='/finery' style={{color:'black',textDecoration:'none'}}><img src={gcclogo} alt={gcclogo} style={{width:'25px', position:'block'}} />finery</Link></h3>
              </Grid>
              <Grid item container sm={4}>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none'}}>search</Link></h5>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none'}}>sign in / up</Link></h5>
                <h5 className={classes.title}><Link to='/finery' style={{color:'black',textDecoration:'none'}}>cart</Link></h5>
              </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Welcome
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Beliefs
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Staff
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Mainline Site
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              AMI
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Family Groups
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Ministries
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Giving
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Multimedia
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Events
            </Link>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}

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

import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Footer.module.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => (
  <Grid
    container
    justify="center"
    alignItems="center"
    className={styles.footer}
  >
    <Grid item xs={9} md={8}>
      <p>
        Copyright © 1996-2020. Official website of{" "}
        <a href="/" className={styles.gcc}>
          Grace Covenant Church
        </a>{" "}
        in Philadelphia, PA. All rights reserved.
      </p>
    </Grid>

    <Grid item xs={9} md={1}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/gccphiladelphia/"
      >
        <FacebookIcon style={{ color: "black", marginRight: "2px" }} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/gccphiladelphia/"
      >
        <InstagramIcon style={{ color: "black", marginLeft: "2px" }} />
      </a>
    </Grid>
  </Grid>
);

export default Footer;

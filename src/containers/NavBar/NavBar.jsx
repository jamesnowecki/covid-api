import React from "react";
import styles from "./NavBar.module.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography varient="title" color="inherit">
              Covid-19 statistic tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

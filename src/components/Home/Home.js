import React from "react";
import { Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to check Login / Register System.
          <br></br>
          <br></br>
          <img src="./images/signin.svg" alt="icon" height="465px" />
        </Typography>
      </Paper>
    );
  }

  if (user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Welcome
          <br></br>
          <img src="./images/user.jpg" alt="icon" height="500px" />
        </Typography>
      </Paper>
    );
  }
};

export default Home;

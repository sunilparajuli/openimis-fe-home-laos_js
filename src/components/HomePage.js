import React, { Component } from "react";
import { withStyles } from "@material-ui/core";


const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
    minHeight: "200vh"
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 250
  }
});

class HomePage extends Component {
  render() {
    const { classes, logo } = this.props;   
    return (
      <div className={classes.logo}>
        <img src={logo} />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);

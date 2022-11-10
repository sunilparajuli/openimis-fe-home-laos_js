import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Contributions, useUserQuery } from "@openimis/fe-core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: theme.page,
}));

const HomePageContainer = (props) => {
  const { user } = useUserQuery();
  const classes = useStyles();

  if (!user) {
    return null;
  }

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12}>
        <Box mt={2}>
          <Typography variant="h4">
            Welcome {user.otherNames} {user.lastName}!
          </Typography>
        </Box>
      </Grid>
      <Contributions contributionKey="home.HomePage.Blocks" user={user} />
    </Grid>
  );
};

export default HomePageContainer;

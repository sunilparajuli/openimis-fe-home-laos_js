import { Contributions } from "@openimis/fe-core";
import React from "react";
import { Grid, Paper, Typography, Container } from '@material-ui/core';
import HospitalClaimsDashboard from "../components/ClaimChart";
import PieChart from "../components/PieChart";
import HistogramChart from "../components/HistogramChart";

const HomePage = (props) => {
  return (
    <>
    <Contributions contributionKey="home.HomePage.Container" {...props} />
    <Grid container spacing={2}>
      
      <Grid item xs={6}>
        {/* Content of the first column */}
        <PieChart/>
      </Grid>
      {/*  column */}
      
      {/* Second column */}
      <Grid item xs={6}>
        {/* Content of the third column */}
        <HospitalClaimsDashboard />
      </Grid>
    </Grid>
  </>
    );
};

export default HomePage;

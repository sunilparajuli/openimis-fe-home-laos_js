import { Contributions } from "@openimis/fe-core";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Grid, Paper, Typography, Container } from '@material-ui/core';
import HospitalClaimsDashboard from "../components/ClaimChart";
import PieChart from "../components/PieChart";
import {fetchAnalytics} from "../../actions"
import HistogramChart from "../components/HistogramChart";


const HomePage = (props) => {

    useEffect(() => {
    // Fetch analytics data when the component mounts
    props.fetchAnalytics();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

const { topClaims, topClaimByHospital } = props;
  const pieChartData = [
    { hospital: "Hospital A", totalClaims: 50 },
    { hospital: "Hospital B", totalClaims: 60 },
    { hospital: "Hospital C", totalClaims: 70 },
    { hospital: "Hospital D", totalClaims: 65 },
    { hospital: "Hospital E", totalClaims: 80 },
  ];
  return (
    <>
    <Contributions contributionKey="home.HomePage.Container" {...props} />
    <Grid container spacing={2}>
      
      <Grid item xs={6}>
        {/* Content of the first column */}
        <PieChart data={pieChartData}/>
      </Grid>
      {/* Second column */}
      <Grid item xs={3}>
        {/* Content of the second column */}
        <HistogramChart  data={pieChartData}/>
      </Grid>
      {/* Third column */}
      <Grid item xs={3}>
        {/* Content of the third column */}
        <HospitalClaimsDashboard />
      </Grid>
    </Grid>
  </>
    );
};

const mapStateToProps = (state) => ({
  rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
  claimAdmin: state.claim.claimAdmin,
  topClaims : state.home.topClaims,
  topClaimByHospital: state.home.topClaimByHospital
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
     fetchAnalytics
    },
    dispatch,
  );
};

export default injectIntl(
  
    connect(mapStateToProps, mapDispatchToProps)(withTheme(withStyles(styles)(HomePage)),
  ),
);

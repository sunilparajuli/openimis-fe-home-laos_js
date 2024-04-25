import React, { Component } from "react";
import Chart from "react-google-charts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAnalytics } from "../../actions";

class PieChart extends Component {
  componentDidMount() {
    // Call fetchAnalytics action when the component mounts
    this.props.fetchAnalytics();
  }

  render() {
    const { data, fetchingAnalytics, fetchedAnalytics } = this.props;

    // Show loading message if fetching data
    if (fetchingAnalytics && !fetchedAnalytics) {
      return <div>Loading data...</div>;
    }

    // Show no data message if data is empty
    if (!data || data.length === 0) {
      return <div>No data available</div>;
    }

    const chartData = [
      ["Label", "Value"],
      ...data.map(({ hospitalName, claimedAmount }) => [hospitalName, claimedAmount]),
    ];

    return (
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={chartData}
        options={{
          title: "Top 10 Claimed Claims",
          is3D: true,
        }}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  data: state.home?.topClaims || [], // Fallback to empty array if topClaims is undefined
  fetchingAnalytics: state.home?.fetchingAnalytics,
  fetchedAnalytics: state.home?.fetchedAnalytics,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAnalytics }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);

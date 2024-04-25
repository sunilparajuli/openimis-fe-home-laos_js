import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAnalytics } from '../../actions';
import { Chart } from 'react-google-charts';
import CircularProgress from '@material-ui/core/CircularProgress';

class HospitalClaimChart extends Component {
  componentDidMount() {
    // Fetch analytics data when the component mounts
    this.props.fetchAnalytics();
  }

  render() {
    const { totalClaimsByHospital, fetchingAnalytics, fetchedAnalytics } = this.props;

    // Show circular progress if fetching data
    if (fetchingAnalytics && !fetchedAnalytics) {
      return <CircularProgress />;
    }

    // Show no data message if data is empty
    if (!totalClaimsByHospital || totalClaimsByHospital.length === 0) {
      return <div>No data available</div>;
    }

    // Prepare chart data
    const data = [
      ['Hospital', 'Total Claims'],
      ...totalClaimsByHospital.map(({ hospitalName, totalClaim }) => [hospitalName, totalClaim]),
    ];

    // Chart options
    const options = {
      title: 'Hospital Claim Status',
      legend: { position: 'top' },
      isStacked: true,
      hAxis: {
        title: 'Total Claims',
        minValue: 0,
      },
      vAxis: {
        title: 'Health Facility',
      },
    };

    return (
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalClaimsByHospital: state.home?.totalClaimsByHospital || [], // Fallback to empty array if totalClaimsByHospital is undefined
  fetchingAnalytics: state.home?.fetchingAnalytics,
  fetchedAnalytics: state.home?.fetchedAnalytics,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnalytics: bindActionCreators(fetchAnalytics, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HospitalClaimChart);

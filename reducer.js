import {
  parseData,
  dispatchMutationReq,
  dispatchMutationResp,
  dispatchMutationErr,
  pageInfo,
  formatServerError,
  formatGraphQLError,
} from "@openimis/fe-core";

function reducer(
  state = {
    fetchingAnalytics : false,
    fetchedAnalytics : false,
    topClaims : null,
    topClaimByHospital : null,
   
  },
  action,
) {
  switch (action.type) {
   
    case "CLAIM_CLAIM_ANALYTICS_REQ":
      return {
        ...state,
        fetchingAnalytics : true,
        fetchedAnalytics : false,
        topClaims : null,
        totalClaimsByHospital : null
      }
    case "CLAIM_CLAIM_ANALYTICS_RESP":
      return {
        ...state,
        fetchingAnalytics : false,
        fetchedAnalytics : true,
        topClaims : action.payload.data?.dashboard?.topClaims ?? [],
        totalClaimsByHospital : action.payload.data?.dashboard?.totalClaimsByHospital ?? []
      }
    case "CLAIM_CLAIM_ANALYTICS_ERR":
      return {
        ...state,

        topClaims : action.payload,
        totalClaimsByHospital : action.payload,
      }      
          
    default:
      return state;
  }
}

export default reducer;

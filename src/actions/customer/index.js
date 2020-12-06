import {
  customerDetailsRequest,
  customerDetailsSuccess,
  customerDetailsFailure,
  showErrorFalse
} from './customer'
import { openLoginScreen, logCrashlytics } from '../../util/webview'
import API from '../../framework/api'
import { endpoint } from '../../framework/config'
import { getCorrelationId, getCurrentTimestamp } from '../../util/Utility'

export const fetchCustomerDetails = () => {
  return (dispatch) => {
    dispatch(customerDetailsRequest())
    const hasAccessToken = sessionStorage.getItem('accessToken')
    let accessToken = ''

    if (hasAccessToken) {
      accessToken = sessionStorage.getItem('accessToken')
    }
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'X-Correlation-ID': getCorrelationId(),
      'Accept-Language': 'en-US,th-TH'
      // ...deviceData
    }

    // Passing the key to save in local storage
    return API.get(endpoint.customerDetails, headers, undefined)
      .then((response) => {
        dispatch(customerDetailsSuccess(response))
      })
      .catch((error) => {
        const logData = {
          URL: endpoint.customerDetails,
          HTTP_ERROR_CODE: error.response.status,
          RESPONSE_CODE: error.response.data.status.code
        }
        logCrashlytics('LOG_CRASH', logData)
        if (error.response.status == 401) {
          openLoginScreen('home', false, 'show-balance')
        }
        dispatch(customerDetailsFailure(error))
      })
  }
}

export const fetchBalance = () => {
  return (dispatch) => {
    dispatch(customerDetailsRequest())
  }
}

export const changeErrorToFalse = () => {
  return (dispatch) => {
    dispatch(showErrorFalse())
  }
}

import { API_URL, DOLLAR_CONVERSION } from '../../constants/StripeInfo'
import * as actions from '../../constants/ActionTypes'

export function purchaseItem (token, amount, description) {
  return dispatch => {
    window.fetch(`${API_URL}/charge`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: token.id,
        amount: amount * DOLLAR_CONVERSION,
        description
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          dispatch(purchaseItemFailure(response.json()))
        }
      })
      .then(data => {
        dispatch(purchaseItemSuccess(data))
      })
      .catch((error) => {
        dispatch(purchaseItemFailure(error))
      })
  }
}

export function purchaseItemSuccess (statusInfo) {
  return {
    type: actions.PURCHASE_ITEM_SUCCESS,
    loading: false,
    statusInfo }
}

export function purchaseItemFailure (error) {
  return {
    type: actions.PURCHASE_ITEM_FAILURE,
    loading: false,
    error: error
  }
}

export function openCheckout () {
  return {
    type: actions.OPEN_CHECKOUT
  }
}

export function closeCheckout () {
  return {
    type: actions.CLOSE_CHECKOUT
  }
}

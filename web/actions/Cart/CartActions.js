import * as actions from '../../constants/ActionTypes'

export function addItemToCart (item) {
  return {
    type: actions.ADD_ITEM_TO_CART,
    item
  }
}

export function removeItemFromCart (item) {
  return {
    type: actions.REMOVE_ITEM_FROM_CART,
    item
  }
}

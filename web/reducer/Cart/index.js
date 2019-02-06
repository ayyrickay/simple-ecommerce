// understands how to update state tree for cards
import * as actions from '../../constants/ActionTypes'

const initialState = {
  checkout: false,
  cartItems: [],
  total: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CART :
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.item],
        total: state.total + action.item.price
      })
    case actions.REMOVE_ITEM_FROM_CART :
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(item => item.id !== action.item.id),
        total: state.total - action.item.price
      })
    case actions.OPEN_CHECKOUT :
      return Object.assign({}, state, { checkout: true })
    case actions.CLOSE_CHECKOUT :
      return Object.assign({}, state, { checkout: false })
    default:
      return state
  }
}

// Understands how to track items for purchase
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CartItem } from './CartItem'
import { removeItemFromCart } from '../../actions/Cart/CartActions'
import { openCheckout } from '../../actions/Item/ItemActions'
import styles from './Cart.css'
import PropTypes from 'prop-types'

export class Cart extends Component {
  constructor(props) {
    super(props)

    this.checkout = this.checkout.bind(this)
  }

  checkout () {
    if (this.props.cart.cartItems.length > 0) {
      this.props.openCheckout()
    }
  }

  render () {
    const {total, cartItems} = this.props.cart
    return (
      <div className={styles.cart}>
        <h3 className={styles.cartTitle}>Your Cart</h3>
        <ul className={styles.cartItems}>
          {cartItems.length > 0 ? cartItems.map((item, index) =>
            <CartItem
              key={index}
              removeItem={this.props.removeItem}
              {...item} />
          ) :
            <p className={styles.defaultText}>Please select an item to get started</p>}
        </ul>
        <p className={styles.total}>{`Total: $${total}`}</p>
        <div className={total > 0 ? styles.activeButton : styles.inactiveButton} onClick={this.checkout}> Checkout </div>
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number,
    cartItems: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  openCheckout: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
}

const mapStateToProps = ({cart}) => ({cart})

const mapDispatchToProps = (dispatch) => ({
  openCheckout: () => {
    dispatch(openCheckout())
  },
  removeItem: (item) => {
    dispatch(removeItemFromCart(item))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

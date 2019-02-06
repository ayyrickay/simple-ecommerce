// Understands how to render a checkout form
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {CardElement, injectStripe} from 'react-stripe-elements'
import { purchaseItem, closeCheckout } from '../../actions/Item/ItemActions'
import styles from './Modal.css'
import PropTypes from 'prop-types'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.checkout = this.checkout.bind(this)
    this.closeCheckout = this.closeCheckout.bind(this)
  }

  async checkout() {
    const {token} = await this.props.stripe.createToken({name: 'Name'})
    const { total, cartItems } = this.props.cart
    this.props.purchaseItem(token, total, cartItems.reduce((acc, item) => acc += `${item.itemName}, `, ''))
  }

  closeCheckout (e) {
    e.preventDefault()
    this.props.closeCheckout()
  }

  render() {
    const {purchase} = this.props.items
    return (
      <div className={styles.modal}>
        <div className={styles.checkout}>
          <div onClick={this.closeCheckout} className={styles.close}></div>
          {purchase ?
            <div className={styles.review}>
              <div className={styles.checkoutIcon}></div>
              <h3 className={styles.checkoutText}>Purchase Complete</h3>
              <p className={styles.confirmation}> Order <span className={styles.bold}>#{purchase.id.split('_')[1]}</span> completed for a total of <span className={styles.bold}>${purchase.amount / 100}</span>.</p>
            </div>
            :
            <div>
              <p className={styles.checkoutText} >Would you like to complete the purchase?</p>
              <CardElement classes={({base: styles.cardElement})}/>
              <button className={styles.send} onClick={this.checkout}>Complete Purchase</button>
            </div>
          }
        </div>
      </div>
    )
  }
}

CheckoutForm.propTypes = {
  cart: PropTypes.shape({
    total: PropTypes.number.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired,
  items: PropTypes.shape({
    purchase: PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  }).isRequired,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }),
  purchaseItem: PropTypes.func.isRequired,
  closeCheckout: PropTypes.func.isRequired,
}

const mapStateToProps = ({cart, items}) => ({cart, items})

const mapDispatchToProps = (dispatch) => ({
  purchaseItem: (token, amount, description) => {
    dispatch(purchaseItem(token, amount, description))
  },
  closeCheckout: () => {
    dispatch(closeCheckout())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutForm))

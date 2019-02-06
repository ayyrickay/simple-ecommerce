import React from 'react'
import CardGrid from './CardGrid/CardGrid'
import Cart from './Cart/Cart'
import Modal from './Modals/Modal.js'
import CheckoutForm from './Modals/CheckoutForm.js'
import { connect } from 'react-redux'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { STRIPE_API_KEY } from '../constants/StripeInfo'
import styles from './App.css'
import PropTypes from 'prop-types'

const App = (props) =>
  <StripeProvider apiKey={STRIPE_API_KEY}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.appTitle}>Test App</h1>
      </div>
      <CardGrid />
      <Cart />
      {props.cart.checkout ?
        <Modal>
          <Elements>
            <CheckoutForm />
          </Elements>
        </Modal>
        : null
      }
    </div>
  </StripeProvider>

App.propTypes = {
  cart: PropTypes.shape({
    checkout: PropTypes.bool.isRequired,
  }).isRequired
}

const mapStateToProps = ({cart}) => ({cart})
export default connect(mapStateToProps)(App)

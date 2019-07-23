import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { connect } from  'react-redux';
import axios from 'axios';
import { showSnackbar } from '../../actions/snackbar.js'

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    const {token} = await this.props.stripe.createToken();
    const response = await axios.post("http://localhost:8080/payment", {
      token, cost: this.props.totalCost
  });
    if (response.status === 200) this.props.showSnackbar("Purchase complete!")
    else this.props.showSnackbar("Purchase failure! Something wrong!")
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>  
    );    
  }
}

const mapDispatchToProps = dispatch => ({
  showSnackbar(message) {
    dispatch(showSnackbar(message))
  }
})

export default connect(null, mapDispatchToProps)(injectStripe(CheckoutForm));
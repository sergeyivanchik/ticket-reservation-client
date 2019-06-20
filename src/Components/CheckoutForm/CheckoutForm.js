import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

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
  if (response.status === 200) console.log("Purchase Complete!")
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

export default injectStripe(CheckoutForm);
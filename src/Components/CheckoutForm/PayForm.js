import React, {Component} from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';


class PayForm extends Component {
  render() {
    return (
        <div className="example">
          <Elements>
            <CheckoutForm totalCost={this.props.totalCost} />
          </Elements>
        </div>
    );
  }
}

export default PayForm;
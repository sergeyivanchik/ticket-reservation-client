import React from 'react';

import './Choice.scss';


class Choice extends React.Component {
  render() {
    const {row, seat, price} = this.props
    return (
      <div className="choice">
        <span 
          className="choice__place" 
          title={`price ${price}`}
        >
        {`row ${row} seat ${seat}`}
      </span>
      </div>
    )
  }
}

export default Choice;

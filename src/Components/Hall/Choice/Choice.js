import React from 'react';

import './Choice.scss';


class Choice extends React.Component {
  render() {
    const { row, seat, cost } = this.props;
    return (
      <div className="choice">
        <span className="choice__place" title={`cost ${cost}`}>
          {`row ${row} seat ${seat}`}
        </span>
      </div>
    )
  }
}

export default Choice;

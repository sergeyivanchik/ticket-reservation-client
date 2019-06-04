import React from 'react';

import './Legend.scss';


class Legend extends React.Component {
  render() {
    return (
      <div className="legend">

        <div className="legend__type legend__type_free">
          <span className="legend__icon legend__icon_free"/>
          <span className="legend__text legend__text_free"> - free</span>
        </div>

        <div className="legend__type legend__type_chosen">
          <span className="legend__icon legend__icon_chosen"/>
          <span className="legend__text legend__text_chosen" > - chosen</span>
        </div>

        <div className="legend__type legend__type_bought">
          <span className="legend__icon legend__icon_bought"/>
          <span className="legend__text legend__text_bought"> - bought</span>
        </div>
        
      </div>
    )
  }
}

export default Legend;
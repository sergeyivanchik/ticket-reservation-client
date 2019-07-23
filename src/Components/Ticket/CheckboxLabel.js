import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class CheckboxLabel extends React.Component {
  state = {
    checked: false
  }

  handleChange = event => {
    const { user, session, cinema, hall, movie, row, seat, cost, service, getAdditionalServices, selectAdditionalService } = this.props;
    this.setState( {checked: event.target.checked} );
    getAdditionalServices({sum: service.cost, checked: !this.state.checked});
    selectAdditionalService({ user, session, cinema, hall, movie, row, seat, cost, service});
  };

  render() {
    const { service } = this.props; 
  return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange}
            value={service.id}
            color="primary"
            key={service.id}
          />
        }
        label={service.name}
      />
  );
}}

export default CheckboxLabel;

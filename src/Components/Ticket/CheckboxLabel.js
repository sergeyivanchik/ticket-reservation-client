import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class CheckboxLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  handleChange = name => event => {
    const { user, session, cinema, hall, movie, row, seat, cost, service, getAdditionalServices, selectAdditionalService } = this.props;
    this.setState({ ...this.state, [name]: event.target.checked });
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
            onChange={this.handleChange('checked')}
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

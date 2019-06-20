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
    const { user, session, cinema, hall, movie, row, seat, cost, service } = this.props;
    this.setState({ ...this.state, [name]: event.target.checked });
    this.props.getAdditionalServices({sum: this.props.service.cost, checked: !this.state.checked});
    this.props.selectAdditionalService({ user, session, cinema, hall, movie, row, seat, cost, service});
  };

  componentDidMount() {
    // this.props.selectedAdditionalServices.find(service => service.id === this.props.service.id) 
    //   ? this.setState({checked: true}) 
    //   : this.setState({checked: false})
  }

  render() {
  return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange('checked')}
            value={this.props.service.id}
            color="primary"
            key={this.props.service.id}
          />
        }
        label={this.props.service.name}
      />
  );
}}

export default CheckboxLabel;

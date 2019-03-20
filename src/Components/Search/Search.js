import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './Search.scss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class Searchs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      name: 'hai',
      labelWidth: 0,
    }
  }

  handleChange (event)  {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <div className = "search" >
        <form className={classes.root} autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref
              }}
              htmlFor="outlined-film-simple"
            >
            Film
            </InputLabel>
            <Select
              value={this.state.age}
              //onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-film-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Ten</MenuItem>
              <MenuItem value={2}>Twenty</MenuItem>
              <MenuItem value={3}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref
              }}
              htmlFor="outlined-cinema-simple"
            >
            Cinema
            </InputLabel>
            <Select
              value={this.state.age}
              //onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-cinema-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref
              }}
              htmlFor="outlined-age-simple"
            >
            Age
            </InputLabel>
            <Select
              value={this.state.age}
              //onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={100}>Ten</MenuItem>
              <MenuItem value={200}>Twenty</MenuItem>
              <MenuItem value={300}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    )
  }
}

Searchs.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Searchs)


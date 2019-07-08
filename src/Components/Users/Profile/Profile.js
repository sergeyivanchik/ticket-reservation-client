import React from 'react';
import { connect } from 'react-redux';

import { showLoader, hideLoader } from '../../../actions/loader.js';
import { getBoughtSeatsByUserAsync } from '../../../actions/seats.js';
import { checkAuthorizationAsync, logOut } from '../../../actions/users.js';
import Loader from '../../Loader/Loader.js';
import Ticket from './Ticket.js';
import Button from '@material-ui/core/Button';
import './Profile.scss';


class Profile extends React.Component {
  state = {
    boughtSeats: true
  }

  changeSessions = () => {
    this.setState({boughtSeats: !this.state.boughtSeats})
  }

  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onCheckAuthorization();
    await this.props.onGetBoughtSeatsByUser(this.props.currentUser.id);
    this.props.onHideLoader();
  }

  render() { 
    const { boughtSeatsByUser, currentUser, isLoading, onLogOut } = this.props;
    const activeSessions =  boughtSeatsByUser.map(boughtSeat => { 
      if(new Date().getTime() < boughtSeat.session.date) 
       return (
        <Ticket 
          poster={boughtSeat.movie.poster}
          movie={boughtSeat.movie.name}
          cinema={boughtSeat.cinema.name}
          hall={boughtSeat.hall.name}
          date={boughtSeat.session.date}
          city={boughtSeat.cinema.city}
          row={boughtSeat.row}
          seat={boughtSeat.seat}
          cost={boughtSeat.cost}
          duration={boughtSeat.movie.duration}
          additionalServices={boughtSeat.additionalServices}
        />
      )
    })

   const completedSessions = boughtSeatsByUser.map(boughtSeat => { 
      if(new Date().getTime() > boughtSeat.session.date) 
       return (
        <Ticket 
          poster={boughtSeat.movie.poster}
          movie={boughtSeat.movie.name}
          cinema={boughtSeat.cinema.name}
          hall={boughtSeat.hall.name}
          date={boughtSeat.session.date}
          city={boughtSeat.cinema.city}
          row={boughtSeat.row}
          seat={boughtSeat.seat}
          cost={boughtSeat.cost}
          duration={boughtSeat.movie.duration}
          additionalServices={boughtSeat.additionalServices}
        />
      )
    })

    return (
      isLoading
        ? <Loader/>
        : <div className="profile">
          <span>{currentUser.username}</span>
          <span onClick={onLogOut}>Log Out</span>
          <div className="profile__tabs">
            <Button className="profile__button" onClick={this.state.boughtSeats ? this.changeSessions : ''}>Passed sessions</Button>
            <Button className="profile__button" onClick={!this.state.boughtSeats ? this.changeSessions : ''}>Active sessions</Button>
          </div>
          {
            this.state.boughtSeats ? activeSessions : completedSessions
          }
          </div>
    )
  }
}

const mapStateToProps = store => ({
  currentUser: store.user.currentUser,
  isLoading: store.loader.isLoading,
  boughtSeatsByUser: store.seats.boughtSeatsByUser
});

const mapDispatchToProps = dispatch => ({
  onShowLoader() {
    dispatch(showLoader())
  },
  onCheckAuthorization() {
    return dispatch(checkAuthorizationAsync())
  },
  onHideLoader() {
    dispatch(hideLoader())
  },
  onGetBoughtSeatsByUser(userId) {
    return dispatch(getBoughtSeatsByUserAsync(userId))
  },
  onLogOut() {
    dispatch(logOut())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
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

  activeSessions = () => {
    let bookSeats = [];
    this.props.boughtSeatsByUser.map(bookSeat => { 
      if(new Date().getTime() < bookSeat.session.date) {
        bookSeats.push(bookSeat)
      } 
    })
    return bookSeats;
  }

  completedSessions = () => {
    let boughtSeats = [];
    this.props.boughtSeatsByUser.map(bookSeat => { 
      if(new Date().getTime() > bookSeat.session.date) {
        boughtSeats.push(bookSeat)
      }
    })
  return boughtSeats;
  }

  getTickets = tickets => {
    let boughtTickets = [];
    tickets.map(bookSeat => {
      boughtTickets.push(
        <Ticket 
          poster={bookSeat.movie.poster}
          movie={bookSeat.movie.name}
          cinema={bookSeat.cinema.name}
          hall={bookSeat.hall.name}
          date={bookSeat.session.date}
          city={bookSeat.cinema.city}
          row={bookSeat.row}
          seat={bookSeat.seat}
          cost={bookSeat.cost}
          duration={bookSeat.movie.duration}
          additionalServices={bookSeat.additionalServices}
        />
      )
    })
    return boughtTickets;
  }

  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onCheckAuthorization();
    await this.props.onGetBoughtSeatsByUser(this.props.currentUser.id);
    this.props.onHideLoader();
  }

  render() { 
    const { currentUser, isLoading, onLogOut } = this.props;

    return (
      isLoading
        ? <Loader/>
        : <div className="profile">
          <span>{currentUser.username}</span>
          <span onClick={onLogOut}>Log Out</span>
          <div className="profile__tabs">
            <Button className="profile__button" onClick={this.state.boughtSeats ? this.changeSessions : null}>Passed sessions</Button>
            <Button className="profile__button" onClick={!this.state.boughtSeats ? this.changeSessions : null}>Active sessions</Button>
          </div>
          {
            this.state.boughtSeats ? this.getTickets(this.activeSessions()) : this.getTickets(this.completedSessions())
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

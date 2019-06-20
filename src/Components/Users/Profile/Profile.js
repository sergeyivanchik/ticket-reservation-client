import React from 'react';
import { connect } from 'react-redux';

import { showLoader, hideLoader } from '../../../actions/loader.js';
import { getBoughtSeatsByUserAsync } from '../../../actions/seats.js';
import { checkAuthorizationAsync, logOut } from '../../../actions/users.js';
import Loader from '../../Loader/Loader.js';
import Ticket from './Ticket.js';
import './Profile.scss';


class Profile extends React.Component {
  async componentDidMount() {
    this.props.onShowLoader();
    await this.props.onCheckAuthorization();
    await this.props.onGetBoughtSeatsByUser(this.props.currentUser.id);
    this.props.onHideLoader();
  }
  render() { 
    const { boughtSeatsByUser } = this.props
    return (
      this.props.isLoading
        ? <Loader/>
        : <div className="profile">
          <span>{this.props.currentUser.username}</span>
          <span onClick={this.props.onLogOut}>Log Out</span>
            {
              boughtSeatsByUser.map(boughtSeat => {
                return (
                  // <div>Movie {boughtSeat.movie.name} Cinema {boughtSeat.cinema.name} Hall {boughtSeat.hall.name}</div>
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

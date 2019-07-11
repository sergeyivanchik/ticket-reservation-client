import React from 'react';
import { connect } from  'react-redux';

import { Button } from '@material-ui/core';
import TicketList from '../Ticket/TicketList.js';
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js';
import {
  getSelectedSeatsByUserAsync,
  selectAdditionalServiceAsync,
  deleteAdditionalServicesAsync,
  bookSeatsAsync
} from '../../actions/seats.js'
import { checkAuthorizationAsync } from '../../actions/users.js';


class ConfirmTickets extends React.Component {
  state = {
    sum: 0
  }
  
  getAdditionalServices = data  => {
    const {sum, checked} = data;
    checked
    ? this.setState( {
          sum: this.state.sum + sum
        }
      )
    : this.setState( {
          sum: this.state.sum - sum
        }
    )
  }

  async componentDidMount() {
    const { sessionId, cinemaId, hallId, movieId } = this.props.match.params;

    this.props.showLoader();
    await this.props.checkAuthorization();
    await this.props.deleteAdditionalServices(this.props.currentUser.id, sessionId, cinemaId, hallId, movieId);
    await this.props.getSelectedSeatsByUser(this.props.currentUser.id, sessionId, cinemaId, hallId, movieId);
    this.props.hideLoader();
  }

  render() {
    const { selectedSeatsByUser, isLoading, bookSeats, selectAdditionalService } = this.props;
    const costForSeat = selectedSeatsByUser.reduce((sum, ticket) => sum + ticket.cost, 0)
    const totalCost = costForSeat + this.state.sum;
    return (
      isLoading 
        ? <Loader/>
        : <div className="confirm-ticket">
            <TopNavBar/>

            <Button
              onClick={() => selectedSeatsByUser.map(seats => 
                bookSeats(
                  this.props.currentUser.id,
                  seats.session.id,
                  seats.cinema.id,
                  seats.hall.id,
                  seats.movie.id,
                  seats.row,
                  seats.seat,
                  seats.cost,
                  seats.additionalServices
                )
            )}
              variant="contained" 
              color="primary"
              className="confirm-ticket__button"
            >
              Buy
            </Button>

            <div className="confirm-ticket__cost">Cost: {totalCost} $</div>

            <TicketList 
              getAdditionalServices={this.getAdditionalServices}
              selectedSeatsByUser={selectedSeatsByUser}
              user={this.props.currentUser.id}
              selectAdditionalService={selectAdditionalService}
            />
        </div>
    )
  }
}

const mapStateToProps = store => ({
  selectedSeatsByUser: store.seats.selectedSeatsByUser,
  boughtSeats: store.seats.boughtSeats,
  isLoading: store.loader.isLoading,
  currentUser: store.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  getSelectedSeatsByUser(userId, sessionId, cinemaId, hallId, movieId) {
    return dispatch(getSelectedSeatsByUserAsync(userId, sessionId, cinemaId, hallId, movieId))
  },
  showLoader() {
    dispatch(showLoader())
  },
  hideLoader() {
    dispatch(hideLoader())
  },
  checkAuthorization() {
    return dispatch(checkAuthorizationAsync())
  },
  selectAdditionalService(session, cinema, hall, movie, user, row, seat, cost, service) {
    dispatch(selectAdditionalServiceAsync(session, cinema, hall, movie, user, row, seat, cost, service))
  },
  deleteAdditionalServices(userId, sessionId, cinemaId, hallId, movieId) {
    return dispatch(deleteAdditionalServicesAsync(userId, sessionId, cinemaId, hallId, movieId))
  },
  bookSeats(user, session, cinema, hall, movie, row, seat, cost, additionalServices) {
    dispatch(bookSeatsAsync(user, session, cinema, hall, movie, row, seat, cost, additionalServices))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmTickets);

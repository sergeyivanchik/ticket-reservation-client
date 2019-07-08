import React from 'react';
import { connect } from  'react-redux';

import Button from '@material-ui/core/Button';
import TicketList from '../Ticket/TicketList.js';
import TopNavBar from '../Navbars/TopNavbar/TopNavbar.js';
import { showLoader, hideLoader } from '../../actions/loader.js';
import Loader from '../Loader/Loader.js';
import {
  getSelectedSeatsByUserAsync,
  selectAdditionalServiceAsync,
  deleteAdditionalServicesAsync,
  buySeatsAsync
} from '../../actions/seats.js'
import { checkAuthorizationAsync } from '../../actions/users.js';
// import PayForm from '../CheckoutForm/PayForm.js';


class ConfirmTickets extends React.Component {
  state = {
    sum: 0
  }
  
  getAdditionalServices = data  => {
    const {sum, checked} = data;
    checked
    ? this.setState(function(prev) {
        return {
          sum: prev.sum + sum
        }
      })
    : this.setState(function(prev) {
        return {
          sum: prev.sum - sum
        }
    })
  }

  async componentDidMount() {
    this.props.onShowLoader()
    await this.props.onCheckAuthorization();
    await this.props.onDeleteAdditionalServices(
      this.props.currentUser.id,
      this.props.match.params.sessionId,
      this.props.match.params.cinemaId,
      this.props.match.params.hallId,
      this.props.match.params.movieId
    );
    await this.props.onGetSelectedSeatsByUser (
      this.props.currentUser.id,
      this.props.match.params.sessionId,
      this.props.match.params.cinemaId,
      this.props.match.params.hallId,
      this.props.match.params.movieId
    );
    this.props.onHideLoader();
  }

  render() {
    const totalCost = this.props.selectedSeatsByUser.reduce((sum, ticket) =>  
    sum + ticket.cost, 0) +  this.state.sum
    return (
      this.props.isLoading 
        ? <Loader/>
        : <div className="confirm-ticket">
            <TopNavBar/>
            {/* <PayForm totalCost={totalCost}/> */}
            <Button
               onClick={() => this.props.selectedSeatsByUser.map(seats => {
               const user = this.props.currentUser.id;
               const session = seats.session.id;
               const cinema = seats.cinema.id;
               const hall = seats.hall.id;
               const movie = seats.movie.id;
               const row = seats.row;
               const seat = seats.seat;
               const cost = seats.cost;
               const additionalServices = seats.additionalServices;
               return this.props.onBuySeat(user, session, cinema, hall, movie, row, seat, cost, additionalServices)
            })}
              variant="contained" 
              color="primary"
              className="confirm-ticket__button"
            >
              Buy
            </Button>
            <div className="confirm-ticket__cost">Cost: {totalCost} $</div>
            <TicketList 
              getAdditionalServices={this.getAdditionalServices}
              selectedSeatsByUser={this.props.selectedSeatsByUser}
              user={this.props.currentUser.id}
              selectAdditionalService={this.props.onSelectAdditionalService}
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
  onGetSelectedSeatsByUser(userId, sessionId, cinemaId, hallId, movieId) {
    return dispatch(getSelectedSeatsByUserAsync(userId, sessionId, cinemaId, hallId, movieId))
  },
  onShowLoader() {
    dispatch(showLoader())
  },
  onHideLoader() {
    dispatch(hideLoader())
  },
  onCheckAuthorization() {
    return dispatch(checkAuthorizationAsync())
  },
  onSelectAdditionalService(session, cinema, hall, movie, user, row, seat, cost, service) {
    dispatch(selectAdditionalServiceAsync(session, cinema, hall, movie, user, row, seat, cost, service))
  },
  onDeleteAdditionalServices(userId, sessionId, cinemaId, hallId, movieId) {
    return dispatch(deleteAdditionalServicesAsync(userId, sessionId, cinemaId, hallId, movieId))
  },
  onBuySeat(user, session, cinema, hall, movie, row, seat, cost, additionalServices) {
    dispatch(buySeatsAsync(user, session, cinema, hall, movie, row, seat, cost, additionalServices))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmTickets);

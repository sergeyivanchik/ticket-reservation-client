import React from 'react';
import './Ticket.scss';


class Ticket extends React.Component {
    convertDate (date)  {
        let convertDate = new Date(+date)
        return `${convertDate.toLocaleString('en', {day: 'numeric'})}.${convertDate.toLocaleString('en', {month: 'numeric'})}.${convertDate.toLocaleString('en', {year: 'numeric'})}`
      }
    render() {
        return (
            <div className = "ticket">
                <div className = "ticket__info">
                    <div className = "ticket__cinema">
                        {this.props.ticket.match.params.cinema}
                    </div>
                    <div className = "ticket__film">
                        <span>Film : <span className = "ticket__choise">{this.props.ticket.allCards.find((film) => film.id === +this.props.ticket.match.params.id)}</span></span>
                    </div>
                    <div className = "ticket__date">
                        <span>Date : <span className = "ticket__choise">{this.convertDate(this.props.ticket.match.params.date)}</span></span> <span>Time : <span className = "ticket__choise">{this.props.ticket.match.params.time}</span></span>
                    </div>
                    <div className = "ticket__seat">
                        <span>Row : <span className = "ticket__choise">{this.props.row}</span> </span>
                        <span>Seat : <span className = "ticket__choise">{this.props.seat}</span></span>
                        <span>Price : <span className = "ticket__choise">{this.props.price}</span></span>
                    </div>
                </div>    
                <div className = "ticket__control">
                   <p className = "ticket__text-control"> Control</p>
                </div>
            </div>
        )
    }
}

export default Ticket;
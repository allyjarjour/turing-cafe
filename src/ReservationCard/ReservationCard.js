import './ReservationCard.css'
import React, { Component } from 'react'

export default class ReservationCard extends Component {

  render() {
    const { name, date, time, number } = this.props
    return (
      <div className="reservation-card" data-testid="reservation-card" >
        <p>{name}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{number}</p>
      </div>
    )
  }
}


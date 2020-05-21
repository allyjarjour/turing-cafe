import './ReservationCard.css'
import React, { Component } from 'react'

export default class ReservationCard extends Component {

  render() {
    const { name, date, time, numberOfPeople } = this.props
    return (
      <div className="reservation-card">
        <p>{name}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{numberOfPeople}</p>
      </div>
    )
  }
}


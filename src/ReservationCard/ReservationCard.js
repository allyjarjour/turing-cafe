import './ReservationCard.css'
import React, { Component } from 'react'

export default class ReservationCard extends Component {

  render() {
    const { name, date, time, number } = this.props
    return (
      <div className="reservation-card" data-testid="reservation-card" >
        <p><span>Name: </span>{name}</p>
        <p><span>Date: </span>{date}</p>
        <p><span>Time: </span>{time}</p>
        <p><span>Number: </span>{number}</p>
      </div>
    )
  }
}


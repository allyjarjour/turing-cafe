import './ReservationForm.css'
import React, { Component } from 'react'

export default class ReservationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  addReservation = async (e) => {
    e.preventDefault();
    await this.setState({
      id: Date.now()
    })
    const reservation = { ...this.state }
    console.log(reservation);
    this.props.makeReservation(reservation);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          onChange={this.change}
          value={this.state.name}
          placeholder="Name"
        />
        <input
          type="text"
          name="date"
          onChange={this.change}
          value={this.state.date}
          placeholder="Date"
        />
        <input
          type="text"
          name="time"
          onChange={this.change}
          value={this.state.time}
          placeholder="Time"
        />
        <input
          type="number"
          name="number"
          onChange={this.change}
          value={this.state.number}
          placeholder="Number of guests"
        />
        <button onClick={this.addReservation}>Make Reservation</button>
      </form>
    );
  }
}
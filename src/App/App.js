import React, { Component } from 'react';
import { getReservations } from '../apiCalls.js'
import ReservationCard from '../ReservationCard/ReservationCard'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }

  }

  componentDidMount = async () => {
    let reservationsData = await getReservations()
    console.log(reservationsData)
    this.setState({
      reservations: reservationsData
    })
  }

  
  render() {
    const allReservationCards = 
      this.state.reservations.map(reservation => (
        <ReservationCard
          name={reservation.name}
          date={reservation.date}
          numberOfPeople={reservation.number}
          time={reservation.time}
        />
      ))
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {allReservationCards}
        </div>
      </div>
    )
  }
}

export default App;

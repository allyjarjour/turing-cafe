import React, { Component } from 'react';
import { getReservations } from '../apiCalls.js'
import ReservationCard from '../ReservationCard/ReservationCard'
import ReservationForm from '../ReservationForm/ReservationForm'
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
    this.setState({
      reservations: reservationsData
    })
  }

  makeReservation = (reservation) => {
    this.setState({
      reservations: [...this.state.reservations, reservation]
    })    
    // const reservationToAdd = {
      /// would verify data types here and add key value pairs but ran out of time
    // }
    // fetch("http://localhost:3001/api/v1/reservations", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(reservationToAdd),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }
  
  render() {
    const allReservationCards = 
      this.state.reservations.map(reservation => (
        <ReservationCard
          name={reservation.name}
          date={reservation.date}
          number={reservation.number}
          time={reservation.time}
          key={reservation.id}
        />
      ))
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm makeReservation={this.makeReservation}/>
        </div>
        <div className='resy-container'>
          {allReservationCards}
        </div>
      </div>
    )
  }
}

export default App;

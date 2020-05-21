export const getReservations = async () => {
  try {
    let response = await fetch("http://localhost:3001/api/v1/reservations	");
    let reservations = await response.json()
    return reservations
  } catch (e) {
    console.error(e)
  }
}
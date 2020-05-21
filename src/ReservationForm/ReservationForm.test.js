import ReservationForm from './ReservationForm'
import React from 'react'
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe('ReservationForm', () => {
  it('should display placeholder text for all inputs and a button', () => {
    const { getByPlaceholderText, getByRole } = render(<ReservationForm />)
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Time')).toBeInTheDocument();
    expect(getByPlaceholderText('Number of guests')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  })
  it('should update name, date, time, number of guests on change', () => {
    const { getByPlaceholderText } = render(<ReservationForm />);
    fireEvent.change(getByPlaceholderText('Name'), {target: { value: 'Sam' }});
    fireEvent.change(getByPlaceholderText('Date'), {target: { value: '2/10' }});
    fireEvent.change(getByPlaceholderText('Time'), {target: { value: '1:30' }});
    fireEvent.change(getByPlaceholderText('Number of guests'), {target: { value: '5' }});
    expect(getByPlaceholderText('Name').value).toBe('Sam');
    expect(getByPlaceholderText('Date').value).toBe('2/10');
    expect(getByPlaceholderText('Time').value).toBe('1:30');
    expect(getByPlaceholderText('Number of guests').value).toBe('5');
  })
  it('should trigger the makeReservation function when the button is clicked', async () => {
    const makeReservation = jest.fn()
    const { getByText } = render(<ReservationForm makeReservation={makeReservation} />);
    fireEvent.click(getByText('Make Reservation'))
    await waitFor(() => {
      expect(makeReservation).toHaveBeenCalled()
    });
  })
})

import App from "./App";
import React from "react";
import { render, rerender, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText("Turing Cafe Reservations")).toBeInTheDocument();
  });
  it('a new card should be added when user clicks make reservation button', async () => {
    const { getByPlaceholderText, getByText, getAllByTestId, debug } = render(<App />);
    fireEvent.change(getByPlaceholderText("Name"), {target: { value: "Sam" }});
    fireEvent.change(getByPlaceholderText("Date"), {target: { value: "2/10" }});
    fireEvent.change(getByPlaceholderText("Time"), {target: { value: "1:30" }});
    fireEvent.change(getByPlaceholderText("Number of guests"), {target: { value: "5" }});
    fireEvent.click(getByText("Make Reservation"));
    await waitFor(() => {
      expect(getByText('Sam')).toBeInTheDocument()
      expect(getByText('2/10')).toBeInTheDocument()
      expect(getByText('1:30')).toBeInTheDocument()
      expect(getByText('5')).toBeInTheDocument()
      // expect(getAllByTestId('reservation-card')).toHaveLength(10)
    })
  })

})

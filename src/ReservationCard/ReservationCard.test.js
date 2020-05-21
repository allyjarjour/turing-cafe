import ReservationCard from "./ReservationCard";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe('ReservationCard', () => {
  it('should display a name, date, time and number of people on the reservation', () => {
    const { getByText } = render(<ReservationCard name="Bruce" date="04/10" number="4" time="6:30" />)
    expect(getByText("Bruce")).toBeInTheDocument()
    expect(getByText("04/10")).toBeInTheDocument()
    expect(getByText("4")).toBeInTheDocument()
    expect(getByText("6:30")).toBeInTheDocument()
  })
})
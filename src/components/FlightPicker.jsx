import "./css/FlightPicker.css";
import { useState } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return [year, month, day].join("-");
};

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

const FlightPicker = () => {
  const [flightType, setFlightType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(
    // init to Tomorrow's date
    formatDate(new Date(Date.now() + DAY_IN_SECONDS))
  );
  const [returnDate, setReturnDate] = useState(departureDate);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (flightType === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}`);
      return;
    } else {
      alert(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
      );
    }
  };

  return (
    <form
      action=""
      className="flight-picker"
      onSubmit={(event) => handleSubmit(event)}
    >
      <select
        name="flight-type"
        id="flight-type"
        value={flightType}
        onChange={(event) => setFlightType(event.target.value)}
      >
        <option value="one-way">One-way flight</option>
        <option value="return">Return flight</option>
      </select>
      <input
        aria-label="Departure date"
        type="date"
        name="departureInput"
        id="departureInput"
        value={departureDate}
        onChange={(event) => setDepartureDate(event.target.value)}
        min={TODAY}
      />

      {flightType === "return" && (
        <input
          aria-label="Return date"
          type="date"
          name="returnInput"
          id="returnInput"
          value={returnDate}
          min={departureDate}
          onChange={(event) => setReturnDate(event.target.value)}
        />
      )}
      <button>Book</button>
    </form>
  );
};

export default FlightPicker;

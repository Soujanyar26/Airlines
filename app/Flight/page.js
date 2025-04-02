export function Flight({ flights }) {
    return (
      <div className="p-8 text-black">
        <h2 className="text-2xl font-bold">Available Flights</h2>
        <ul className="mt-4">
          {flights.map((flight) => (
            <li key={flight.flightId} className="border p-4 mb-2">
              {flight.flightNumber} - {flight.departureTime} to {flight.arrivalTime}
            </li>
          ))}
        </ul>
      </div>
    );
  }
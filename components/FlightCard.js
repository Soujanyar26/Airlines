// components/FlightCard.js
export function FlightCard({ flight }) {
    return (
      <div className="border p-4 mb-2">
        <h3 className="text-xl font-bold">{flight.flightNumber}</h3>
        <p>{flight.departureTime} to {flight.arrivalTime}</p>
        
        {/* Close the first div here */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold">Flight Booking System</h1>
          <a href="/flights" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Flights</a>
        </div> {/* This div was previously not closed */}
      </div>
    );
  }
  
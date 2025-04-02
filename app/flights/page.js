"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function FlightsPage() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const router = useRouter();

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!from || !to || !date) {
      setError("Missing required search parameters.");
      return;
    }

    const fetchFlights = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`/api/getFlights?from=${from}&to=${to}&date=${date}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed to fetch flights.");

        setFlights(data.flights || []);
      } catch (err) {
        setError("Could not fetch flights. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [from, to, date]);

  const handleSelectFlight = (flightId) => {
    router.push(`/seats?flightId=${flightId}`);
  };

  return (
    <div className="w-full min-h-screen  bg-blue-200 text-gray-900 p-6">
      <div className="max-w-2xl mx-auto mt-12">
        <h1 className="text-2xl font-bold text-center">Available Flights</h1>

        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {loading ? (
          <p className="text-center text-gray-500 mt-6">Fetching flights...</p>
        ) : flights.length > 0 ? (
          <div className="mt-8 space-y-4">
            {flights.map((flight) => (
              <div
                key={flight.flightId}
                className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm"
              >
                <p className="font-medium">Flight: {flight.flightNumber}</p>
                <p>From: {from}</p>
                <p>To: {to}</p>
                <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
                <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
                <p>Price: ₹{Number(flight.price || 0).toLocaleString()}</p>

                <button
                  onClick={() => handleSelectFlight(flight.flightId)}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Select Flight
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No flights found.</p>
        )}
      </div>
    </div>
  );
}

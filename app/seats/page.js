"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SeatsPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const flightId = searchParams.get("flightId");

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [flightDetails, setFlightDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFlightData = async () => {
    if (!flightId) return;
    setLoading(true);
    try {
      const flightRes = await fetch(`/api/getFlight?flightId=${flightId}`);
      const seatRes = await fetch(`/api/getSeats?flightId=${flightId}`);
      if (!flightRes.ok || !seatRes.ok) throw new Error("Failed to load data");

      const flight = await flightRes.json();
      const seatData = await seatRes.json();

      setFlightDetails(flight.flight);
      setSeats(seatData.seats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlightData();
  }, [flightId]);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const handleConfirm = async () => {
    if (!session) {
      sessionStorage.setItem("pendingSeats", JSON.stringify(selectedSeats));
      sessionStorage.setItem("pendingFlightId", flightId);
      router.push(`/login?callbackUrl=/seats?flightId=${flightId}`);
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const res = await fetch("/api/bookSeats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ flightId, selectedSeats }),
    });

    const result = await res.json();
    if (res.ok) {
      alert("✅ Booking successful!");
      setSelectedSeats([]);
      fetchFlightData();
  

    } else {
      alert(`❌ Booking failed: ${result.error}`);
    }
  };

  return (
    <div className="min-h-screen pt-20  bg-blue-200 text-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Choose Your Seats</h1>

        {/* Flight Details */}
        {loading ? (
          <p className="text-center text-gray-500">Loading flight details...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : flightDetails && (
          <div className="border p-4 rounded-md bg-gray-50 mb-6">
            <h2 className="text-lg font-semibold mb-2">Flight Information</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p> Airline: {flightDetails.airline}</p>
              <p>From: {flightDetails.fromLocation}</p>
              <p>To: {flightDetails.toLocation}</p>
              <p>Flight No: {flightDetails.flightNumber}</p>
              <p>Departure: {flightDetails.departureTime}</p>
              <p>Arrival: {flightDetails.arrivalTime}</p>
              <p>Price: ₹{flightDetails.price}</p>
            </div>
          </div>
        )}

        {/* Seat Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {seats.map((seat) => (
            <button
              key={seat.seatId}
              disabled={!seat.isAvailable}
              onClick={() => handleSeatSelect(seat.seatId)}
              className={`py-2 rounded-md border ${
                !seat.isAvailable
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : selectedSeats.includes(seat.seatId)
                  ? "bg-yellow-400 text-black border-yellow-500"
                  : "bg-green-500 text-white border-green-600 hover:bg-green-600"
              }`}
            >
              {seat.seatNumber}
            </button>
          ))}
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}

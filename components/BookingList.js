"use client";
import { useState } from "react";

export default function BookingList({ bookings }) {
  const [message, setMessage] = useState("");

  const handleCancel = async (bookingId) => {
    const response = await fetch("/api/cancelBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId }),
    });

    const data = await response.json();
    if (data.success) {
      setMessage(`✅ Booking ${bookingId} canceled successfully!`);
      window.location.reload(); // Refresh page to update UI
    } else {
      setMessage(`❌ Error: ${data.error}`);
    }
  };

  if (!bookings || bookings.length === 0) {
    return <p>No bookings found.</p>;
  }

  return (
    <div className="p-4">
      {message && <p className="text-center text-red-500">{message}</p>}
      {bookings.map((booking) => (
        <div key={booking.bookingId} className="border p-4 mb-2 rounded">
          <p><strong>Booking ID:</strong> {booking.bookingId}</p>

          {booking.flight ? (
            <>
              <p><strong>Flight:</strong> {booking.flight.flightNumber}</p>
              <p><strong>Departure:</strong> {new Date(booking.flight.departureTime).toLocaleString()}</p>
            </>
          ) : (
            <p className="text-red-500">❌ Flight details not available.</p>
          )}

          <p><strong>Seat Number:</strong> {booking.seat ? booking.seat.seatNumber : "Not Assigned"}</p>

          {/* Cancel Booking Button */}
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => handleCancel(booking.bookingId)}
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}

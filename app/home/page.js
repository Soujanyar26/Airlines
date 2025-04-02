export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Flight Booking System</h1>
      <a href="/flights" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Flights</a>
    </div>
  );
}

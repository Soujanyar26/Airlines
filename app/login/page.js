"use client";

import { useSearchParams } from "next/navigation";
import { Toaster } from "react-hot-toast";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const searchParams = useSearchParams();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-blue-200 p-6">
      <Toaster position="top-center" />

      {/* ✅ Login Form Container */}
      <div className="p-6 max-w-md w-full bg-white border border-gray-300 rounded-lg shadow-md">
        {/* ✅ Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-4">
          Log in to access your account.
        </p>

        {/* ✅ Login Form */}
        <LoginForm callbackUrl={callbackUrl} />

        {/* ✅ Redirect to Register */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* ✅ Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Flight Booking System. All rights reserved.
      </footer>
    </div>
  );
}

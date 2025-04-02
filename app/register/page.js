"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-blue-200 p-6">
      {/* ✅ Toast Notification */}
      <Toaster position="top-center" />

      {/* ✅ Register Form Container */}
      <div className="p-6 max-w-md w-full bg-white border border-gray-300 rounded-lg shadow-md">
        {/* ✅ Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">Create Your Account</h2>
        
        {/* ✅ Register Form */}
        <RegisterForm />

        {/* ✅ Redirect to Login */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>

      {/* ✅ Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Flight Booking System. All rights reserved.
      </footer>
    </div>
  );
}

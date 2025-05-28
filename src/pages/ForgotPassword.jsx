import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your inbox for password reset instructions.");
    } catch (err) {
      setMessage("Error sending reset email. Try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleReset}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Forgot Password
        </h2>

        {message && <p className="text-green-600 text-sm mb-4">{message}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Send Reset Email
        </button>

        <p className="text-sm mt-4 text-center">
          Back to{" "}
          <span onClick={() => navigate("/login")} className="cursor-pointer text-blue-600 hover:underline">Login</span>
        </p>
      </form>
    </section>
  );
}

export default ForgotPassword;

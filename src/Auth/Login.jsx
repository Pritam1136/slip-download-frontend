/* eslint-disable no-unused-vars */
// Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      if (!email) throw new Error("Email is required");
      await axios.post("http://localhost:5000/api/send-otp", { email });
      console.log("OTP sent successfully");
      setStep(2);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/verify-otp",
        { email, otp },
      );
      console.log("Response after OTP verification:", response.data); // Check if token is received
      localStorage.setItem("authToken", response.data.token);
      console.log("Auth token stored:", localStorage.getItem("authToken"));

      navigate("/"); // Redirect after successful login
    } catch (error) {
      setError("Invalid OTP");
    }
  };

  return (
    <div>
      <h2 className="m-4 text-center text-4xl font-bold text-gray-800">
        Login
      </h2>
      {step === 1 && (
        <div className="flex justify-center align-middle ">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="border" onClick={sendOtp}>Send OTP</button>
        </div>
      )}
      {step === 2 && (
        <div className="flex justify-center align-middle" >
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;

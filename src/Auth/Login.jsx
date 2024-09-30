import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../URL";
import TextSpinnerLoader from "../Components/TextSpinner/TextSpinner";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    setError(null);
    try {
      if (!email) throw new Error("Email is required");
      setLoading(true);
      await axios.post(`${url}/api/send-otp`, { email });
      setLoading(false);
      setStep(2);
    } catch (error) {
      setStep(1);
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${url}/api/verify-otp`, {
        email,
        otp,
      });
      localStorage.setItem("authToken", response.data.token);
      setLoading(false);
      navigate("/"); // Redirect after successful login
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  // Handle Enter key press for sending OTP or verifying OTP
  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextSpinnerLoader message={"Welcome back. Have a nice day."} />
      </div>
    );
  }

  return (
    <div className="backgroundSVG flex h-screen flex-1 flex-col justify-center px-6 py-12 align-middle lg:px-8">
      <div className="container rounded-2xl bg-white p-10 drop-shadow-2xl">
        <div className="my-2 flex justify-center py-2 align-middle">
          <img
            src="./forwardcode_logo_black_text.svg"
            className="mr-3 h-6 sm:h-9"
            alt="FCTS Logo"
          />
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-indigo-600">
            Welcome to SlipStream
          </h2>
        </div>

        <div className="mt-10">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, sendOtp)}
                    required
                    className="inputFeild"
                  />
                </div>
              </div>
              <div>
                <button onClick={sendOtp} className="buttonDesign">
                  Send OTP
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter OTP
                </label>
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, verifyOtp)}
                    required
                    className="inputFeild"
                  />
                </div>
              </div>
              <div>
                <button onClick={verifyOtp} className="buttonDesign">
                  Verify OTP
                </button>
              </div>
            </div>
          )}

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;

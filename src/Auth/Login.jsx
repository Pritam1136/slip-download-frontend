import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
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

  if (loading)
    return (
      <p className="loadingText backgroundSVG h-screen">
        <FontAwesomeIcon icon={faSpinner} spin />
      </p>
    );

  return (
    <div className="backgroundSVG flex h-screen flex-1 flex-col justify-center px-6 py-12 align-middle lg:px-8">
      <div className="container rounded-2xl bg-white p-10 drop-shadow-2xl">
        <div className="my-2 flex justify-center py-2 align-middle">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQH6fJz1s57_eA/company-logo_200_200/company-logo_200_200/0/1630509348990/forwardcode_techstudio_logo?e=1733961600&v=beta&t=RgWEdt4YnKk8_oIG7LCGqhbfGeahg7QswWTmFXmcxjg"
            className="mr-3 h-6 sm:h-9"
            alt="FCTS Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold text-indigo-600">
            FCTS
          </span>
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

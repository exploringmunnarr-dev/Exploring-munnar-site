import React, { useState, useEffect } from "react";
import { Eye, EyeOff, LogIn, Mail, Lock, AlertCircle, User, Phone } from "lucide-react";

const SignupForm = ({ setMode }) => {
  // States for signup form
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // States for OTP verification
  const [otpForm, setOtpForm] = useState({
    email: "",
    otp: "",
  });

  const [step, setStep] = useState("signup"); // signup or otpVerification
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [otpTimer, setOtpTimer] = useState(0);

  // OTP timer countdown
  useEffect(() => {
    let interval;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  // Handle signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (signupForm.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupForm.name,
          email: signupForm.email,
          phoneNumber: signupForm.phoneNumber,
          password: signupForm.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      setSuccess("Signup successful! Verify your email with the OTP.");
      setOtpForm({ ...otpForm, email: signupForm.email });
      setStep("otpVerification");

      // Send OTP
      sendOTP(signupForm.email);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Send OTP
  const sendOTP = async (email) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/email/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("OTP sent to your email");
        setOtpTimer(600); // 10 minutes
      } else {
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
      setError("Error sending OTP: " + err.message);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    setError("");
    await sendOTP(otpForm.email);
  };

  // Handle OTP verification
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!otpForm.otp || otpForm.otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/email/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: otpForm.email,
          otp: otpForm.otp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "OTP verification failed");
        setLoading(false);
        return;
      }

      setSuccess("Email verified successfully! Redirecting to login...");
      setTimeout(() => {
        setMode("login");
        // Reset form
        setSignupForm({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
        setStep("signup");
      }, 1500);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div>
          <div className="md:hidden">
            <div className="w-fit m-auto p-4 rounded-xl">
              <LogIn className="w-8 h-8 text-gray-800" />
            </div>
          </div>

          {step === "signup" ? (
            <>
              <h1 className="text-[#333333] font-semibold text-xl md:text-xl">
                Start your journey with us
              </h1>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 rounded flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded flex items-center gap-2">
                  <LogIn className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">{success}</span>
                </div>
              )}

              <form onSubmit={handleSignupSubmit} className="mt-6 space-y-3">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={signupForm.name}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        name: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-2"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        email: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-2"
                    required
                  />
                </div>

                {/* Mobile Number Input */}
                <div className="relative">
                  <Phone className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    value={signupForm.phoneNumber}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        phoneNumber: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-2"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <Lock className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={signupForm.password}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        password: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-2"
                    required
                  />
                  {isPasswordVisible ? (
                    <Eye
                      onClick={() => setIsPasswordVisible(false)}
                      className="text-gray-400 cursor-pointer absolute top-[50%] translate-y-[-50%] right-3 w-5 h-5"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setIsPasswordVisible(true)}
                      className="text-gray-400 cursor-pointer absolute top-[50%] translate-y-[-50%] right-3 w-5 h-5"
                    />
                  )}
                </div>

                {/* Confirm Password Input */}
                <div className="relative">
                  <Lock className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={signupForm.confirmPassword}
                    onChange={(e) =>
                      setSignupForm({
                        ...signupForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-2"
                    required
                  />
                  {isConfirmPasswordVisible ? (
                    <Eye
                      onClick={() => setIsConfirmPasswordVisible(false)}
                      className="text-gray-400 cursor-pointer absolute top-[50%] translate-y-[-50%] right-3 w-5 h-5"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setIsConfirmPasswordVisible(true)}
                      className="text-gray-400 cursor-pointer absolute top-[50%] translate-y-[-50%] right-3 w-5 h-5"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] disabled:opacity-50 text-white w-full py-3 cursor-pointer rounded text-lg font-medium transition"
                >
                  {loading ? "Creating account..." : "Sign Up"}
                </button>

                <div className="signUpContainer">
                  <h1 className="text-gray-500 text-center">
                    Already have an account?
                  </h1>
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="bg-black text-white w-full text-lg py-3 rounded mt-2 cursor-pointer hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] transition"
                  >
                    Login
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
                Verify Your Email
              </h1>
              <p className="text-gray-600 mt-2 text-sm">
                Enter the 6-digit OTP sent to {otpForm.email}
              </p>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 rounded flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded flex items-center gap-2">
                  <LogIn className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">{success}</span>
                </div>
              )}

              <form onSubmit={handleOTPSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otpForm.otp}
                  onChange={(e) =>
                    setOtpForm({
                      ...otpForm,
                      otp: e.target.value.replace(/\D/g, "").slice(0, 6),
                    })
                  }
                  maxLength="6"
                  className="border w-[100%] focus:ring-1 ring-green-900 text-lg text-center tracking-widest outline-none border-gray-400 rounded px-4 py-3 font-mono"
                  required
                />

                {/* OTP Timer */}
                <div className="text-center text-sm text-gray-600">
                  {otpTimer > 0 ? (
                    <span>
                      OTP expires in {Math.floor(otpTimer / 60)}:
                      {String(otpTimer % 60).padStart(2, "0")}
                    </span>
                  ) : (
                    <span>OTP expired</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || otpTimer <= 0}
                  className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] disabled:opacity-50 text-white w-full py-3 cursor-pointer rounded text-lg font-medium transition"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>

                {/* Resend OTP Button */}
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={otpTimer > 0 || loading}
                  className="text-green-700 hover:text-green-900 disabled:text-gray-400 text-center w-full text-sm font-medium"
                >
                  {otpTimer > 0 ? "Wait to resend" : "Resend OTP"}
                </button>

                {/* Back to Signup */}
                <button
                  type="button"
                  onClick={() => {
                    setStep("signup");
                    setError("");
                    setSuccess("");
                  }}
                  className="text-gray-600 hover:text-gray-800 text-center w-full text-sm font-medium"
                >
                  Back to signup
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SignupForm;

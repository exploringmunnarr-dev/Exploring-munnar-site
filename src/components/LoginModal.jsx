"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logingImg from "../assets/loginImg.jpg";
import { Eye, EyeOff, LogIn, Mail, Lock, AlertCircle, X } from "lucide-react";
import SignupForm from "./SignupForm";

const LoginModal = ({ setShowLoginForm }) => {
  // States
  const [mode, setMode] = useState("login"); // login, signup, forgotPassword, resetPassword
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form states
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [forgotForm, setForgotForm] = useState({ email: "" });
  const [resetForm, setResetForm] = useState({
    token: "",
    newPassword: "",
    confirmPassword: "",
  });

  const loginModalRef = useRef(null);

  // Stop scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginModalRef.current && !loginModalRef.current.contains(e.target)) {
        setShowLoginForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Clear errors/success on mode change
  useEffect(() => {
    setError("");
    setSuccess("");
  }, [mode]);

  // Email Login Handler
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginForm.email,
          password: loginForm.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Store JWT token
      localStorage.setItem("ExpMunnarToken", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        setShowLoginForm(false);
        window.location.reload();
      }, 1500);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      // This assumes you have Firebase Auth set up
      // Import and use Firebase here
      // const idToken = await getFirebaseIdToken();
      // Then send to backend

      // Example implementation:
      const idToken = "FIREBASE_ID_TOKEN"; // Replace with actual Firebase token

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Google login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("authToken", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Google login successful! Redirecting...");
      setTimeout(() => {
        setShowLoginForm(false);
        window.location.reload();
      }, 1500);
    } catch (err) {
      setError(err.message || "Google login error");
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password Handler
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotForm.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Email not found");
        setLoading(false);
        return;
      }

      setSuccess("Reset link sent to your email!");
      setTimeout(() => {
        setMode("login");
        setForgotForm({ email: "" });
      }, 2000);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Reset Password Handler
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (resetForm.newPassword !== resetForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://munnar-backend.onrender.com';
      const response = await fetch(`${apiUrl}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: resetForm.token,
          newPassword: resetForm.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Password reset failed");
        setLoading(false);
        return;
      }

      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => {
        setMode("login");
        setResetForm({ token: "", newPassword: "", confirmPassword: "" });
      }, 2000);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        ref={loginModalRef}
        className="login-container p-6 rounded-xl flex items-center gap-6 w-[90%] md:w-[70%] md:h-[600px] fixed z-[200] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white"
      >
        {/* Left Image Section */}
        <Image
          src={logingImg}
          className="w-[60%] h-[100%] object-cover rounded-xl hidden md:block"
          alt="Login"
        />

       

        {/* Right Form Section */}
        <div className="w-[100%] md:w-[40%] overflow-y-auto max-h-[600px] md:max-h-full">
           <button className="absolute top-4 right-8 bg-gray-100 rounded-full p-3" onClick={() => setShowLoginForm(false)}>
            <X/>
          </button>
          {/* LOGIN MODE */}
          {mode === "login" && (
            <div>
              <div className="md:hidden">
                <div className="w-fit m-auto p-4 rounded-xl">
                  <LogIn className="w-8 h-8 text-gray-800" />
                </div>
              </div>

              <h1 className="text-[#333333] font-semibold text-xl md:text-xl">
                Sign in to continue your journey
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

              {/* Login Form */}
              <form onSubmit={handleEmailLogin} className="mt-6 space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm({
                        ...loginForm,
                        email: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-2"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({
                        ...loginForm,
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

                {/* Forgot Password Link */}
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setMode("forgotPassword")}
                    className="text-green-700 hover:text-green-900 text-sm font-medium"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] disabled:opacity-50 text-white w-full py-3 cursor-pointer rounded text-lg font-medium transition"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                {/* Google Login Button */}
                {/* <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="border border-gray-300 w-full py-3 rounded text-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button> */}

                <div className="signUpContainer">
                  <h1 className="text-gray-500 text-center">
                    Don't have an account?
                  </h1>
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="bg-black text-white w-full text-lg py-3 rounded mt-2 cursor-pointer hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] transition"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SIGNUP MODE */}
          {mode === "signup" && (
            <SignupForm setMode={setMode} />
          )}

          {/* FORGOT PASSWORD MODE */}
          {mode === "forgotPassword" && (
            <div>
              <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
                Reset Your Password
              </h1>
              <p className="text-gray-600 mt-2 text-sm">
                Enter your email and we'll send you a password reset link.
              </p>

              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 rounded flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {success && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded flex items-center gap-2">
                  <LogIn className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">{success}</span>
                </div>
              )}

              <form onSubmit={handleForgotPassword} className="mt-6 space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={forgotForm.email}
                    onChange={(e) =>
                      setForgotForm({ email: e.target.value })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] disabled:opacity-50 text-white w-full py-3 cursor-pointer rounded text-lg font-medium transition"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>

                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-green-700 hover:text-green-900 text-center w-full text-sm font-medium mt-4"
                >
                  Back to Login
                </button>
              </form>
            </div>
          )}

          {/* RESET PASSWORD MODE */}
          {mode === "resetPassword" && (
            <div>
              <h1 className="text-[#333333] font-semibold text-xl md:text-3xl">
                Create New Password
              </h1>

              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 rounded flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {success && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded flex items-center gap-2">
                  <LogIn className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">{success}</span>
                </div>
              )}

              <form onSubmit={handleResetPassword} className="mt-6 space-y-3">
                <div className="relative">
                  <Lock className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="New Password"
                    value={resetForm.newPassword}
                    onChange={(e) =>
                      setResetForm({
                        ...resetForm,
                        newPassword: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-[50%] translate-y-[-50%] w-5 h-5 text-gray-400" />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={resetForm.confirmPassword}
                    onChange={(e) =>
                      setResetForm({
                        ...resetForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="border w-[100%] pl-10 focus:ring-1 ring-green-900 text-lg outline-none border-gray-400 rounded px-4 py-3"
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

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[linear-gradient(90deg,#216432_0%,#114422_89.42%)] hover:bg-[linear-gradient(90deg,#AF4300_0%,#AF4300_100%)] disabled:opacity-50 text-white w-full py-3 cursor-pointer rounded text-lg font-medium transition"
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>

                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-green-700 hover:text-green-900 text-center w-full text-sm font-medium mt-4"
                >
                  Back to Login
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      <div className="login-tint fixed top-0 right-0 left-0 bottom-0 z-[100] bg-black/50"></div>
    </>
  );
};

export default LoginModal;

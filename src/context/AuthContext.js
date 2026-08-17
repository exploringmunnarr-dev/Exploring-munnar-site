"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if token exists on mount and when storage changes
    const checkAuth = () => {
      const storedToken = localStorage.getItem("ExpMunnarToken");
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);
      } else {
        setToken(null);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // Listen for storage changes (for multi-tab sync)
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const requireAuth = (callback) => {
    if (isAuthenticated && token) {
      // User is logged in, execute callback
      callback();
    } else {
      // User is not logged in, show login modal
      setShowLoginForm(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("ExpMunnarToken");
    sessionStorage.removeItem("user");
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        showLoginForm,
        setShowLoginForm,
        token,
        requireAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
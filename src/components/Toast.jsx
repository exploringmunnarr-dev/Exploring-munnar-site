"use client";
import React, { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

const Toast = ({ message, type = "error", onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-500",
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
          text: "text-green-800",
        };
      case "error":
        return {
          bg: "bg-red-50",
          border: "border-red-500",
          icon: <AlertCircle className="w-5 h-5 text-red-500" />,
          text: "text-red-800",
        };
      case "info":
        return {
          bg: "bg-blue-50",
          border: "border-blue-500",
          icon: <Info className="w-5 h-5 text-blue-500" />,
          text: "text-blue-800",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-500",
          icon: <Info className="w-5 h-5 text-gray-500" />,
          text: "text-gray-800",
        };
    }
  };

  const styles = getStyles();

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-20 right-4 z-[300] ${styles.bg} border-l-4 ${styles.border} p-4 rounded shadow-xl flex items-start gap-3 max-w-md animate-slide-in`}
    >
      {styles.icon}
      <p className={`${styles.text} text-sm flex-1`}>{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
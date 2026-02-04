"use client";
import Link from "next/link";
import { useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie-consent");
      return !consent;
    }
    return false;
  });
  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };
  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <Link href="/privacy" className="underline hover:text-gray-300">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2">
          <button onClick={declineCookies} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors">
            Decline
          </button>
          <button onClick={acceptCookies} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
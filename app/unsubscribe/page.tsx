"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState, type FormEvent } from "react";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET || "",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setMessage("You have been successfully unsubscribed from our newsletter.");
      } else {
        setStatus("error");
        setMessage(data.error || "Unable to unsubscribe. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
      console.error("Unsubscribe error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif text-center font-bold mb-12">
          Unsubscribe from Newsletter
        </h1>
        {status === "success" ? (
          <div className="alert alert-success text-center mb-8">
            <p className="font-semibold mb-4">{message}</p>
            <p className="mb-6">
              We’re sorry to see you go! You will no longer receive newsletters from News Call Magazine.
            </p>
            <Link href="/" className="btn-secondary">
              Return to homepage
            </Link>
          </div>
        ) : (
          <>
            <p className="mb-10 text-center text-lg text-gray-700">
              We’re sorry to see you go. Enter your email address below to unsubscribe from our newsletter.
            </p>
            <form onSubmit={handleUnsubscribe} className="max-w-sm mx-auto mb-6">
              <div className="mb-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input w-full"
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                />
              </div>
              {status === "error" && (
                <div className="alert alert-error mb-6">
                  {message}
                </div>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full"
              >
                {status === "loading" ? "Unsubscribing..." : "Unsubscribe"}
              </button>
            </form>
            <p className="text-center">
              <Link href="/" className="text-gray-600 hover:text-gray-900 underline">
                Back to Home
              </Link>
            </p>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
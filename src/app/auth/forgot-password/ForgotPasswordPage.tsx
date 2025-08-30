"use client";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent, JSX } from "react";
import "../styles/auth.css";
import { API_ENDPOINTS } from "../../../config/api";

// Interfaces for data types
interface ApiError {
  detail: {
    loc: (string | number)[];
    msg: string;
    type: string;
  }[];
}

export default function ForgotPasswordPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // State to manage the success or error message displayed to the user
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const forgotPasswordEndpoint = API_ENDPOINTS.FORGOT_PASSWORD;

    try {
      const response = await fetch(forgotPasswordEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Password reset email sent successfully
        setMessage({ text: "If an account with that email exists, a password reset link has been sent.", type: 'success' });
      } else {
        const errorData: ApiError = await response.json();
        const errorMessage = errorData.detail.map(err => err.msg).join(', ');
        throw new Error(errorMessage || "An unexpected error occurred.");
      }
    } catch (err) {
      console.error('Error during forgot password request:', err);
      setMessage({ text: "An error occurred. Please try again.", type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-brand">VideoMetrics.ai</h1>
        </div>
        
        <div className="auth-form-container">
          <h2 className="auth-title">Forgot Password?</h2>
          <p className="auth-subtitle">
            Enter your email and we will send you a password reset link.
          </p>
          
          {/* Display messages based on state */}
          {message && (
            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} text-start`} role="alert">
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 6 10-6"/>
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <p className="auth-footer">
            <Link href="/auth/login" className="auth-link">Back to Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link"; // Import Link for navigation
import { useState, FormEvent, ChangeEvent, JSX } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import "../styles/auth.css";
import { API_ENDPOINTS } from "../../../config/api"; // Import the centralized API endpoints
import Image from "next/image";


// Interface for the data sent to the API
interface ApiPayload {
  username: string;
  email: string;
  password: string;
  full_name: string;
}

// Interface for the local form data
interface SignupFormData {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

// Interface for a validation error response
interface ApiError {
  detail: {
    loc: (string | number)[];
    msg: string;
    type: string;
  }[];
}

export default function SignupPage(): JSX.Element {
  const router = useRouter(); // Initialize the router

  const [formData, setFormData] = useState<SignupFormData>({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // --- Client-side validation ---
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords don't match!", type: 'error' });
      setIsLoading(false);
      return;
    }
    if (!formData.agreeToTerms) {
      setMessage({ text: "Please agree to the terms of service and privacy policy", type: 'error' });
      setIsLoading(false);
      return;
    }

    // --- API Integration Logic ---
    try {
      const payload: ApiPayload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        full_name: formData.fullName,
      };

      const response = await fetch(API_ENDPOINTS.REGISTER, { // Use the imported endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Registration successful!
        setMessage({ text: "Registration successful! Redirecting to login...", type: 'success' });
        
        // Use router.push() to navigate to the login page after a delay
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500); 
      } else {
        const errorData: ApiError = await response.json();
        const errorMessage = errorData.detail
          ? errorData.detail.map((err: { msg:string; }) => err.msg).join(", ")
          : "An unexpected error occurred.";
        setMessage({ text: `Registration failed: ${errorMessage}`, type: 'error' });
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      setMessage({ text: "A network error occurred. Please try again.", type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
      <Link href="/" className="logo-brand">
        <Image
          src="/images/Videometrics.png"   // put your logo under /public/images/
          alt="Videometrics Logo"
          width={400}   // adjust size as needed
          height={100}
          priority
        />
      </Link>
    </div>
        
        <div className="auth-form-container">
          <h2 className="auth-title">Create an account</h2>
          <p className="auth-subtitle">Enter your information to get started with VideoMetrics.ai</p>

          {/* Display messages based on state */}
          {message && (
            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} text-start`} role="alert">
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-group">
                <span className="input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <div className="input-group">
                <span className="input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {showPassword ? (
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L17.94 17.94zM1 1l22 22M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19L9.9 4.24z"/>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <div className="input-group">
                <span className="input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {showConfirmPassword ? (
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L17.94 17.94zM1 1l22 22M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19L9.9 4.24z"/>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                className="form-check-input"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="agreeToTerms" className="form-check-label">
                I agree to the <Link href="/terms" className="auth-link">terms of service</Link> and <Link href="/privacy" className="auth-link">privacy policy</Link>
              </label>
            </div>

            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          <p className="auth-footer text-center mt-3 mb-0">
            Already have an account? <Link href="/auth/login" className="auth-link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
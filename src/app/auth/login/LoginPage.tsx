"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent, ChangeEvent, JSX, useEffect, useRef } from "react";
import "../styles/login.css";
import { API_ENDPOINTS } from "../../../config/api"; 
import Image from "next/image";

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface ApiResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: string;
    uuid: string;
    username: string;
    email: string;
    full_name: string;
    is_active: boolean;
    is_superuser: boolean;
    last_login: string;
    created_at: string;
    updated_at: string;
  };
}

interface ApiError {
  detail: {
    loc: (string | number)[];
    msg: string;
    type: string;
  }[];
}

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Keep track of active child windows
  const childWindowsRef = useRef<Set<Window>>(new Set());

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Message received:', event.data, 'from origin:', event.origin);
      
      if (event.data && event.data.type === 'LOGOUT') {
        console.log('Logout message received from child window');
        
        // Clear all auth data from both storages
        localStorage.removeItem('token');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('user');
        sessionStorage.clear();
        
        // Reset form state
        setFormData({
          username: "",
          password: "",
          rememberMe: false
        });
        setError(null);
        setLoading(false);
        setShowPassword(false);
        
        console.log('Successfully logged out and reset form');
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const loginEndpoint = API_ENDPOINTS.LOGIN;

    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        // Handle 401 Unauthorized specifically for wrong credentials
        if (response.status === 401) {
          throw new Error("Incorrect username or password. Please try again.");
        }
        
        // Handle other errors
        const errorData: ApiError = await response.json();
        const errorMessage = errorData.detail.map((err) => err.msg).join(", ");
        throw new Error(
          errorMessage || "Login failed. Please check your credentials."
        );
      }

      const data: ApiResponse = await response.json();
      console.log("✅ Login successful:", data);

      // Store auth data based on "Remember Me" preference
      if (formData.rememberMe) {
        // Use localStorage for persistent storage (survives browser close)
        localStorage.setItem("authToken", data.access_token);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        // Use sessionStorage for temporary storage (cleared when browser closes)
        sessionStorage.setItem("authToken", data.access_token);
        sessionStorage.setItem("token", data.access_token);
        sessionStorage.setItem("accessToken", data.access_token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }

      setFormData({ username: "", password: "", rememberMe: false });
      setShowPassword(false);
      setError(null);
      setLoading(false);

      const targetOrigin = "https://videometricsdash.salmonrock-70d8a746.eastus.azurecontainerapps.io";
      const otherAppWindow = window.open(targetOrigin, "_blank");

      if (!otherAppWindow) {
        setError(
          "Could not open the video metrics application. Please check your browser's pop-up settings."
        );
        return;
      }

      // Track this window
      childWindowsRef.current.add(otherAppWindow);
       
      let messageSent = false;
      let messageInterval: NodeJS.Timeout | null = null;
      
      // Wait for child window to signal it's ready
      const handleReadyMessage = (event: MessageEvent) => {
        if (event.origin !== targetOrigin) return;
        
        if (event.data && event.data.type === 'READY' && !messageSent) {
          console.log('Child window is ready, sending auth data');
          messageSent = true;
          
          // Clear the polling interval once we get READY signal
          if (messageInterval) {
            clearInterval(messageInterval);
            messageInterval = null;
          }
          
          otherAppWindow.postMessage(
            {
              type: "AUTH_MESSAGE",
              token: data.access_token,
              accessToken: data.access_token,
              user: data.user,
            },
            targetOrigin
          );
        }
          
        // Stop listening after receiving AUTH_STORED confirmation
        if (event.data && event.data.type === 'AUTH_STORED') {
          console.log('Auth data confirmed stored, cleaning up');
          window.removeEventListener('message', handleReadyMessage);
          if (fallbackTimeout) clearTimeout(fallbackTimeout);
          if (cleanupTimeout) clearTimeout(cleanupTimeout);
          if (messageInterval) clearInterval(messageInterval);
        }
      };

      window.addEventListener('message', handleReadyMessage);

      // Start polling messages immediately (every 500ms)
      messageInterval = setInterval(() => {
        if (otherAppWindow.closed) {
          if (messageInterval) clearInterval(messageInterval);
          childWindowsRef.current.delete(otherAppWindow);
          return;
        }

        otherAppWindow.postMessage(
          {
            type: "AUTH_MESSAGE",
            token: data.access_token,
            accessToken: data.access_token,
            user: data.user,
          },
          targetOrigin
        );
      }, 500);

      // Fallback: If no READY message received within 3 seconds, stop polling
      const fallbackTimeout = setTimeout(() => {
        if (!messageSent) {
          console.log('No READY signal received, stopping message polling');
          if (messageInterval) {
            clearInterval(messageInterval);
            messageInterval = null;
          }
        }
      }, 3000);

      // Cleanup after 10 seconds
      const cleanupTimeout = setTimeout(() => {
        console.log('Final cleanup of message listeners');
        window.removeEventListener('message', handleReadyMessage);
        if (fallbackTimeout) clearTimeout(fallbackTimeout);
        if (messageInterval) clearInterval(messageInterval);
      }, 10000);

      // Clean up closed windows periodically
      const windowCheckInterval = setInterval(() => {
        childWindowsRef.current.forEach(win => {
          if (win.closed) {
            childWindowsRef.current.delete(win);
          }
        });
        
        if (childWindowsRef.current.size === 0) {
          clearInterval(windowCheckInterval);
        }
      }, 2000);

    } catch (err) {
      console.error("❌ Error during login:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link href="/" className="logo-brand">
            <Image
              src="/images/Videometrics.png"
              alt="Videometrics Logo"
              width={400}
              height={100}
              priority
            />
          </Link>
        </div>
        
        <div className="login-form-wrapper">
          <p className="login-subtitle">Log in to your VideoMetrics.ai account</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="login-error">{error}</div>}

            <div className="login-form-group">
              <label htmlFor="username" className="login-form-label">Username</label>
              <div className="login-input-group">
                <span className="login-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="login-input"
                  placeholder="Enter Your Name"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="login-form-group">
              <label htmlFor="password" className="login-form-label">Password</label>
              <div className="login-input-group">
                <span className="login-input-icon">
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
                  className="login-input"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="login-password-toggle"
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
            
            <div className="login-actions-row">
              <div className="login-remember-section">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="login-checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe" className="login-checkbox-label">
                  Remember me
                </label>
              </div>
              <Link href="/auth/forgot-password" className="login-forgot-link">
                Forgot Password?
              </Link>
            </div>
            
            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>

          <p className="login-footer">
            Do not have an account? <Link href="/auth/register" className="login-link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";
import { JSX } from "react";
import ForgotPasswordPage from "./ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot Password - VideoMetrics.ai",
  description: "Reset your password for VideoMetrics.ai account",
};

export default function ForgotPassword(): JSX.Element {
  return <ForgotPasswordPage />;
}

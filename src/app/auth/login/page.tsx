import LoginPage from "./LoginPage";
import { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Login - VideoMetrics.ai",
  description: "Log in to your VideoMetrics.ai account",
};

export default function Login(): JSX.Element {
  return <LoginPage />;

}
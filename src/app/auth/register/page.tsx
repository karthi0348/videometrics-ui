import { JSX } from "react";
import SignupPage from "./SignupPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - VideoMetrics.ai", 
  description: "Create your VideoMetrics.ai account",
};

export default function Signup(): JSX.Element {
  return <SignupPage />;
}
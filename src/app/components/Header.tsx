"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavItem } from "@/app/components/types/header";
import "@/app/components/styles/Header.css";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/howitworks", label: "How it Works" },
    { href: "/contact", label: "Contact" },


  ];

  return (
    <div className="header-container">
      <header className="header-card">
        <Link href="/" className="logo-brand">
         <Image 
        src="/images/Videometrics.png"   // place your logo in /public/logo.png
        alt="Videometrics Logo"
        width={200}     // adjust size
        height={60}
        priority
      />
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-item ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="action-buttons">
          <Link href="/auth/login" className="btn-login">
            Login
          </Link>
          <Link href="/auth/register" className="btn-signup">
            Sign up
          </Link>
        </div>

        <button
          className={`mobile-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-nav-link ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mobile-action-buttons">
              <Link href="/auth/login" className="btn-login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link href="/auth/register" className="btn-signup" onClick={() => setIsOpen(false)}>
                Sign up
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

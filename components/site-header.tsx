"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/listings", label: "Listings" },
  { href: "/research", label: "Research" },
  { href: "/reports", label: "Reports" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", fullReload: true },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/Volterra%20Advisors%20logo_teal.svg"
            alt="Volterra Advisors"
            width={170}
            height={40}
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-slate-700 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) =>
            item.fullReload ? (
              <a key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            )
          )}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`border-t border-slate-200 bg-white md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="container flex flex-col gap-4 py-4 text-sm text-slate-700" aria-label="Mobile">
          {navItems.map((item) =>
            item.fullReload ? (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

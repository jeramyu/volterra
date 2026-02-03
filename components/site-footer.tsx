import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/listings", label: "Listings" },
  { href: "/research", label: "Research" },
  { href: "/reports", label: "Reports" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", fullReload: true },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="gradient-bar h-1" />
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/Volterra%20Advisors%20logo_teal.svg"
            alt="Volterra Advisors"
            width={170}
            height={40}
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600" aria-label="Footer">
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
      </div>
    </footer>
  );
}

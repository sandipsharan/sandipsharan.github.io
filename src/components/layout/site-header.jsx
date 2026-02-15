"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/publications", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="layout-wrap nav-shell">
        <div className="nav-spacer" aria-hidden="true" />

        <nav className="desktop-nav" aria-label="Main">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${active ? " nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-spacer" aria-hidden="true" />
      </div>
    </header>
  );
}

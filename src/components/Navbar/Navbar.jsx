import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Services",   href: "#services"   },
  { label: "Experience", href: "#experience" },
  { label: "Work",       href: "#work"       },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [solid, setSolid]       = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${solid ? " solid" : ""}`}>
        <a href="#hero" className="navbar__logo" onClick={closeMenu}>
          Wee.
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="navbar__link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="navbar__mobile-link"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

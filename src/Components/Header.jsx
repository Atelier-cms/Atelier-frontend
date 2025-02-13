import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the dropdown menu

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="bg-black text-lg text-white h-16 w-full py-4 px-4 md:px-24 flex items-center justify-between sticky top-0 z-20">
      {/* Logo */}
      <Link to="/" className="font-bold text-2xl flex items-center gap-1">
        <img src="/Logo/Atelier_logo.png" className="h-9" alt="Company logo" />
        Atelier
      </Link>

      {/* Centered Links (Hidden on small screens) */}
      <div className="hidden md:flex flex-1 justify-left pl-20 text-gray-400 gap-10 text-sm font-base">
        <Link to="about">About</Link>
        <Link to="services">Our Services</Link>

        {/* <Link to="socials">Socials</Link> */}
      </div>

      {/* Right-aligned Button (Hidden on small screens) */}
      {/* <div className="hidden md:flex glow-on-hover items-center justify-center flex-shrink-0">
        <Link to="work" className="font-bold text-white text-xs uppercase">
          Get in touch
        </Link>
      </div> */}

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden flex flex-col items-end gap-1 cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Full-screen Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center gap-8 text-xl font-semibold text-white transition-opacity z-50"
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-5xl font-thin text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>

          <Link to="about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="services" onClick={() => setIsMenuOpen(false)}>
            Our Services
          </Link>
          {/* <Link to="socials" onClick={() => setIsMenuOpen(false)}>
            Socials
          </Link> */}
          <Link to="work" onClick={() => setIsMenuOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full bg-white z-50 transition-all duration-300 ease-in-out
        ${scrolled ? "h-14 border-b border-gray-200" : "h-16 "}
      `}
    >
      <nav className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          {/* Logo */}
          <Link
            href="/"
            className={`transition-all duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          >
            <img
              src="/logo.png"
              alt="Megatron"
              className="h-10 w-auto hover:opacity-80 transition-opacity logo"
            />
          </Link>

          {/* Línea Vertical de Separación */}
          <div className="border-l-2 border-gray-500 h-0 mx-4"></div>

          {/* Menú de Navegación */}
          <div className="flex h-full">
            {["/", "/servicios", "/contacto", "/tienda"].map((route, index) => {
              const routeNames = ["INICIO", "SERVICIOS", "CONTACTO", "TIENDA"];
              return (
                <Link
                  key={route}
                  href={route}
                  className={`
                    relative flex items-center h-full px-5
                    ${pathname === route ? " text-blue-600" : "text-gray-700"}
                    hover:bg-blue-50 transition-colors duration-200
                  `}
                >
                  <span className="text-xs font-bold">{routeNames[index]}</span>
                  {pathname === route && (
                    <div
                      className="absolute left-0 w-full h-1 bg-blue-600"
                      style={{ bottom: scrolled ? "-1px" : "0" }}
                    ></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Espaciador flexible */}
          <div className="flex-grow"></div>

          {/* Botón de Teléfono */}
          <button
            className="
              bg-blue-700 text-white px-6 py-2 rounded-full
              hover:bg-blue-700 transform hover:scale-105
              transition-all duration-300 ease-in-out
              shadow-md hover:shadow-lg
              flex items-center space-x-2
              text-sm font-bold
            "
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Tel: 618-825-3884</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

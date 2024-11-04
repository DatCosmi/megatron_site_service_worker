"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const isRouteActive = (route) => {
    return (
      route === pathname ||
      (pathname === "/" && activeSection === route.replace("/", ""))
    );
  };

  return (
    <header
      className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "h-14 border-b border-gray-200" : "h-16"
      }`}
    >
      <nav className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
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

          <div className="border-l-2 border-gray-500 h-0 mx-4"></div>

          <div className="flex h-full">
            {["/", "servicios", "contacto", "catalogo"].map(
              (section, index) => {
                const routeNames = [
                  "INICIO",
                  "SERVICIOS",
                  "CONTACTO",
                  "CATALOGO",
                ];
                const routePaths = [
                  "/",
                  "/servicios",
                  "/contacto",
                  "/catalogo",
                ];

                return section === "servicios" || section === "contacto" ? (
                  <button
                    key={section}
                    onClick={() => handleNavigation(section)}
                    className={`relative flex items-center h-full px-5 ${
                      isRouteActive(`/${section}`)
                        ? "text-blue-600"
                        : "text-gray-700"
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <span className="text-xs font-bold">
                      {routeNames[index]}
                    </span>
                    {isRouteActive(`/${section}`) && (
                      <div
                        className="absolute left-0 w-full h-1 bg-blue-600"
                        style={{ bottom: scrolled ? "-1px" : "0" }}
                      ></div>
                    )}
                  </button>
                ) : (
                  <Link
                    key={section}
                    href={routePaths[index]}
                    className={`relative flex items-center h-full px-5 ${
                      isRouteActive(routePaths[index])
                        ? "text-blue-600"
                        : "text-gray-700"
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <span className="text-xs font-bold">
                      {routeNames[index]}
                    </span>
                    {isRouteActive(routePaths[index]) && (
                      <div
                        className="absolute left-0 w-full h-1 bg-blue-600"
                        style={{ bottom: scrolled ? "-1px" : "0" }}
                      ></div>
                    )}
                  </Link>
                );
              }
            )}
          </div>

          <div className="flex-grow"></div>

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

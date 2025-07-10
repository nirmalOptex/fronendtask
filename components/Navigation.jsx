import { Route } from "lucide-react";
import ApiDemo from "./Apidemo";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function scrollToSection(sectionId, navigate, location) {
  if (location.pathname !== "/") {
    navigate("/", { replace: false });
    // Delay scroll until page is mounted
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="bg-white shadow-lg  fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center ">
          <div className="flex items-center center space-x-4">
            <a href="/" className="flex-shrink-0">
              <img src="../logo.png" alt="logo" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home", navigate, location)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about", navigate, location)}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("team", navigate, location)}
              className="text-gray-700 hover:text-blue-600"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact", navigate, location)}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </button>

            {/* Route to another page */}
            <Link to="/apidemo" className="text-gray-700 hover:text-blue-600">
              API Demo
            </Link>
          </div>
          <button className="rounded-lg p-2 bg-blue-700 text-[#ffffff] hover:bg-blue-900">start A Project</button>
        </div>
      </div>
    </nav>
  );
}

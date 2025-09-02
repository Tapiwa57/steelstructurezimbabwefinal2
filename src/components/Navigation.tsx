import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm">
        <div className="container mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center px-4 py-2 gap-2">
          {/* Left */}
          <span className="bg-red-600 px-3 py-1 font-semibold rounded-r-lg text-center sm:text-left w-full sm:w-auto">
            Welcome to Steel Structure
          </span>

          {/* Right */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0 text-center sm:text-left text-[10px] sm:text-sm w-full sm:w-auto">
            <span className="truncate">3667 Mainway Meadows, Waterfalls, Harare, Zimbabwe</span>
            <span>+263 782 899 160</span>
            <span>steelstructureszimbabwe@yahoo.com</span>

            {/* Socials */}
            <div className="flex justify-center sm:justify-start space-x-3 text-lg mt-1 sm:mt-0">
              <a href="https://wa.me/263782899160" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61559313327774" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/stee.lstructurezimbabwe/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-wrap items-center space-x-4 lg:space-x-6 text-sm sm:text-base">
            <a href="#home" className="hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#services" className="hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#projects" className="hover:text-blue-600 font-medium">
              Projects
            </a>
            <a href="#contacts" className="hover:text-blue-600 font-medium">
              Contacts
            </a>

            <a href="https://wa.me/263782899160">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-3 sm:px-6 py-2 rounded-lg text-sm sm:text-base whitespace-nowrap">
                GET A QUOTE
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden w-full bg-white px-4 py-4 space-y-3 border-t border-gray-200 animate-slide-down">
              <a href="#home" className="block hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#about" className="block hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#services" className="block hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#projects" className="block hover:text-blue-600 font-medium">
                Projects
              </a>
              <a href="#contacts" className="block hover:text-blue-600 font-medium">
                Contacts
              </a>

              <a href="https://wa.me/263782899160">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white w-full">
                  GET A QUOTE
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

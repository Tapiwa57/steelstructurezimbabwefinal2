import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 space-y-1 sm:space-y-0">
          {/* Left */}
          <span className="bg-red-600 px-3 py-1 font-semibold rounded-r-lg text-center sm:text-left">
            Welcome to Steel Structure
          </span>

          {/* Right */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-1 sm:space-y-0 mt-2 sm:mt-0 text-center sm:text-left text-[10px] sm:text-sm">
            <span>3667 Mainway Meadow, Waterfall, Harare, Zimbabwe</span>
            <span>+263 782 899 160</span>
            <span>info@steelstructure.co.zw</span>

            {/* Socials */}
            <div className="flex justify-center sm:justify-start space-x-3 text-lg mt-1 sm:mt-0">
              <a href="https://wa.me/263782899160" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/images/Logo.jpg" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm sm:text-base">
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
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base">
                GET A QUOTE
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-3">
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
    </nav>
  );
};

export default Navigation;

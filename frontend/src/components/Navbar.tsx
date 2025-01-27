import  { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import deepnetsoft from "../assets/image.png";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#121618] font-[Oswald] w-full h-[80px]">
      <div className="container mx-auto flex justify-between items-center h-full px-4 lg:px-8">

        <div className="flex items-center">
          {/* Logo Image */}
          <img
            src={deepnetsoft}
            alt="Deep Net Soft"
            className="absolute h-[76px] w-auto top-[42px] left-[20px] md:top-[42px] md:left-[175px]"
          />

          {/* Text Section */}
          <div className="flex flex-col absolute top-[40px] left-[120px] md:top-[40px] md:left-[265px] text-[25px] md:text-[35px] font-[400] font-oswald leading-[30px] md:leading-[51.87px] tracking-[0.03em]">
            <div className="flex">
              <div className="text-[#0796EF]">DEEP</div>
              <div className="text-white ml-2">NET</div>
            </div>
            <div className="text-[#857878] mt-[-5px] md:mt-[-10px]">SOFT</div>
          </div>
        </div>

        {/* Menu Button for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-blue-500 transition duration-200"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:space-x-8 absolute lg:relative top-[80px] left-0 w-full lg:w-auto bg-[#121618] lg:bg-transparent lg:top-0 transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block text-white hover:text-blue-500 transition duration-200 text-center py-4 lg:py-0 lg:inline-block"
          >
            HOME
          </Link>
          <Link
            to="/menu"
            className="block text-blue-500 hover:text-white transition duration-200 text-center py-4 lg:py-0 lg:inline-block"
          >
            MENU
          </Link>
          <Link
            to="/reservation"
            className="block text-white hover:text-blue-500 transition duration-200 text-center py-4 lg:py-0 lg:inline-block"
          >
            MAKE A RESERVATION
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-blue-500 transition duration-200 text-center py-4 lg:py-0 lg:inline-block"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

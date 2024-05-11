import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/adejare.jpg";
import Image from "next/image";

const Navbar = ({ title, classProps }) => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Picture of the author" className="w-32b cursor-pointer"
        />
      </div>
      <ul>

      </ul>
    </nav>
  );
};

export default Navbar;

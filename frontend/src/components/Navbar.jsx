import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/adejare.jpg";
import Image from "next/image";

const NavbarItems = ({ title, classProps }) => {
  return <li className={`mx-4 cursor pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const {toggleMenu, setToggleMenu} = useState(false)
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Picture of the author"
          className="w-32b cursor-pointer"
        />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Trade", "Rates"].map((item, index) => (
          <NavbarItems key={item + index} title={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

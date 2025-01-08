import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full py-2 font-semibold">
      <span className="tracking-[-3%] uppercase text-lg">Reactify</span>
      <nav className="flex space-x-4 tracking-[-3%] text-sm ">
        <span>About</span>
        <span className="flex flex-col">Services</span>
        <span>Contact</span>
      </nav>
    </header>
  );
};

export default Header;

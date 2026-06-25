import { useState } from "react";
import { FolderCode, House, Mail, Menu, X } from "lucide-react";
import { Card } from "@/components/Card";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="min-h-18 backdrop-blur-2xl flex flex-col md:flex-row px-5 p-3 md:items-center gap-4 justify-between transition-all duration-300">
      <div className="flex w-full md:w-auto items-center justify-between">
        {/* Left Container */}
        <div className="flex h-12 items-center gap-3 px-3">
          <div className="flex border-2 border-(--border) rounded-full p-0.5 h-full aspect-square shrink-0">
            <img
              src="src/assets/images/466378918_9048400881857306_466686750876003653_n-2.jpg"
              className="rounded-full w-full h-full object-cover"
              alt=""
            />
          </div>
          <span className="text-3xl whitespace-nowrap">Jonas Jönsson</span>
          <span className="pt-1.5 text-(--text)/70">❯</span>
        </div>

        {/* Mobile Burger Toggle Button (Hidden on PC) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 text-(--text) hover:text-(--border) cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 
        Right Container (The Links List)
        PC Mode: Stays an identical horizontal flex row (md:flex).
        Mobile Mode: Swaps to a vertical column (flex-col) and toggles visibility via 'hidden' or 'flex' depending on state.
      */}
      <ul
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-5 pt-3 text-xl px-5 pb-3 md:pb-0`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex gap-1.5 hover:text-(--border) hover:cursor-pointer hover:transform-fill py-1 md:py-0"
        >
          <House /> Home
        </NavLink>
        <NavLink
          to="Projects"
          onClick={() => setIsOpen(false)}
          className="flex gap-1.5 hover:text-(--border) py-1 md:py-0"
        >
          <FolderCode /> Projects
        </NavLink>
        <NavLink
          to="Contact"
          onClick={() => setIsOpen(false)}
          className="flex gap-1.5 hover:text-(--border) py-1 md:py-0"
        >
          <Mail /> Contact
        </NavLink>
      </ul>
    </Card>
  );
};

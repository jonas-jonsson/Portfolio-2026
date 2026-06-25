import { useState } from "react";
import { FolderCode, House, Mail, Menu, X } from "lucide-react";
import { Card } from "@/components/Card";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "flex items-center gap-1.5 hover:text-(--border) py-1 md:py-0";

  return (
    <Card className="relative z-50 min-h-18 backdrop-blur-2xl flex flex-col md:flex-row px-5 p-3 md:items-center gap-4 justify-between transition-all duration-300 overflow-visible">
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

      {/* Desktop Links */}
      <ul className="hidden md:flex flex-row items-center gap-5 text-xl px-0 py-0 bg-transparent border-none shadow-none rounded-none">
        <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
          <House /> Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => setIsOpen(false)}
          className={linkClass}
        >
          <FolderCode /> Projects
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={linkClass}
        >
          <Mail /> Contact
        </NavLink>
      </ul>

      {/* Mobile Links */}
      <ul
        className={`${isOpen ? "flex" : "hidden"} md:hidden absolute left-3 right-3 top-full mt-3 flex-col items-start gap-5 text-xl px-5 py-4 rounded-xl bg-(--surface)/95 border border-(--border)/15 shadow-(--card-shadow) backdrop-blur-2xl`}
      >
        <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
          <House /> Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => setIsOpen(false)}
          className={linkClass}
        >
          <FolderCode /> Projects
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={linkClass}
        >
          <Mail /> Contact
        </NavLink>
      </ul>
    </Card>
  );
};

'use client';
import Link from "next/link";
import { MenuItems } from "../data/MenuItems";
import "../styling/navbar.css";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <ul className="nav-menu">
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
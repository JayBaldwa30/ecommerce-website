import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-ecom.png";

import {
  faUser,
  faHeart,
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationMenuDemo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between border-gray-500 border-b pb-4 pt-10 px-5 md:px-[135px]">
        <div className="flex justify-between py-[7px]">
          <div className="h-6 w-28 font-bold">
            <img src={logo} alt="" />
          </div>

          <div
            className={`absolute top-[70px] left-0 z-50 w-full bg-white p-5 shadow-md transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:translate-x-0 md:p-0 md:shadow-none md:bg-transparent`}
          >
            <NavigationMenu.Root className="w-full ml-20">
              <NavigationMenu.List className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between">
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="pr-6 ">
                    <NavigationMenu.Link>
                      <Link to="/" className="hover:underline">
                        Home
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Trigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="pr-6">
                    <NavigationMenu.Link>
                      <Link to="/contact" className="hover:underline">
                        Contact
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Trigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="pr-6">
                    <NavigationMenu.Link>
                      <Link to="/about" className="hover:underline">
                        About
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Trigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="pr-6">
                    <NavigationMenu.Link>
                      <Link to="/signup" className="hover:underline">
                        Sign Up
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Trigger>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </div>

        <button
          className="ml-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
        <div className="flex items-center hidden sm:flex">
          <div className="hidden md:flex  relative ">
            <input
              type="search"
              name="searchProduct"
              id="searchProduct"
              className="bg-gray-200 rounded border h-6 py-[3px] pl-5 pr-3 placeholder:text-sm"
              placeholder="What are you looking for?"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="ml-2 absolute right-0 pr-1 pt-1"
            />
          </div>

          <ul className="flex justify-center ml-4">
            <li className="pl-5 pr-2">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <Link to="/cart">
              <li className="px-2">
                <FontAwesomeIcon icon={faShoppingCart} />
              </li>
            </Link>
            <li className="px-2">
              <FontAwesomeIcon icon={faUser} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationMenuDemo;

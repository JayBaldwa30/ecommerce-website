import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../assets/logo-ecom.png";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cart from "../assets/cart1.png";
import wishlist from "../assets/wishlist.png";

const NavigationMenuDemo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="flex justify-between border-grayborder  border-b pb-4 pt-10 px-5 md:px-[135px]">
        <div className="flex justify-between py-[7px]">
          <div className="h-6 w-28 font-bold uppercase">
            {/* <img src={logo} alt="logo" /> */}
            <h3>Exclusive</h3>
          </div>

          <div
            className={`absolute top-[70px] left-0 z-50 w-full bg-white p-5 shadow-md transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:translate-x-0 md:p-0 md:shadow-none md:bg-transparent`}
          ></div>
        </div>

        <div className="flex  justify-between  py-[7px] ">
          <div
            className={`absolute top-[70px] left-0 z-50 w-full bg-white p-5 shadow-md transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:translate-x-0 md:p-0 md:shadow-none md:bg-transparent`}
          >
            <NavigationMenu.Root className="w-full ml-20">
              <NavigationMenu.List className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between">
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="pr-6">
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
          <div className="hidden md:flex relative bg-gray-200 py-[7px] pl-5 pr-[38px] rounded">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="search"
                name="searchProduct"
                id="searchProduct"
                className="bg-gray-200 rounded h-6 placeholder:text-sm focus:outline-none focus:ring-0 focus:bg-gray-200"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <button type="submit" className="absolute right-0 pr-3 text-lg">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>

          <ul className="flex justify-center ml-4">
            <li className="pl-5 pr-2">
              <img src={wishlist} alt="" />
            </li>
            <Link to="/cart">
              <li className="px-2">
                <img src={cart} alt="" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationMenuDemo;

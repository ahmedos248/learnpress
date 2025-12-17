import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Search from "./Search";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

const Navbar = ({ searchQuery, setSearchQuery }) => {
    const location = useLocation();

    const navItems = [
        { to: "/", text: "Home", activeOn: ["/"] },
        { to: "/courses", text: "Courses", activeOn: ["/courses"] },
        { to: "/blog", text: "Blog", activeOn: ["/blog"] },
        { dropdown: true, text: <>Page <i className="text-[10px] fa-solid fa-chevron-down"></i></>, menuItems: [<Link to="/contact">Contact</Link>, <Link to="/faq">FAQ</Link>, <Link to="/blog">Blog</Link>] },
        { to: "/#learnpress", text: "LearnPress Add-On", hash: true, noActive: true },
        { to: "/#theme", text: "Premium Theme", hash: true, noActive: true },
    ];

    return (
      <nav className="bg-white shadow w-full fixed top-0 z-50 exo-text xl:text-[16px] lg:text-[14px] font-semibold lg:block hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center xl:space-x-20 lg:space-x-6 ">
          <div className="flex items-center space-x-1">
            <Link to="/">
              <img src="/images/logo.svg" alt="EduPress Logo" />
            </Link>
            <Link to="/" className="text-2xl font-bold">
              EduPress
            </Link>
          </div>
          <ul className="flex h-14 items-center">
            {navItems.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <li
                    key={idx}
                    className="h-14 px-4 flex items-center hover:bg-gray-200 hover:text-orange-500"
                  >
                    <Menu>
                      <MenuHandler className="cursor-pointer">
                        <div>{item.text}</div>
                      </MenuHandler>
                      <MenuList className="mt-2 ms-12 p-1">
                        {item.menuItems.map((m, i) => (
                          <MenuItem key={i} className="hover:text-orange-500">
                            {m}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  </li>
                );
              }

              const isActive =
                !item.noActive && item.activeOn?.includes(location.pathname);
              const Wrapper = item.hash ? HashLink : Link;

              return (
                <li
                  key={idx}
                  className={`h-14 px-4 flex items-center ${
                    isActive
                      ? "bg-gray-200 text-orange-500"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <Wrapper
                    smooth={item.hash}
                    to={item.to}
                    className="hover:text-orange-500 w-full"
                  >
                    {item.text}
                  </Wrapper>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center space-x-3">
            <Link to="/Login-Register" className="hover:text-orange-500">
              Login / Register
            </Link>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </nav>
    );
};

export default Navbar;

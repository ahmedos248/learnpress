import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Search from "./Search";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

const Navmobile = ({ searchQuery, setSearchQuery }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { to: "/", text: "Home", activeOn: ["/"] },
        { to: "/courses", text: "Courses", activeOn: ["/courses"] },
        { to: "/blog", text: "Blog", activeOn: ["/blog"] },
        { dropdown: true, text: <>Page <i className="text-[10px] fa-solid fa-chevron-down"></i></>, menuItems: [<Link to="/contact">Contact</Link>, <Link to="/faq">FAQ</Link>, <Link to="/blog">Blog</Link>] },
        { to: "/#learnpress", text: "LearnPress Add-On", hash: true, noActive: true },
        { to: "/#theme", text: "Premium Theme", hash: true, noActive: true }
    ];

    return (
      <div className="lg:hidden relative exo-text">
        <nav
          className={`fixed top-0 w-full z-50 bg-white h-14 flex justify-between items-center px-6 ${
            open ? "" : "shadow"
          }`}
        >
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src="/images/logo.svg" alt="EduPress Logo" />
            </Link>
            <Link to="/" className="text-xl md:text-2xl font-bold">
              EduPress
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <i
              onClick={() => setOpen((prev) => !prev)}
              className="fa-solid fa-bars text-orange-500 bg-white p-2 rounded shadow cursor-pointer z-50"
            />
          </div>
        </nav>
        <div
          className={`fixed top-14 left-0 w-full z-40 transition-transform duration-300 ease-in-out ${
            open ? "translate-y-0" : "-translate-y-full"
          } backdrop-blur-md bg-white/50 px-6 py-4 flex flex-col justify-between items-start space-y-6 border-2 border-orange-500`}
        >
          <ul className="flex flex-col w-full p-4 space-y-4 border-2 border-orange-500 rounded-md">
            {navItems.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <li key={idx} className=" hover:text-orange-500 w-fit">
                    <Menu>
                      <MenuHandler className="cursor-pointer">
                        <div>{item.text}</div>
                      </MenuHandler>
                      <MenuList className="mt-2 ms-8 p-1">
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
                <li key={idx}>
                  {item.to ? (
                    <Wrapper
                      smooth={item.hash}
                      to={item.to}
                      className={`block hover:text-orange-500 ${
                        isActive ? "text-orange-500" : ""
                      }`}
                    >
                      {item.text}
                    </Wrapper>
                  ) : (
                    <span className="block hover:text-orange-500 cursor-pointer">
                      {item.text}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            to="/Login-Register"
            className="w-full mt-2 flex justify-center items-center font-semibold border-2 border-orange-500 p-3 rounded-md hover:bg-orange-500 hover:text-white transition"
          >
            Login / Register
          </Link>
        </div>

        <div
          className={`fixed inset-0 z-30 backdrop-blur-[1px] bg-black transition-opacity duration-300 ${
            open
              ? "opacity-40 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />
      </div>
    );
};

export default Navmobile;

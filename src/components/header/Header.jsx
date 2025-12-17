import React from "react";
import Navbar from "./Navbar";
import Navmobile from "./Navmobile";

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        <header>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Navmobile searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>
    );
};

export default Header;

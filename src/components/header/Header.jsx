import React, { useState } from 'react'
import Navbar from './Navbar'
import Navmobile from './Navmobile'


const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <header>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Navmobile />
        </header>
    )
}

export default Header

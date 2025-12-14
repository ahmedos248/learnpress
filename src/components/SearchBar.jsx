import React from 'react'

const SearchBar = ({ title, searchValue, setSearchValue, active, setActive }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 space-y-4">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <div className="space-y-4">
                <div className="flex justify-between space-x-2">
                    <div className="flex justify-between border-b-2 border-black max-w-sm">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full focus:outline-none"
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="w-[14px] h-[22px] bg-white flex items-center justify-center">
                        <svg
                            onClick={() => setActive("a")}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`w-6 h-6 cursor-pointer ${active === "a" ? "fill-orange-500" : "fill-black"}`}
                        >
                            <path d="M0 0h10v10H0V0zM12 0h10v10H12V0zM0 12h10v10H0V12zM12 12h10v10H12V12z" />
                        </svg>
                    </div>
                    <div>
                        <i
                            onClick={() => setActive("b")}
                            className={`fa-solid fa-list cursor-pointer ${active === "b" ? "text-orange-500" : "text-black"}`}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;

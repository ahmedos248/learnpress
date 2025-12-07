import { useState } from "react";

export default function Search({ searchQuery, setSearchQuery }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 text-gray-700 hover:text-orange-500"
            >
                <div className="border-2 border-orange-500 rounded-full p-2"><img src="/images/Search.svg" alt="Search" /></div>
            </button>
            {open && (
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="absolute top-full mt-2 right-0 w-48 px-3 py-1 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            )}
        </div>
    );
}

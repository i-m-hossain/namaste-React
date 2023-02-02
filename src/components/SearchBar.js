import React from "react";
import { BsSearch } from "react-icons/bs";
function SearchBar({ handleSearch, children }) {
    return (
        <form className="flex items-center mb-4">
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                {children}
            </div>
            <button
                onClick={handleSearch}
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-pink-600 rounded-lg border border-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
                <BsSearch size={20} />
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

export default SearchBar;

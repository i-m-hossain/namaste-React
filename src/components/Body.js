import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useAllRestaurants from "../hooks/useAllRestaurants.js";
import { useState } from "react";

// my npm module
import useOnLineChecker from "online-checker";
import SearchBar from "./SearchBar.js";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const {
        allRestaurants,
        error,
        loading,
        filteredRestaurants,
        setFilteredRestaurants,
    } = useAllRestaurants();
    const onLine = useOnLineChecker();
    const handleSearch = (e) => {
        e.preventDefault();
        if(!allRestaurants) return;
        const filteredData = filterData(allRestaurants, searchText);
        setFilteredRestaurants(filteredData);
    };
    // Early exit if user is not online
    if (!onLine) {
        return <h2>❌ You are offline ❌</h2>;
    }
    if (error) {
        return <h2>{error.message}. try again</h2>;
    }

    // Loading state while fetching data
    if (loading) {
        return (
            <div style={{ display: "flex" }}>
                <Shimmer length={5} />
            </div>
        );
    }
    // UI with data
    return (
        <>
            {/* <div className="searchbar">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Search your favorite food"
                />
                <button type="button" onClick={handleSearch}>
                    Search
                </button>
            </div> */}
            <SearchBar handleSearch={handleSearch}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                    placeholder="Search your favorite food"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-pink-100"
                    required
                />
            </SearchBar>

            {filteredRestaurants ? (
                <div className="restaurant-list">
                    {filteredRestaurants.map((item) => (
                        <Link
                            to={"/restaurant/" + item.data.id}
                            key={item?.data?.id}
                        >
                            <RestaurantCard {...item.data} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p> No data found!</p>
            )}
        </>
    );
};

export default Body;

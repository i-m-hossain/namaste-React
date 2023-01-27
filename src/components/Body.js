import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useAllRestaurants from "../hooks/useAllRestaurants.js";
import { useState } from "react";
import useOnline from "../hooks/useOnline.js";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const {
        allRestaurants,
        error,
        loading,
        filteredRestaurants,
        setFilteredRestaurants,
    } = useAllRestaurants();
    const onLine = useOnline();

    const handleSearch = () => {
        const filteredData = filterData(allRestaurants, searchText);
        setFilteredRestaurants(filteredData);
    };
    // Early exit if user is not online
    if (!onLine) {
        return <h2>❌ You are offline ❌</h2>;
    }
    if(error){
        return <h2>{error.message}. try again</h2>
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
            <div className="searchbar">
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
            </div>

            {filteredRestaurants.length ? (
                <div className="restaurant-list">
                    {filteredRestaurants?.map((item) => (
                        <Link
                            to={"/restaurant/" + item.data.id}
                            key={item?.data?.id}
                        >
                            <RestaurantCard {...item.data} />
                        </Link>
                    ))}
                </div>
            ) : (
                <p> No data found! search another food.</p>
            )}
        </>
    );
};

export default Body;

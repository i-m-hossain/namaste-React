import { useEffect, useState } from "react";
import { constants } from "../config.js";
import Loading from "./Loading.js";
import RestaurantCard from "./RestaurantCard";

const filterData = (restaurants, searchTerm) => {
    return restaurants.filter((item) =>
        item.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAllRestaurantList();
    }, []);
    async function getAllRestaurantList() {
        setLoading(true);
        const response = await fetch(constants.allRestaurantsAPI);
        const result = await response.json();
        setAllRestaurants(result?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(result?.data?.cards[2]?.data?.data?.cards);
        setLoading(false);
    }

    const handleSearch = () => {
        const filteredData = filterData(allRestaurants, searchText);
        setFilteredRestaurants(filteredData);
    };
    if (loading) {
        return <div style={{display: "flex",  }}><Loading length={5} /></div>;
    }
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
                        <RestaurantCard {...item.data} key={item?.data?.id} />
                    ))}
                </div>
            ) : (
                <p> No data found! search another food.</p>
            )}
        </>
    );
};

export default Body;

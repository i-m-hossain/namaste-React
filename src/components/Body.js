import { useState } from "react";
import { config } from "../config.js";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [searchEnabled, setSearchEnable] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(config.items);
  const handleSearch = () => {
    setSearchEnable(true)
    const filteredData = config.items.filter((item) =>
      item.vendor.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filteredData);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search your favourite food"
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {searchEnabled && (
        <h4>
          Result found: {restaurants.length}/{config.items.length}
        </h4>
      )}

      <div className="restaurant-list">
        {restaurants.map((item) => (
          <RestaurantCard
            {...item.vendor.details}
            key={item.reservation_code}
          />
        ))}
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { constants } from "../config";

const useAllRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getAllRestaurantList();
    }, []);
    async function getAllRestaurantList() {
        try {
            setLoading(true);
            const response = await fetch(constants.ALL_RESTAURANTS_API);
            const result = await response.json();
            setAllRestaurants(result?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(result?.data?.cards[2]?.data?.data?.cards);
            setLoading(false);
            setError(null)
        } catch (err) {
            setLoading(false);
            setError(err);
        }
    }
    return { loading, error, allRestaurants, filteredRestaurants, setFilteredRestaurants };
};
export default useAllRestaurants;

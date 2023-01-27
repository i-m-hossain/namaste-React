import { useEffect, useState } from "react";
import { constants } from "../config";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchRestaurantData();
    }, []);
    
    const fetchRestaurantData = async () => {
        try {
            const response = await fetch(constants.FETCH_MENU_URL + resId);
            const data = await response.json();
            setRestaurant(data.data);
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };
    return { restaurant, error };
};
export default useRestaurant;

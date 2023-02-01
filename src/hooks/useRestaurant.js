import { useEffect, useState } from "react";
import { constants } from "../config";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRestaurantData();
    }, []);
    
    const fetchRestaurantData = async () => {
        try {
            setLoading(true)
            const response = await fetch(constants.FETCH_MENU_URL + resId);
            const data = await response.json();
            setRestaurant(data.data);
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err);
            console.log(err);
        }
    };
    return { restaurant, error, loading };
};
export default useRestaurant;

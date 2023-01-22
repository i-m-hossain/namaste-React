import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { constants } from "../config";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        fetchRestaurantData(id);
    }, [id]);
    const fetchRestaurantData = async () => {
        try {
            const response = await fetch(`${constants.singleRestaurant}${id}`);
            const data = await response.json();
            setRestaurant(data.data);
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };

    if (error) {
        return <p>there is an error</p>;
    }
    if (!restaurant) {
        return <Shimmer />;
    }
    return (
        <div className="menu">
            <div className="card">
                <img
                    src={`${constants.imagePrefix}/${restaurant?.cloudinaryImageId}`}
                    alt={restaurant?.name}
                />
                <h2>{restaurant?.name}</h2>
                <h3>
                    Rating: {restaurant?.avgRating} star (
                    {restaurant?.totalRatings})
                </h3>
                <ul>
                    Cuisines:
                    {restaurant?.cuisines?.map((c, i) => (
                        <li key={i}>{c}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Menu items:</h2>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item?.id}>{item?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;

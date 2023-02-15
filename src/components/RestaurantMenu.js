import React from "react";
import { useParams } from "react-router-dom";
import { constants } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import Shimmer from "./Shimmer";
import { AiOutlineStar } from "react-icons/ai";
import MenuList from "./MenuList";

function RestaurantMenu() {
    const { resId } = useParams();
    const { error, restaurant, loading } = useRestaurant(resId);

    if (error) {
        return <p>there is an error</p>;
    }
    if (loading) {
        return <Shimmer />;
    }
    if (!restaurant) {
        return <p>Data not found</p>;
    }
    return (
        <div className="min-w-screen  flex items-center p-5 lg:p-10 overflow-hidden ">
            <div className="w-full max-w-6xl rounded bg-pink-50 shadow-xl p-10 lg:p-20 mx-auto text-gray-800  md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div >
                            <img
                                src={`${constants.imagePrefix}/${restaurant?.cloudinaryImageId}`}
                                className="w-full  rounded"
                                alt=""
                            />
                            
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="">
                            <h1 className="font-bold uppercase text-2xl mb-5">
                                {restaurant?.name}
                            </h1>
                            <h2 className="font-semibold">Cuisines:</h2>
                            <div className="flex flex-col ml-4">
                                {restaurant?.cuisines?.map((c, i) => (
                                    <li key={i} className="list-disc">
                                        {c}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold">Menu items:</h2>

                            <div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <div className="flex flex-col ">
                                        <span className="font-semibold flex items-center space-x-2">
                                            <AiOutlineStar />
                                            <p className="ml-2">
                                                {" "}
                                                {restaurant?.avgRating}
                                            </p>
                                        </span>
                                        <h4>
                                            {restaurant?.totalRatings} + ratings
                                        </h4>
                                    </div>
                                    <span>|</span>
                                    <div className="flex flex-col ">
                                        <p className="ml-2">
                                            {restaurant?.sla.deliveryTime}
                                        </p>

                                        <h4>Delivery Time</h4>
                                    </div>
                                    <span>|</span>
                                    <div className="flex flex-col ">
                                        <p className="ml-2">
                                            {constants.currency}{restaurant?.costForTwo / 1000}
                                        </p>

                                        <h4>Cost for two</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="mt-4 font-bold text-2xl">Menus</h2>

                <div className="flex space-x-6">
                    <MenuList menu={restaurant?.menu?.items} />
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;

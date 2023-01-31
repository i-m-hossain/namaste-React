import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { constants } from "../config";
import useRestaurant from "../hooks/useRestaurant";
import Shimmer from "./Shimmer";
import { AiOutlineStar } from "react-icons/ai";

function RestaurantMenu() {
    const { resId } = useParams();
    const { error, restaurant, loading } = useRestaurant(resId);

    if (error) {
        return <p>there is an error</p>;
    }
    if (loading) {
        return <Shimmer />;
    }
    return (
        <>
            {restaurant ? (
                <div className="min-w-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div className="w-full max-w-6xl rounded bg-pink-50 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img
                                        src={`${constants.imagePrefix}/${restaurant?.cloudinaryImageId}`}
                                        className="w-full relative z-10 rounded"
                                        alt=""
                                    />
                                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
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
                                    <h2 className="font-semibold">
                                        Menu items:
                                    </h2>
                                    <div className="ml-4">
                                        {Object.values(restaurant?.menu?.items)
                                            .slice(0, 3)
                                            .map((item) => (
                                                <li key={item?.id}>
                                                    {item?.name}
                                                </li>
                                            ))}
                                    </div>
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
                                                    {restaurant?.totalRatings} +
                                                    ratings
                                                </h4>
                                            </div>
                                            <span>|</span>
                                            <div className="flex flex-col ">
                                                <p className="ml-2">
                                                    {
                                                        restaurant?.sla
                                                            .deliveryTime
                                                    }
                                                </p>

                                                <h4>Delivery Time</h4>
                                            </div>
                                            <span>|</span>
                                            <div className="flex flex-col ">
                                                <p className="ml-2">
                                                    {restaurant?.costForTwo}
                                                </p>

                                                <h4>Cost for two</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inline-block align-bottom mt-4">
                                        <button className="bg-pink-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                            
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>data not found</p>
            )}
        </>
    );
}

export default RestaurantMenu;

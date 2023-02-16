import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { constants } from "../config.js";
import { addItem, removeItem } from "../store/slices/cartSlice.js";
import { toast } from "react-toastify";
import { HiMinus, HiPlus } from "react-icons/hi";
function MenuItem(menu) {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const handlePlus = () => {
        dispatch(addItem(menu));
    };
    const handleMinus = () => {
        dispatch(removeItem(menu));
    };
    const handleAddToCart = () => {
        dispatch(addItem(menu));
        toast("item is added to the cart");
    };
    return (
        <div className="py-8 border-b-2 flex justify-between items-center ">
            <div>
                <h2 className="">{menu.name}</h2>
                <p>
                    {constants.currency}
                    {menu.price}
                </p>
            </div>
            <div className="relative flex flex-col items-center justify-center">
                {menu.cloudinaryImageId && (
                    <img
                        src={constants.imagePrefix + menu.cloudinaryImageId}
                        className="w-32 h-24 border rounded object-cover"
                        alt=""
                    />
                )}

                <div
                    className={`${
                        menu.cloudinaryImageId
                            ? "absolute bottom-[-20px] left-0 right-0 align-middle w-3/4 mx-auto"
                            : "px-2 w-24"
                    } py-2   bg-white border rounded hover:shadow-lg mr-4 transition-all text-center`}
                    title="Add To Cart"
                >
                    {items.find((item) => item.id === menu.id) ? (
                        <div className="flex items-center space-x-2 justify-center">
                            <button onClick={handleMinus}>
                                <HiMinus />
                            </button>
                            <button>
                                {
                                    items.filter((item) => item.id === menu.id)
                                        .length
                                }
                            </button>
                            <button onClick={handlePlus}>
                                <HiPlus />
                            </button>
                        </div>
                    ) : (
                        <button
                            className="text-sm text-center uppercase"
                            onClick={handleAddToCart}
                        >
                            Add
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuItem;

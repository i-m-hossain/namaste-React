import React from "react";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { constants } from "../config.js";
import { addItem, removeItem } from "../store/slices/cartSlice.js";
import { ToastContainer, toast } from "react-toastify";
function MenuItem(menu) {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const handleCart = () => {
        if (items.find((item) => item.id === menu.id)) {
            dispatch(removeItem(menu));
            toast("item removed from cart!");
            return;
        }
        dispatch(addItem(menu));
        toast("item added to cart!");
    };
    return (
        <div className="py-2 border-b-2 flex justify-between items-center ">
            <div>
                <h2 className="text-xl">{menu.name}</h2>
                <p>${menu.price}</p>
            </div>
            <div className="relative flex flex-col items-center justify-center">
                {menu.cloudinaryImageId && (
                    <img
                        src={constants.imagePrefix + menu.cloudinaryImageId}
                        className="w-20 h-20 border rounded object-cover"
                        alt=""
                    />
                )}

                <button
                    className={`${
                        menu.cloudinaryImageId
                            ? "absolute bottom-0 left-0 right-0 align-middle bg-white/75 pl-7"
                            : "px-4  rounded"
                    } py-2  font-semibold uppercase`}
                    title="Add To Cart"
                    onClick={handleCart}
                >
                    {items.find((item) => item.id === menu.id) ? (
                        <BsFillCartCheckFill
                            size={30}
                            className={
                                menu.cloudinaryImageId
                                    ? "text-gray-700"
                                    : "text-black"
                            }
                        />
                    ) : (
                        <BsCartPlus
                            size={30}
                            className={
                                menu.cloudinaryImageId
                                    ? "text-gray-700"
                                    : "text-black"
                            }
                        ></BsCartPlus>
                    )}
                </button>
            </div>
        </div>
    );
}

export default MenuItem;

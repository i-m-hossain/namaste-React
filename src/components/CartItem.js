import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants } from "../config.js";
import { deleteFromCart } from "../store/slices/cartSlice.js";

function CartItem({ item }) {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const handleRemove = () => {
        dispatch(deleteFromCart(item));
    };
    return (
        <li class="flex py-6">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={
                        item.cloudinaryImageId
                            ? constants.imagePrefix + item.cloudinaryImageId
                            : "https://img.freepik.com/free-vector/polygonal-restaurant-menu_23-2147491107.jpg?w=826&t=st=1676341482~exp=1676342082~hmac=63c7962ad95e36d4bba6e52cf46b53be951c5e56e3779959e293ea30431f3d04"
                    }
                    alt={item.name}
                    class="h-full w-full object-cover object-center"
                />
            </div>

            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{item.name}</a>
                        </h3>
                        <p class="ml-4">
                            {constants.currency}
                            {item.price}
                        </p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                    <p class="text-gray-500">
                        Qty {items.filter((it) => it.id === item.id).length}
                    </p>

                    <div class="flex">
                        <button
                            type="button"
                            class="border py-2 px-3 bg-pink-200 rounded font-medium text-gray-400 hover:text-gray-800 hover:bg-pink-500"
                            onClick={handleRemove}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CartItem;
